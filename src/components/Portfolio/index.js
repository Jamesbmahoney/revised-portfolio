import React from "react";
import bgImage from "../../assets/images/tech_bg.png";
import frideRaider from "../../assets/images/fride-raider-splash.JPG";
import xyzRental from "../../assets/images/xyz_rentals.jpg";
import runBuddy from "../../assets/images/run-buddy-splash.jpg";
import horiseonSplash from "../../assets/images/horiseon-splash.jpg";
import nmrb from "../../assets/images/NMRB.JPG";
import { Container, Card } from "react-bootstrap";

function Portfolio() {
  return (
    <section id="portfolio" className="text-white bg-dark" >
      <h2 class="text-center">Portfolio</h2>
      <Container fluid >
        <Card style={{ backgroundImage: `url(${bgImage})` }}>
          <div>
            <a
              href="https://jamesbmahoney.github.io/recipe-builder/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={frideRaider}
                alt="fridge raider splash"
                width="400"
                height="200"
              ></img>
            </a>
          </div>
          <div>
            <a
              href="https://secret-savannah-63468.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={xyzRental}
                class="highlight float-left border"
                alt="XYZ Rentals"
                width="700"
                height="300"
              ></img>
            </a>
          </div>
          <div>
            <a
              href="https://jamesbmahoney.github.io/run-buddy/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={runBuddy}
                class="highlight float-left border"
                alt="run buddy splash"
                width="500"
                height="300"
              />
            </a>
          </div>
          <div>
            <a
              href="https://jamesbmahoney.github.io/horiseon-splash/"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={horiseonSplash}
                class="highlight float-left border"
                alt="horiseon splash"
                width="600"
                height="300"
              />
            </a>
          </div>
          <div>
            <a
              href="https://www.twitch.tv/nomorerandombattles"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src={nmrb}
                class="highlight float-left border"
                alt="NMRB twitch"
                width="900"
                height="300"
              />
            </a>
          </div>
        </Card>
      </Container>
    </section>
  );
}

export default Portfolio;
