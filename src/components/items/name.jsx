import { FormControl, Input, InputLabel } from '@mui/material';
import React, { useContext, useState } from 'react';
import { userContext } from '../../App';


const Name = () => {

    const [name, setName] = useState('');

    const items = useContext(userContext)
    // console.log(items)

    return (
        <FormControl>
            <InputLabel htmlFor={items[0].name}> {items[0].label} </InputLabel>
            <Input type={items[0].type} id={items[0].name} required={items[0].required} name={items[0].name} options={items[0].options} value={items[0].entry} onChange={(e) => setName(e.target.value)} />
        </FormControl>
    );
}

export default Name;
