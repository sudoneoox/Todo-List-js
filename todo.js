let input = prompt("What would you like to do?");
const todos = ['Collect Eggs'];
while (input !=='quit' && input != 'q') {
    if (input === 'list') {
        for (let i = 0; i < todos.length; i++) {
            console.log(`${i}: ${todos[i]} `);
        }
    } else if (input === 'new') {
        const newTodo = prompt("OK, what is the new todo?");
        todos.push(newTodo);
        console.log(`${newTodo} added to the list!`)
    } else if (input === 'delete') {
        const index = parseInt(prompt("Ok, enter a index to delete"));
        if (!Number.isNaN(index)) {
        const deleted = todos.splice(index, 1);
        console.log(`Ok, deleted ${deleted[0]}`);
        } else {
            console.log('Unknown index');
        }
    }
    input = prompt("What would you like to do?");
    
}
console.log("OK QUIT THE APP");