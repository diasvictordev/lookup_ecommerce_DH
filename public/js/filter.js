let filter = true
function filterOpen() {
    if(filter){
        document.querySelector(".list-products").style.display = "flex"
        return filter=false
    }filter = true
    return document.querySelector(".list-products").style.display = "none"
}