import { Response } from "express";

export enum HttpStatus {
  OK = 200,
  NOT_FOUND = 404,
  UNAUTHORIZED = 401,
  FORBIDDEN = 403,
  INTERNAL_SERVER_ERROR = 500,
  MISSING_DATA = 400,
  CONFLICT = 409,
}

export class HttpResponse {
  Ok(res: Response, data?: any): Response {
    return res.status(HttpStatus.OK).json({
      status: HttpStatus.OK,
      message: "Success",
      data: data,
    });
  }

  NotFound(res: Response, data?: any): Response {
    return res.status(HttpStatus.NOT_FOUND).json({
      status: HttpStatus.NOT_FOUND,
      message: "Not Found",
      error: data,
    });
  }

  Unauthorized(res: Response, data?: any): Response {
    return res.status(HttpStatus.UNAUTHORIZED).json({
      status: HttpStatus.UNAUTHORIZED,
      message: "Unauthorized",
      error: data,
    });
  }

  Forbidden(res: Response, data?: any): Response {
    return res.status(HttpStatus.FORBIDDEN).json({
      status: HttpStatus.FORBIDDEN,
      message: "Forbidden",
      error: data,
    });
  }

  MissingData(res: Response, data?: any): Response {
    return res.status(HttpStatus.MISSING_DATA).json({
      status: HttpStatus.MISSING_DATA,
      message: "Missing data",
      error: data
    });
  }

  Conflict(res: Response, data?: any): Response {
    return res.status(HttpStatus.CONFLICT).json({
      status: HttpStatus.CONFLICT,
      message: "The user is already registered",
      error: data
    });
  }

  Error(res: Response, data?: any): Response {
    return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
      status: HttpStatus.INTERNAL_SERVER_ERROR,
      message: "Internal server error",
      error: data,
    });
  }
}