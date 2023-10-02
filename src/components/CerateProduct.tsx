import React, {useState} from 'react';

const CerateProduct = () => {
    const [value, setValue] = useState('');

    const submitHandler = (event: React.FormEvent) => {
        event.preventDefault()
    }

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => { // Заменили React.KeyboardEvent на React.ChangeEvent
        setValue(event.target.value);
    }

    return (
        <form onSubmit={submitHandler}>
            <input
            type='text'
            onChange={changeHandler}
            value={value}
            className='border py-2 px-4 mb-2 w-full'
            placeholder='Enter product title..'/>
        <button 
        type="submit"
        className='py-2 px-4 border bg-yellow-400'>Create</button>
        </form>
    );
};

export default CerateProduct;