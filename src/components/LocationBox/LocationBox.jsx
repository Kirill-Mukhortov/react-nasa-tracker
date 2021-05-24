import React from 'react'

const LocationBox = ({ info }) => (
  <div className="location-info">
    <h2>Информация о событии</h2>
    <ul>
      <li>
        ID:&nbsp;
        <strong>{info.id}</strong>
      </li>
      <li>
        TITLE:&nbsp;
        <strong>{info.title}</strong>
      </li>
    </ul>
  </div>
)

export default LocationBox
