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