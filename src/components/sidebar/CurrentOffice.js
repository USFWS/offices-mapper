import React from 'react';

import Links from './Links';

const CurrentOffice = ({ office }) => {
  const buildImageUrl = name =>
    `https://usfws.github.io/southeast-mega-map/images/${name}`;
  return (
    <div className="content-detail">
      {office.image
        ? <img src={buildImageUrl(office.image)} alt={office.alt} />
        : null}
      <h2>
        {office.name}
      </h2>
      <Links office={office} />
      <p dangerouslySetInnerHTML={{ __html: office.narrative }} />

      <h3>Address</h3>
      <address>
        {office.address} <br />
        {office.city}, {office.state}
      </address>
    </div>
  );
};

export default CurrentOffice;
