import React from 'react';

import { AnimationSuccessContainer, AnimationFailContainer } from './styles';

export const AnimationSuccess = () => {
  return (
    <AnimationSuccessContainer>
      <div className="success-checkmark">
        <div className="check-icon">
          <span className="icon-line line-tip" />
          <span className="icon-line line-long" />
          <div className="icon-circle" />
          <div className="icon-fix" />
        </div>
      </div>
    </AnimationSuccessContainer>
  );
};

export const AnimationFail = () => {
  return (
    <AnimationFailContainer>
      <div className="o-circle c-container__circle o-circle__sign--failure">
        <div className="o-circle__sign" />
      </div>
    </AnimationFailContainer>
  );
};
