import { useEffect, useState } from "react";
import { Message } from "./Message";

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: "strider",
    email: "strider@gmail.com",
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log("Llamado useEffect");
  }, []);

  useEffect(() => {
    // console.log("formState cambiado");
  }, [formState]);

  useEffect(() => {
    // console.log("Email cambiado");
  }, [email]);

  return (
    <>
      <h1>Formulario simple</h1>
      <hr />
      <input
        type="text"
        className="form-control"
        placeholder="Username"
        name="username"
        value={username}
        onChange={onInputChange}
      />

      {username === "strider2" && <Message />}

      <input
        type="email"
        className="form-control mt-2"
        placeholder="xxxxx@gmail.com"
        name="email"
        value={email}
        onChange={onInputChange}
      />
    </>
  );
};
