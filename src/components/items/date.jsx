import { FormControl, Input, InputLabel } from '@mui/material';
import React, { useContext, useState } from 'react';
import { userContext } from '../../App';


const Date = () => {

    const [date, setDate] = useState('');

    const items = useContext(userContext)


    return (
        <FormControl>
            <InputLabel htmlFor={items[2].name} />
            <Input type={items[2].type} id={items[2].name} required={items[2].required} name={items[2].name} options={items[2].options} value={items[2].entry} onChange={(e) => setDate(e.target.value)} />
        </FormControl>
    );
}

export default Date;
