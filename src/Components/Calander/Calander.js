import React, { useState } from 'react';
import Calendar from 'react-calendar';

const Calander = () => {
    const [value, onChange] = useState(new Date());
    return (
        <div className='container mx-auto my-10' >
            <Calendar onChange={onChange} value={value} />
        </div>
    );
};

export default Calander;