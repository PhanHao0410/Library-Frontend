import React, { memo } from 'react';
import { WarnNoDataContainer } from './styles';

const WarnNoData = ({ warnText }) => {
  return (
    <WarnNoDataContainer>
      <div className="content">
        <div
          className={warnText === 'books' ? 'warn-data' : 'warn-data-gray'}
        />
        <h1 className={warnText === 'books' ? '' : 'text-warn'}>
          {warnText === 'books'
            ? 'No books have been saved here yet!!!'
            : 'No practice have been saved here yet!!!'}
        </h1>
      </div>
    </WarnNoDataContainer>
  );
};

export default WarnNoData;
