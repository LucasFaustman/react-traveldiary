import React from 'react'
import data from './data'
import Navbar from './components/Navbar'
import Card from './components/Card'


export default function App() {
    const cards = data.map(element => {
        console.log(element)
        return (
            <Card 
            key = {element.id}
            {...element}
            
        />
    )})
    return (
        <div>
            <Navbar />
            
            {cards}
        </div>
    )
}