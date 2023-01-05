import React, { useContext, useState } from 'react';
import { userContext } from '../../App';


const Terms = () => {

    const [terms, setTerms] = useState(false);

    const items = useContext(userContext)

    return (
        <>
            <label htmlFor={items[4].name} label={items[4].label}> {items[4].label} </label>
            <input label={items[4].label} type={items[4].type} id={items[4].name} required={items[4].required} name={items[4].name} options={items[4].options} value={items[4].entry} onChange={(e) => setTerms(e.target.checked)} />
        </>
    );
}

export default Terms;
