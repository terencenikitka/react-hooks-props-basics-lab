import React from "react";
import Links from "./Links";
function About(props) {
  let check
  if ( props.bio){check=<p>{props.bio}</p>}
  return (
    <div id="about">
      <h2>About Me</h2>
      {check}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <Links github = {props.github} linkedin={props.linkedin}/>
    </div>
  );
}

export default About;
