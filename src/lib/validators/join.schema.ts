import { z } from "zod";

export const joinSchema = z.object({
  name: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  batch: z.string().min(1, "Batch is required"),
  department: z.string().min(1, "Please select a department"),
  roll: z.string().min(1, "Class roll is required"),
  phone: z
    .string()
    .regex(/^(?:\+88|88)?(01[3-9]\d{8})$/, "Invalid Bangladeshi phone number"),
});

export type JoinInput = z.infer<typeof joinSchema>;
