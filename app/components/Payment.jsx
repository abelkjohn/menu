"use client"
import React from "react";

export default function Payment(){

    function thankyou(){
        if (document.getElementById('name').value && document.getElementById('card-name').value && document.getElementById('cvv').value )
        location.reload()
    }

    return (
        <div id='card' className="hidden flex-col border-2 gap-4 border-color">
            <h3>Enter Card Details:</h3>
                <input id='name' type='text' placeholder="Enter your name" required></input>
                <input id="card-name" type='text' placeholder="Enter card number required"></input>
                <input id="cvv" type='text' placeholder="Enter CVV" required></input>
            <button className="button-color text-white p-3 rounded-sm" id='pay' onClick={thankyou}>Pay</button>            
        </div>
    )
} 