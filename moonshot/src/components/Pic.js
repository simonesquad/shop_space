//this component will be like individual display cards for the pictures drawn in from the api in theory
import React from "react";
import { useState } from "react";
import '../styles/Pic.css';
import {
    Card, 
    Button,
    ButtonGroup,
    Layout,
    Caption,
    Stack,
} from '@shopify/polaris';

const Pic = ({data}) => {
    const [like, setLike] = useState("like");
    const [love, setLove] = useState("love");

    return (
        <Layout.Section>
        <Card title={data.title} sectioned subdued>
            <Card.Section>
            <img className="main-img" src={data.url} alt="" />
            <Stack distribution="center">
                <ButtonGroup>
                <Button primary size="slim" onClick={(e) => setLike("Liked")}>{like}</Button>
                <Button destructive size="slim" onClick={(e) => setLove("Loved")}>{love}</Button>
                </ButtonGroup>
            </Stack>
            <Stack spacing="baseTight">
                <Caption>Date Taken: {data.date}</Caption>
            </Stack>
            </Card.Section>
        </Card>
        </Layout.Section>
    )
}

export default Pic