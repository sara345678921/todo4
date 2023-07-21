//delete to do 
function deletetodo(){
    let deleters = document.querySelectorAll(".delete-todo");
    for(let i = 0; i<deleters.length;i++){
        deleters[i].onclick=function(){
            this.parentElement.style.display="none";
        }
    }
}
 deletetodo(); 
//complete to do
function Completed(){
    let todos = document.getElementsByClassName("todo");
    for(let i = 0; i<todos.length;i++){
         todos[i].onclick=function(){
             this.classList.toggle("completa")
        }
    }
}
Completed();
//creat new todo
let value;
document.getElementById("addButton").onclick = function(){
        value = document.getElementById("title").value;
        if(value===""){
            document.getElementById("theModel").stayle.display = "block";
        }else{
            let myTodo = document.createElement("div");
            myTodo.classList.toggle("todo");
            myTodo.innerHTML = ` 
                               <h1 class="theTitle">${value}</h1>
                               <span class="delete-todo">Delete</span>
                               <span>Completed</span>
    `
                      document.getElementById("lists").appendChild(myTodo)
                      deletetodo();
                      Completed();

           }
           document.getElementById("title").value =""

        }
        // delete model
        document.getElementById("deletModel").onclick  = function(){
            document.getElementById("theModel").style.display="none";
        }

       