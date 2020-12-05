export default function todos(state = [], action) {
    switch (action.type) {
        case "ADD_TODO": {
            const todosList = [...state];
            todosList.push(action.payload);
            return todosList;
        }
        case "DELETE_TODO": {
            const todosList = [...state];
            todosList.splice(action.payload, 1);
            return todosList;
        }
        default:
            return state;
    }
}

// Actions
export function addTodo(todo) {
    return {
        type: "ADD_TODO",
        payload: todo
    };
}

export function deleteTodo(id) {
    return {
        type: "DELETE_TODO",
        payload: id
    };
}
