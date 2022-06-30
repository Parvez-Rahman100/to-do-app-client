import React from 'react';
import useTodos from '../hooks/useTodos';

const ToDo = () => {
    const [todos] = useTodos()

    return (
        <div>
            <h1 className='text-center text-4xl my-7 font-bold text-teal-600'>Your Todo List </h1>
            {
                todos.map((todo,index) =><div key={todo._id}>
                    <ul>
                        <li className=' text-3xl font-bold text-center'>{index + 1}. {todo.todoTask}</li>
                    </ul>
                </div>)
            }           
        </div>
    );
};

export default ToDo;