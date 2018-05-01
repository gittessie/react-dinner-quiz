import React from 'react';
import styles from './Result.css';
import Modal from '../../hoc/Modal/Modal';

const result = (props) => {
    return (
        <Modal show={props.show} modalClose={null}>
            <div className={styles.Result}>
                <h3>You should go eat {props.resultVal}</h3>
                <img src={props.resultImg} alt={props.resultVal}/>
                <p>{props.resultText}</p>
                <button onClick={props.btnClk}>Take the Quiz Again</button>
            </div>
        </Modal>
    );
}

export default result; 