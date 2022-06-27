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
  const [page, setPage] = React.useState<number>(0);
  const [pageNumber, setPageNumber] = React.useState<number>(1);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [bookmarks, setBookmarks] = React.useState<IBookmark[]>([]);
  const { isLoading, error, data, isFetching } = useQuery(
    'bookmarkData',
    () => fetch('https://dev-resources-gamma.vercel.app/getAllBookmarks').then((res) => res.json()),
    {
      onSuccess: (data) => setBookmarks(data),
    }
  );
  const bookmarksLength = bookmarks.length;
  React.useEffect(() => {
    console.log(bookmarks);
  }, [bookmarks]);

  const handleChangePageForward = (event: any) => {
    setPage((prevPage) => prevPage + 1);
    setPageNumber((page) => page + 1);
  };

  const handleChangePageBackward = (event: any) => {
    setPage((prevPage) => prevPage - 1);
    setPageNumber((page) => page - 1);
  };

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
          .slice(page * 10, page * 10 + 10)
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
            return <BookmarkCard key={i + 1} propData={bookmark} />;
          })
      ) : (
        <Loading />
      )}
      {/* <BookmarkCard propData={dummydata} /> */}
      <div>
        <div className="flex m-2">
          {/* First Page Button */}
          <button
            className="btn btn-square btn-outline mx-2"
            onClick={() => {
              setPage(0);
              setPageNumber(1);
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="css-i6dzq1"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </button>
          {/* Previous Page Button */}
          <button className="btn btn-square btn-outline mx-2" onClick={handleChangePageBackward}>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="css-i6dzq1"
            >
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>
          {/* Page number Input area */}
          <div className="flex items-center">
            {' '}
            <p>Page</p>
            <div className="flex">
              <input
                type="text"
                placeholder="Type here"
                className="input input-bordered w-1/4 max-w-xs"
                value={pageNumber}
                onChange={(e: any) => {
                  setPageNumber(parseInt(e.target.value));
                }}
                onKeyPressCapture={(e: any) => {
                  console.log('onKeyDown', e.target.value);
                  if (e.key === 'Enter') {
                    if (pageNumber >= 0 && pageNumber <= Math.ceil(bookmarksLength / 10)) {
                      setPage(pageNumber - 1);
                    }
                  }
                }}
              />
              <p>{` of ${Math.ceil(bookmarksLength / 10)}`}</p>
            </div>
          </div>
          {/* Next Page Buttom */}
          <button className="btn btn-square btn-outline mx-2" onClick={handleChangePageForward}>
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="css-i6dzq1"
            >
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
          {/* Last Page Button */}
          <button
            className="btn btn-square btn-outline mx-2"
            onClick={() => {
              setPage(Math.ceil(bookmarksLength / 10) - 1);
              setPageNumber(Math.ceil(bookmarksLength / 10));
            }}
          >
            <svg
              viewBox="0 0 24 24"
              width="24"
              height="24"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="css-i6dzq1"
            >
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Results;
