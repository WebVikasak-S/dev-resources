import * as React from 'react';
import { ThemeProvider } from '../contexts/ThemeContext';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Head } from '../shared/Head';

interface IScreenWrapper {
  children: React.ReactChild;
  title: string;
}

const ScreenWrapper = ({ children, title }: IScreenWrapper) => {
  return (
    <ThemeProvider>
      <>
        <Head title={title} />
        <Navbar />
        {children}
        <Footer />
      </>
    </ThemeProvider>
  );
};

export default ScreenWrapper;
