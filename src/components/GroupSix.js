import React, { useState } from 'react';

function GroupSix () {

    const [value12, setValue12] = useState('');

    const handleChange12 = (event) => {
        setValue12(event.target.value);
    };


    return (
    <div className='groupSix'>
        <div>
            <p>{'<Input value=”text” />'}</p>
            <label htmlFor="text-input-12">Label</label>
            <div>
                <input
                    type="text"
                    id="text-input-12"
                    placeholder="Text"
                    value={value12}
                    onChange={handleChange12}
                />
            </div>
        </div>
    </div>
    );
}

export default GroupSix;