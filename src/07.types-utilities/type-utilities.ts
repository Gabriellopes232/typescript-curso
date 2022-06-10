type Todo = {
    title: string;
    description: string;
    completed: boolean;
}

//ReadOnly

const todo: Readonly<Todo> = {
    title: "Assistir stranger things de novo",
    description: "Relembrar os detalhes",
    completed: false
}

console.log(todo)

//todo.completed = true

function updateTodo(todo: Todo, fieldsToUpdate: Partial<Todo>) {
    return { ...todo, ...fieldsToUpdate }
}

const todo2: Todo = updateTodo(todo, { completed: true })

console.log(todo2)

//Pick 5 - 1 poucas coisas pra pegar, usar o pick

type TodoPreview = Pick<Todo, 'title' | 'completed'>

const todo3: TodoPreview = {
    title: 'fechar ghost of tsushima',
    completed: false
}

//Omit 5 - 4 quando tiver muitas coisas pra pegar no objeto, usar omit
type TodoPreview2 = Omit<Todo, 'description'>

const todo4: TodoPreview = {
    title: 'fechar ghost of tsushima',
    completed: false
}