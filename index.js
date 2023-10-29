import * as UserService from "./services/user.js";
import express from "express";

const port = 80;
const host = "localhost";
const app = express();
app.use(express.json());
app.get("/users", UserService.tokenValidation, UserService.getUser);
app.get("/users/:id", UserService.getUserDetail);
app.post("/users", UserService.createUser);
app.delete("/users/:id", UserService.deleteUser);
app.post("/login", UserService.authUser);
//
app.get("/taks", UserService.tokenValidation, UserService.getTask);
app.get("/taks/:id", UserService.getTaskDetail);
app.post("/taks", UserService.newTask);
app.delete("/taks/:id", UserService.taskDelete);
app.post("/login", UserService.authUser);

app.listen(port, host, () => {
  console.log(`Server berjalan di http://${host}:${port}`);
});
