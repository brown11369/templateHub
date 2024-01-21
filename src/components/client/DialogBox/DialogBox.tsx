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
                <h2>How do you want to use our services?</h2>
                <div className="option">
                    <Link to="/login" onClick={() => { setIsDialogOpen(false) }}>As User</Link>
                    <Link to="/dashboard/login">As Developer</Link>
                </div>
            </div>
        </div>
    );
};

export default DialogBox;
