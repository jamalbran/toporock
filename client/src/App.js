import React, { useState, useEffect } from 'react';
import RouteList from './components/RouteList';
import './stylesheets/App.scss';
import axios from "axios";

const geoPosition = {
  longitude: null,
  latitude: null
}

const AppFunction = () => {

  const [data, setData] = useState([]);

  const [{longitude, latitude}, setLocalPosition] = useState(geoPosition)

  
  useEffect(() => {
      navigator.geolocation.getCurrentPosition(handlePosition);
  }, [])

  const handlePosition = async (event) => {
    setLocalPosition({
      longitude : event.coords.longitude,
      latitude : event.coords.latitude, 
    })

    const response = await axios.get(`https://www.mountainproject.com/data/get-routes-for-lat-lon?lat=${event.coords.latitude}&lon=${event.coords.longitude}&maxDistance=3000&minDiff=5.6&maxDiff=5.10&key=200719178-8e0de0f7ec53dfe8e72e54c34f99e721`);
    setData(response.data.routes)
  }

  const markers = data.map((route) => ({
      itemCoor: [route.latitude, route.longitude],
      itemName: route.name,
      itemUrl:route.url
    }) 
  )

  return(
  <div className ="wrapper">
    <header className="header">
      <h1>TopoRock</h1>
    </header>

    {data!==[]?
      <RouteList
        data = {data}
        latitude = {latitude}
        longitude = {longitude}
        markers={markers}
      />
      : <div><p>Wait</p></div>
    }
  </div>
  )
}
  
export default AppFunction;