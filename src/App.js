import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import {Alert} from 'react-bootstrap';
import StepZilla from 'react-stepzilla';
import TestForm from './TestForm';
import classnames from 'classnames';
import DetailsTabPresentational from './lib/DetailsTabPresentational';

delete StepZilla.propTypes.nextButtonText;
delete StepZilla.propTypes.backButtonText;

function getButton(msg, icon) {
  return (<div>
    <div className={classnames('fa', icon, 'm-r-sm')} />
    <span>{msg}</span>
  </div>);
}

const WIZARD_PROPS = {
  nextButtonText: (<div>
    <span>Następny</span>
    <div className={classnames('fa', 'fa-angle-right', 'm-l-sm')} />
  </div>),
  backButtonText: getButton('Poprzedni', 'fa-angle-left'),
  nextTextOnFinalActionStep: getButton('Zapisz', 'fa-check')
};

class App extends Component {

  steps = [
    {name: '1', component: <DetailsTabPresentational />},
    {name: '2', component: <TestForm name="2" background="green" />},
    {name: '2', component: <TestForm name="3" background="blue" />},
  ];


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div className="container">
          <div className="step-progress">
            <StepZilla
              steps={this.steps}
              {...WIZARD_PROPS}
            />
          </div>
        </div>
        <Alert bsStyle="warning">
          <strong>Holy guacamole!</strong> Best check yo self, you're not looking too
          good.
        </Alert>
      </div>
    );
  }
}

export default App;
