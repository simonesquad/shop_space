//this component will be like individual display cards for the pictures drawn in from the api in theory
import React from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
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
                <FormControlLabel
                    control={<Checkbox icon={<FavoriteBorder />} 
                    checkedIcon={<Favorite />}
                    name="checkedH" />}
                    label="Take Me Across The Universe"
                />
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