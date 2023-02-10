import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias/ListaDeCategorias";
import "./assets/App.css";
import './assets/index.css';
import Categorias from "./dados/categorias";
import ArrayDeNotas from "./dados/notas";

class App extends Component {

  constructor(){
    super();
    this.categorias = new Categorias ();
    this.notas = new ArrayDeNotas ();
  }

 

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro 
          categorias={this.categorias.categorias}
          criarNota={this.notas.criarNota}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias 
            adicionarCategoria={this.categorias.adicionarCategoria}
            categorias={this.categorias.categorias} />
          <ListaDeNotas
            apagarNota={this.notas.apagarNota}
            notas={this.notas.notas}/>
        </main>
        
      </section>
    );
  }
}


export default App;

//react -> lib
//React -> ecossistema

//new ListaDeNotas({notas:this.notas})