import React from 'react';
import './App.css';
import Text from './components/Text'
import Input from './components/Input'
import Button from './components/Button'

function App() {
  
  function alerta_teste(){
    var number1 = document.getElementById("input1") as HTMLInputElement
    var number2 = document.getElementById("input2") as HTMLInputElement
    var soma = parseInt(number1.value) + parseInt(number2.value);
    var parseString = soma.toString()
    var labelresultado = document.getElementById("txt_resultado") as HTMLParagraphElement
    labelresultado.innerHTML = parseString
  }

  return (
    <div className="App">
      <div className="container">
        <Text text="Titulo" />
        <div className="input" >
          <Input id="input1"/>
          <Input id="input2"/>
        </div>
        <Button func={alerta_teste} />
        <Text text="Resultado" id="txt_resultado"/>
      </div>
    </div>
  );
}

export default App;
