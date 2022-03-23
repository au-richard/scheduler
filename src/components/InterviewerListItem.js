import React from "react";
import classNames from "classnames";

import "./InterviewerListItem.scss";

export default function InterviewerListItem(props) {
  const interviewerListClass = classNames("interviewers__item", {
    "interviewers__item--selected": props.selected
  });

  return (
    <li className={interviewerListClass} onClick={props.setInterviewer}>
    <img
      className="interviewers__item-image"
      src={props.avatar}
      alt={props.name}
      />
    {props.selected && props.name}
  </li>

  // <li
  //   className={interviewerListClass}
  //   onClick={setInterviewer(id)}>
  //     <h5 className="text--regular">{name}</h5>
  //   </li>
  );
}