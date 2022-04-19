import * as React from 'react';
import { ThemeProvider } from '../../Components/contexts/ThemeContext';
import Footer from '../../Components/Footer';
import Navbar from '../../Components/Navbar';
import { Head } from '../../Components/shared/Head';

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
