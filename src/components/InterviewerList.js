import React from "react";
import InterviewerListItem from "./InterviewerListItem";
import PropTypes from 'prop-types'; 

import "./InterviewerList.scss";

export default function InterviewerList(props) {
console.log("This is the id", props.interviewerSelected);
  const listInterviewers = props.interviewers.map(interviewer => {
    return (
      <InterviewerListItem 
        key={interviewer.id}
        name={interviewer.name}
        avatar={interviewer.avatar}
        selected={props.interviewerSelected ? interviewer.id === props.interviewerSelected : interviewer.id === props.value}
        setInterviewer={() => props.onChange(interviewer.id)}

      />
    );
  });

  return (
    <section className="interviewers">
    <h4 className="interviewers__header text--light">Interviewer</h4>
    <ul className="interviewers__list">
      {listInterviewers}
    </ul>
</section>
  );
}

InterviewerList.propTypes = {
  interviewers: PropTypes.array.isRequired
};