import React, { useEffect, useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';
import Todo from '../Todo/Todo';
import styles from './TodoList.module.css'

export default function TodoList({ filter }) {
    //  해야할 일(목록)을 담고있기 때문에 '배열'로 만든다.
    const [todos, setTodos] = useState(() => readTodosFromLocalStorage());
    /* useState(readTodosFromLocalStorage()
        : 불필요한 초기값, 계속해서 호출
        > 방지하기 위해선 한단계로 콜백함수로 감싸주어야 한다.
    */

    // 새로운 todo를 업데이트 해야한다.
    const handleAdd = (todo) => setTodos([...todos, todo]);
    // 기존의 todo를 낱개로 풀면서 추가한다.

    const handleUpdate = (updated) => 
        setTodos(todos.map((t) => (t.id === updated.id ? updated : t)))
    const handleDelete = (deleted) => 
        setTodos(todos.filter((t) => t.id !== deleted.id));

    // 투두 아이템 저장하기
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
    }, [todos]);

    const filtered = getFilteredItems(todos, filter)
    return (
        <section className={styles.container}>
            <ul className={styles.list}>
                {
                    filtered.map(item => 
                        <Todo 
                            key={item.id} 
                            todo={item}
                            onUpdate={handleUpdate}
                            onDelete={handleDelete}
                        />
                    )
                }
            </ul>
            <AddTodo onAdd={handleAdd}/>
        </section>
    );
}

function readTodosFromLocalStorage() {
    const todos = localStorage.getItem('todos');
    return todos ? JSON.parse(todos) : [];
}

function getFilteredItems(todos, filter) {
    if(filter === 'all') {
        return todos;
    }
    //  해당 카테고리만 filter로 내보내기
    return todos.filter((todo) => todo.status === filter);
}



