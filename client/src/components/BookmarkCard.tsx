import * as React from 'react';
import { useQuery } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

interface IBookmark {
  // eslint-disable-next-line camelcase
  date_added: string;
  guid: string;
  id: string;
  name: string;
  type: string;
  url: string;
  tags: string[];
}

interface IBookmarkCard {
  propData: IBookmark;
}

const BookmarkCard = ({ propData }: IBookmarkCard) => {

  React.useEffect(() => {
    console.log(propData);
  }, []);

  return <div>title - {propData.name}</div>;
};

export default BookmarkCard;
