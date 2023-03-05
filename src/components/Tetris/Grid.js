import React from "react";

export default function tetGrid(props){
    const classes = `grid-square color-${props.color}`
  return <div className={classes} />
}