import * as React from "react";

interface PropsEmailTemplate {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export const EmailTemplate = ({
  name,
  email,
  subject,
  message,
}: PropsEmailTemplate) => (
  <div>
    <h1>Nuevo mensaje</h1>
    <br />
    <h3>Hola</h3>
    <br />
    <p>
      <b>{name}</b> se ha puesto en contacto contigo a partir del formulario de
      tu portafolio.
    </p>
    <p>Su dirección de email es:&nbsp;{email}</p>
    <p>
      El asunto de su mensaje es:&nbsp;<b>{subject}</b>
    </p>
    <p>El mensaje enviado es:</p>
    <p>{message}</p>
  </div>
);
