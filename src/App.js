import React, {/* Component*/ } from 'react';
import './App.css';
import ImcCalculator from './components/ImcCalculator';
import Author from './components/AuthorTag';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1> Calculadora de Índice de Massa Corporal</h1>
        <p>Introduza no formulário abaixo os valores de altura e peso para obter o seu IMC:</p>
        <ImcCalculator />
        </header>
         <Author/> 
    </div>

  );
}

export default App;