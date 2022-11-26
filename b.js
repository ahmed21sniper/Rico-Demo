document.querySelector(".qa-page-links").style.display = "none";
document.addEventListener("contextmenu", (e) => {
  e.preventDefault();
}, false);document.addEventListener("keydown", (e) => {
  if (e.ctrlKey || e.keyCode==123) {
    e.stopPropagation();
    e.preventDefault();
  }
});function disableselect(e){
return false
}
function reEnable(){
return true
}
document.onselectstart=new Function ("return false")
if (window.sidebar){
document.onmousedown=disableselect
document.onclick=reEnable
}
