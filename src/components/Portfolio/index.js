import React from "react";
import frideRaider from "../../assets/images/fride-raider-splash.JPG";
import xyzRental from "../../assets/images/xyz_rentals.jpg";
import runBuddy from "../../assets/images/run-buddy-splash.jpg";
import horiseonSplash from "../../assets/images/horiseon-splash.jpg";
import nmrb from "../../assets/images/NMRB.JPG";

function Portfolio() {
    return (
        <section id="projects" class="projects text-white">
    <div class="left">
    <h2 class="float-left">Projects</h2>
    </div>
    <div class="d-flex flex-wrap bg-dark">
    <a href="https://jamesbmahoney.github.io/recipe-builder/" target="_blank" rel="noreferrer"><img src={frideRaider} class="highlight float-left border" alt="fridge raider splash" width="700" height="300"></img></a>    
    <a href="https://secret-savannah-63468.herokuapp.com/" target="_blank" rel="noreferrer"><img src={xyzRental} class="highlight float-left border" alt="XYZ Rentals" width="600" height="300"></img></a>      
    <a href="https://jamesbmahoney.github.io/run-buddy/" target="_blank" rel="noreferrer"><img src={runBuddy} class="highlight float-left border" alt="run buddy splash" width="600" height="300" /></a>
    <a href="https://jamesbmahoney.github.io/horiseon-splash/" target="_blank" rel="noreferrer"><img src={horiseonSplash} class="highlight float-left border" alt="horiseon splash" width="600" height="300" /></a>    
    <a href="https://www.twitch.tv/nomorerandombattles" target="_blank" rel="noreferrer"><img src={nmrb} class="highlight float-left border" alt="NMRB twitch" width="800" height="300" /></a>    
    </div>    
  </section>
    );
};

export default Portfolio;