import React, { Fragment } from 'react'
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from './Form';
import useVisualMode from 'hooks/useVisualMode';

import "./styles.scss";

export default function Appointment(props) {
  console.log("## props", props);
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const {mode, transition, back} = useVisualMode(props.interview ? SHOW : EMPTY)

  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
        />
      )}
      {mode === CREATE && (
        <Form
          onCancel={back}
          student={props.student}
          interview={props.interview}
          interviewers={props.interviewers}
        />
      )}
    </article>
  );
};