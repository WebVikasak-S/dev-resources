import React, { useState } from 'react'
import { withRouter, useHistory } from 'react-router-dom';
import { TextField, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import './Create.css'

export interface createvals{
    "date_added": string,
    "guid": string,
    "id": string,
    "name": string,
    "type": string,
    "url": string,
    "tags": object
  }

  const defaultvalues: createvals = {
    "date_added": "",
    "guid": "",
    "id": "",
    "name": "",
    "type": "",
    "url": "",
    "tags": []
  }

  const useStyles = makeStyles({
      textfield: {
          width: 300,
      }
  })

const Create: React.FC = () => {

    const classes = useStyles();

    const [values, setValues] = useState(defaultvalues as createvals);

    const history = useHistory();

    const handleChange = (event: any) => {
        event.persist();
        setValues(values => ({
            ...values,
            [event.target.name]: event.target.value
        }));
    }

    const handleSubmit = (event:any) => {
        event.persist();
        axios.post(`http://localhost:5000/bookmarks`, values).then(data => [
            history.goBack()
        ])
    }

    return (
        <div className='create_form'>

                <TextField
                    size='small'
                    id="standard-basic"
                    name='name'
                    label='Name'
                    type='text'
                    defaultValue={values.date_added}
                    className=''
                    variant='filled'
                    onChange={handleChange}
                />
                <TextField 
                    size='small'        
                    id=""
                    name='url'
                    label='URL'
                    type='text'
                    defaultValue={values.date_added}
                    className={classes.textfield}
                    variant='filled'
                    onChange={handleChange}
                />
                <TextField
                    size='small'            
                    id=""
                    name='type'
                    label='Type'
                    type='text'
                    defaultValue={values.date_added}
                    className=''
                    variant='filled'
                    onChange={handleChange}
                />
                <TextField
                    size='small'
                    id=""
                    name='tags'
                    label='Tag'
                    type='text'
                    defaultValue={values.date_added}
                    className=''
                    variant='filled'
                    onChange={handleChange}
                />
            <Button
                variant='contained'
                color='primary'
                size='medium'
                className=''
                onClick={handleSubmit}
            >
                Submit
            </Button>
        </div>
    )
}

export default withRouter(Create)
