import nodemailer from "nodemailer";

const emailRegistro = async ({ email, nombre, token }) => {
  // Looking to send emails in production? Check out our Email API/SMTP products
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: Number(process.env.EMAIL_PORT),
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  // Send email

  const info = await transporter.sendMail({
    from: "APV - Administrador de Pacientes de Veterinaria ", // sender address
    to: email, // list of receivers
    subject: "Confirma tu cuenta en APV", // Subject line
    text: "Confirma tu cuenta en APV", // plain text body
    html: `<p>Hola ${nombre}, comprueba tu cuenta en APV</p>
      <p>Tu cuenta ya esta lista, solo debes confirmarla en el siguiente enlace:
        <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Confirmar cuenta</a>
      </p>
      <p>Si no creaste esta cuenta, puedes ignorar el mensaje</p>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId); // Message sent
};

export default emailRegistro;
