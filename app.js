let inp = document.querySelector('input');
let ul = document.querySelector('ul');
let btn = document.querySelector('button');

btn.addEventListener("click",function(){
    let item = document.createElement("li");
    let del = document.createElement("button");
    
    del.innerText = "X";
    item.innerText = inp.value;
    
    del.classList.add("delete"); // will give class to the new delete buttons

    ul.appendChild(item);
    item.appendChild(del);

    inp.value = "";
});

//below will work because of event bubbling
ul.addEventListener("click",function(event){
    let listItem = event.target.parentElement;
    listItem.remove();
})

const cursor = document.querySelectorAll(".cursor");
const links = document.querySelectorAll(".link");

window.addEventListener("mousemove", (e) => {
  
  let x = e.pageX;
  let y = e.pageY;
  
  cursor.forEach(el => {
    el.style.left = `${x}px`;
    el.style.top = `${y}px`;
    
    links.forEach(link => {
      link.addEventListener("mouseenter", () => {
        el.classList.add("hover");
      })
      link.addEventListener("mouseleave", () => {
        el.classList.remove("hover");
      })
    })
    
  })
  
})