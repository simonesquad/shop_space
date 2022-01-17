// some kind of stylized landing(home) page here
import React from 'react'
import Pics from './Pics'
import '../styles/Main.css'
import {
    FooterHelp,
    Link,
} from '@shopify/polaris';

const Main = () => {
    return (
        <div>
            <div className="header">
                <h2>Journey through the Starzzzz</h2>
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