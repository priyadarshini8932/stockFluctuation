function generateRandomPrice(){
   
    return{
        name:'Nexora Technologies',
        sym:'NXT',
        price:(Math.random()*3).toFixed(2),
        time:new Date().toLocaleTimeString()
    }
}

export {generateRandomPrice};