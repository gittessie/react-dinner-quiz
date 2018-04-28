import React, { Component } from 'react';
import styles from './Question.css';
import Aux from '../../hoc/Aux/Aux';
import Modal from '../../hoc/Modal/Modal';
import Answers from '../Answers/Answers';

class Question extends Component {
    state={
        isAnswered: false, 
        answering: false
    }

    answerQuestionModalHandler = () => {
        this.setState({answering: true});
    }

    answerQuestionModalCancelHandler = () => {
        this.setState({answering: false});
    }

    answerQuestionHandler = (scores) => {
        this.props.scoreUpdateFunc(scores);
        this.setState({isAnswered: true, answering: false});
    }

    render(){
        let questionClick= this.answerQuestionModalHandler;
        let questionStyle = null; 
        if(this.state.isAnswered){
            questionClick = null;
            questionStyle = {backgroundColor: '#ededed', cursor: 'auto'} 
        }
        return(    
            <Aux>
                <Modal show={this.state.answering} modalClose={this.answerQuestionModalCancelHandler}>
                    <h3>{this.props.text}</h3>
                    <Answers answers={this.props.answers} click={this.answerQuestionHandler}/>
                </Modal>
                <div className={styles.Question} 
                    onClick={questionClick}
                    style={questionStyle}>
                    <h3>{this.props.text}</h3>	
                </div>
            </Aux>
        );
    }
}

export default Question; 