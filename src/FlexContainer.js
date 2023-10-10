import React from 'react';
import './FlexContainer.css';
import Noodle from './Noodle.png';
import Pasta from './Pasta.png';
import Salad from './salad.png';
import Salad1 from './salad1.png';
import Smoothies from './smoothies.png';

function FlexContainer() {
    return (
        <div>
            <h1>Choose Your Favorite</h1>
            <div className='flex-container'>
                <div className='flex-item'>
                <img src={Noodle} alt='Sesame Noodle Bowls' />
                    <p>Sesame Noodle Bowls</p>
                </div>
                <div className='flex-item'>
                <img src={Pasta} alt='Pasta' />
                    <p>Pesto Pasta With Tomatoes</p>
                </div>
                <div className='flex-item'>
                <img src={Salad} alt='Fresh Vegetable Salad' />
                    <p>Fresh </p>
                </div>
                <div className='flex-item'>
                <img src={Salad1} alt='Grilled Chicken Salad' />
                    <p>Grilled Chicken Salad</p>
                </div>
                <div className='flex-item'>
                <img src={Smoothies} alt='Berries Smoothies' />
                    <p>Berries Smoothies</p>
                </div>
            </div>
        </div>
    );
}

export default FlexContainer;
