//this component will be like individual display cards for the pictures drawn in from the api in theory
import { useState } from "react";
// import '../styles/Pic.css';
import {
    Card, 
    Button,
    Layout,
} from '@shopify/polaris';

const Pic = ({data}) => {
    const [like, setLike] = useState("like");
    const [love, setLove] = useState("love");

    return (
        <Layout.Section secondary>
        <Card title={data.title} sectioned>
            <div className="flic">
            <img className="main-img" src={data.url} alt="" />
            <div className="details">
                {/* <h3 className="title">{data.title}</h3> */}
                <p className="date">{data.date}</p>
                <div className="heart"><Button primary onClick={(e) => setLike("Liked")}>{like}</Button></div>
                <div className="heart"><Button primary onClick={(e) => setLove("Liked")}>{love}</Button></div>
            </div>
        </div>
    </Card>
</Layout.Section>
    )
}

export default Pic