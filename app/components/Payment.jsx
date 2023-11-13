import React from "react";

export default function Payment(){
    return (
        <div className=''>
            <h3>Enter Card Details</h3>
            <div className='details'>
                <input id='name' type='text' placeholder="Enter your name" required></input>
                <input id="card-name" type='text' placeholder="Enter card number"></input>
                <input id="cvv" type='text' placeholder="Enter CVV"></input>
            </div>
            <button className='continue' id='pay'>Pay</button>            
        </div>
    )
} 