// Modules
import { connect } from "react-redux";
// Actions
import { addTodo, deleteTodo } from "./todosReducer";
// Styles
import styles from "./App.css";

function App(props) {
    const { addTodo, deleteTodo, todos } = props;
    return (
        <div style={styles.container}>
            <h2>Todos List</h2>
            {todos.map((todo, index) => {
                return (
                    <div key={index} style={styles.todoContainer}>
                        <span>{todo}</span>
                        <button onClick={() => deleteTodo(index)} style={styles.deleteTodoButton}>
                            Delete Todo
                        </button>
                    </div>
                );
            })}
            <button onClick={() => addTodo("dsad")} style={styles.addTodoButton}>
                Add Todo
            </button>
        </div>
    );
}

const mapStateToProps = (state) => {
    return { todos: state.todos };
};

const mapDispatchToProps = {
    addTodo,
    deleteTodo
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
