import React from "react";

const Quiz = () => {
    return (
       <div>
           <QuizTitle />
           <Q1 />
           <Q2 />
       </div> 
    );
};
const QuizTitle = () => {
    return (
        <div>
            How Do You Like End?
        </div>
    );
};
const Q1 = () => {
    return (
        <div>
        <Q1Title />
        <Q1Input /> 
        </div>
    );
};
const Q1Title = () => {
    return <p>How Much Do You Love FrontEnd</p>;
};
const Q1Input = () => {
    return <input type={'range'}></input>;
};
const Q2 = () => {
    return (
        <div>
        <Q2Title />
        <Q2Input /> 
        </div>
    );
};
const Q2Title = () => {
    return <p>What is you favorite FrontEnd Feature/Topic</p>;
};
const Q2Input = () => {
    return <input type={'text'}></input>;
};

export default Quiz;