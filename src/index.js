import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inp: "" };
    //this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ inp: event.target.value }, () =>
      console.log("dentro callback", this.state.inp)
    );
    console.log(this.state.inp);
  }

  render() {
    return (
      <div>
        <h1>El futuro es ahora viejo ...</h1>
        <Input change={this.handleChange} />
        <br />
        <Etiqueta texto={this.state.inp} />
        <br />
        <Escribe />
        <br />
        <Descargar />
      </div>
    );
  }
}

const Input = function(props) {
  return (
    <div>
      <input type="text" onChange={props.change} />
    </div>
  );
};

const Etiqueta = function(props) {
  return (
    <div>
      <p>{props.texto}</p>
    </div>
  );
};

const Escribe = function(props) {
  return (
    <div>
      <input type="button" value="escribe el cuento" onClick={props.change} />
    </div>
  );
};

const Descargar = function(props) {
  return (
    <div>
      <input type="button" value="descargar el cuento " />
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
