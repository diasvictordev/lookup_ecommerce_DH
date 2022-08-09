let value = 1;
setInterval(function () {
  document.getElementById("slide" + value).checked = true;
  value++;
  if (value > 3) {
    return (value = 1);
  }
}, 5000);