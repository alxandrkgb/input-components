import React, { useState } from 'react';

function GroupNine () {

    const [value16, setValue16] = useState('');

    const handleChange16 = (event) => {
        setValue16(event.target.value);
    };


    return (
    <div className='groupNine'>
        <div>
            <p>{'<Input multiline row=”4” />'}</p>
            <label htmlFor="text-input-16">Label</label>
            <div>
                <textarea
                    row={4}
                    type="text"
                    id="text-input-16"
                    placeholder="Placeholder"
                    value={value16}
                    onChange={handleChange16}
                />
            </div>
        </div>
    </div>
    );
}
 
export default GroupNine;