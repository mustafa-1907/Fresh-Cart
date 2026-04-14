import { sendUserLogin } from "./login.action";
import { LoginRequest } from "./login";

export async function handleLogin(data : LoginRequest) {

const message = await sendUserLogin(data);
return message;
}