import * as React from 'react';
import { SiReact, SiTypescript, SiTailwindcss, SiGithub } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className="flex w-full p-4 mt-auto h-fit border-2 flex-col justify-center items-center">
      {/* <h1 className="text-center my-1">
        This is a Open Source Portal for developers to find best resources for a particular tech or topic. Accumilated
        by other developers which are tried and tested too. We also have many other blogs articles and much more on a
        wide range of technologies.
        <br />
        and we will keep adding more...
      </h1> */}
      <div className="flex flex-col md:flex-row items-center my-1">
        <h3 className="mx-2">
          Made with -
          <strong>
            <SiReact className="inline mx-1" />
            <SiTypescript className="inline mx-1" />
            <SiTailwindcss className="inline mx-1" />
          </strong>
        </h3>
        <h3 className="mx-2">
          Suggest an edit or Found a bug ? -{' '}
          <strong>
            <a href="https://github.com/WebVikasak-S/dev-resources" target="_blank" rel="noreferrer">
              <SiGithub className="inline mx-1" />
            </a>
          </strong>
        </h3>
      </div>
      <h1 className="flex justify-center my-1">
        All Rights Reserved <strong className="mx-1 text-2xl">&copy;</strong>{' '}
        <a href="https://github.com/WebVikasak-S" target="_blank" rel="noreferrer">
          WebVikasaks
        </a>
      </h1>
    </footer>
  );
};

export default Footer;
