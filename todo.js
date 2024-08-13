const readlineSync = require("readline-sync");
let { addTodo, viewTodo, updateTodo, deleteTodo } = require("./index.js");

function main() {
  console.clear();
  console.log(`
       \n 0. Press 0 to exit
       \n 1. Press 1 to Add todo 
       \n 2. Press 2 to View todo 
       \n 3. Press 3 to Update todo 
       \n 4. Press 4 to Delete todo 
        `);

  const option = readlineSync.questionInt(
    "Enter the operation you want to perform: "
  );

  switch (option) {
    case 0:
      console.log("Thank you for using TODO CLI");
      return;

    case 1:
      addTodo();
      break;

    case 2:
      viewTodo();
      break;

    case 3:
      updateTodo();
      break;

    case 4:
      deleteTodo();
      break;

    default:
      console.log("Invalid Option Selected");
      break;
  }

  let willContinue = readlineSync.question("Do you want to continue? ");
  if (willContinue == "y") {
    main();
  } else {
    console.log("Thank you for using TODO CLI");
  }
}

main();
