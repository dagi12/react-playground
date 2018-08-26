/**
 *  Stworzone przez Eryk Mariankowski dnia 07.08.18.
 */
import React from 'react';

export const withInputBuilder = WrappedComponent => ({error, isUsed, autoCompleteRef, ...props}) => (
  <WrappedComponent error={!!error} {...props} ref={autoCompleteRef}>
    {isUsed && error}
  </WrappedComponent>
);
