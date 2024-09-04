import { z } from 'zod';

export const usernameSchema = z
  .string({ required_error: 'Username is required' })
  .regex(/.+/, 'Username is required')
  .regex(/^[^\s]+$/, 'Username should not contain whitespace')
  .regex(/^[a-zA-Z0-9!@#$%^._&*-]+$/, 'Username should contain only English letters, numbers, and special symbols');

export const passwordSchema = z
  .string({ required_error: 'Password is required' })
  .regex(/^[a-zA-Z]+$/, 'Password must contain only Latin letters');

export const loginFormSchema = z.object({
  username: usernameSchema,
  password: passwordSchema,
});
