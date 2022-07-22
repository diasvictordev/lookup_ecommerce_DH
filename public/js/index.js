let open = true;
let count = 1;

function openNav() {
    if (open) {
        open = false;
        return (document.getElementById("mySidepanel").style.width = "40%");
    } else {
        open = true;
        return (document.getElementById("mySidepanel").style.width = "0px");
    }
}

setInterval(function(){
    document.getElementById("radio" + count).checked = true;
    count++
    if(count > 4){
        count = 1
    }
},5000)

let highlightsCount = 1;
            
setInterval(function(){
    document.getElementById("highlights" + highlightsCount).checked = true;
    highlightsCount++
    if(highlightsCount > 3){
        highlightsCount = 1
    }
},5000)