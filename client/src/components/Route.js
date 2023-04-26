import React, { Fragment } from 'react';
import imageNotFound from '../images/imageNotFound3.jpg';

const Route = (props) => {

  const routePhoto = props.photo ? props.photo : imageNotFound
    
  return (
    <Fragment>
      <li className="route" id={props.key}  >
        <h2>{props.name}</h2>
        <img src={routePhoto} alt={props.name} />
        <p>Location: {props.location.join(', ')}</p>
        <p>Difficulty: {props.rating}</p>
        <p>Stars: {props.stars}</p>
        <p>Type: {props.type}</p>
        <p>Click<a href={props.url}>here</a>to go to route page.</p>   
      </li>
    </Fragment>
  );
}

export default Route;