import * as React from 'react';
import { Link } from 'react-router-dom';
// import { themeChange } from 'theme-change';
import { CgMenu, CgClose } from 'react-icons/cg';
import { ThemeContext } from './contexts/ThemeContext';

const Navbar = () => {
  // const [isDark, setIsDark] = React.useState(true);
  const { theme, themeChangeHandler, isDark } = React.useContext(ThemeContext);
  const [isOpen, setIsOpen] = React.useState(false);

  const menuHandler = () => {
    setIsOpen(!isOpen);
  };
  const checkTheme = () => {
    return localStorage.getItem('theme');
  };
  React.useEffect(() => {
    console.log('Theme in Navbar - ', theme);
    // const data = document.getElementById('theme-switch');
    // console.log(checkTheme());
    // themeChange(true);
    // // 👆 false parameter is required for react project
    // const theme = checkTheme();
    // if (theme === 'wireframe') {
    //   data?.setAttribute('data-theme', 'wireframe');
    //   setIsDark(false);
    // } else {
    //   data?.setAttribute('data-theme', 'dark');
    //   setIsDark(true);
    // }
  }, [theme]);

  // const themeChangeHandler = () => {
  //   const data = document.getElementById('theme-switch');
  //   const value = data?.getAttribute('data-theme');
  //   console.log(checkTheme());
  //   if (value === 'dark') {
  //     localStorage.setItem('theme', 'wireframe');
  //     data?.setAttribute('data-theme', 'wireframe');
  //     setIsDark(false);
  //   } else {
  //     localStorage.setItem('theme', 'dark');
  //     data?.setAttribute('data-theme', 'dark');
  //     setIsDark(true);
  //   }
  // };
  return (
    <header className="w-full flex items-center justify-center bg-base-200 border-2  border-black px-4 py-2">
      <Link className="mr-auto" to="/">
        <h1 className="text-3xl font-bold underline">Dev-Resource</h1>
      </Link>
      <div className=" hidden md:flex  md:justify-between md:items-center">
        <input type="checkbox" className="toggle mr-4" onChange={themeChangeHandler} checked={isDark} />
        <Link to="/create">
          <button className="btn btn-primary mr-2">Create</button>
        </Link>
        <button className="btn btn-primary mr-2">Import</button>
        <button className="btn btn-primary">Login/SignUp</button>
      </div>
      <button className="md:hidden btn btn-primary text-2xl relative" onClick={menuHandler}>
        {isOpen ? <CgClose /> : <CgMenu />}
      </button>
      {isOpen ? (
        <div className="absolute z-20 w-[95vw] h-[100vh] bg-transparent top-0 right-0" onClick={menuHandler}>
          <div className="absolute z-30 menu top-[80px] right-1 bg-base-200 p-2 border-2 flex flex-col items-center">
            <input type="checkbox" className="toggle mb-2" onChange={themeChangeHandler} checked={isDark} />
            <Link to="/create">
              <button className="btn btn-primary mb-2">Create</button>
            </Link>
            <button className="btn btn-primary mb-2">Import</button>
            <button className="btn btn-primary">Login/SignUp</button>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navbar;
