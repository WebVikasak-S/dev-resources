import * as React from 'react';

const Navbar = () => {
  const [isDark, setIsDark] = React.useState(true);

  const themeChangeHandler = () => {};
  return (
    <header className="w-full flex items-center justify-center bg-base-200 border-2  border-black px-4 py-2">
      <h1 className="text-black text-3xl font-bold mr-auto underline">Dev-Resource</h1>
      <div className="flex justify-between items-center">
        <input type="checkbox" className="toggle mr-4" onChange={themeChangeHandler} />
        <button className="btn btn-primary mr-2">Create</button>
        <button className="btn btn-primary mr-2">Import</button>
        <button className="btn btn-primary">Login/SignUp</button>
      </div>
    </header>
  );
};

export default Navbar;
