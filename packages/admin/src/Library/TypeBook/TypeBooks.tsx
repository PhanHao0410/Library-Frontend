import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import history from '../../utils/history';
import { useStoreMobx } from '../../mobx/hook';
import Progress from '../../components/Progress';

import {
  BookContainer,
  PosterContainer,
  ListTypeContainer,
  TypeBookContainer,
  DescribeBookContainer,
} from './styles';

const TypeBooks = () => {
  const {
    rootStore: { typeBooksStore },
  } = useStoreMobx();

  const bookTypeData = typeBooksStore.getBookTypesData;

  useEffect(() => {
    typeBooksStore.fetchAllBookTypes();
  }, []);
  const clickDetailTypeBook = (typeCode) => {
    history.replace(`/detailtypebook/${typeCode}`);
  };
  return (
    <BookContainer>
      <PosterContainer>
        <div className="title-container">
          <h2>A book</h2>
          <h4>is a dream that you hold in your hand</h4>
        </div>
      </PosterContainer>
      {bookTypeData[0]?.typeCode ? (
        <ListTypeContainer>
          {bookTypeData &&
            bookTypeData[0] &&
            bookTypeData[0]?.typeCode &&
            bookTypeData.map((item) => {
              return (
                <TypeBookContainer
                  key={item.typeId}
                  onClick={() => clickDetailTypeBook(item.typeCode)}
                >
                  <img src={item.typePoster} alt={item.typeCode} />
                  <h2 className="title-avt">{item.typeName}</h2>
                </TypeBookContainer>
              );
            })}
        </ListTypeContainer>
      ) : (
        <Progress />
      )}
    </BookContainer>
  );
};

export default observer(TypeBooks);
