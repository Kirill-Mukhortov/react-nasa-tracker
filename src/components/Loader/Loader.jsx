import React from 'react'
import './loader.css'

const Loader = () => (
  <div className="loader">
    <div className="lds-spinner">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
    </div>
    <h1>Получаю данные с сервера...</h1>
  </div>
)

export default Loader
