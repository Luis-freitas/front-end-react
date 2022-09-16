import React from 'react';
import { Link } from "react-router-dom";

export default function Usuario() {

  const handleSubmit = (e) =>  {
    e.preventDefault()

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data)

    alert("Nome inserido: " + data.nome)
  }


  return (
    <div>
      <h1>Usuário</h1>
        <div>
        <form onSubmit={handleSubmit}>
          <input type="text" name="nome" placeholder="nome" />
        
          <button type="submit">Enviar Formulario</button>
      </form>
      </div>


      <h1></h1>
      <Link to="/">retornar a página inicial</Link>
    </div>


  );
}

