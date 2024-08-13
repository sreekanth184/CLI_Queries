var readlineSync = require('readline-sync');


todo=[];

function addTodo(){
    let a=readlineSync.question('Enter to add list' );
    if(a!==""){
    todo.push({title:a , iscompleted:false});
    console.log("Todo added ");
    }
    else{
        addTodo();
    }

};

function viewTodo(){
    if(todo.length==0){
        console.log("Empty array")
        return;
    }else{
    todo.forEach(ele =>{
    console.log([ele.iscompleted? '[x]':'[ ]'] +" : "+ ele.title)

    });
}

};

function updateTodo(){
        todo.forEach((ele,index)=>{
            console.log(`${index}.${ele.title}`)
        });
        let s=readlineSync.questionInt("Enter index to update")
            let t=readlineSync.question('Enter to true or false' );
            todo[s].iscompleted=t;
        
};

function deleteTodo(){
    todo.forEach((ele,index)=>{
        console.log(`${index}.${ele.title}`)
    });
    let i=readlineSync.questionInt("Enter index to delete")
    todo.splice(i,1);

};
module.exports = {
    addTodo,
    viewTodo,
    updateTodo,
    deleteTodo
}