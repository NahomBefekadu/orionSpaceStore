import React from "react";
import "./Home.css";
import Product from "../Product/Product";
function Home() {
  return (
    <div className="Home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://i.pinimg.com/originals/4a/ad/05/4aad052e750140294cec7d3b2b317853.jpg"
          alt="banner"
        />

        <div className="home__row">
          <Product
            id="241543"
            title="Orion space craft v2.078"
            image="https://i.pinimg.com/originals/74/e1/2f/74e12f9c0a3a2ec50dadd2524515e004.jpg"
            price={1999}
            rating={2}
          />
          <Product
            id="846411321"
            title="Orion sentinal, sleek design with asteroid warranty, operable in sector 5 and 6"
            image="https://www.denofgeek.com/wp-content/uploads/2015/06/space-ships.png?resize=768%2C432"
            price={238519}
            rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="21658465"
            title="Orion garbage collector v5.068, robust and compact design, 24 light years on single charge"
            image="https://artignition.com/wp-content/uploads/2017/06/Toni-Jacobs-Science-Fiction-Battleship.jpg"
            price={238519}
            rating={4}
          />
          <Product
            id="5234462"
            title="Orion Ore extractor, able to scan nearby quadrants for specified ores"
            image="https://developerfreaks.com/unity/S/scifi-spaceships-fleet-10254/scifi-spaceships-fleet-10254-001-scaled.jpg"
            price={238519}
            rating={4}
          />
          <Product
            id="821216544562"
            title="Orion cruiser, top speeds of up to 10 light years"
            image="https://developerfreaks.com/unity/S/scifi-spaceships-fleet-10254/scifi-spaceships-fleet-10254-008-scaled.jpg"
            price={238519}
            rating={3}
          />
        </div>

        <div className="home__row">
          <Product
            id="12"
            title="Orion space station v9.75, houses up to 8 million souls, and is sustainable"
            image="https://russellnewquist.com/wp-content/uploads/2017/05/spacestation.jpg"
            price={238519}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
