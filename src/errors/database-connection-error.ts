import { CustomError } from "./custom-error";

export class DatabaseConnectionValidationError extends CustomError {
  statusCode = 500;
  reason = 'Error connecting to database'
  constructor() {
    super('Error connection to db');

    //Only because we are extending a build in class
    Object.setPrototypeOf(this, DatabaseConnectionValidationError.prototype)
  }

  serializeErrors() {
    return [
      { message: this.reason }
    ]
  }
}