//dispaly content in calcscreen
const displaycontent = (content)=>{
    calcScreen.value += content
}

// clear content in calcscreen
const clearallcontent = ()=>{
    calcScreen.value = ''
    calcScreen.placeholder = '0'
}

//show result in calcscreen
const showresult = ()=>{
    try{
        calcScreen.value = eval(calcScreen.value)
    }
    catch{
        // catch(err){
        // console.log(err); display error in console
        // }
        calcScreen.value = ''
        calcScreen.placeholder = 'Invalid expression'
    }
    finally{
        console.log("Task completed");
    }
}

//remove last
const removelast = ()=>{
    calcScreen.value = calcScreen.value.slice(0,-1)
}