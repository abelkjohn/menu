"use client"

import React from "react";
import { menuArray } from "../data"
import { nanoid } from 'nanoid'



export default function Items(){
    const [ itemsArray, setItemsArray ] = React.useState([])
    const [ totalPrice, setTotalPrice ] = React.useState([])

    React.useEffect(() => {
        setTotalPrice(itemsArray.map(i => i[2]).reduce((a,c) => a + parseInt(c), null))
    }, [itemsArray])

    function paymentDetails(){
        document.getElementById("card").style.display = 'flex'
    }

    return (
        <div>
            <div id="items">
            {menuArray.map(i => {
                function getId(e){
                    setItemsArray(prev => [...prev, [nanoid(), e.target.dataset.name, e.target.dataset.price]])
                    console.log(itemsArray)
                }
            return (
                    <div key={i.id} id={i.id} className="flex items-center m-4 justify-between">
                        <div className="flex justify-between w-full items-center p-4">
                            <div className="flex items-center gap-1">
                                <p className="text-6xl">{i.emoji}</p>
                                <div className="flex flex-start flex-col">
                                    <h1 className="text-xl font-bold">{i.name}</h1>
                                    <p>{i.ingredients.map((e, i, a) => {
                                        return a.length - 1 === i ?  e : e + ", "
                                    }
                                    )}</p>
                                    <p>${i.price}</p>
                                </div>
                            </div>
                            <div className="text-3xl" id={i.id} data-price={i.price} data-name={i.name} onClick={e => getId(e)}>+</div>
                        </div>
                    </div>
            )
        })}
            </div>
            {itemsArray.length > 0 ? <div  id="bill">
                <h3 className="text-xl">Your Order:</h3>
                <div className="flex flex-col p-2 pr-0">{
                    itemsArray.map(i => {
                        function deleteItem(id){
                            setItemsArray(prev => prev.filter(i => i[0] !== id))
                        }
                        return (
                            <div key={i[0]} className="flex gap-3 justify-between ">
                                <div className="flex gap-2">
                                    <p className="text-lg">{i[1]}</p>
                                    <p onClick={e => deleteItem(i[0])} className="text-gray-400 self-end">remove</p>
                                </div>
                                    <p className="text-lg">{i[2]}</p>
                            </div>
                        )
                    })
                }</div><div>
                    <div className='bill-items'>
                        <h4 id='center-text' className="text-lg">Total Price:</h4>
                        <p id="total-price" className="text-lg">{totalPrice}</p>
                    </div>
                </div>
                <button className='continue mt-2' id='continue' type="submit" onClick={paymentDetails}>Complete Order</button>
          </div> : ""}
        </div>
    )
}