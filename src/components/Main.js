import React from 'react';

export default ({value, addValue, removeValue, state}) => (
    <div>
        <p> MAIN PAGE </p>
        <p>{state}</p>
        <input
            type="text"
            onChange={() => addValue}
            value={value}
        />
        <button onClick={() => removeValue}>remove name</button>
    </div>
)
