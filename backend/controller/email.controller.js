

import { Resend } from "resend";
import dotenv from 'dotenv'

dotenv.config()


const key = process.env.RESENDKEY

if(!key){
    throw new Error ("resend api key missing")
}

const resend = new Resend(key); 

const recepent = process.env.RECEIPENTEMAIL;


export const sendEmail = async(req , res)=>{
    try{
        const {name, email,phone, description} = req.body; 
        if(!name || !email ||!phone|| !description){
            return res.status(400).json({error: "All fields are required"});
        }

        const response = await resend.emails.send({
            from: "onboarding@resend.dev",
            to: recepent,
            subject: "new message from portfolio", 
            text: `name:\n${name} \n email:\n${email} \n phone:\n${phone} \n description:\n${description}`,
        })

         return res.status(200).json({
            message:"Email sent successfully",
            response,
         })


    }catch(error){
 console.log(error); 
        throw new Error("error sending verification email"); 
    }
}