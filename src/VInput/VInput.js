/**
 *  Stworzone przez Eryk Mariankowski dnia 22.11.17.
 */
import React, {Component} from 'react';
import {control} from 'react-validation';
import PropTypes from 'prop-types';
import MyFormGroup from './MyFormGroup';
import {withInputBuilder} from './withInputBuilder';

class TempVInput extends Component {

  type = this.props.type || null;

  render() {
    return (
      <MyFormGroup label={this.props.label} error={this.props.error} required={this.props.required}>
        <input
          id={this.props.id}
          name={this.props.name}
          type={this.type}
          className="form-control"
          spellCheck="false"
          value={this.props.value}
          onChange={this.props.onChange}
          disabled={this.props.readOnly}
          maxLength={this.props.maxLength}
        />
        {this.props.children}
      </MyFormGroup>);
  }

}

TempVInput.defaultProps = {
  maxLength: 20
};

const VInput = control(withInputBuilder(TempVInput));

VInput.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string,
  onChange: PropTypes.func,
  id: PropTypes.string,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  readOnly: PropTypes.bool,
  maxLength: PropTypes.number,
  required: PropTypes.bool
};


export default VInput;
