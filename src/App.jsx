import React, { useEffect, useState } from 'react'
import './App.css'
import Map from './components/Map/Map'
import Loader from './components/Loader/Loader'
import Header from './components/Header/Header'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const res = await fetch(`${process.env.REACT_APP_NASA_API_URL}`)
      const { events } = await res.json()
      setEventData(events)
      setLoading(false)
    }
    fetchEvents()
  }, [])

  return (
    <div>
      <Header />
      {!loading ? <Map eventData={eventData} /> : <Loader /> }
    </div>
  )
}

export default App
