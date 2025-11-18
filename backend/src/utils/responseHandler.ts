/**
 * @summary
 * Standardized success response format.
 * @param data The payload to be returned.
 * @param metadata Optional metadata, e.g., for pagination.
 */
export const successResponse = <T>(data: T, metadata?: object) => ({
  success: true,
  data,
  ...(metadata && { metadata }),
});

/**
 * @summary
 * Standardized error response format.
 * @param message A descriptive error message.
 * @param details Optional details about the error (e.g., validation issues).
 */
export const errorResponse = (message: string, details?: unknown) => ({
  success: false,
  error: {
    message,
    ...(details && { details }),
  },
  timestamp: new Date().toISOString(),
});
