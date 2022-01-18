import * as React from 'react';
import { TagContext } from './TagContext';
import { themeChange } from 'theme-change';

interface IThemeContext {
  theme: string;
  themeChangeHandler: () => void;
  isDark: boolean;
}

interface IThemeProvider {
  children: React.ReactChild;
}

export const ThemeContext = React.createContext({} as IThemeContext);

export const ThemeProvider = ({ children }: IThemeProvider) => {
  const [isDark, setIsDark] = React.useState(false);
  const [theme, setTheme] = React.useState('');
  const checkTheme = () => {
    return localStorage.getItem('theme');
  };
  React.useEffect(() => {
    const data = document.getElementById('theme-switch');
    console.log(checkTheme());
    themeChange(true);
    // 👆 false parameter is required for react project
    setTheme(checkTheme());
    if (theme === 'wireframe') {
      data?.setAttribute('data-theme', 'wireframe');
      setIsDark(false);
    } else {
      data?.setAttribute('data-theme', 'dark');
      setIsDark(true);
    }
  }, []);

  const themeChangeHandler = () => {
    const data = document.getElementById('theme-switch');
    const value = data?.getAttribute('data-theme');
    console.log(checkTheme());
    if (value === 'dark') {
      localStorage.setItem('theme', 'wireframe');
      data?.setAttribute('data-theme', 'wireframe');
      setIsDark(false);
    } else {
      localStorage.setItem('theme', 'dark');
      data?.setAttribute('data-theme', 'dark');
      setIsDark(true);
    }
  };

  return <ThemeContext.Provider value={{ theme, themeChangeHandler, isDark }}>{children}</ThemeContext.Provider>;
};
