//imports...
import React, {useState} from 'react';
//components...
import FormToDo from './FormToDo';
import TaskList from './TaskList';

const Container = () => {
    const [list, setList] = useState([]);

    const handleAddItem = (item) => {
        setList([...list, item]);
    };

    return (
        <div>
            <FormToDo handleAddItem={handleAddItem}/>
            <TaskList list={list} setList={setList}/>
        </div>
    )
}

export default Container
