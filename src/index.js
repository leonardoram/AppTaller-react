import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inp: "", parrafos: [] };
    //this.handleInput = this.handleInput.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ inp: event.target.value }, () =>
      console.log("dentro callback", this.state.inp)
    );
    console.log(this.state.inp);
  }

  handleClick(event) {
    if (!this.state.inp.length) {
      return;
    }
    const nuevoParrafo = {
      inp: this.state.inp,
      id: Date.now()
    };
    this.setState(state => ({
      parrafos: state.parrafos.concat(nuevoParrafo),
      inp: ""
    }));
  }

  render() {
    return (
      <div>
        <h1>El futuro es ahora viejo ...</h1>
        <Input change={this.handleChange} />
        <br />
        <Etiqueta texto={this.state.inp} />
        <br />
        <Escribe click={this.handleClick} />
        <br />
        <Descargar />
      </div>
    );
  }
}

const Input = function(props) {
  return (
    <div>
      <input onChange={props.change} type="text" />
    </div>
  );
};

const Etiqueta = function(props) {
  return (
    <div>
      {this.props.nuevoParrafo.map(nuevoParrafo => (
        <p key={nuevoParrafo.id}>{nuevoParrafo.inp}</p>
      ))}
      <p>{props.texto}</p>
    </div>
  );
};

const Escribe = function(props) {
  return (
    <div>
      <button onClick={props.click}>Escribiendo ...</button>
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
