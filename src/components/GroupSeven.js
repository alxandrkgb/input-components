import React, { useState } from 'react';

function GroupSeven () {

    const [value13, setValue13] = useState('');
    const [value14, setValue14] = useState('');

    const handleChange13 = (event) => {
        setValue13(event.target.value);
    };

    const handleChange14 = (event) => {
        setValue14(event.target.value);
    };


    return (
    <div className='groupSeven'>
        <div>
            <p>{'<Input size=”sm” />'}</p>
            <label htmlFor="text-input-13">Label</label>
            <div>
                <input
                    type="text"
                    id="text-input-13"
                    placeholder="Placeholder"
                    value={value13}
                    onChange={handleChange13}
                />
            </div>
        </div>

        <div>
            <p>{'<Input size=”md” />'}</p>
            <label htmlFor="text-input-14">Label</label>
            <div>
                <input
                    type="text"
                    id="text-input-14"
                    placeholder="Placeholder"
                    value={value14}
                    onChange={handleChange14}
                />
            </div>
        </div>
    </div>
    );
}

export default GroupSeven;