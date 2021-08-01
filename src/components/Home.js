import React from 'react';

const Home = (props) => {
    const { word, font, background } = props;

    if (word === "home") {
        return (
            <div>
                <h2>Welcome!</h2>
            </div>
        );
    } else {
        if (isNaN(word)) {
            return (
                <div>
                    <h2 style={{color: font, backgroundColor: background}}>
                        The word is: {word}
                    </h2>
                </div>
            )
        } else {
            return (
                <div>
                    <h2>The number is: {word}</h2>
                </div>
            )
        }
    }
}

export default Home;