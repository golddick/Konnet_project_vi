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
  endTime: z.string({
    message:'set event time '
  }),
  date: z.number({
    message:'pick an event date '
  }),
  price: z.string(),
  isFree: z.boolean(),
  participant: z.string(),
  organizers: z.string(),
  eventImg: z.string({
    message:'add event Img'
  }),
  thumbVideo: z.string({
    message:'add event video'
  }),


  email: z.string().regex(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, {
    message: "Invalid email format",
  }),
  creatorName: z.string(),


  streamRMTPurl: z.string(),
  streamRMTPkey: z.string(),

 bankName: z.string(),
 accountName: z.string(),
 accountNumber: z.number(),

  
});


