import {Component} from 'react';

export class Button extends Component {
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
