// Panel component for the Calculator

import React, { useState } from 'react';
import Button from './Button';
import Display from './Display';

export default function Panel() {
    const [displayValue, setDisplayValue] = useState('');

    const handleButtonClick = (value) => {
        if (value === 'C') {
            setDisplayValue('');
        } else if (value === '=') {
            try {
                const result = eval(displayValue.replace(/x/g, "*"));
                setDisplayValue(String(result));
            } catch (error) {
                setDisplayValue('Error');
            }
        } else {
            setDisplayValue(displayValue + value);
        }
    };


    // Define buttons in rows
    const buttonRows = [
        [{ value: '7' }, { value: '8' }, { value: '9' }, { value: '+', className: 'operator' }],
        [{ value: '4' }, { value: '5' }, { value: '6' }, { value: '-', className: 'operator' }],
        [{ value: '1' }, { value: '2' }, { value: '3' }, { value: 'x', className: 'operator' }],
        [{ value: 'C', className: 'clear' }, { value: '0' }, { value: '=', className: 'equal' }, { value: '/', className: 'operator' }],
    ];

    return (
            <div className="calculator">
                <form action="">
                    <Display value={displayValue} />
                    {buttonRows.map((row, rowIndex) => (
                        <div key={rowIndex} className="button-row">
                            {row.map((button, buttonIndex) => (
                                <Button
                                    key={buttonIndex}
                                    value={button.value}
                                    className={button.className}
                                    onClick={() => handleButtonClick(button.value)}
                                />
                            ))}
                        </div>
                    ))}
                </form>
            </div>
    );
}


