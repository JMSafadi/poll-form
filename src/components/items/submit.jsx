import { FormControl, Input, InputLabel } from '@mui/material';
import React, { useContext } from 'react';
import { userContext } from '../../App';


const Submit = () => {

    const items = useContext(userContext)


    return (
        <FormControl>
            <InputLabel htmlFor={items[5].name}/>
            <Input type={items[5].type} id={items[5].name} required={items[5].required} name={items[5].name} options={items[5].options} value={items[5].entry} />
        </FormControl>
    );
}

export default Submit;
