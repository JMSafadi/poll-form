import { Button, FormControl, Input, InputLabel } from '@mui/material';
import React, { useState, useContext } from 'react';
import { userContext } from '../App';
import { getFirestore, collection, addDoc } from 'firebase/firestore'
import SendIcon from '@mui/icons-material/Send'
import appFirebase from '../credentials'
import { Snackbar, Stack } from '@mui/material';
import Alert from '@mui/material/Alert';
import { Link } from 'react-router-dom';

const formItems = () => {
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
    const [open, setOpen] = useState(false);

    const getData = (e) => {
        setData({...data,
            [e.target.name] : e.target.value
        })
    }

    const getChecked = (e) => {
        setData({...data,
            [e.target.name] : e.target.checked
        })
    }
    
    const saveData = async (e) => {
        e.preventDefault()

        try {
            await addDoc(collection(db, `data`), {
                ...data
            })
        } catch (error) {
            console.log(error)
        }
        setData({...initialValues})
        setOpen(true)
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
                    <label htmlFor={items[3].name} className='select-label'> {items[3].label} </label>
                    <select type={items[3].type} id={items[3].name} required={items[3].required} name={items[3].name} value={data.country_of_origin} onChange={getData}>
                        <option select='true' > </option>
                        {
                            options.map((e) => <option key={e.label} value={e.name} > {e.label} </option>)
                        }
                    </select>
                </FormControl>
                <FormControl sx={{display:'flex', flexDirection:'row'}}>
                    <label htmlFor={items[4].name}> {items[4].label} </label>
                    <input label={items[4].label} type={items[4].type} id={items[4].name} required={items[4].required} name={items[4].name} value={data.terms_and_conditions} onChange={getChecked}/>
                </FormControl>
            <Button className='btn' sx={{backgroundColor:'#2D7AFF'}} type={items[5].type} variant='contained' endIcon={<SendIcon/>} >
                {items[5].label}
            </Button>

            <Snackbar open={open} autoHideDuration={10000} onClose={() => setOpen(false)} >
            <Stack spacing={2}>
                <Alert sx={{fontSize:'22px',
                            display:'flex',
                            alignItems:'center', 
                            justifyContent:'center', 
                            height:'100px',
                            backgroundColor:'#2E77FF',
                            position:'relative'
                            }} 
                            variant="filled"
                            severity="success"
                            >
                            Formulario enviado!
                        <Link to='/respuestas'>
                            <Button sx={{backgroundColor:'white', color:'black', margin:'20px'}} variant='contained'>
                                Ver respuestas
                            </Button>
                        </Link>
                </Alert>
            </Stack>
            </Snackbar>
        </form>
    )
}

export default formItems;
