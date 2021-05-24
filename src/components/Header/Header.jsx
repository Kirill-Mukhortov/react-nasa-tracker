import React from 'react'
import Icon from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'

const Header = () => (
  <header className="header">
    <h1>
      <Icon icon={locationIcon} />
      Локатор лесных пожаров (Разработано на NASA API)
    </h1>
  </header>
)

export default Header
