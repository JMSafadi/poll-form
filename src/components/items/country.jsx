import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';
import React, { useContext, useState } from 'react';
import { userContext } from '../../App';


const Country = () => {

    const [country, setCountry] = useState('');
    const items = useContext(userContext)
    const options = items[3].options

    // const mapCountryItem = () => {
        
    //     options.map((e) => <MenuItem> {e.label} </MenuItem>)
    
    // }

    return (
            <>
                <label htmlFor={items[3].name}> {items[3].label} </label>
                <select type={items[3].type} id={items[3].name} required={items[3].required} name={items[3].name} defaultValue='' onChange={(e) => setCountry(e.target.value)}>
                    {
                        options.map((e) => <option key={e.label} value={e.value}> {e.label} </option>)
                    }
                </select>
            </>
    );
}

export default Country;
