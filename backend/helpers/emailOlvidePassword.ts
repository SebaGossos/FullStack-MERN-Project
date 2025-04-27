import nodemailer from "nodemailer";

const emailOlvidePassword = async ({ email, nombre, token }) => {
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
    subject: "Restablece tu Password", // Subject line
    text: "Restablece tu Password", // plain text body
    html: `<p>Hola ${nombre}, haz solicitado reestablecer tu password</p>

      <p>Sigue el siguiente enlace para generar un nuevo password:</p>
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Reestablecer Password</a>
      </p>
      <p>Si no creaste esta cuenta, puedes ignorar el mensaje</p>
    `, // html body
  });

  console.log("Message sent: %s", info.messageId); // Message sent
};

export default emailOlvidePassword;
