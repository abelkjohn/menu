import React from "react";


export default function TotalPrice({array, onArrayChange}){
    const [ items, setItems ] = React.useState([])
    const [ totalPrice, setTotalPrice ] = React.useState([])
    
    React.useEffect(() => {
        setItems(array)
    }, [array])

    React.useEffect(() => {
        setTotalPrice(items.map(i => i[2]).reduce((a,c) => a + parseInt(c), null))
    }, [items])

    return (
        <div className="" id="bill">
                <h3>Your Order</h3>
                <div className="flex flex-col pl-2">{
                    items.map(i => {
                        function deleteItem(id){
                            setItems(prev => prev.filter(i => i[0] !== id))
                            onArrayChange(items)
                        }
                        return (
                            <div key={i[0]} className="flex gap-3 justify-between ">
                                <div className="flex gap-2">
                                    <p className="text-lg">{i[1]}</p>
                                    <p onClick={e => deleteItem(i[0])} className="text-gray-400 self-end">remove</p>
                                </div>
                                    <p>{i[2]}</p>
                            </div>
                        )
                    })
                }</div><div>
                    <div className='bill-items'>
                        <h4 id='center-text'>Total Price:</h4>
                        <p id="total-price">{totalPrice}</p>
                    </div>
                </div>
                <button className='continue' id='continue' type="submit">Complete Order</button>
          </div>
    )
}