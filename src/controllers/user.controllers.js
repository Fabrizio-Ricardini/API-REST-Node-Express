import { getConnection } from "../database/connection.js";
import sql from "mssql";

export const getUsers = async (req, res) => {
  const pool = await getConnection();

  const result = await pool.request().query("SELECT * FROM users");
  res.json(result.recordset);
};

export const getUser = async (req, res) => {
  console.log(req.params.id);

  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", sql.Int, req.params.id)
    .query("SELECT * FROM users WHERE id = @id");

  // Si no encuentra el usuario devuelve 404
  if (result.rowsAffected[0] == 0) {
    return res.status(404).json({
      message: "User not found",
    });
  }

  return res.json(result.recordset[0]);
};

export const createUser = async (req, res) => {
  try {
    const pool = await getConnection();
    const result = await pool
      .request()
      .input("first_name", sql.VarChar, req.body.first_name)
      .input("last_name", sql.VarChar, req.body.last_name)
      .input("username", sql.VarChar, req.body.username)
      .input("email", sql.VarChar, req.body.email)
      // Asumiendo que ya tienes la contraseña hasheada en req.body.password
      .input("password", sql.VarChar, req.body.password)
      .query(
        "INSERT INTO users (first_name, last_name, username, email, password) VALUES (@first_name, @last_name, @username, @email, @password); SELECT SCOPE_IDENTITY() AS id"
      );
    console.log(result);
    res.status(201).json({
      id: result.recordset[0].id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
      // No devuelvas la contraseña en la respuesta por seguridad
    });
  } catch (error) {
    if (error.number === 2627) {
      return res.status(409).json({ message: "Correo ya registrado" });
    } else {
      console.error(error);
      res.status(500).send(error.message);
    }
  }
};

export const updateUser = async (req, res) => {
  try {
    const id = req.params.id;

    const pool = await getConnection();
    const result = await pool
      .request()
      .input("id", sql.Int, id)
      .input("first_name", sql.VarChar, req.body.first_name)
      .input("last_name", sql.VarChar, req.body.last_name)
      .input("username", sql.VarChar, req.body.username)
      .input("email", sql.VarChar, req.body.email)
      // No actualizamos la contraseña, se puede hacer en otra función
      .query(
        `UPDATE users SET first_name = @first_name, last_name = @last_name, username = @username, email = @email WHERE id = @id`
      );

    console.log(result);

    if (result.rowsAffected[0] === 0) {
      return res.status(404).json({ message: "Usuario no encontrado" });
    }

    res.json({
      id: id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      username: req.body.username,
      email: req.body.email,
    });
  } catch (error) {
    console.error(error);
    res.status(500).send(error.message);
  }
};
export const deleteUser = async (req, res) => {
  const pool = await getConnection();
  const result = await pool
    .request()
    .input("id", sql.Int, req.params.id)
    .query("DELETE FROM users WHERE id = @id;");
  console.log(result);

  if (result.rowsAffected[0] == 0) {
    return res.status(404).json({
      message: "Usuario no encontrado",
    });
  }

  return res.json({
    message: "Usuario borrado",
  });
};

// Funciones del login

export const userLogin = async (req, res) => {
  res.json({
    first_name: "Login",
  });
};

export const userRegister = async (req, res) => {
  res.json({
    first_name: "Register",
  });
};
