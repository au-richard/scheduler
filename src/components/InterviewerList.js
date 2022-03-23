import React from "react";
import InterviewerListItem from "./InterviewerListItem";

import "./InterviewerList.scss";

export default function InterviewerList(props) {

  const listInterviewers = props.interviewers.map(singleInterviewer => {
    return (
      <InterviewerListItem 
        key={singleInterviewer.id}
        id={singleInterviewer.id}
        name={singleInterviewer.name}
        avatar={singleInterviewer.avatar}
        selected={singleInterviewer.id === props.interviewer}
        setInterviewer={props.setInterviewer}
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