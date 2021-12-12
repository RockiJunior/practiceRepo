import "./App.css";
import { Component } from "react";
// import {Button} from './components/lifeStateComponents.jsx';
import { Input } from "./components/uploadingState.jsx";


class App extends Component {
  state = {
    // valor: 3,
    nombre: "",
    apellido: "",
  };

  updateValues = (prop, value) => {
    this.setState({
      [prop]: value,
    });
  };

  render() {
    return (
      <p>
        {" "}
        Nombre Completo: {this.state.nombre} {this.state.apellido}{" "}
        <Input
          value={this.state.nombre}
          onChange={(e) => this.updateValues("nombre", e.target.value)}
        />
        <Input
          value={this.state.apellido}
          onChange={(e) => this.updateValues("apellido", e.target.value)}
        />
      </p>
    );

    // console.log(this.state);
    // return (
    //   <div className="app">
    //     <p>HOLA MUNDO</p>
    //     {
    //     this.state.valor === 3 ?
    //     <Button chanchito="feliz" /> :
    //     null
    //     }
    //     <button
    //       className="app-button"
    //       onClick={() => this.setState({ valor: 2 })}
    //     >
    //       Enviar en App
    //     </button>
    //   </div>
    // );
  }
}
export default App;
