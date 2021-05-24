import React from 'react'
import Icon from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const LocationMarker = ({ onClick }) => (
  <div role="button" tabIndex={0} className="location-marker" onClick={onClick} onKeyDown={onClick}>
    <Icon icon={locationIcon} className="location-icon" />
  </div>
)

export default LocationMarker
