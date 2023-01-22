/* 강의목표 : 
    1. 상태(배열)를 업데이트하고 수정하기
    2. header 필터링하기, 부모 컴포넌트와 상태 공유하기
    3. 입력폼 연습하기
    4. useEffect을 이용한 localstorage 읽기 및 저장하기
    5. 순수css로 다크모드 연습하기
*/

import { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList/TodoList';
import Header from './components/Header/Header';
import { DarkModeProvider } from './components/context/DarkModeContext';

const filters = ['all', 'active', 'completed']
function App() {
  const [filter, setFilter] = useState(filters[0]);
  return (
    <DarkModeProvider> {/* 우산 씌워주기 */}
      <Header filters={filters} filter={filter} onFilterChange={setFilter}/>
      {/* onFilterChanege={(filter) => setFilter(filter)} */}
      <TodoList filter={filter} />
    </DarkModeProvider>
  );
}

export default App;
