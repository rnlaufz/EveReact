import React from 'react';
import Footer from '../componets/Footer';
import Navigation from '../componets/Navigation';

const Book = () => {
    return (
        <div className="book-container">
            <Navigation/>
            <div className="card">

<div className="form-container">
    <form id="form">
        
        <div id="dates" className="dates-form-group">
            <h3>Select your dates:</h3>
            <div className="inputs-flex">
            <input type="date" id="arrival"  name="arrival" />
            <input type="date" id="departure"  name="departure" />
        </div>
          </div>
          <div className="selector" id="selector">
              <h3>Select your house:</h3>
              <select name="options" id="options">
                  <option value="Lake Cabin" id="cabin-one" className="default">Lake Cabin</option>
                  <option value="Woods Cabin" id="cabin-two">Woods Cabin</option>
                  <option value="Heels Cabin" id="cabin-three">Heels Cabin</option>
                  
                </select>
                <div id="selected">
                    <div className="description">
                        <h4 id="selected-house-title">Lake Cabin</h4>
                        <ul className="house-description" id="selected-house-description">
                            <li className="house-description-item" id="selected-house-address">Neverland Lake, 02</li>
                            <li className="house-description-item" id="selected-house-price">200$ per day</li>
                            <li className="house-description-item" id="selected-house-facilities">Facilities: plumbing, electrisity, telephone, bath</li>
                            <li className="house-description-item" id="selected-house-occupied">Occupied: no</li>
                        </ul>
                        <button id="selected-more" className="btn">View more</button>
                    </div>
                </div>
          </div>
          
          <div className="summary-container">
            <h4>Your summary</h4>
            <div 
            >
            <ul className="form-list-group" id="summary-list">
                <li className="form-list-group-item">Dates: from <span id="arrival-date" className="underlined"></span> to <span id="departure-date" className="underlined"></span> </li>
                <li className="form-list-group-item">Amount of days: <span id="days-total" className="underlined">0</span></li>
                <li className="form-list-group-item">Selected house: <span id="selected-house" className="underlined">Lake Cabin</span></li>
                <li className="form-list-group-item">Address of house: <span id="address-of-selected-house" className="underlined">Neverland Lake, 02</span></li>
                <li className="form-list-group-item">Price: <span id="total-price" className="underlined">0$</span></li>
            </ul>
        </div>
        </div>
        <button className="btn" type="submit">Leave a request</button>
    </form>
</div>
</div>
        <Footer/>
        </div>
    )
}


export default Book;