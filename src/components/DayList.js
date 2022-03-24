import React from "react";
import DayListItem from "./DayListItem";

export default function DayList(props) {
  console.log("props passed", props)
  const listDays = props.days.map(singleDay => {
    return (
      <DayListItem
        key={singleDay.id}
        name={singleDay.name} 
        spots={singleDay.spots} 
        selected={singleDay.name === props.value}
        // setDay={props.setDay} 
        setDay={() => props.onChange(singleDay.name)}
      />);
  });

  return (
    <ul>
      {listDays}
    </ul>
  );
} 