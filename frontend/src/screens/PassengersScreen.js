import React from 'react'
import '../css/passengersscreen.css'
import Passenger from '../Components/Passenger'
import { useSelector } from 'react-redux'

const PassengersScreen = ({history , match , location }) => {

    const id = match.params.id
    const seats = location.search? (location.search.split("-")[1]) : null


    const callFunction = () => {
        document.querySelector('.proceed-next').style.display = 'block'
        document.querySelector('.display').style.display = 'none'
    }

    const handleCart = (e) => {
        e.preventDefault();
        history.push('/billing')
    }


    return (
        <section id="passengers">
            <div className="form-container">
                <div className="content">
                    Please do read these :
                    <ul>
                        <li>Please do fill all the passengers details with appropriate details </li>
                        <li> Check this out to know the seating numbers naming convention - <a target='_blank' href="http://localhost:3000/images/air-seats.jpg">Click here</a> </li>
                        <li>Seating Numbers follows the following naming convention - <em>Row_Name Row_Number</em> (Ex-A01) </li>
                        <li>An Additional Ticket is required for all the children aged above 1 year</li>
                        <li>Refund Options Unavailable</li>
                    </ul>
                </div>
                <p className="enter"> Please do enter all the Passenger's details below </p>
                <Passenger callFunction = {callFunction}
                 seats={seats} id={id}/>
            </div>
            <div className="order-details">
                <p className="enter display">Fill all the passengers details to proceed to next page</p>
                <div className="container">
                    <button onClick={handleCart} className="proceed-next">Proceed to Cart</button>
                </div>
            </div>
        </section>
    )
}

export default PassengersScreen
