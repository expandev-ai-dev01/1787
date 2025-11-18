import { Request, Response, NextFunction } from 'express';
import { errorResponse } from '@/utils/responseHandler';

/**
 * @summary
 * Placeholder for authentication middleware.
 * This should be replaced with actual token validation logic (e.g., JWT).
 * For now, it only checks for an Authorization header in production.
 */
export async function authMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  // In a real application, you would verify a JWT or session token here.
  // For this base structure, we'll just pass through in development.
  if (process.env.NODE_ENV !== 'production') {
    return next();
  }

  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    res.status(401).json(errorResponse('Unauthorized: Missing or invalid token'));
    return;
  }

  // Placeholder for token verification logic
  // const token = authHeader.split(' ')[1];
  // try {
  //   const decoded = verifyToken(token);
  //   req.user = decoded; // Attach user info to the request
  //   next();
  // } catch (error) {
  //   res.status(401).json(errorResponse('Unauthorized: Invalid token'));
  // }

  next();
}
