import * as React from 'react';
import ScreenWrapper from '../hoc/ScreenWrapper';

const Create = () => {
  return (
    <ScreenWrapper title="Create | dev-Resource">
        <div className="mt-10 mx-12">
          <p className="text-center text-2xl mb-8 underline underline-offset-2">Create a Bookmark</p>
          <form className="grid grid-cols-2 gap-4 ">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resource Image</span>
              </label>
              <input type="file" placeholder="Image" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resource Title</span>
              </label>
              <input type="text" placeholder="Title" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resource Description</span>
              </label>
              <input type="text" placeholder="Descripton" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resource Link</span>
              </label>
              <input type="text" placeholder="Link" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Resource Tag</span>
              </label>
              <select className="select select-bordered w-full max-w-xs">
                {/* <option disabled="disabled" selected="selected">
                  Choose your superpower
                </option> */}
                <option>HTML</option>
                <option>CSS</option>
                <option>Javascript</option>
                <option>Typescript</option>
                <option>Tailwind CSS</option>
                <option>React JS</option>
                <option>Next JS</option>
                <option>GitHub</option>
                <option>Git</option>
              </select>
            </div>
          </form>
        </div>
    </ScreenWrapper>
  );
};

export default Create;
