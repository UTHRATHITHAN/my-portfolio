"use server";
import sendMail from "@/components/services/mailServices";

type FormData = {
  name: string,
  email: string, 
  subject: string, 
  message: string
}

async function contactAction(formData: FormData) {

  const res:string = await sendMail(formData);
  console.log(res.includes('OK'), " Res in actions")
  return res.includes('OK')
}

export default contactAction;
