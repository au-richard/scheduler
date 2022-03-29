import React, { Fragment } from 'react'
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import useVisualMode from 'hooks/useVisualMode';

import "./styles.scss";

export default function Appointment(props) {
  // console.log("## props", props);
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const {mode, transition, back} = useVisualMode(props.interview ? SHOW : EMPTY)

  const save = (name, interviewer) => {
    const interview = {
      student: name,
      interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id , interview)
      .then(() => {
        transition(SHOW);
      })
  }

  const remove = () => {
    transition(DELETING);
    props.cancelInterview(props.id)
      .then(() => {
        transition(EMPTY);
      })
  }

  const edit = (props) => {
    const interview = {
      student: props.id,
      interviewer: props.interviewer
    };
    transition(SAVING);
    props.bookInterview(props.id , interview)
      .then(() => {
        transition(SHOW);
      })
  }
  // console.log("## these are props", props);
  // console.log("index selectedInterview", props.interview.interviewer.id);
  
  return (
    <article className="appointment">
      <Header time={props.time} />
      {mode === EMPTY && <Empty onAdd={() => transition(CREATE)} />}
      {mode === SHOW && (
        <Show
          student={props.interview.student}
          interviewer={props.interview.interviewer}
          onDelete={() => transition(CONFIRM)}
          onEdit={() => transition(EDIT)}
        />
      )}
      {mode === CREATE && (
        <Form
          onCancel={back}
          student={props.student}
          interview={props.interview}
          interviewers={props.interviewers}
          onSave={save}
        />
      )}
      {mode === EDIT && (
        <Form
          onCancel={back}
          student={props.interview.student}
          interview={props.interview}
          interviewers={props.interviewers}
          interviewerSelected={props.interview.interviewer.id}
          onSave={save}
        />
      )}
      {mode === SAVING && (
        <Status
          message={"SAVING"}
      />)}
      {mode === CONFIRM && (
        <Confirm message={"Delete the appointment?"} 
        onConfirm={remove}
        onCancel={back}
      />)}
      {mode === DELETING && (
        <Status
          message={"DELETING"}
      />)}
    </article>
  );
};