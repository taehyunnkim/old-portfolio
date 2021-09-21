import * as React from 'react';
import Logo from '../images/logo.png';
import "@fontsource/playfair-display"

const UnderConstructionPage = () => {
    return(
        <div     
            style={{
                display: `flex`,
                width: `100%`,
                height: `100vh`,
                margin: `0`,
                flexDirection: `column`,
                justifyContent: `center`,
                alignItems: `center`
            }}
        >
            <img src={Logo} 
                style={{
                    width: `160px`,
                }}
            />
            <h1
                style={{
                    fontFamily: `Playfair Display`,
                    fontSize: `32px`,
                    marginBottom: `0`
                }}
            >TaeHyun Kim</h1>
            <h2 
                style={{
                    fontFamily: `Playfair Display`,
                    fontSize: `14px`
                }}
            >The site is under construction.</h2>
        </div>
    )
}

export default UnderConstructionPage;