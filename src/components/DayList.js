import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  const listDays = props.days.map(singleDay => {
    console.log("single day", singleDay);
    return (
      <DayListItem
        key={singleDay.id}
        name={singleDay.name} 
        spots={singleDay.spots} 
        selected={singleDay.name === props.day}
        setDay={singleDay.setDay} 
      />);
  });

  return (
    <ul>
      {listDays}
    </ul>
  );
} 