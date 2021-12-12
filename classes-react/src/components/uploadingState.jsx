import { Component } from "react";

export class Input extends Component {
    render() {
    console.log("entrando al Input");
    return <input value={this.props.value} onChange={this.props.onChange} />;
  }
}
