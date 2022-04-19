import * as React from 'react';
import { HiOutlineLink } from 'react-icons/hi';
import { RiEditBoxLine } from 'react-icons/ri';
import { MdOutlineReportProblem } from 'react-icons/md';
import { CgMoreVerticalO } from 'react-icons/cg';
import { TiTags } from 'react-icons/ti';
import { Link } from 'react-router-dom';
import demo from '../assets/demo.jpg';

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
  React.useEffect(() => {}, []);

  return (
    <>
      <div className="flex flex-col md:flex-row justify-around items-center p-4 mt-4 mx-auto rounded-md border-b-2">
        <img className=" mb-2 md:mb-0  border w-auto h-[150px] md:w-[150px] md:h-auto" src={demo} alt="domain logo" />
        <div className="flex flex-1 flex-col items-start mx-4">
          <p>
            <strong>Title - </strong>
            {propData.name}
          </p>
          <p>
            <strong className="inline">Description - </strong>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem commodi harum ad aliquid reiciendis
            possimus.
          </p>
          <Link to={propData.url || '#'}>
            <p>
              <strong>
                <HiOutlineLink className="inline" />
              </strong>{' '}
              - {`${propData.url.slice(0, 70)}...`}
            </p>
          </Link>
          <p>
            <strong>
              <TiTags className="inline" />
            </strong>{' '}
            {'-'}{' '}
            {propData.tags.map((tag, i) => (
              <span key={i}>{tag},</span>
            ))}
          </p>
        </div>
        <div className="flex flex-row w-full justify-around mt-2 md:flex-col md:justify-start md:items-end md:mt-0 md:w-fit">
          <button className="btn btn-primary btn-sm mb-1">
            <RiEditBoxLine />
          </button>
          <button className="btn btn-primary btn-sm mb-1">
            <CgMoreVerticalO />
          </button>
          <button className="btn btn-primary btn-sm mb-1">
            <MdOutlineReportProblem />
          </button>
        </div>
      </div>
      <hr className="white" />
    </>
  );
};

export default BookmarkCard;
