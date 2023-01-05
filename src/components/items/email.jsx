import { FormControl, Input, InputLabel } from '@mui/material';
import React, { useContext, useState } from 'react';
import { userContext } from '../../App';


const Email = () => {

    const [email, setEmail] = useState('');

    const items = useContext(userContext)


    return (
        <FormControl>
            <InputLabel htmlFor={items[1].name}> {items[1].label} </InputLabel>
            <Input type={items[1].type} id={items[1].name} required={items[1].required} name={items[1].name} options={items[1].options} value={items[1].entry} onChange={(e) => setEmail(e.target.value)} />
        </FormControl>
    );
}

export default Email;
