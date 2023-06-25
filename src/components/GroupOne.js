import React, { useState } from 'react';

function GroupOne () {

    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    const handleChange1 = (event) => {
        setValue1(event.target.value);
    };

    const handleChange2 = (event) => {
        setValue2(event.target.value);
    };

    const handleChange3 = (event) => {
        setValue3(event.target.value);
    };


    return (
    <div className='groupOne'>
        <div>
            <p>{'<Input />'}</p>
            <label htmlFor="text-input-1">Label</label>
            <div>
                <input
                    type="text"
                    id="text-input-1"
                    placeholder="Placeholder"
                    value={value1}
                    onChange={handleChange1}
                />
            </div>
        </div>

        <div>
            <p>&:hover</p>
            <label htmlFor="text-input-2">Label</label>
            <div>
                <input
                    type="text"
                    id="text-input-2"
                    placeholder="Placeholder"
                    value={value2}
                    onChange={handleChange2}
                />
            </div>
        </div>

        <div>
            <p>&:focus</p>
            <label htmlFor="text-input-3" style={{ color: '#2962FF' }}>Label</label>
            <div>
                <input
                    type="text"
                    id="text-input-3"
                    placeholder="Placeholder"
                    value={value3}
                    onChange={handleChange3}
                />
            </div>
        </div>
    </div>
    );
}

export default GroupOne;