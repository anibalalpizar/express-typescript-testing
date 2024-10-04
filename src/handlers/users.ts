import type { Request, Response } from "express-serve-static-core";
import type { CreateUserDto } from "../dtos/CreateUser.dto";
import type { CreateUserQueryParams } from "../types/query-params";
import type { User } from "../types/response";

export function getUsers(request: Request, response: Response) {
  response.send([]);
}

export function getUserById(request: Request, response: Response) {
  response.send({});
}

/*
{1} (e.g., /users/1) -> URL parameters
{2} request body (what's sent in the response),
{3} response body (what's in the request body),
{4} query parameters (e.g., /users?limit=10)
*/
export function createUser(
  request: Request<{}, {}, CreateUserDto, CreateUserQueryParams>,
  response: Response<User>
) {
  // request.sessionID = "1234"; <- extends Request from express-serve-static-core
  //   request.login({ id: 1, username: "john_doe" }, () => {}); <- extends Request from express-serve-static-core

  return response.status(201).send({
    id: 1,
    username: "john_doe",
    email: "john@gmail.com",
  });
}
