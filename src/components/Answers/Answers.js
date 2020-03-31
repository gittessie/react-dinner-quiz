import React from 'react';
import Answer from './Answer/Answer';

const answers = (props) => {


    return (
        <div>
            {props.answers.map((ans, index)=> {
						return <Answer key={index} text={ans.text} score={ans.scoreChange} click={props.click}/>})
					  }
        </div>
    );
}

export default answers; 