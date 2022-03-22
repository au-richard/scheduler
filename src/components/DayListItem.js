import React from "react";
import classNames from "classnames";

import "./DayListItem.scss";


export default function DayListItem(props) {
  const dayListClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });
  const formatSpots = () => {
    // if (props.spots === 0) {
    //   props.spots = "no";
    // } else if (props.spots === 1) {
    // } else {
    // }
    
  }
  return (
    <li 
    className={dayListClass} 
    onClick={() => props.setDay(props.name)}>
      <h2>{props.name}</h2>
      <h3>{props.spots === 0 ? "no spots remaining" : props.spots === 1 ? "1 spot remaining" : "2 spots remaining"}</h3>
    </li>
  );
}
    //   <h3>{props.spots} spots remaining</h3>
    //   <h3>{props.spots} spot remaining</h3>

    //   <h3>{props.spots} spots remaining</h3>
