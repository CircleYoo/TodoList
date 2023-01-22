import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import styles from './AddTodo.module.css'

/*  id:'고유한 값' warning이 뜨는 이슈 해결
    uuid 라이브러리 설치 후 import > id가 랜덤으로 작명
*/

export default function AddTodo({ onAdd }) {
    const [text, setText] = useState('')
    const handleChange = e =>  setText(e.target.value);
    const handleSubmit = e => {
        e.preventDefault();
        // 버튼 누를 때마다 페이지 리프레시 되는 것을 방지

        if(text.trim().length === 0) { return; }
        // 여백 없애기(출력X)

        onAdd({ id: uuidv4(), text, status: 'active' });
        setText(''); // 입력 후, input창 초기화
    }
    return <form className={styles.form} onSubmit={handleSubmit}>
        <input 
            className={styles.input}
            type='text' 
            placeholder='Add Todo' 
            value={ text }
            onChange={ handleChange }
        />
        <button className={styles.button}>Add</button>
    </form>;
}

