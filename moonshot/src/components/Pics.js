import React, { useState, useEffect } from 'react'
import axios from "axios";
import Pic from '../Pic';

const Pics = () => {
    const [details, setDetails] = useState([]);

    const getData = async () => {
        const res = await axios.get(`https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=i0R3ve16C6PKpMrCuEil7aa4feKcb03BjGybJjZb`);
        console.log(res.data);
        const data = res.data;
        setDetails(data)

    }

    useEffect(() => {
        getData()
    }, [])

    return (
        <div className="pics">

            { loading ?
                details.map((data) => <Pic data={data} />) : 'Loading'
            }

        </div>
    )
}

export default Pics