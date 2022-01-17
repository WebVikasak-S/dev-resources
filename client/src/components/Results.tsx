import * as React from 'react';
import BookmarkCard from './BookmarkCard';
import { useQuery } from 'react-query';
import Loading from './Loading';

const dummydata = {
  date_added: '13261236759459082',
  guid: 'f5267079-4dab-412b-b88c-b7683fdb26ed',
  id: '217',
  name: 'Zoho',
  type: 'url',
  url: 'https://people.zoho.in/hrmsportal13102016/zp#home/dashboard',
  tags: ['celebal'],
};
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

const Results = () => {
  const [searchTerm, setSearchTerm] = React.useState('');
  const [bookmarks, setBookmarks] = React.useState<IBookmark[]>([]);
  const { isLoading, error, data, isFetching } = useQuery('bookmarkData', () =>
    fetch('https://dev-resources-gamma.vercel.app/getAllBookmarks').then((res) => res.json())
  );

  React.useEffect(() => {
    setBookmarks(data);
  }, [data]);

  return (
    <div className="flex flex-col flex-1 items-center justify-start border-2 mx-1 p-2">
      <div className="border-2 m-1 mx-4 p-2 flex h-fit ">
        <input
          className="outline-none"
          placeholder="Search Resource..."
          name="search"
          type="text"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button className="btn btn-primary">Search</button>
      </div>
      <h1 className="text-xl font-semibold underline">Results</h1>
      {console.log(searchTerm)}
      {isLoading ? (
        <Loading />
      ) : bookmarks ? (
        bookmarks
          .slice(1, 11)
          .filter((bookmark: IBookmark, i: number) => {
            if (!searchTerm || searchTerm === '') return bookmark;
            else if (
              bookmark.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
              bookmark.url.toLowerCase().includes(searchTerm.toLowerCase())
            ) {
              return bookmark;
            } else {
              return null;
            }
          })
          .map((bookmark: IBookmark, i: number) => {
            return <BookmarkCard key={i} propData={bookmark} />;
          })
      ) : (
        <Loading />
      )}
      {/* <BookmarkCard propData={dummydata} /> */}
    </div>
  );
};

export default Results;
