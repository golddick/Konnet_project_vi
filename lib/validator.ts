import * as z from 'zod';

export const loginFormSchema = z.object({
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
    message: "Invalid email format",
  }),

  password: z.string({
    message: 'input your password',
  }),
});


export const RegFormSchema = z.object({
  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
    message: "Invalid email format",
  }),
  displayName: z.string(),

  password: z.string({
    message: 'input your password',
  }),
});


// export const RegDashFormSchema = z.object({

//   displayName: z.string(),

//   password: z.string({
//     message: 'input your password',
//   }),
// });
