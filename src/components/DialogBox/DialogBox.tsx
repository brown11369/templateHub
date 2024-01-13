import React from 'react';
import { Link } from 'react-router-dom';
import './DialogBox.css';

interface DialogBoxProps {
    setIsDialogOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DialogBox: React.FC<DialogBoxProps> = ({ setIsDialogOpen }) => {
    return (
        <div
            className="login-dialog"
            onClick={() => {
                setIsDialogOpen(false);
            }}
        >
            <div className="box" onClick={(e) => e.stopPropagation()}>
                <h2>Select One To Proceed</h2>
                <div className="option">
                    <Link to="/login" onClick={() => { setIsDialogOpen(false) }}>user</Link>
                    <Link to="/dashboard/login">developer</Link>
                </div>
            </div>
        </div>
    );
};

export default DialogBox;
