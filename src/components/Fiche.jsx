/* eslint-disable react/prop-types */
import { useState } from 'react'
import './Fiche.css'



function Fiche({ firstName, lastName, image, backGround }) {

    const [donnut, setDonnut] = useState(0)
    const handleClick = () => {
        setDonnut(donnut + 1)
    }

    return (
        <div className="fiche-container">
            <div className="fiche-background" style={{ backgroundImage: backGround }} ></div>
            <img src={image} alt={firstName} />
            <div className='name-donnut'>
                <h3>{firstName} {lastName}</h3>
                <button onClick={handleClick}>{donnut} <img src="/images/donut.png" alt="donnut" /></button>
            </div>
        </div >)
}

export default Fiche