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
const priceUpClass = document.querySelector(".priceUp")
const priceDownClass = document.querySelector(".priceDown")

function order(){
    if(priceUp.checked){
        priceDownClass.style.display = "none"
    }if(!priceUp.checked){
        priceDownClass.style.display = "block"
    } if(priceDown.checked && !priceUp.checked){
        priceUpClass.style.display = "none"
    }if(!priceDown.checked && !priceUp.checked){
        priceUpClass.style.display = "block"
    }
}

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