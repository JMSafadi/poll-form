import React, { useEffect } from 'react';
// import apiItems from '../api/api'
import ItemForm from './itemForm';
import { items } from '../api/db.json'

const Form = () => {

    function apiItems () {
        console.log(items.map(e => console.log(e)))
    }

    useEffect(() => {
        apiItems()
      }, [])

    return (
        <form className='form'>
            {

                items.map((e) => <ItemForm type={e.type} label={e.label} name={e.name} required={e.required} options={e.options} />)

            }
        </form>
    );
}

export default Form;
