/**
 *  Stworzone przez Eryk Mariankowski dnia 10.11.17.
 */
import React, {Component} from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';


let lastId = 0;

export function newId() {
  lastId++;
  return lastId.toString();
}

export default class MyFormGroup extends Component {

  wrapperClasses = classnames('col-md-8', this.props.wrapperClasses);
  id = newId();

  labelClasses = classnames('control-label col-md-4', {'required': this.props.required});


  render() {
    const formGroupClasses = classnames('form-group', {
      'has-feedback': this.props.error,
      'has-danger': this.props.error,
      'has-error': this.props.error
    });
    return (
      <div className={formGroupClasses}>
        <label className={this.labelClasses} htmlFor={this.id}>{this.props.label}</label>
        <div className={this.wrapperClasses} id={this.id}>
          {this.props.children}
        </div>
      </div>);
  }

}

MyFormGroup.propTypes = {
  label: PropTypes.string,
  wrapperClasses: PropTypes.string,
  children: PropTypes.any,
  error: PropTypes.bool,
  required: PropTypes.bool
};
