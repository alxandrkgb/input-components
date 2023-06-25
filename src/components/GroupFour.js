import React, { useState } from 'react';

function GroupFour () {

    const [value8, setValue8] = useState('');
    const [value9, setValue9] = useState('');

    const handleChange8 = (event) => {
        setValue8(event.target.value);
    };

    const handleChange9 = (event) => {
        setValue9(event.target.value);
    };


    return (
    <div className='groupFour'>
        <div>
            <p>{'<Input helperText=”Some interesting text” />'}</p>
            <label htmlFor="text-input-8">Label</label>
            <div>
                <input
                    type="text"
                    id="text-input-8"
                    placeholder="Placeholder"
                    value={value8}
                    onChange={handleChange8}
                />
            </div>
            <p className='helperText helperText1'>Some interesting text</p>
        </div>

        <div>
            <p>{'<Input helperText=”Some interesting text” error />'}</p>
            <label htmlFor="text-input-9" style={{ color: '#D32F2F' }}>Label</label>
            <div>
                <input
                    type="text"
                    id="text-input-9"
                    placeholder="Placeholder"
                    value={value9}
                    onChange={handleChange9}
                />
            </div>
            <p className='helperText helperText2'>Some interesting text</p>
        </div>
    </div>
    );
}

export default GroupFour;