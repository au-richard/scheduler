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
  const selectedInterview = {};
  if (interview) {
    selectedInterview["student"] = interview.student;
    selectedInterview["interviewer"] = state.interviewers[interview.interviewer];
    return selectedInterview;
  }
  return null;
}

export function getInterviewersForDay(state, day) {
  if (state.days.length === 0) {
    return [];
  }
  const selectedDay = state.days.find(
    (dayInWeek) => dayInWeek.name === day
  )
  if (selectedDay === undefined) return [];
  const interviewers = selectedDay && selectedDay.interviewers.map((id) => state.interviewers[id]);
  return interviewers;
}