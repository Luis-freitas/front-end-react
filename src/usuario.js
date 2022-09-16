import React from 'react';
import { Link } from "react-router-dom";

export default function Usuario() {

  function cadastrarUsuario(e) {
    e.preventDefault()
    console.log('cadastrou o usuario')
    alert('Enviou nome:, ${this.state.value}');
  }


  return (
    <div>
      <h1>Usuário</h1>
      <form onSubmit={cadastrarUsuario}>

        <label>
          Nome:
          <input type="text"/>
        </label>
        <input type="submit" value="Enviar formulário!" />

      </form>



      <h1></h1>
      <Link to="/">retornar a página inicial</Link>
    </div>


  );
}

