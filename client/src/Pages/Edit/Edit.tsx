import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Edit.css";
import { withRouter, useHistory, useLocation } from "react-router-dom";
import { TextField, Button } from "@material-ui/core";

export interface editvals {
  date_added: string;
  guid: string;
  id: string;
  name: string;
  type: string;
  url: string;
  tags: object;
}

const defaultvalues: editvals = {
  date_added: "",
  guid: "",
  id: "",
  name: "",
  type: "",
  url: "",
  tags: [],
};

const Edit: React.FC = (props: any) => {
  const [values, setValues] = useState<editvals>(defaultvalues);
  const location = useLocation();
  const { data } = props.location.state;
  const history = useHistory();
  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const bookmarks = await axios.get(
      `http://localhost:5000/bookmarks/${data}`
    );
    await setValues(bookmarks.data);
  };

  const handleChange = (event: any) => {
    event.persist();
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event: any) => {
    event.persist();
    axios
      .patch(`http://localhost:5000/bookmarks/${data}`, values)
      .then((data) => [history.goBack()]);
  };

  return (
    <div className="create_form">
        <TextField
          size='small'
          id=""
          name="name"
          value={values.name}
          label="Name"
          type="text"
          className=""
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          size='small'
          id=""
          name="type"
          value={values.type}
          label="Type"
          type="text"
          className=""
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          size='small'
          id=""
          name="url"
          value={values.url}
          label="URL"
          type="text"
          className=""
          variant="filled"
          onChange={handleChange}
        />
        <TextField
          size='small'
          id=""
          name="tags"
          value={values.tags}
          label="Tag"
          type="text"
          className=""
          variant="filled"
          onChange={handleChange}
        /><br/>
      <Button
        variant="contained"
        color="primary"
        size="medium"
        className=""
        onClick={handleSubmit}
      >
        Submit
      </Button>
    </div>
  );
};

export default withRouter(Edit);
