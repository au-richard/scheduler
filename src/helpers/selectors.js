export function getAppointmentsForDay(state, day) {
  if (state.days.length === 0) {
    return [];
  }
  const selectedDay = state.days.find(
    (appointments) => appointments.name === day
  )
  if (selectedDay === undefined) return [];
  const appointments = selectedDay && selectedDay.appointments.map((id) => state.appointments[id]);
  return appointments;
}

export function getInterview(state, interview) {
  // console.log("## state", state);
  // console.log("## interview", interview);
  
  const selectedInterview = {};
  if (interview) {
    selectedInterview["student"] = interview.student;
    selectedInterview["interviewer"] = state.interviewers[interview.interviewer];
    // console.log("## Select Interview", selectedInterview);
    return selectedInterview;
  }
  return null;
}

export function getInterviewersForDay(state, day) {
  if (state.days.length === 0) {
    return [];
  }
  const selectedDay = state.days.find(
    (interviewers) => interviewers.name === day
  )
  if (selectedDay === undefined) return [];
  const interviewers = selectedDay && selectedDay.interviewers.map((id) => state.interviewers[id]);
  return interviewers;
}