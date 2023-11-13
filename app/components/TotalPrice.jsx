import React from "react";

export default function TotalPrice(){
    return (
        <div className="" id="bill">
                <h3>Your Order</h3>
                <div id="bill-list"></div><div>
                    <div className='bill-items'>
                        <h4 id='center-text'>Total Price:</h4>
                        <p id="total-price"></p>
                    </div>
                </div>
                <button className='continue' id='continue' type="submit">Complete Order</button>
          </div>
    )
}