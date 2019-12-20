import React, { Component } from 'react';
import './Home.scss';

import Navbar from '../Utils/Navbar/Navbar'
import ImgGif from './img/cme_sun.gif'

class Home extends Component {
    // componentDidMount = ()=>{
       
    
    //         fetch('https://api.nasa.gov/DONKI/CMEAnalysis?startDate=2016-09-01&endDate=2019-09-30&catalog=ALL&api_key=1qKDxv55zICsKKnsPKcTHW35m6dROjKl3lYdyxal')
    //         .then(function(response) {
    //             return response.json();
    //         })
    //         .then(function(myJson) {
    //             console.log(myJson);
    //         })
        
    // }
    render() {
    return (
      <section className="home-section">
        <Navbar/>
        <div className="box-home">
          <div>
             <p>
             ¡Bienvenid@!, aquí podrás conocer sobre las ejecciones <br></br>
             de masa coronal conocidas hasta la fecha.<br></br>
             Se pueden consultar por fecha, velocidad, etc.<br></br>
             ¡Bienvenid@!, aquí podrás conocer sobre las ejecciones <br></br>
             de masa coronal conocidas hasta la fecha.<br></br>
             Se pueden consultar por fecha, velocidad, etc.
             </p>
          </div>
          <div>
            <img src={ImgGif} alt="Coronal Mass Ejection"></img>
          </div>

        </div>
      </section>
    );
  }
}
  
  export default Home;