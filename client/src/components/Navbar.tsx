import * as React from 'react';
import { Link } from 'react-router-dom';
import { CgMenu, CgClose } from 'react-icons/cg';
import { RiStackFill } from 'react-icons/ri';
import { ThemeContext } from './contexts/ThemeContext';

const Navbar = () => {
  const { theme, themeChangeHandler, isDark } = React.useContext(ThemeContext);
  const [isOpen, setIsOpen] = React.useState(false);
  const menuHandler = () => {
    setIsOpen(!isOpen);
  };
  React.useEffect(() => {
    console.log('Theme in Navbar - ', theme);
  }, [theme]);
  return (
    <header className="w-full flex items-center justify-center bg-base-200 border-2  border-black px-4 py-2">
      <p className="text-4xl mx-2">
        <RiStackFill />
      </p>
      <Link className="mr-auto" to="/">
        <h1 className="text-3xl font-bold underline">Dev-Resource</h1>
      </Link>
      <div className=" hidden md:flex  md:justify-between md:items-center">
        <input type="checkbox" className="toggle mr-4" onChange={themeChangeHandler} checked={isDark} />
        <Link to="/about">
          <button className="btn btn-primary mr-2">About</button>
        </Link>
        <Link to="/create">
          <button className="btn btn-primary mr-2">Create</button>
        </Link>
        <Link to="/import">
          <button className="btn btn-primary mr-2">Import</button>
        </Link>
        <Link to="/login-signup">
          <button className="btn btn-primary">Login/SignUp</button>
        </Link>
      </div>
      <button className="md:hidden btn btn-primary text-2xl relative" onClick={menuHandler}>
        {isOpen ? <CgClose /> : <CgMenu />}
      </button>
      {isOpen ? (
        <div className="absolute z-20 w-[95vw] h-[100vh] bg-transparent top-0 right-0" onClick={menuHandler}>
          <div className="absolute z-30 menu top-[80px] right-1 bg-base-200 p-2 px-6 border-2 flex flex-col items-center">
            <input type="checkbox" className="toggle mb-2" onChange={themeChangeHandler} checked={isDark} />
            <Link to="/about">
              <button className="btn btn-primary mb-2">About</button>
            </Link>
            <Link to="/create">
              <button className="btn btn-primary mb-2">Create</button>
            </Link>
            <Link to="/import">
              <button className="btn btn-primary mb-2">Import</button>
            </Link>
            <Link to="/login-signup">
              <button className="btn btn-primary">Login/SignUp</button>
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
