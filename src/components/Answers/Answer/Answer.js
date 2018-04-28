import React from 'react';
import styles from './Answer.css';

const answer = (props) => {
    return (
        <div className={styles.Answer} onClick={() =>{props.click(props.score)}}>
            <p>{props.text}</p>
        </div>
    );
}

export default answer; 