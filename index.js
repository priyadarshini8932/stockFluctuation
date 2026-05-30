import {generateRandomPrice} from './data.js'


function updateStock(){
    const stockData=generateRandomPrice()
    updatePage(stockData)
}
updateStock()
setInterval(updateStock,5000);

let prevPrice=null

function updatePage(stockData){
    const Pricename=document.getElementById("company-name")
    const symbol=document.getElementById("symbol")
    const priceVal=document.getElementById("price-val")
    const priceIcon=document.getElementById("price-sym")
    const timePrice=document.getElementById("time")

    const {name,sym,price,time}=stockData
    Pricename.innerText=name;
    symbol.innerText=symbol
    priceVal.innerText=price
    timePrice.innerText=time
}