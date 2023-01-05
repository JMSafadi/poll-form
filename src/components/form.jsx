import React, { useEffect, useContext, Fragment } from 'react';
import ItemForm from './itemForm';
import { Container, FormControl } from '@mui/material';
import { userContext } from '../App';


const Form = () => {

    const items = useContext(userContext)

    // function apiItems () {
    //     console.log(items.map(e => console.log(e)))
    // }

    // useEffect(() => {
    //     apiItems()
    //   }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        alert('El formulario se ha enviado')
    }

    return (
        <>
            <div className='container'>
            <h1 className='title'>Encuesta greydive</h1>
                <form className='form' onSubmit={handleSubmit}>
                {

                    items.map((e) => <ItemForm key={e.type} name={e.name} label={e.label} />)
                }
                </form>
            </div>
        </>
    );
}

export default Form;
