import React from 'react';
// Componets
import Footer from '../componets/Footer';
import Navigation from '../componets/Navigation';
// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSnowflake } from '@fortawesome/free-solid-svg-icons';
import { faMapSigns } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Import images
import imgOne from '../dist/img/landscape-mountains-snow.jpeg';
import imgTwo from '../dist/img/night-cabin-woods.jpeg';
import imgThree from '../dist/img/wooden-road.jpeg';
import imgFour from '../dist/img/winter-cabins-stars.jpeg';
import imgFive from '../dist/img/winter-hands-mug.jpeg';
import imgSix from '../dist/img/winter-bench.jpg';
import imgSeven from '../dist/img/cabin-woods-green.jpeg';
import imgEight from '../dist/img/yellow-cabin-winter-woods.jpeg';
import imgNine from '../dist/img/cabin-forest-lake.jpeg';

 const About = () => {
    return (
        <div className="about-container">
            <Navigation/>
        <div className="desc">
            <h1>About Us</h1>
            <div>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati quaerat sequi, similique a magni alias, mollitia ratione quidem, quod labore laudantium quasi cum modi. Iure odit corrupti, voluptatibus soluta itaque praesentium officiis incidunt expedita laborum nobis! Hic repudiandae, omnis nisi voluptatem, quam blanditiis maiores delectus itaque commodi deleniti illum impedit quas quidem accusantium ex. Facere error quae sint? Hic?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo obcaecati quaerat sequi, similique a magni alias, mollitia ratione quidem, quod labore laudantium quasi cum modi.</p>
        </div>
    </div>
       <div className="gallery">
               <div><img src={imgOne} alt='' /></div>
               <div><img src={imgTwo} alt='' />
            </div>       
               <div><img src={imgThree} alt='' />
            </div>       
               <div><img src={imgFour} alt='' />
            </div>       
               <div><img src={imgFive} alt='' />
            </div>       
               <div><img src={imgSix} alt='' />
            </div>       
               <div><img src={imgSeven} alt='' />
            </div>       
               <div><img src={imgEight} alt='' />
            </div>       
               <div><img src={imgNine} alt='' />
            </div>       
       </div> 
       <div className="cards">
           <div className="company">
            <FontAwesomeIcon icon={faSnowflake} />
               <h3>Cozy Eve</h3>
               <p>Resort booking company</p>
           </div>
           <div className="location">
           <FontAwesomeIcon icon={faMapSigns} />
               <h3>Find Us</h3>
               <p>Neverland,
                   <br/>
                   Neverregion,
                   <br/>
                   Nevercity.
               </p>
           </div>
           <div className="contacts">
           <FontAwesomeIcon icon={faEnvelope} />
               <h3>Contact Us</h3>
               <p>Phone: +0-000-00-00
                   <br/>
                  Email: cozyeve@eg.com
               </p>
           </div>
       </div>
        <Footer/>
    </div>
    )
}


export default About;