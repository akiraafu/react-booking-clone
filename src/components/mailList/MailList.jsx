import React from "react";
import classes from "./MailList.module.css";

const MailList = () => {
    return (
        <div className={classes.mail}>
            <h2 className={classes.mailTitle}>Save time, save money!</h2>
            <span className={classes.mailTitle}>Sign up and we'll send the best deals to you</span>
            <div className={classes.mailInputContainer}>
                <input type='text' placeholder='Your Email' />
                <button>Subscribe</button>
            </div>
        </div>
    );
};

export default MailList;
