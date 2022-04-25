import React from 'react';

const MyInput = ({id, name, className, label, value, onChange, readonly}) => {

    return (
        <>
        <label htmlFor={id}>
            <input 
                type="number" 
                id={id} 
                name={name}
                value={value} 
                className={className} 
                placeholder={label} 
                readOnly={!!readonly}
                onChange={(e) => onChange(e.target)}/>
            <span>{label}</span>
        </label>
        </>
    );
  }
  
  export default MyInput;