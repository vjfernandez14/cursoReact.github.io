import React,{useEffect} from 'react'

const Pais = () => {

    useEffect(() => {
      const link = 'https://restcountries.com/v3.1/name/argentina';

      
      fetch(link).then(response => {
        return response.json();
    })
        .then(data => {
        console.log(data);
    });
    
    }, [])
    

  return (
    <div>Pais</div>
  )
}

export default Pais