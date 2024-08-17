import React, { useEffect, useState } from 'react';
import axios from 'axios';

function About() {
  const [data, setData] = useState({ title: '', content: '' });

  useEffect(() => {
    axios.get('http://44.201.251.34:8000/api/about-us/')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}

export default About;
