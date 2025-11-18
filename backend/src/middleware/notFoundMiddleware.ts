import { Request, Response } from 'express';
import { errorResponse } from '@/utils/responseHandler';

/**
 * @summary
 * Handles requests for routes that do not exist.
 */
export function notFoundMiddleware(req: Request, res: Response): void {
  res.status(404).json(errorResponse(`Not Found - ${req.originalUrl}`));
}
