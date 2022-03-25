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