import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import history from '../../utils/history';
import { useStoreMobx } from '../../mobx/hook';

import {
  BookContainer,
  PosterContainer,
  ListTypeContainer,
  TypeBookContainer,
  DescribeBookContainer,
} from './styles';

const TYPEBOOK = [
  {
    title: 'Data Structures And Algorithm',
    typeAlt: 'avt_data_structures',
    urlCode: 'data-structures-algorithms',
    urlImage:
      'https://theyuvas.com/wp-content/uploads/2021/08/Data-Structures-and-Algorithm-1024x582.png',
  },
  {
    title: 'Operating System',
    typeAlt: 'avt_operation_system',
    urlCode: 'operating-system',
    urlImage:
      'https://static.vecteezy.com/system/resources/previews/012/701/055/large_2x/os-operating-system-advanced-software-technologies-and-coding-web-software-digital-graphic-scripts-and-business-monitoring-interfaces-poster-of-mobile-applications-vector.jpg',
  },
  {
    title: 'Database',
    typeAlt: 'avt_database',
    urlCode: 'database',
    urlImage:
      'https://www.dotnetstuffs.com/wp-content/uploads/2016/12/SQL-Basics-SQL-tutorial-learn-SQL.jpg',
  },
  {
    title: 'Software Testing',
    typeAlt: 'avt_soft_ware',
    urlCode: 'software-testing',
    urlImage:
      'https://static.vecteezy.com/system/resources/previews/002/779/404/original/people-testing-software-fixing-bugs-in-hardware-device-application-test-and-it-service-concept-illustration-flat-vector.jpg',
  },
];

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
    </BookContainer>
  );
};

export default observer(TypeBooks);
