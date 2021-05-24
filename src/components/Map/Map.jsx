import React, { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import GoogleMapReact from 'google-map-react'
import LocationMarker from '../LocationMarker/LocationMarker'
import LocationBox from '../LocationBox/LocationBox'

const Map = ({ eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null)

  const markers = eventData.map((el) => {
    console.log(el.categories[0].title)
    if (el.categories[0].id === 8) {
      return (
        <LocationMarker
          key={uuidv4()}
          lat={el.geometries[0].coordinates[1]}
          lng={el.geometries[0].coordinates[0]}
          onClick={() => setLocationInfo({ id: el.id, title: el.title })}
        />
      )
    }
    return null
  })

  return (
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.REACT_APP_GOOGLE_MAP_KEY}` }}
        defaultCenter={center}
        defaultZoom={zoom}
      >
        {markers}
      </GoogleMapReact>
      {locationInfo && <LocationBox info={locationInfo} />}
    </div>
  )
}

Map.defaultProps = {
  center: {
    lat: 23.3265,
    lng: 33.8756,
  },
  zoom: 3,
}

export default Map
