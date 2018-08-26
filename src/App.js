import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Alert} from 'react-bootstrap';
import VInput from './VInput/VInput';
import Form from 'react-validation/build/form';
import {required} from './TestForm';

class App extends Component {

  ref = React.createRef();

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Form ref={this.ref}>
          <VInput label="asd" name="asd" validations={[required]} />
        </Form>
        <Alert bsStyle="warning">
          <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
          good.
        </Alert>
      </div>
    );
  }
}

export default App;
