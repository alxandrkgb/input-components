import React, { useState } from 'react';

function GroupEight () {

    const [value15, setValue15] = useState('');

    const handleChange15 = (event) => {
        setValue15(event.target.value);
    };


    return (
    <div className='groupEight'>
        <div>
            <p>{'<Input fullWidth />'}</p>
            <label htmlFor="text-input-15">Label</label>
            <div>
                <input
                    type="text"
                    id="text-input-15"
                    placeholder="Text"
                    value={value15}
                    onChange={handleChange15}
                />
            </div>
        </div>
    </div>
    );
}
 
export default GroupEight;