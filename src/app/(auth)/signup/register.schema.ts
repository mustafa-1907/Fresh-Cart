import * as zod from "zod";

export const formSchema = zod.object({
  name: zod.string().nonempty("Name is required").min(2, "Name must be at least 2 characters"),
  email: zod.string().regex(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ , 'Enter a valid email address'),
  password: zod.string().regex(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,'Enter valid password').min(8, "Password must be at least 8 characters"),
  rePassword: zod.string(),
  phone: zod.string().regex(/^(\+201|01|00201)[0-2,5]{1}[0-9]{8}/,'Enter Valid Egyption NumberPhone').min(10, "Phone number must be at least 10 digits"),
}).refine((data) => data.password === data.rePassword, {
  message: "Passwords do not match",
  path: ["rePassword"],
});
