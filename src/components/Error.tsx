import React from 'react';

interface ErrorMessageProps {
    error: string
}

const Error = ({error}:ErrorMessageProps) => {
    return (
        <div>
            <p className="taxt-center">{error}</p>
        </div>
    );
};

export default Error;