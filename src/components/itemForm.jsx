import { FormControl, Input, InputLabel } from '@mui/material';
import React, { useState, useContext } from 'react';
import { userContext } from '../App';
import { getFirestore, collection, addDoc, getDocs, doc, deleteDoc, getDoc, setDoc } from 'firebase/firestore'
import appFirebase from '../credentials'

const ItemForm = () => {
    const db = getFirestore(appFirebase)

    const items = useContext(userContext)
    const countries = useContext(userContext)

    const options = countries[3].options

    const initialValues = {
        full_name: '',
        email: '',
        birth_date: '',
        country_of_origin: '',
        terms_and_conditions: false,
    }

    const [data, setData] = useState(initialValues)

    const getData = (e) => {
        setData({...data,
            [e.target.name] : e.target.value
        })
        console.log(data.country_of_origin)
    }

    const getChecked = (e) => {
        setData({...data,
            [e.target.name] : e.target.checked
        })
    }
    
    const saveData = async (e) => {
        e.preventDefault()
        console.log(data)

        try {
            await addDoc(collection(db, `data`), {
                ...data
            })
        } catch (error) {
            console.log(error)
        }
        setData({...initialValues})
        alert('Formulario enviado!')
    }

    return (
        <form className='form' onSubmit={saveData}>
                <FormControl>
                    <InputLabel> {items[0].label} </InputLabel>
                    <Input type={items[0].type} required={items[0].required} name='full_name' value={data.full_name} onChange={getData}/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor={items[1].name}> {items[1].label} </InputLabel>
                    <Input type={items[1].type} id={items[1].name} required={items[1].required} name={items[1].name} value={data.email} onChange={getData}/>
                </FormControl>
                <FormControl>
                    <InputLabel htmlFor={items[2].name} /> {items[2].label} <label/>
                    <Input type={items[2].type} id={items[2].name} required={items[2].required} name={items[2].name} value={data.birth_date} onChange={getData} />
                </FormControl>
                <FormControl>
                    <label htmlFor={items[3].name}> {items[3].label} </label>
                    <select type={items[3].type} id={items[3].name} required={items[3].required} name={items[3].name} value={data.country_of_origin} onChange={getData}>
                        {
                            options.map((e) => <option key={e.label} value={e.label}> {e.label} </option>)
                        }
                    </select>
                </FormControl>
                <FormControl>
                    <label htmlFor={items[4].name}> {items[4].label} </label>
                    <input label={items[4].label} type={items[4].type} id={items[4].name} required={items[4].required} name={items[4].name} value={data.terms_and_conditions} onChange={getChecked}/>
                </FormControl>
            <button type={items[5].type} variant='contained'>
                {items[5].label}
            </button>
        </form>
    )
}

export default ItemForm;
