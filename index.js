import {generateRandomPrice} from './data.js'

let prevPrice=null
function updateStock(){
    const stockData=generateRandomPrice()
    updatePage(stockData)
}
updateStock()
setInterval(updateStock,5000);



function updatePage(stockData){
    const stockDisplayName=document.getElementById("company-name")
    const stockDisplaySymbol=document.getElementById("symbol")
    const stockDisplayPrice=document.getElementById("price-val")
    const stockDisplayPriceIcon=document.getElementById("price-sym")
    const stockDisplayTime=document.getElementById("time")

    const {name,sym,price,time}=stockData
    stockDisplayName.innerText = name
    stockDisplaySymbol.innerText = sym
    stockDisplayPrice.innerText = price
    stockDisplayTime.innerText = time
    let icon=document.getElementById("price-icon")

    if(prevPrice===null){
        icon.src="./images/triangle-equal.png"
        icon='➡'
    }
    else if(prevPrice>price){
        icon.src="./images/triangle-down.png"
        icon='⬇'
    }
    else if(prevPrice<price){
        icon.src="./images/triangle-up.png"
        icon='⬆'
    }
    else{
        icon.src="./images/triangle-equal.png"
        icon='➡'
    }
    prevPrice=price
    
}