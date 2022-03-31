import React from 'react'
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";
import Form from './Form';
import Status from './Status';
import Confirm from './Confirm';
import Error from './Error';
import useVisualMode from 'hooks/useVisualMode';

import "./styles.scss";

export default function Appointment(props) {
  const EMPTY = "EMPTY";
  const SHOW = "SHOW";
  const CREATE = "CREATE";
  const SAVING = "SAVING";
  const DELETING = "DELETING";
  const CONFIRM = "CONFIRM";
  const EDIT = "EDIT";
  const ERROR_SAVE = "ERROR_SAVE";
  const ERROR_DELETE = "ERROR_DELETE";
  const {mode, transition, back} = useVisualMode(props.interview ? SHOW : EMPTY)

  // Saving New Interview
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
      .catch(error => transition(ERROR_SAVE, true));
  }

  // Deleting Interview
  const remove = () => {
    transition(DELETING, true);
    props.cancelInterview(props.id)
      .then(() => {
        transition(EMPTY);
      })
      .catch(() => transition(ERROR_DELETE, true));
  }
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
        <Status message={"DELETING"}/>
      )}
      {mode === ERROR_SAVE && (
        <Error message={"Could not save appointment."}
        onClose={back}
      />)}
      {mode === ERROR_DELETE && (
        <Error message={"Could not delete appointment."}
        onClose={back}
      />)}

    </article>
  );
};