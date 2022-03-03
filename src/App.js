import React, { useEffect } from 'react';

function App() {
  const getNews = async () => {
    const req = await axios.get('https://news.ycombinator.com/')
    const data = await req.json()
    console.log(data);
  }

  useEffect(() => {
    getNews()
  }, [])
  
  return (<div></div>);
}

export default App;
