import { z } from "zod";

export const checkoutSchema = z.object({
  city: z.string().min(1, "City is required"),
  details: z.string().min(5, "Please provide more address details (Street, Building, etc.)"),
  phone: z.string().regex(/^01[0125][0-9]{8}$/, "Invalid Egyptian phone number"),
  postalCode: z.string().regex(/^\d{5}$/, "Postal code must be 5 digits"), // كود البوسطة في مصر 5 أرقام
});

