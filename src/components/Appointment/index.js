import React, { Fragment } from 'react'
import Header from "./Header";
import Empty from "./Empty";
import Show from "./Show";

import "./styles.scss";

 export default function Appointment(props) {
   return (
    <article className="appointment">
      <Header
        time={props.time}
      />
      {props.interview ? 
        <Show 
          student={"Lydia Miller-Jones"}
          interviewer={props.interviewer}
        /> : <Empty />}
    </article>
  );
}

