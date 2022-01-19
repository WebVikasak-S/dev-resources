import * as React from 'react';
import { bookmarksDummy } from '../utils/db.js';
import { useQuery } from 'react-query';
import { BiSearchAlt } from 'react-icons/bi';
import BookmarkCard from './BookmarkCard';
import Loading from './Loading';
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
  const { isLoading, error, data, isFetching } = useQuery(
    'bookmarkData',
    () => fetch('https://dev-resources-gamma.vercel.app/getAllBookmarks').then((res) => res.json()),
    {
      onSuccess: (data) => setBookmarks(data),
    }
  );

  React.useEffect(() => {
    console.log(bookmarks);
  }, [bookmarks]);

  return (
    <div className="results flex flex-col flex-1 items-center justify-start border-2 mx-1 p-2 overflow-y-hidden overflow-x-hidden md:overflow-y-scroll h-[75vh]">
      <div className="border-2 m-1 mx-4 p-2 flex h-fit w-full ">
        <input
          className="outline-none p-2 flex-1"
          placeholder="Search Resource..."
          name="search"
          type="text"
          onChange={(event) => setSearchTerm(event.target.value)}
        />
        <button className="btn btn-primary text-2xl">
          <BiSearchAlt />
        </button>
      </div>
      <p className="text-xl font-semibold underline">Results {isFetching ? 'Updating...' : ''}</p>
      {isLoading ? (
        <Loading />
      ) : bookmarks ? (
        bookmarksDummy
          .slice(1, 9)
          .filter((bookmark: IBookmark) => {
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
