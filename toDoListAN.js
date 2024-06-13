
let listCont = document.getElementById('listCont');
let newTaskBtn= document.getElementById('newTaskBtn');
let newTaskIn = document.getElementById('newTaskIn');
let totalCount=document.getElementById('totalCount');
let completeCount=document.getElementById('completed');


let total=0;
let completeTotal=0;
//ADDING NEW TASK

newTaskBtn.addEventListener('click',()=>{

    if(newTaskIn.value===""){
        alert('Enter task Details')
    }else{
        let li=document.createElement('li');
        li.textContent=newTaskIn.value;

        let span=document.createElement('span');
        span.innerHTML='\u00d7'
        li.appendChild(span);
        listCont.appendChild(li);
        total++;
    }    
    newTaskIn.value="";
    updateCount()
})

listCont.addEventListener('click',(element)=>{
    if(element.target.tagName=='LI'){
        element.target.classList.toggle('checked')
        updateComplete();
    }else if(element.target.tagName==='SPAN'){
        element.target.parentNode.remove();
        total--;
        updateCount()
        updateComplete();
    }
})


function updateCount(){
    totalCount.innerHTML=`Tasks : ${total}`
}

function updateComplete(){
    let checkedClass=document.querySelectorAll('.checked');
    completeTotal=checkedClass.length;
    console.log(completeTotal)
    completeCount.textContent=`Completed:${completeTotal} `;
}