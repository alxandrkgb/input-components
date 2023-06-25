import React, { useState } from 'react';

function GroupThree () {

    const [value7, setValue7] = useState('');

    const handleChange7 = (event) => {
        setValue7(event.target.value);
    };


    return (
    <div className='groupThree'>
        <div>
            <p>{'<Input error />'}</p>
            <label htmlFor="text-input-7">Label</label>
            <div>
                <input
                    type="text"
                    id="text-input-7"
                    placeholder="Placeholder"
                    value={value7}
                    onChange={handleChange7}
                    disabled
                />
            </div>
        </div>
    </div>
    );
}
 
export default GroupThree;