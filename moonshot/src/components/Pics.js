import React, { useState, useEffect } from 'react'
import axios from "axios";
import Pic from './Pic';

const Pics = () => {
    const [details, setDetails] = useState([]);

    const getData = async () => {
        // const toArray = [];
        try {
            const url = `https://api.nasa.gov/planetary/apod?start_date=2020-07-02&end_date=2020-09-08&api_key=i0R3ve16C6PKpMrCuEil7aa4feKcb03BjGybJjZb`
            const res = await axios.get(url)
            console.log(res.data);
            const data = res.data;
            setDetails(data)
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData()
    }, []);

    return (
        <div className="pics">

            <div className="gallery">

                { 
                    details.map((data) => <Pic data={data} />)
                }

            </div>
        </div>
    )
}

export default Pics