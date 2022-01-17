// some kind of stylized landing(home) page here
import React from 'react'
import Pics from './Pics'
import '../styles/Main.css'
import {
    FooterHelp,
    Heading,
    Link,
} from '@shopify/polaris';

const Main = () => {
    return (
        <div>
            <div className="header">
            <Heading>Welcome to the Stars</Heading>
            </div>
            <Pics />
            <FooterHelp>
                Learn more about {' '}
                <Link external url="https://www.starz.com/us/en/">
                    science!
                </Link>
            </FooterHelp>
        </div>
    )
}

export default Main