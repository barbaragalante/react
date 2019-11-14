import React from 'react';
import './App.css';   

class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      visibilidade: true
    };
  }

  adicionarUm = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador + 1
      }
    })
  }

  subtraiUm = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador -1
      }
    })
  }

  resetar = () => {
    this.setState((prevState) => {
      return {
        contador: prevState.contador = 0
      }
    })
  }


  alternarVisibilidade = () => {
   this.setState((prevState)=> {
     return {
       visibilidade: !prevState.visibilidade
     }
   })

  render() {
    return (
      <div>
        <button className="btnMaisUm" onClick={this.adicionarUm}>+1</button>
        <button className="btnMenosUm" onClick={this.subtraiUm}>-1</button>
        <button className="btnResetar" onClick={this.resetar}>resetar</button>
      </div>
    );
  }
}

function App(props) {
  return (
    <div className="App">
      <h2>Contador</h2>
      <Contador />
    </div>
  );
}
export default App; 