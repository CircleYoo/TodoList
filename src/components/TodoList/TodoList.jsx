import React, { useState } from 'react';
import AddTodo from '../AddTodo/AddTodo';

export default function TodoList() {
    const [todos, setTodos] = useState([
        {id: '123', text: '장보기', status: 'active'},
        {id: '124', text: '공부하기', status: 'active'},
    ]);
    //  해야할 일(목록)을 담고있기 때문에 '배열'로 만든다.

    // 새로운 todo를 업데이트 해야한다.
    const handleAdd = (todo) => setTodos([...todos, todo])
    // 기존의 todo를 낱개로 풀면서 추가한다.
    return (
        <section>
            <ul>
                {
                    todos.map(item => 
                        <li key={item.id}>{item.text}</li>
                    )
                }
            </ul>
            <AddTodo onAdd={handleAdd}/>
        </section>
    );
}



