import React, { useState } from 'react';

function Form(){

    let [data, setData] = useState({});

    function handleSubmit(e){
        e.preventDefault();
        console.log(data);
    }


    return(
        <form onSubmit={handleSubmit}>
            <p>Name<input type='text' onChange={(e)=>{setData({ ...data, ['name']: e.target.value })}} /></p>
            <p>Email<input type='email'  onChange={(e)=>{setData({ ...data, ['email']: e.target.value})}} /></p>
            <p>Password<input type='password'  onChange={(e)=>{setData({ ...data, ['password']: e.target.value})}} /></p>
            <button type='submit' >Submit</button>
        </form>
    )
}

export default Form;