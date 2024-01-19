"use server";
import sendMail from "@/components/services/mailServices";

async function contactAction(formData: FormData) {
  const text = formData;
  const res:string = await sendMail(text);
  console.log(res.includes('OK'), " Res in actions")
  return res.includes('OK')
}

export default contactAction;
