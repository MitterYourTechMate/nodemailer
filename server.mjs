import nodemailer from "nodemailer"
import dotenv from "dotenv"

dotenv.config()

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });


  transporter.sendMail({
    from:"MITTER-YOUR TECH MATE<mitter.yourtechmate@gmail.com>",
    to:"contact@digitalmitra.co.nz;shankeyraheja@gmail.com",
    subject:"HELLO, THIS IS IMPROVED VERSION OF EMAIL",
    html:"This is my first email that I am sending with Node Js"
  })



 