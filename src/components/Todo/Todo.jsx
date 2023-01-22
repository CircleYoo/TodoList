import React from 'react';
import { FaRegTrashAlt } from 'react-icons/fa'
import styles from './Todo.module.css'

export default function Todo({todo, onUpdate, onDelete}) {
    const { id, text, status } = todo;
    // todo의 object로부터 받아온다.
    // 그럼 todo.text로 쓰지 않고 text로만 써도 불러올 수 있다.

    const handleChange = (e) => {
        const status = e.target.checked ? 'completed' : 'active';
        onUpdate({...todo, status})
    }
    const handleDelete = () => onDelete(todo);
    return (
        <li className={styles.todo}>
            <input 
                className={styles.checkbox}
                type="checkbox" 
                id={id}
                checked={status === 'completed'}
                onChange={handleChange}
            />
            <label htmlFor={id} className={styles.text}>{text}</label>
            <span className={styles.icon}>
                <button onClick={handleDelete} className={styles.button}>
                    <FaRegTrashAlt/>
                </button>
            </span>
        </li>
    );
}

