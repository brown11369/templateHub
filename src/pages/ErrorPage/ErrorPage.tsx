import React from 'react';
import { Link, useRouteError } from 'react-router-dom';

interface ErrorResponse {
    status: number;
    statusText: string;
    internal: boolean;
    data: string;
    error: {
        message: string;
        stack: string;
    };
}

const ErrorPage: React.FC = () => {
    const error = useRouteError() as ErrorResponse;

    return (
        <div>
            <h1>Oops! Something went wrong.</h1>
            {error && (
                <div>
                    <p>Error Status: {`${error.status} ${error.statusText}`} </p>
                    <p>Error Message: {error.data}</p>
                </div>
            )}
            <p>We apologize for the inconvenience. Please try again later.</p>
            <br />
            <div>
                <Link to={"/"} className='btn'>go to home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;
