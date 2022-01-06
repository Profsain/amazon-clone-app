import React from 'react'
import '../styles/Slider.css'
import {Carousel} from 'react-carousel-minimal'

function Slider() {
    const data = [
        {
            image: "https://m.media-amazon.com/images/I/61lJ3xlQX2L._SX3000_.jpg"
        },
        {
            image: "https://m.media-amazon.com/images/I/61jovjd+f9L._SX3000_.jpg"
        },
        {
            image: "https://m.media-amazon.com/images/I/61DUO0NqyyL._SX3000_.jpg"
        },
        {
            image: "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3740_.jpg"
        },
        {
            image: "https://m.media-amazon.com/images/I/71qid7QFWJL._SX3000_.jpg"
        },
        {
            image: "https://m.media-amazon.com/images/I/711Y9Al9RNL._SX3740_.jpg"
        },


    ]
    return (
        <div className='slider'>
            <Carousel
            data={data}
            time={5000}
            width="100%"
            height="600px"
            // slideNumber={true}
            automatic={true}
            pauseIconColor="white"
            pauseIconSize="70px"
            slideBackgroundColor="darkgrey"
            slideImageFit="cover"
          />
        </div>
    )
}

export default Slider
