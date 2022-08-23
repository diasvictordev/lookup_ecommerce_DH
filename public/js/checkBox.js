const check1 = document.querySelector("#brand1")
const check2 = document.querySelector("#brand2")
const check3 = document.querySelector("#brand3")
const check4 = document.querySelector("#brand4")

const check5 = document.querySelector(".brand1")
const check6 = document.querySelector(".brand2")
const check7 = document.querySelector(".brand3")
const check8 = document.querySelector(".brand4")


function checkBox(){
    if(check1.checked){
        check6.style.display = "none"
        check7.style.display = "none"
        check8.style.display = "none"
    }if(!check1.checked){
        check6.style.display = "block"
        check7.style.display = "block"
        check8.style.display = "block"
    } if(check2.checked && !check1.checked){
        check5.style.display = "none"
        check7.style.display = "none"
        check8.style.display = "none"
    }if(!check2.checked && !check1.checked){
        check5.style.display = "block"
        check7.style.display = "block"
        check8.style.display = "block"
    }if(check3.checked && !check1.checked && !check2.checked){
        check5.style.display = "none"
        check6.style.display = "none"
        check8.style.display = "none"
    }if(!check3.checked && !check1.checked && !check2.checked){
        check5.style.display = "block"
        check6.style.display = "block"
        check8.style.display = "block"
}if(check4.checked && !check1.checked && !check2.checked && !check3.checked){
    check5.style.display = "none"
    check6.style.display = "none"
    check7.style.display = "none"
}if(!check4.checked && !check1.checked && !check2.checked && !check3.checked){
    check5.style.display = "block"
    check6.style.display = "block"
    check7.style.display = "block"
}
}

const priceUp = document.querySelector("#priceUp")
const priceDown = document.querySelector("#priceDown")
const orderA = document.querySelector("#orderA")
const orderZ = document.querySelector("#orderZ")
const priceUpClass = document.querySelector(".priceUp")
const priceDownClass = document.querySelector(".priceDown")
const orderAClass = document.querySelector(".orderA")
const orderZClass = document.querySelector(".orderZ")


function order(){
    if(priceUp.checked){
        priceDownClass.style.display = "none"
        orderAClass.style.display = "none"
        orderZClass.style.display = "none"
    }if(!priceUp.checked){
        priceDownClass.style.display = "block"
        orderAClass.style.display = "block"
        orderZClass.style.display = "block"
    } if(priceDown.checked && !priceUp.checked){
        priceUpClass.style.display = "none"
        orderAClass.style.display = "none"
        orderZClass.style.display = "none"
    }if(!priceDown.checked && !priceUp.checked){
        priceUpClass.style.display = "block"
        orderAClass.style.display = "block"
        orderZClass.style.display = "block"
    }if(orderA.checked && !priceUp.checked && !priceDown.checked){
        orderZClass.style.display = "none"
        priceDownClass.style.display = "none"
        priceUpClass.style.display = "none"
    }if(!orderA.checked && !priceUp.checked && !priceDown.checked){
        priceUpClass.style.display = "block"
        priceDownClass.style.display = "block"
        orderZClass.style.display = "block"
}if(orderZ.checked && !priceUp.checked && !priceDown.checked && !orderA.checked){
    priceUpClass.style.display = "none"
    priceDownClass.style.display = "none"
    orderAClass.style.display = "none"
}if(!orderZ.checked && !priceDown.checked && !priceUp.checked && !orderA.checked){
    priceUpClass.style.display = "block"
    priceDownClass.style.display = "block"
    orderAClass.style.display = "block"
}
}

const value1 = document.querySelector("#value1")
const value2 = document.querySelector("#value2")
const value3 = document.querySelector("#value3")
const value4 = document.querySelector("#value4")
const value5 = document.querySelector("#value5")

const value1Class = document.querySelector(".value1")
const value2Class = document.querySelector(".value2")
const value3Class = document.querySelector(".value3")
const value4Class = document.querySelector(".value4")
const value5Class = document.querySelector(".value5")

function valueCheck(){
    if(value1.checked){
        value2Class.style.display = "none"
        value3Class.style.display = "none"
        value4Class.style.display = "none"
        value5Class.style.display = "none"
    }if(!value1.checked){
        value2Class.style.display = "block"
        value3Class.style.display = "block"
        value4Class.style.display = "block"
        value5Class.style.display = "block"
    } if(value2.checked){
        value1Class.style.display = "none"
        value3Class.style.display = "none"
        value4Class.style.display = "none"
        value5Class.style.display = "none"
    }if(!value2.checked && !value1.checked){
        value1Class.style.display = "block"
        value3Class.style.display = "block"
        value4Class.style.display = "block"
        value5Class.style.display = "block"
    }if(value3.checked){
        value1Class.style.display = "none"
        value2Class.style.display = "none"
        value4Class.style.display = "none"
        value5Class.style.display = "none"
    }if(!value3.checked && !value2.checked && !value1.checked){
        value1Class.style.display = "block"
        value2Class.style.display = "block"
        value4Class.style.display = "block"
        value5Class.style.display = "block"
}if(value4.checked){
    value1Class.style.display = "none"
    value2Class.style.display = "none"
    value3Class.style.display = "none"
    value5Class.style.display = "none"
}if(!value4.checked && !value1.checked && !value2.checked && !value3.checked){
    value1Class.style.display = "block"
    value2Class.style.display = "block"
    value3Class.style.display = "block"
    value5Class.style.display = "block"
}if(value5.checked){
    value1Class.style.display = "none"
    value2Class.style.display = "none"
    value3Class.style.display = "none"
    value4Class.style.display = "none"
}if(!value5.checked && !value1.checked && !value2.checked && !value3.checked && !value4.checked){
    value1Class.style.display = "block"
    value2Class.style.display = "block"
    value3Class.style.display = "block"
    value4Class.style.display = "block"
}
}