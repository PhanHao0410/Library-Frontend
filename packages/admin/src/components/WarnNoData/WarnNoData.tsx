import React, { memo } from 'react';
import { WarnNoDataContainer } from './styles';

const WarnNoData = ({ warnText }) => {
  return (
    <WarnNoDataContainer>
      <div className="content">
        <div className="warn-data-gray" />
        <h1 className="text-warn">
          {`No ${warnText} have been saved here yet!!!`}
        </h1>
      </div>
    </WarnNoDataContainer>
  );
};

export default WarnNoData;
