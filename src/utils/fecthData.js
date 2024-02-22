export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': process.env.REACT_API,
      'X-RapidAPI-Host': 'exerciseapi3.p.rapidapi.com'
    }
  };
  
  export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();
  
    return data;
  };
  