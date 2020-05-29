/*Accordion */
const heading = document.getElementsByClassName("sections");
for
    (let i = 0; i < heading.length; i++) {
      heading[i].addEventListener("click", function (){
        this.classList.toggle('active_acc');
        this.classList.toggle('active_ss');
        
        let desc = this.nextElementSibling;
        if(desc.style.maxHeight){
            desc.style.maxHeight = null;
        }else
        {
             desc.style.maxHeight = desc.scrollHeight + "px";
        }
            
    })
}

/*-- Back to top button --*/
const upBtn = document.getElementById("upBtn");
window.onscroll = function(){
  if(document.documentElement.scrollTop > 800){
      upBtn.style.display = "block";
  }   else{
    upBtn.style.display = "none";
  }
}
upBtn.addEventListener('click', function(){
    window.scroll({
        top :0,
        left :0,
        behavior : 'smooth'
    })
})



  
