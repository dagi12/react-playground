import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import {Alert} from 'react-bootstrap';

const required = (value) => {
  if (!value.toString().trim().length) {
    return 'require';
  }
};


class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <Form>
          <Input value="" name="test" validations={[required]} />
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
