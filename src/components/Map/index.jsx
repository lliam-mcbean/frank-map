import React, { useRef, useEffect, useState, useCallback } from 'react';
import ReactMapGL, {Source, Marker} from 'react-map-gl'
import data from '../../data/frank.json'
import Sector from './Sector';

export default function Map({setSector, setAreaProblems}) {
    let [problems, setProblems] = useState([])
    let [viewport, setViewport] = useState({
        height: window.innerHeight,
        width: window.innerWidth * 0.7,
        latitude: 49.59,
        longitude: -114.378125,
        zoom: 13,
        minZoom: 13,
        pitch: 40
    })

    useEffect(() => {
        const mappedData = data.map((element) => {
            
            return (
                <Sector lat={element.lat} long={element.long} problems={element.problems} sector={element.sector} setSector={setSector} setAreaProblems={setAreaProblems}/>
            )
        })
        setProblems(mappedData)
    }, [])

    const onMapLoad = useCallback(evt => {
      const map = evt.target;
      map.setTerrain({source: 'mapbox-dem', exaggeration: 1.5});
    }, []);

    return (
    <ReactMapGL
      {...viewport}
      mapStyle={'mapbox://styles/lliammcbean/ckvsbrp7a0w3f14kk4s0eoqo4'}
      mapboxApiAccessToken="pk.eyJ1IjoibGxpYW1tY2JlYW4iLCJhIjoiY2toZmM3amgyMG8wejJzcXBhMXZrZmNobiJ9.RU-E8O0uVhJUEPx92MHVlA"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      onLoad={onMapLoad}
      width="70vw"
      height="100vh"
    >
        <Source
          id="mapbox-dem"
          type="raster-dem"
          url="mapbox://mapbox.mapbox-terrain-dem-v1"
          tileSize={512}
          maxzoom={14}
        />
        {problems}
    </ReactMapGL>
    )
}