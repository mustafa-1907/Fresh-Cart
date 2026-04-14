import { toast } from "sonner";
import {  UserDataType } from "./register";
import { handleUserRegister } from "./register.action";

export  async function sendUserData(userData : UserDataType)  {
const response = await handleUserRegister(userData);
if(response === true){
    toast.success("Registration successful! Please log in." ,{
        position:"top-center",        
    } );
}else{
    toast.error(response ,{
        position:"top-center",
    });
} 

  }
 