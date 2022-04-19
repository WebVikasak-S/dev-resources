import * as React from 'react';
import ScreenWrapper from '../hoc/ScreenWrapper';

const About = () => {
  return (
    <ScreenWrapper title="About | Dev-Resources">
      <div>
        <h1 className="text-center my-1">
          This is a Open Source Portal for developers to find best resources for a particular tech or topic. Accumilated
          by other developers which are tried and tested too. We also have many other blogs articles and much more on a
          wide range of technologies.
          <br />
          and we will keep adding more...
        </h1>
      </div>
    </ScreenWrapper>
  );
};

export default About;
