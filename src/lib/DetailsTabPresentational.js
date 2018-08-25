import React from 'react';

import VInput from '../VInput/VInput';
import {withStepValidation} from '../VInput/withStepValidation';

const DetailsTabPresentational = props => {
  return (
    <fieldset disabled={props.readOnly} className="">
      <VInput
        label="Użytk. pojazdu"
        value={props.uzytkPojazdu}
        readOnly
      />
      <VInput
        id="klient"
        name="stru1"
        label="Klient"
        value={props.stru1}
        readOnly
      />
      <VInput
        label="Status"
        value={props.statusZnaczenie}
        readOnly
      />
    </fieldset>
  );
};

export default withStepValidation(DetailsTabPresentational);
