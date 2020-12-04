import React from 'react';
import ErrorButton from '../error-button/error-button';

const Row = ({ left, right }) => {
    return (
        <div>
            <p>People Page</p>
            {left}
            {right}
            <ErrorButton />
        </div>
    )
}

export default Row;