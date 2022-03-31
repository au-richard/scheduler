import React from "react";
import classNames from "classnames";
import "./DayListItem.scss";

export default function DayListItem(props) {
  const dayListClass = classNames("day-list__item", {
    "day-list__item--selected": props.selected,
    "day-list__item--full": props.spots === 0
  });

  const formatSpots = () => {
    if (props.spots === 0) {
      return <h3 className="text--light">no spots remaining</h3>;
    } else if (props.spots === 1) {
      return <h3 className="text--light">1 spot remaining</h3>;
    } else if (props.spots > 1) {
      return <h3 className="text--light">{props.spots} spots remaining</h3>;
    }
  } 

  return (
    <li 
    className={dayListClass} 
    onClick={props.setDay}>
      <h2 className="text--regular">{props.name}</h2>
      {formatSpots()};
    </li>
  );
}