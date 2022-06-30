import React from 'react';
import { useForm } from 'react-hook-form';

const Home = () => {

    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <div className=' my-36'>
            <h1 className='text-center text-4xl text-orange-600 my-10'>Welcome to To Do App</h1>

            <form onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='Enter Your ToDo List...' className='p-4 border-4 rounded-lg text-black font-bold' {...register("todoTask")} />
                <input className='btn btn-secondary w-1/5 block mx-auto my-5' type="submit" value='Add' />
             </form>
        </div>
    );
};

export default Home;