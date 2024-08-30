import { z } from "zod";

export const formSchema = z.object({
  filter: z.string(),
});

export type IFormSchema = z.infer<typeof formSchema>;
