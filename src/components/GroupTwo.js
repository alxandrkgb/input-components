import React, { useState } from 'react';

function GroupTwo () {

    const [value4, setValue4] = useState('');
    const [value5, setValue5] = useState('');
    const [value6, setValue6] = useState('');

    const handleChange4 = (event) => {
        setValue4(event.target.value);
    };

    const handleChange5 = (event) => {
        setValue5(event.target.value);
    };

    const handleChange6 = (event) => {
        setValue6(event.target.value);
    };


    return (
    <div className='groupTwo'>
        <div>
            <p>{'<Input error />'}</p>
            <label htmlFor="text-input-4" style={{ color: '#D32F2F' }}>Label</label>
            <div>
                <input
                    type="text"
                    id="text-input-4"
                    placeholder="Placeholder"
                    value={value4}
                    onChange={handleChange4}
                />
            </div>
        </div>

        <div>
            <p>&:hover</p>
            <label htmlFor="text-input-5">Label</label>
            <div>
                <input
                    type="text"
                    id="text-input-5"
                    placeholder="Placeholder"
                    value={value5}
                    onChange={handleChange5}
                />
            </div>
        </div>

        <div>
            <p>&:focus</p>
            <label htmlFor="text-input-6" style={{ color: '#D32F2F' }}>Label</label>
            <div>
                <input
                    type="text"
                    id="text-input-6"
                    placeholder="Placeholder"
                    value={value6}
                    onChange={handleChange6}
                />
            </div>
        </div>
    </div>
    );
}

export default GroupTwo;