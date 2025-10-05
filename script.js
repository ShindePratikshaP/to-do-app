let todolist=[];

        const listfromlocalstorage=localStorage.getItem("todolist");
        if(listfromlocalstorage){
            todolist=JSON.parse(listfromlocalstorage);
            randortodolist();
        }
       
       function Add(){
            const inputElenment=document.getElementById(`input-todo`);
            todolist.push(inputElenment.value)
            localStorage.setItem("todolist",JSON.stringify(todolist));
            inputElenment.value= "";

            randortodolist();

        }
        function randortodolist(){
           const listcontainer=document.getElementById(`list-container`);
           listcontainer.innerHTML=" "

           for(const todoitem of todolist)
           {
            listcontainer.innerHTML += `<div class="todo-item">
                <input type="checkbox"/>${todoitem }</div>`
           }
        }