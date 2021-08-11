window.addEventListener("scroll",()=>{
 const nav = document.getElementById("navigation")

 if (window.pageYOffset>=20){
   nav.classList.add("sticky");
   console.log("working");
 }
 else{
   nav.classList.remove("sticky");
 }

})
