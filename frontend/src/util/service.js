import { SERVER } from "./SERVER";

export const fetchTodos = async () => {
  const { data } = await SERVER.get("/api/todos");

  return data;
};

export const addTodo = async (todo) => {
  const { data } = await SERVER.post("/api/todos", JSON.stringify(todo));

  return data;
};

export const deleteTodo = async (id) => {
  const data = await SERVER.delete("/api/todos/" + id);

  return data;
}