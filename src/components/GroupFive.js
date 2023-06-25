import React, { useState } from 'react';
import { IoMdCall } from 'react-icons/io';
import { BiSolidLock } from 'react-icons/bi';

function GroupFive () {

    const [value10, setValue10] = useState('');
    const [value11, setValue11] = useState('');

    const handleChange10 = (event) => {
        setValue10(event.target.value);
    };

    const handleChange11 = (event) => {
        setValue11(event.target.value);
    };


    return (
    <div className='groupFive'>
        <div>
            <p>{'<Input startIcon />'}</p>
            <label htmlFor="text-input-10">Label</label>
            <div>
                <IoMdCall className="icon" />
                <input
                    type="text"
                    id="text-input-10"
                    placeholder="Placeholder"
                    value={value10}
                    onChange={handleChange10}
                />
            </div>
        </div>

        <div>
            <p>{'<Input endIcon />'}</p>
            <label htmlFor="text-input-11">Label</label>
            <div>
                <input
                    type="text"
                    id="text-input-11"
                    placeholder="Placeholder"
                    value={value11}
                    onChange={handleChange11}
                />
                <BiSolidLock className="icon2"/>
            </div>
        </div>
    </div>
    );
}

export default GroupFive;