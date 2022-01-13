//this component will be like individual display cards for the pictures drawn in from the api in theory
import { useState } from "react";
import '../styles/Pic.css';

const Pic = ({data}) => {
    const [like, setLike] = useState("like");
    const [love, setLove] = useState("love");

    return (
        <div className="container">
            <div className="flic">
            <img className="main-img" src={data.url} alt="" />
            <div className="details">
                <h3 className="title">{data.title}</h3>
                <p className="date">{data.date}</p>
                <div className="heart"><button onClick={(e) => setLike("Liked")}>{like}</button></div>
                <div className="heart"><button onClick={(e) => setLove("Liked")}>{love}</button></div>
            </div>
        </div>
    </div>
    )
}

export default Pic