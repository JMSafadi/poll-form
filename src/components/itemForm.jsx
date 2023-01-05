import { Checkbox, FormControl, Grid, Input, InputLabel } from '@mui/material';
import React, { useState, useContext } from 'react';
import { userContext } from '../App';
import Country from './items/country';
import Date from './items/date';
import Email from './items/email';
import Name from './items/name';
import Submit from './items/submit';
import Terms from './items/terms';

const ItemForm = ({ name, label }) => {


    return (
        <div>
            {
                name === 'full_name' ?
                <Name/>
                : null
            }
            {
                name === 'email' ?
                <Email/>
                : null
            }
            {
                name === 'birth_date' ?
                <Date/>
                : null
            }
            {
                name === 'country_of_origin' ?
                <Country/>
                : null
            }
            {
                name === 'terms_and_conditions' ?
                <Terms/>
                : null
            }
            {
                label === 'Enviar' ?
                <Submit/>
                : null
            }
        </div>
    );
}

export default ItemForm;
