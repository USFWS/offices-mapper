import React from 'react'

const AboutView = props => (
  <div className='about-view'>
    <h2>About this map</h2>

    <h3>Privacy</h3>

    <p>The 'Find nearest offices' tool will request access to your current location. If you grant access the coordinates of your current location will be used to find the 10 closest USFWS offices in the Southeast Region. This location data is only used on the client (in your web browser) and is never transimitted back to the U.S. Fish and Wildlife Service. Data on nearest offices may be stored in your brower's local storage for future visits to the application.</p>

    <h3>Map Layers</h3>

    <p>The code used to create this map is in the public domain. You can <a href='https://github.com/USFWS/offices-mapper'>download a copy on GitHub</a>.</p>
  </div>
);

export default AboutView;
