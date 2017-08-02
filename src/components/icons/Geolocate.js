import React from 'react';

const Geolocate = ({loading}) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 90 90" className={`geolocate-icon icon ${loading}`} aria-labelledby="title"><title id='title'>Geolocate Icon</title><path d="M40.9.038v8.4c-17.1 1.9-30.5 15.4-32.5 32.5H0v8.2h8.4c1.9 17.1 15.4 30.5 32.5 32.5v8.5h8.2v-8.4c17.1-1.9 30.5-15.4 32.5-32.5H90v-8.2h-8.4c-1.9-17.1-15.4-30.5-32.5-32.5v-8.5h-8.2zm4.1 14.3c1.1 0 2.3.1 3.4.2 15.5 1.7 27.3 14.9 27.3 30.5 0 15.5-11.6 28.6-27 30.4-.8.1-1.7.2-2.5.2h-1.1c-1.2 0-2.5-.1-3.7-.2-15.4-1.9-27-14.9-27-30.4 0-15.6 11.7-28.7 27.2-30.5.8-.1 1.5-.2 2.3-.2H45zm0 10.2c-11.3 0-20.5 9.2-20.5 20.5s9.2 20.5 20.5 20.5 20.5-9.2 20.5-20.5-9.2-20.5-20.5-20.5z"/></svg>
  )
}

export default Geolocate;
