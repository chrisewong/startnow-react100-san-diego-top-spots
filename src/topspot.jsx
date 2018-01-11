import React from 'react';



export default props => (
  <div className='col-lg-8 col-lg-offset-2'>
    <div className='well'>
      <h4>{props.name}</h4>
      <p>{props.description}</p>
      <a className='btn btn-primary' role='button' href={'https://maps.google.com/?q=' + props.location[0] + ',' + props.location[1]}>See on Google Maps</a>
    </div>
  </div>
);
