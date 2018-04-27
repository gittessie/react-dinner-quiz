import React, { Component } from 'react';
import styles from './Question.css';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../../hoc/Modal/Modal';
import Answers from '../Answers/Answers';

class Question extends Component {
    state={
        scoresAdditions:{
            pizza: 0,
            vegan_pizza: 0,
            italian: 0, 
            indian: 0,
            tapas: 0, 
            middle_eastern: 0,
            bbq: 0, 
            chinese: 0, 
            thai: 0, 
            ramen: 0, 
            breakfast: 0, 
            american: 0, 
            mexican: 0, 
            salad: 0            
        },
        isAnswered: false, 
        answering: false
    }

    answerQuestionHandler = () => {
        this.setState({answering: true});
    }

    answerQuestionCancelHandler = () => {
        this.setState({answering: false});
    }

    render(){
        return(
            <Aux>
                <Modal show={this.state.answering} modalClose={this.answerQuestionCancelHandler}>
                    <h3>{this.props.text}</h3>
                    <Answers answers={this.props.answers} />
                </Modal>
                <div className={styles.Question} onClick={this.answerQuestionHandler}>
                    <h3>{this.props.text}</h3>	
                </div>
            </Aux>
        );
    }
}

export default Question; 