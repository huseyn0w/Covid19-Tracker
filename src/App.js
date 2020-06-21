import React, {Fragment, useState, useEffect} from 'react';
import './App.css';
import {fetchData} from './api/api';

import { HeaderLogo } from './components/HeaderLogo';
import { Cards } from './components/Cards';
import { Dropdown } from './components/Dropdown';
import { Graph } from './components/Graph';


function App() {

  const [state, setState] = useState(false);
  const [currentCountry, setCurrentCountry] = useState('Global');

  useEffect(() => {

    (async function getApiData() {
      const data = await fetchData(currentCountry);
      // console.log(data);
      setState(data);
    })()

    
  }, [currentCountry]);

 
  let content = 'Start point';

  const hangleChangeCountry = (e) => {
    // console.log(e);
    setCurrentCountry(e);
  }

  if(state) {
    content = (
      <Fragment>
        <HeaderLogo />
        <Dropdown data={state} onChangeCountry={(e) => hangleChangeCountry(e)} currentCountry={currentCountry} />
        <Cards data={state} />
        <Graph data={state} country={currentCountry} />
      </Fragment>
    )
  }
 

  return (
    <div className="container">
      {content}
    </div>
  );
}

export default App;
