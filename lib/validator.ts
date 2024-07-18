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


export const CreateStreamSchema = z.object({
  StreamName: z.string({
    message:'Add stream Name'
  }),
  StreamDesc: z.string({
    message:'Add stream Desc'
  }),
  address: z.string({
    message:'Streaming location needed'
  }),
  time: z.string({
    message:'set event time '
  }),
  date: z.number({
    message:'pick an event date '
  }),
  price: z.string({
    message:'set ticket fee'
  }),
  participant: z.string({
    message:'add participants'
  }),
  organizers: z.string({
    message:'add organizers'
  }),
  eventImg: z.string({
    message:'add event Img'
  }),
  thumbVideo: z.string({
    message:'add event video'
  }),

  
});


