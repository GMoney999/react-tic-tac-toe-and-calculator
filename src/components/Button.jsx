// Component for Calculator Buttons

import React from 'react';

export default function Button({ value, className, onClick }) {
    return (
        <input type="button" value={value} className={className} onClick={onClick} />
    );
}