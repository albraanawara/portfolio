 //contact form
const form = document.querySelector(".contact-form");

const msg = document.getElementById("form-message");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const data = new FormData(form);
    fetch(form.action, {
      method: "POST",
      body: data,
      headers: { 'Accept': 'application/json' }
    }).then(response => {
      form.reset();
      msg.style.display = "block";
    });
  });
  //btn scroll
let btnscroll=document.getElementById("btnscroll");
window.onscroll =function(){
    if(scrollY>= 400){
        btnscroll.style.display="block";
    }else{
        btnscroll.style.display="none";

    }
}
btnscroll.onclick =function(){
    scroll({
        top:0,
        left:0,
        behavior:"smooth",
    })
}
