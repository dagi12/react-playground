/**
 * Created by erykmariankowski on 25.08.2018.
 */
import React, {Component} from 'react';
import {withStepValidation} from './VInput/withStepValidation';
import VInput from './VInput/VInput';

export const required = (value) => {
  if (!value.toString().trim().length) {
    return 'require';
  }
};

class TestForm extends Component {

  render() {
    return (
      <div className="test-form" style={{'backgroundColor': this.props.background}}>
        <VInput label={this.props.name} value={this.props.name} validations={[required]} />
      </div>);
  }

}

export default withStepValidation(TestForm);
