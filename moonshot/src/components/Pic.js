//this component will be like individual display cards for the pictures drawn in from the api in theory
import React from "react";
import { useState } from "react";
import '../styles/Pic.css';
import {
    Card, 
    Button,
    Layout,
    Caption,
} from '@shopify/polaris';

const Pic = ({data}) => {
    const [like, setLike] = useState("like");
    const [love, setLove] = useState("love");

    return (
        <Layout.Section>
        <Card title={data.title} sectioned subdued>
            <div className="flic">
            <img className="main-img" src={data.url} alt="" />
            <div className="details">
                <Button primary size="slim" onClick={(e) => setLike("Liked")}>{like}</Button>
                <Button destructive size="slim" onClick={(e) => setLove("Loved")}>{love}</Button>
                </div>
                <div className="date">
                <Caption>Date Taken: {data.date}</Caption>
                </div>
        </div>
    </Card>
</Layout.Section>
    )
}

export default Pic