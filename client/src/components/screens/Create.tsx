import * as React from 'react';
import Footer from '../Footer';
import Navbar from '../Navbar';
import { Head } from '../shared/Head';

const Create = () => {
  return (
    <>
      <Head title="Home | Dev-Resources" />
      <Navbar />
      <div className="flex py-2 mb-auto">
        <p>Create a New Bookmark</p>
      </div>
      <Footer />
    </>
  );
};

export default Create;
