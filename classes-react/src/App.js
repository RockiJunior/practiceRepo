import "./App.css";
import { Component } from "react";

class Button extends Component {
  state = {};

  constructor(props) {
    super(props);
    console.log("constructor", props);
  }

  componentDidMount() {
    console.log("componentDidMount");
  }

  componentDidUpdate(prevProps, prevState) {
    console.log(
      "componentDidUpdate",
      "prevState",
      prevState,
      "prevProps",
      prevProps
    );
  }

  componentWillUnmount() {
    console.log("componentWillUnmount", this.props, this.state);
  }

  render() {
    console.log("ejecutando metodo render de button");
    return (
      <div>
        <button onClick={() => this.setState({ prop: 1 })}>Enviar</button>
      </div>
    );
  }
}

class App extends Component {
  state = {
    valor: 3,
  };

  render() {
    console.log(this.state);
    return (
      <div className="app">
        <p>HOLA MUNDO</p>
        {
        this.state.valor === 3 ?
        <Button chanchito="feliz" /> :
        null
        }
        <button
          className="app-button"
          onClick={() => this.setState({ valor: 2 })}
        >
          Enviar en App
        </button>
      </div>
    );
  }
}
export default App;
