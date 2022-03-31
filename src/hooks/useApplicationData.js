import { useState, useEffect } from "react";
import axios from "axios";

export default function useApplicationData() {
  const [state, setState] = useState({
    day: "Monday",
    days: [],
    appointments: {},
    interviewers: {}
  });

  const setDay = day => setState({ ...state, day });

  const updateSpots = function(state, appointments) {
    // Finding if selectedDay.name and state.day match, assigning it to index if it matches
    const index = state.days.findIndex(selectedDay => selectedDay.name === state.day);
    const dayObj = state.days[index];
    // calculate Spots
    let spotCounter = 0;
    for(const id of dayObj.appointments) {
      const appointment = appointments[id];
      // checking if appointment interview is null
      if(appointment.interview === null) {
        spotCounter++;
      } 
    }
    // Updating spots in each dayObj
    const day = {...dayObj, spots: spotCounter}

    // Updating days in sidebar with updated spots 
    const newDays = [...state.days]
    newDays[index] = day;
    // return an updated days array
    return newDays;  
  }

  const bookInterview = (appointmentId, interview) => {
    const appointment = {
      ...state.appointments[appointmentId],
      interview: { ...interview }
    };
    const appointments = {
      ...state.appointments,
      [appointmentId]: appointment
    };
    return axios.put(`/api/appointments/${appointmentId}`, {interview})
      .then(() => {
        setState({
          ...state,
          appointments,
          days: updateSpots(state, appointments, appointmentId)
        });
      })
  }

  const cancelInterview = (appointmentId) => {
    const appointment = {
      ...state.appointments[appointmentId],
      interview: null
    };
    const appointments = {
      ...state.appointments,
      [appointmentId]: appointment
    };
    return axios.delete(`/api/appointments/${appointmentId}`)
      .then(() => {
        setState({
          ...state,
          appointments,
          days: updateSpots(state, appointments, appointmentId)
        });
      })
  }

  useEffect(() => {
    Promise.all([
      axios.get("/api/days"),
      axios.get("/api/appointments"),
      axios.get("/api/interviewers")
    ])
      .then((all) => {
        setState(prev => ({...prev, days: all[0].data, appointments: all[1].data, interviewers: all[2].data }));
      });
  }, []);

  return {state, setDay, bookInterview, cancelInterview};
}