import React from 'react';
import QuizardPng from '../../assets/images/quizard.png';

const Portfolio = () => {


    return (
        <div>
            <a href='https://ltb-quizard.herokuapp.com/'>My Final Project:</a>
            <a href='https://ltb-quizard.herokuapp.com/'>
                <img src={QuizardPng} style={{height: '200px', width: 'auto'}}></img>
            </a>
        </div>
    )
}

export default Portfolio