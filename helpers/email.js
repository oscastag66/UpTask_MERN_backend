import nodemailer from "nodemailer"

export const emailRegistro = async (datos) => {
  const { email, nombre, token } = datos;
    const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
      });
      // informacion del Email
      const info = await transport.sendMail({
          from: '"UpTask - Administrador de Proyctos" <cuentas@uptask.com>',
          to: email,
          subject: "Uptask - Comprueba tu cuenta",
          text: "Comprueba tu cuenta en UpTask",
          html:`<p>Hola: ${nombre} Comprueba tu cuenta en UpTask</p>
          <p> Tu cuenta ya esta lista, solo debes comprobar en el siguiente enlace:</p> 
          <a href="${process.env.FRONTEND_URL}/confirmar/${token}">Comprobar Cuenta</a>  
          <p> Si tu no creaste esta cuenta, puedes ignorar el mensaje</p>
          `
      })
}

export const emailOlvidePassword = async (datos) => {
  const { email, nombre, token } = datos;
  const transport = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
    // informacion del Email
    const info = await transport.sendMail({
        from: '"UpTask - Administrador de Proyctos" <cuentas@uptask.com>',
        to: email,
        subject: "Uptask - Restablece  tu password",
        text: "Comprueba tu cuenta en UpTask",
        html:`<p>Hola: ${nombre} Haz solicitado restablecer tu password en UpTask</p>
        <p> Sigue el siguiente enlace para restablecer nu nuevo password:</p> 
        <a href="${process.env.FRONTEND_URL}/olvide-password/${token}">Restablecer password</a>  
        <p> Si tu no solicitaste este email, puedes ignorar el mensaje</p>
        `
    })
}