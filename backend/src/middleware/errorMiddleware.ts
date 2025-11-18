import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { errorResponse } from '@/utils/responseHandler';

/**
 * @summary
 * Global error handling middleware. Catches errors from route handlers and
 * formats them into a standardized JSON response.
 */
export function errorMiddleware(
  err: Error,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  next: NextFunction
): void {
  console.error(err.stack);

  if (err instanceof ZodError) {
    res.status(400).json(errorResponse('Validation error', err.issues));
    return;
  }

  // You can add more specific error types here
  // if (err instanceof CustomError) { ... }

  const statusCode = res.statusCode !== 200 ? res.statusCode : 500;
  res.status(statusCode).json(errorResponse(err.message || 'An unexpected error occurred'));
}
