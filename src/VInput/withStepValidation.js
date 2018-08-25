import React, {Component} from 'react';
import Form from 'react-validation/build/form';
import {CSSTransition, TransitionGroup} from 'react-transition-group';

export const withStepValidation = WrappedComponent => class extends Component {

  formRef = React.createRef();

  // callback = test1 => this.test1 = test1;

  isValidated() {
    // console.log(this.test1);
    // this.test1.validateAll();
    // return !this.test1.getChildContext()._errors.length;
    this.formRef.current.validateAll();
    return !this.formRef.current.getChildContext()._errors.length;
  }

  render() {
    return (
      <TransitionGroup>
        <CSSTransition key={this.props.step} classNames="fade-step" timeout={300}>
          <div className="step absolute-m">
            <Form className="form-horizontal m-t-sm" ref={this.formRef}>
              <WrappedComponent {...this.props} />
            </Form>
          </div>
        </CSSTransition>
      </TransitionGroup>
    );
  };

};
