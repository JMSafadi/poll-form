import React, { useEffect, useState } from 'react';
import { getDocs, doc, deleteDoc, getDoc, setDoc, collection, getFirestore } from 'firebase/firestore'
import appFirebase from '../credentials'

const Database = () => {
    const db = getFirestore(appFirebase)

    const [info, setInfo] = useState([]);

    const getLista = async () => {
        try {
            const querySnapshot = await getDocs(collection(db, `data`))
            const docs = []
            querySnapshot.forEach((doc) => {
                docs.push({...doc.data(), id:doc.id})
            })
            setInfo(docs)
            console.log(docs)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        getLista()
    }, []);

    return (
        <>
            {info.map((e) => {
                <h3 key={e.id}> Nombre: {e.full_name} </h3>
            })}
        </>
    );
}

export default Database;
