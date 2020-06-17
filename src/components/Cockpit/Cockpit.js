import React, { useEffect } from "react";

import classes from "./Cockpit.css";

const cockpit = (props) => {
  useEffect(() => {
    console.log("[cockpit.js] useEffect");

    const timer = setTimeout(() => {
      alert("saved data to cloud");
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log("[cockpit.js] cleanup work in useEffect");
    };
  }, []);

  useEffect(() => {
    console.log("[cockpit.js] useEffect TWO POINT O");

    return () => {
      console.log("[cockpit.js] cleanup work in ttttooowww useEffect");
    };
  });

  const assignedClasses = [];
  let btnClass = "";
  if (props.showPersons) {
    btnClass = classes.Red;
  }

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
  }
  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(" ")}>This is really working!</p>
      <button className={btnClass} onClick={props.clicked}>
        Toggle Persons
      </button>
    </div>
  );
};

export default React.memo(cockpit);
