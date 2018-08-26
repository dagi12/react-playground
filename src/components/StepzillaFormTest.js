/**
 * Created by erykmariankowski on 25.08.2018.
 */


import React, {Component} from 'react';
import DetailsTabPresentational from '../lib/DetailsTabPresentational';
import TestForm from '../TestForm';
import StepZilla from 'react-stepzilla';
import classnames from 'classnames';

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


class StepzillaFormTest extends Component {

  steps = [
    {name: '1', component: <DetailsTabPresentational />},
    {name: '2', component: <TestForm name="2" background="green" />},
    {name: '2', component: <TestForm name="3" background="blue" />},
  ];

  render() {
    return (
      <div className="container">
        <div className="step-progress">
          <StepZilla
            steps={this.steps}
            {...WIZARD_PROPS}
          />
        </div>
      </div>);
  }
}

export default StepzillaFormTest;
