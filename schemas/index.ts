import * as z from 'zod';

export const LoginSchema = z.object({
  username: z.literal(process.env.NEXT_PUBLIC_ADMIN_USERNAME),
  password: z.literal(process.env.NEXT_PUBLIC_ADMIN_PASSWORD)
});
