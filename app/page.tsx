import { menuArray } from './data.js'
import Header from './components/Header.jsx' 
import Items from "./components/MenuItems.jsx"
import TotalPrice from "./components/TotalPrice.jsx"
import Payment from "./components/Payment.jsx"

export default function Home() {

  return (
      <div>
        <Header />
        <Items />
        <TotalPrice />
        <Payment />
        <div id='finally'>
        </div>
      </div>
    )
}




// const items = document.getElementById('items')
// const bill = document.getElementById('bill')
// const billList = document.getElementById('bill-list')
// const removeBtn = document.getElementById('remove-btn')
// const payMe = document.getElementById('continue')
// const paymentDetails = document.querySelector('.payment')
// const nameInput = document.getElementById('name')
// const cardNameInput = document.getElementById('card-name')
// const cvv = document.getElementById('cvv')
// const finalPay = document.getElementById('pay')
// const finaly = document.getElementById('finally')
// const item = []


// let totalPrice = 0 
// let price = document.getElementById('total-price')


// items.addEventListener('click', function(e){
//     if (e.target.classList == 'addItemBtn') {
//         const targetObject =  findObject(e.target.id)
//         bill.classList.remove('hidden')
//         renderBill(targetObject)
//         finaly.classList.add('hidden')
//     }
// })

// bill.addEventListener('click', function(e){
//     if (e.target.dataset.price){
//         totalPrice -= Number(e.target.dataset.price)
//         price.innerText = `\$${totalPrice}`
//         removeItem(e.target.id)
//         if (totalPrice === 0){
//             bill.classList.add('hidden')
//         }
//     }
// })
// payMe.addEventListener('click', function(){
//     nameInput.value = ""
//     cardNameInput.value = ""
//     cvv.value = ""
//     paymentDetails.style.display = 'inline'
// })

// finalPay.addEventListener('click', function(){
//     if (nameInput.value){
//         paymentDetails.style.display = 'none'
//         bill.classList.add('hidden')
//         billList.innerHTML = ''
//         totalPrice = 0
//         finaly.classList.remove('hidden')
//         finaly.innerHTML = `
//         <h3>Thanks, ${nameInput.value}! Your order is on its way!</h3>
//         `
//     }
  
// })

// iterate()

// function iterate(){
//     menuArray.forEach(function(foodItem){
//         render(foodItem)        
//     })
// }


// function render(item){
//     let ingredients = ''
//     item.ingredients.forEach(function(i, index){
//         if (index === 0){
//             ingredients += i
//         } else {
//             ingredients +=  ", " + i
//         }
//     })
//     items.innerHTML += `
//             <div class='main'>
//                 <div>
//                     <p id='icon'>${item.emoji}</p>
//                 </div>
//                 <div class='no-click' id='desc'>
//                     <h3>${item.name}</h3>
//                     <p>${ingredients}</p>
//                     <p>\$${item.price}</p>
//                 </div>
//                 <button class='addItemBtn' id='${item.id}'>+</button>
//             </div>
//                 `
// }

// function findObject(itemId){
//     return menuArray.filter(function(e){
//         return e.id == itemId
//     })[0]
    
// }

// function renderBill(obj){
//     let uuid 
//     totalPrice += obj.price
//     price.innerText = `\$${totalPrice}`
//     billList.innerHTML += ` 
//                             <div class='bill-items' id='${uuid}'>
//                             <div class='bill-desc'>
//                                 <p>${obj.name}</p>
//                                 <button class='remove-btn' data-price='${obj.price}' id='${uuid}'>remove</button>
//                             </div>
//                             <p>\$${obj.price}</p>
//                             </div>
//                             `
// }

// function removeItem(uuid){
//     let itemToRemove = document.getElementById(`${uuid}`)
//     itemToRemove.classList.add('hidden')
// }