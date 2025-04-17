import React from 'react';

const AuctionForm = () => {
    const actionForm = (formData)=>{
        console.log(formData.get('name'));
        console.log(formData.get('email'));
        
    }

    return (
        <div>
            <form action={actionForm}>
                <input type="text" name='name' placeholder='Name'/>
                <br/>
                <input type="email" name="email" id="" placeholder='Email'/>
                <br/>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default AuctionForm;