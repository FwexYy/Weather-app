import { useState, useEffect } from "react";

export const useGeolocation = () =>{
    const [location, setLocation] = useState({lat:null, lon:null})
    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition((position) => {
                setLocation({lat: position.coords.latitude, lon: position.coords.longitude})
              });
          } else {
            console.log('hui')
          }
    }, [])
    return location;
}