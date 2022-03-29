import React, { useState } from "react"
import Button from "components/Button"
import InterviewerList from "components/InterviewerList"

export default function Form(props) {
  const { onSave, onCancel, interviewers } = props
  const [student, setStudent] = useState(props.student || "")
  const [interviewer, setInterviewer] = useState(props.interviewer || null)

  const save = () => {
    onSave(student, interviewer)
  }

  const cancel = () => {
    reset()
    onCancel()
  }

  const reset = () => {
    setStudent("")
    setInterviewer(null)
  }
  // console.log("Form selected interviewer", props.selectedInterviewer);
  console.log("these are props", props);
  return (
    <>
      <main className="appointment__card appointment__card--create">
        <section className="appointment__card-left">
          <form autoComplete="off" onSubmit={(event) => event.preventDefault()}>
            <input
              className="appointment__create-input text--semi-bold"
              name="name"
              type="text"
              placeholder="Enter Student Name"
              value={student}
              onChange={(event) => setStudent(event.target.value)}
            />
          </form>
          <InterviewerList
            interviewers={interviewers}
            value={interviewer}
            interviewerSelected={props.interviewerSelected}
            onChange={setInterviewer}
          />
        </section>
        <section className="appointment__card-right">
          <section className="appointment__actions">
            <Button danger onClick={cancel}>
              Cancel
            </Button>
            <Button confirm onClick={save}>
              Save
            </Button>
          </section>
        </section>
      </main>
    </>
  )
}