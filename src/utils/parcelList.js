function parcelList(value){

    const array = []
  
      for(let i=1; i <=12; i++){
  
        const x = value / i
        
         array.push(i + " x de " + x.toFixed(2) + " sem juros")
  
      }
  
    return array
  
  }
  
  console.log(parcelList(500))