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
        <div>
          <Navbar/>
        </div>
        <div className="box-home">
            <p className="text-home">
             ¡Bienvenid@!, aquí podrás aprender sobre las<br></br>
             Coronal Mass Ejection conocidas hasta la fecha <br></br>
             y obtenidas gracias a la NASA. Se pueden consultar <br></br>
             por fecha, velocidad y más.<br></br><br></br>
             Pero ¿Qué es una CME?...es una onda formada por<br></br>
             materia y radiación electromagnética proveniente<br></br>
             del Sol, que va más allá de su superficie. 
             </p>
          
            <img src={ImgGif} alt="Coronal Mass Ejection" className="img-cme"></img>
        </div>
      </section>
    );
  }
}
  
  export default Home;