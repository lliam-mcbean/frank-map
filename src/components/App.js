import { useState, useEffect } from 'react';
import './App.css';
import Map from './Map';

function App() {
  let [sector, setSector] = useState('')
  let [areaProblems, setAreaProblems] = useState([])
  let [newProblems, setNewProblems] = useState([])

  useEffect(() => {
        const problemFiller = areaProblems.map((el) => {
               return (
                <div className={`problem ${el.name}`}>
                    <h6>{el.name}</h6>
                    <h6>{el.grade}</h6>
                    <h6>{el.description}</h6>
                </div> 
               )
        })

        setNewProblems(problemFiller)
    
    }, [areaProblems])

  return (
    <div>
      <Map setSector={setSector} setAreaProblems={setAreaProblems}/>
      <div className={'info-container'} >
        <h4>Area: {sector}</h4>
        {newProblems}
      </div>
    </div>

  );
}

export default App;
