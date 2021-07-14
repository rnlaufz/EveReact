import React, {useState, useEffect} from 'react';
import Footer from '../componets/Footer';
import Navigation from '../componets/Navigation';

const Book = () => {

    const [formData, setFormData] = useState({
        arrival:  "",
        departure: "",
        amountOfDays: '',
        house: 'Lake Cabin',
        houseData: {
            houseName: '',
            pricePerDay: 0,
            facilities: [],
            occupied: false,
            images: [],
            bgImage: ''
        }
    });

    const {arrival, departure, amountOfDays, house} = formData;

    // If arrival or departure days get changed, days counted
    useEffect(() => {
        countDays()
    }, [arrival, departure])

  

    // Prevent selecting past days
    let currentDate = new Date()
    const preventPast = (date) => {
        let today = new Date(date);
        let month = '' + (today.getMonth() + 1);
        let day = '' + today.getDate();
        let year = today.getFullYear();

    if(month.length < 2){
        month = '0' + month;
    }    

    if(day.length < 2) {
        day = '0' + day;
    }

    return [year, month, day].join('-');
    }

    const minDate = preventPast(currentDate);

    // Get arrival and departure days
    const getDays =  e => setFormData({...formData, [e.target.name]: e.target.value});

    // Count days
    const countDays = () => {
            let arrDay = new Date(arrival);
            let depDay = new Date(departure);
            setFormData({...formData, amountOfDays: (depDay - arrDay) / (1000 * 3600 * 24)});
    }

    // Get house
    const getHouse = (e) => {
        setFormData({...formData, house: e.target.value});
    }

    // Send request with house title to get data from DB
    const callHouseData = (title) => {
        return true
    }


    return (
        <div className="book-container">
            <Navigation/>
            <div className="card">

<div className="form-container">
    <form id="form">
        
        <div id="dates" className="dates-form-group">
            <h3>Select your dates:</h3>
            <div className="inputs-flex">
            <input type="date" id="arrival"  name="arrival" min={minDate} value={arrival} onChange={e => getDays(e)}   />
            <input type="date" id="departure"  name="departure" min={minDate} value={departure} onChange={e => getDays(e)}  />
        </div>
          </div>
          <div className="selector" id="selector">
              <h3>Select your house:</h3>
              <select name="options" id="options" value={house} onChange={e=>getHouse(e)} >
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
                <li className="form-list-group-item">Amount of days: <span id="days-total" className="underlined">{amountOfDays ? amountOfDays : 0}</span></li>
                <li className="form-list-group-item">Selected house: <span id="selected-house" className="underlined">{house}</span></li>
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