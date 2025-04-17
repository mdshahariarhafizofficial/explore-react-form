import React from 'react';

const SimpleForm = () => {

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        
    }

    return (
        <div className='my-10'>
            <form onSubmit={handleSubmit}>
                <input name='name' className='bg-gray-700 px-5 py-2 rounded-lg mb-5' type="text" placeholder='Enter Your Name' />
                <br></br>
                <input className='bg-gray-700 px-5 py-2 rounded-lg mb-5' type="email" name="email" id="" placeholder='Enter your email address' />
                <br></br>
                <input className='cursor-pointer bg-gray-700 px-5 py-2 rounded-lg mb-5' type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;<h1>test</h1>