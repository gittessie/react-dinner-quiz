import React from 'react';
import styles from './Answer.module.css';

const answer = (props) => {
    return (
        <button className={styles.Answer} onClick={() =>{props.click(props.score)}}>
            {props.text}
        </button>
    );
}

export default answer; 