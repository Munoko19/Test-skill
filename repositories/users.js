import dbPool from "../utils/db.js";

const getData = () => {
  const query = "SELECT user_id, name, email, password, created_at FROM users";

  return dbPool.query(query);
};

const createData = (name, email, password) => {
  let createdAt = new Date();

  const query =
    "INSERT INTO users(name, email, password, created_at) VALUES (?, ?, ?, ?)";
  const values = [name, email, password, createdAt];

  return dbPool.query(query, values);
};

const getDataById = (id) => {
  const query =
    "SELECT user_id, name, email, password, created_at FROM users WHERE user_id = ?";

  return dbPool.query(query, [id]);
};

const deleteData = (id) => {
  const query = "DELETE FROM users WHERE user_id = ?";

  return dbPool.query(query, [id]);
};

const getDataByEmail = (email) => {
  const query =
    "SELECT user_id, name, email, password FROM users WHERE email= ?";

  return dbPool.query(query, [email]);
};

const createTask = (user_id, task_name, task_description, is_done) => {
  const query =
    "INSERT INTO tasks(task_id, user_id, task_name, task_descriptioin, is_done) VALUES (?, ?, ?, ?)";
  const values = [user_id, task_name, task_description, is_done];

  return dbPool.query(query, values);
};

const getDataTask = () => {
  const query =
    "task_id, user_id, task_name, task_description, is_done FROM tasks";

  return dbPool.query(query);
};

const getIdTask = (id) => {
  const query =
    "SELECT task_id, user_id, task_name, task_description, is_done FROM task WHERE task_id = ?";

  return dbPool.query(query, [id]);
};

const deleteTask = (id) => {
  const query = "DELETE FROM task WHERE task_id = ? ";

  return dbPool.query(query, [id]);
};

export {
  getData,
  createData,
  getDataById,
  deleteData,
  getDataByEmail,
  createTask,
  getDataTask,
  getIdTask,
  deleteTask,
};
