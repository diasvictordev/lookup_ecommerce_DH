let text = document.querySelectorAll(".description-card");

text.forEach((element) => {
  if (element.innerHTML.length >= 75) {
    return (element.innerText = element.innerHTML.substring(0, 75) +"...");
  }
});