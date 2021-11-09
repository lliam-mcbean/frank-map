import { useState, useEffect } from "react"
import { Marker } from "react-map-gl"

export default function Sector({lat, long, sector, problems, setSector, setAreaProblems}) {
    let [toggle, setToggle] = useState(false)
    const newSector = sector

    return (
        <Marker latitude={lat} longitude={long} onClick={() => {
            setToggle(toggle ? false : true)
            setSector(newSector)
            setAreaProblems(problems)
        }} className={'problem-marker'}>
            <h5>{sector}</h5>
        </Marker>
    )
}