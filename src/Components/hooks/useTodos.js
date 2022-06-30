import  { useEffect, useState } from 'react';

const useTodos = () => {
    const [todos,setTodos] = useState([])

    useEffect(()=>{
        const url = 'https://todo-app-parvez.herokuapp.com/todo';
        fetch(url)
        .then(res=>res.json())
        .then(data =>setTodos(data));
    },[])

    return [todos];
};

export default useTodos;