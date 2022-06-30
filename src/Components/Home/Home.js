import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import useTodos from '../hooks/useTodos';

const Home = () => {
    const [todos] = useTodos()
    const { register, handleSubmit } = useForm();


    const onSubmit = (data,event) => {
        fetch('https://todo-app-parvez.herokuapp.com/todo',{
        method:'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(data)
      })
      .then(res=>res.json())
      .then(data=>{
        console.log(data);
        if(data.acknowledged === true){
          toast.success(`Successfully added todo`)
        }
        else{
           toast.error(`Something Went Wrong`)
        }
      })};


    return (
        <div className=' my-36'>
            <h1 className='text-center text-4xl text-orange-600 my-10'>Welcome to To Do App</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Enter Your ToDo List...' className='p-4 border-4 rounded-lg text-black font-bold' {...register("todoTask")} required />
                <input className='btn btn-secondary w-1/5 block mx-auto my-5' type="submit" value='Add' />
             </form>
             {
                todos.map(todo=> <div key={todo._id}>
                    <div className='flex justify-center items-center'>
                    <input type="checkbox" class="checkbox checkbox-primary" />
                    <ul>
                    <li id='todo' className='ml-3'>{todo.todoTask}</li>
                    </ul>
                    </div>
                </div>)
             }
        </div>
    );
};

export default Home;