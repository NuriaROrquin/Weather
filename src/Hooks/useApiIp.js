import { useCallback, useEffect, useState } from 'react';

export default function useApiIp() {

  const [ipData, setIpData] = useState({ city: '', country: '' })
    
  const getIp = useCallback(async () => {
    return fetch('https://ipapi.co/json/')
    .then(function(response) {
      response.json().then(jsonData => {
        setIpData(() => {return { city: `${jsonData.city}`, country: `${jsonData.country_name}`}})
      });
    })
    .catch(function(error) {
      console.log(error)
    });
  }, [])
  
  useEffect(() => {
    getIp();
  },[getIp])

  return { ipData }
}
