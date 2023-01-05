import React from 'react';

const ItemForm = ({ type, label, name, required, options }) => {
    return (
        <>
            <label> {label} </label>
            <input type={type} label={label} required={required} name={name} options={options}/>
        </>
    );
}

export default ItemForm;
