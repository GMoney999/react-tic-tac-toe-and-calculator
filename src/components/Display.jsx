// Component to display Calculator results
import React from 'react';

export default function Display({ value }) {
    return (
        <div className="display">
            <input type="text" value={value} readOnly />
        </div>
    );
}

