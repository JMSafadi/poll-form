import React, { useEffect, useState } from 'react';
import { getDocs, doc, deleteDoc, getDoc, setDoc, collection, getFirestore } from 'firebase/firestore'
import appFirebase from '../credentials'
import { DataGrid } from '@mui/x-data-grid';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Database = () => {
    const db = getFirestore(appFirebase)

    const [info, setInfo] = useState([]);

    const getDatabase = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, `data`))
            const docs = []
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id})
            })
            setInfo(docs)
        } catch (error) {
            console.log(error)
        }
    }

    const termsRow = () => {
        info.map((e) => e.terms_and_conditions = 'Si')
    }

    useEffect(() => {
        getDatabase()
        termsRow()
    }, [info]);

    const columns = [
        { field: 'full_name', headerName: 'Nombre completo', width: 150 },
        { field: 'email', headerName: 'Correo electronico', width: 260 },
        { field: 'birth_date', headerName: 'Fecha de nacimiento', width: 130 },
        { field: 'country_of_origin', headerName: 'Pais de origen', width: 150 },
        { field: 'terms_and_conditions', headerName: '¿Acepta terminos?', width: 150 },
    ]

    return (
        <div className='db-container'>
            <h1 className='title'>Respuestas</h1>
            <div className='db-card'>
                    <DataGrid
                        rows={info}
                        columns={columns}
                        pageSize={10}
                        rowsPerPageOptions={[5]}
                        sx={{width:'90%'}}
                    >
                    </DataGrid>
            </div>
            <Link to='/' >
                <Button
                    sx={{backgroundColor:'white',
                        margin:'26px',
                        '&:hover': {
                            backgroundColor: '#2E77FF',
                            color: 'white'
                        }
                    }}
                    variant="outlined"
                    startIcon={<ArrowCircleLeftIcon />}
                    >
                    Volver
                </Button>
            </Link>
        </div>
    );  
}

export default Database;
