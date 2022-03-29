import React, { useState, useEffect } from "react";
import axios from "axios";

import DayList from "./DayList";
import Appointment from "components/Appointment";
import { getAppointmentsForDay, getInterview, getInterviewersForDay } from "helpers/selectors";
import useApplicationData from "src/hooks/useApplicationData";

import "components/Application.scss";

export default function Application(props) {
  const {
    state,
    setDay,
    bookInterview,
    cancelInterview
  } = useApplicationData();

  const dailyInterviewers = getInterviewersForDay(state, state.day);

  const dailyAppointments = getAppointmentsForDay(state, state.day).map(dailyAppointment => {
    return (
      <Appointment
        key={dailyAppointment.id}
        id={dailyAppointment.id}
        time={dailyAppointment.time}
        interview={getInterview(state, dailyAppointment.interview)}
        interviewers={dailyInterviewers}
        bookInterview={bookInterview}
        cancelInterview={cancelInterview}
      />
    );
  });

  // console.log("## Daily Appoints", dailyAppointments);

  return (
    <main className="layout">
      <section className="sidebar">
      <img 
        className="sidebar--centered" 
        src="images/logo.png" 
        alt="Interview Scheduler"
      />
      <hr className="sidebar__separator sidebar--centered" />
      <nav className="sidebar__menu">
      <DayList
        days={state.days}
        day={state.day}
        setDay={setDay}
      />
      </nav>
      <img
        className="sidebar__lhl sidebar--centered"
        src="images/lhl.png"
        alt="Lighthouse Labs"
      />
      </section>
      <section className="schedule">
        {dailyAppointments
          .concat(<Appointment key="last" time="5pm" />) 
        }
      </section>
    </main>
  );
}
