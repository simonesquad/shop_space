//this component will be like individual display cards for the pictures drawn in from the api in theory
import React from "react";
import { useState } from "react";
// import '../styles/Pic.css';
import {
    Card, 
    Button,
    Layout,
    TextField,
} from '@shopify/polaris';

const Pic = ({data}) => {
    const [like, setLike] = useState("like");
    const [love, setLove] = useState("love");

    return (
        <Layout.Section>
        <Card title={data.title} sectioned>
            <div className="flic">
            <img className="main-img" src={data.url} alt="" />
            <div className="details">
                {/* <h3 className="title">{data.title}</h3> */}
                <TextField
                    value={data.date}
                    label="Date Taken:"
                    placeholder="Date"
                />
                {/* <p className="date">{data.date}</p> */}
                <Button primary onClick={(e) => setLike("Liked")}>{like}</Button>
                <Button destructive onClick={(e) => setLove("Loved")}>{love}</Button>
            </div>
        </div>
    </Card>
</Layout.Section>
    )
}

export default Pic