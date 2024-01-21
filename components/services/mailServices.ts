"use server";
import nodemailer from 'nodemailer';

export default async function sendMail(formData: any){
const {name, email, subject, message} = formData;
    let transporter = nodemailer.createTransport({
        service: "gmail",
        host: "smtp.gmail.com",
        port: 587,
        auth: {
          user: process.env.GMAIL_USERNAME,
          pass: process.env.PASSWORD,
        },
      });

      const mailOptions = {
        from: {
          name,
          address: email,
        },
        to: process.env.GMAIL_USERNAME,
        subject: subject,
        text: message,
        html: `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Email Send from Web Portfolio</title>
            <style>
                body {
                    font-family: 'Arial', sans-serif;
                    background-color: #f4f4f4;
                    margin: 0;
                    padding: 0;
                }
        
                .container {
                    max-width: 600px;
                    margin: 20px auto;
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }
        
                h1 {
                    color: #333;
                    text-align: center;
                }
        
                p {
                    color: #555;
                    line-height: 1.6;
                    margin-bottom: 20px;
                }
        
                .button {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: black;
                    border-radius: 4px;
                    text-decoration: none;
                    transition: background-color 0.3s ease;
                }
             
        
                footer {
                    text-align: center;
                    margin-top: 20px;
                    color: #777;
                }
            </style>
        </head>
        <body>
        
        <div class="container">
            <h1>Email from my Web Portfolia</h1>
            <p>Hello,</p>
            <p>This is a ${name} , My email Id is ${email}.</p>
            <p> <strong> Subject  </strong> : ${subject} </p>
            <strong> Message </strong> </br>
            <p> ${message} </p>
            <p >
                <a href="https://uthrathithan.vercel.app/" target="# class="button" style="color:white">Visit our website</a>
            </p>
        </div>
        
        <footer>
            &copy; 2024 .All rights reserved.
        </footer>
        
        </body>
        </html>
        `,
            }

            const emailRes = await transporter.sendMail(mailOptions);
           return emailRes.response
}