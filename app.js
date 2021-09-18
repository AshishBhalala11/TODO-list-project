
                            /* theme change */

function onThemeClick(){
    document.getElementById("body").classList.toggle("light-theme");
    document.getElementById("body").classList.toggle("dark-theme");

    var icon=document.getElementById("theme-image");
    icon.classList.toggle("light-icon");
    icon.classList.toggle("dark-icon");

    if(icon.classList.contains("dark-icon")){
        icon.src = "images/NicePng_sun-icon-png_1215503.png";
    }
    else{
        icon.src = "images/moon-icon.png";
    }
}

        /* todo js */

var inputBox = document.getElementById("todo-main-textbox");
var list=document.getElementById("todo-list-div");
var dataArray = [];
var count=0;


function createCkbElement(value){
    
}

var elementLeft = document.getElementById("todo-left");

inputBox.addEventListener('keypress', function (e){

    if(e.keyCode === 13){
        
        var todoBox = document.createElement("div");
        var todoCheckbox = document.createElement("input");
        var todoLabel = document.createElement("lable");
        var closeButton = document.createElement("a");
        var closeImage = document.createElement("img");
        
    
        todoBox.id = count;
        todoBox.setAttribute('class' , 'draggable');
        todoBox.draggable = "true";
    
        todoCheckbox.type = 'checkbox';
        todoCheckbox.name = 'next-todo-list';
    
        todoCheckbox.addEventListener("change" , checkboxChange);
    
        todoLabel.setAttribute("for" , "next-todo-list");
    
        closeButton.addEventListener('click', closeTodo);
    
        closeButton.href = "#";
    
        closeImage.src = "images/icon-cross.png";               // image icon for cross button
    
        todoBox.appendChild(todoCheckbox);
        todoBox.appendChild(todoLabel);
        todoBox.appendChild(closeButton);
        closeButton.appendChild(closeImage);
    
        todoLabel.innerHTML = inputBox.value;
    
        dataArray.push({id: count++, checkbox: false, value: inputBox.value});     //adding objects in dataArray
        inputBox.value = "";
        list.prepend(todoBox);

        elementLeft.innerHTML = dataArray.length + " items left";
        
    }
});

function checkboxChange(){                     // marking todo item done by checkbox
    let div=this.parentNode;
    let divID = div.id;

    for(let i=0;i<dataArray.length;i++){
        if(dataArray[i].id == divID){
            dataArray[i].checkbox = !dataArray[i].checkbox;      // changing checkbox value in dataArray object
        }
    }

    if(div.style.textDecoration === 'line-through'){
        div.style.textDecoration = 'none';
    }
    else{
        div.style.textDecoration = 'line-through';
    }
}

function closeTodo(){                             // closing todo list 
    let div=this.parentNode;
    let divBox=div.parentNode;
    let divID = div.id;

    for(let i=0;i<dataArray.length;i++){
        if(dataArray[i].id == divID){
            dataArray.splice(i,1);
        }
    }

    divBox.removeChild(div);                              // removing rendering of element on display

    elementLeft.innerHTML = dataArray.length + " items left";
}


function clearCompleted(){
    let divBox = document.getElementById("todo-list-div");

    let clonedDataArray = [...dataArray];               // cloning dataArray first to travese whole array to check ckb value
    for(let i=clonedDataArray.length-1;i>=0;i--){
        if(clonedDataArray[i].checkbox == true){
            let divTodo = document.getElementById(clonedDataArray[i].id);
            divBox.removeChild(divTodo);

            dataArray.splice(i,1);
        }
    }

    elementLeft.innerHTML = dataArray.length + " items left";
}








