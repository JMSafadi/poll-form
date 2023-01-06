import React, { useContext } from 'react';
import ItemForm from './itemForm';
import { userContext } from '../App';


const Form = () => {
    const items = useContext(userContext)

    return (
        <div className='container'>
            <h1 className='title'>Encuesta greydive</h1>
            <ItemForm/>
        </div>
    );
}

export default Form;
