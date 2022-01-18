import React from "react";

const App = () => {
  return (
    <>
      <h1>Boliger</h1>
      <div class="filter">
        <button>Pris, Faldende</button>
        <button>Pris, Stigende</button>
      </div>
      <div class="properties">
        <div class="property" data-id="01">
          <img class="property__image" src="/assets/01.jpg" alt="" />
          <h2 class="property__title">Lige ud til vejen</h2>
          <p class="property__address">Dommervænget 6a, 2. th, 4000 Roskilde</p>
          <ul class="property__info">
            <li class="property__price">1.000.000,-</li>
            <li class="property__type">Villa</li>
            <li class="property__rooms">4 Rum</li>
            <li class="property__size">120 m2</li>
          </ul>
        </div>
        <div class="property" data-id="02">
          <img class="property__image" src="/assets/02.jpg" alt="" />
          <h2 class="property__title">Rustikt og lækkert</h2>
          <p class="property__address">Enghavevej 8, 1. th, 1674 København V</p>
          <ul class="property__info">
            <li class="property__price">2.500.000,-</li>
            <li class="property__type">Ejerlejlighed</li>
            <li class="property__rooms">2 Rum</li>
            <li class="property__size">80 m2</li>
          </ul>
        </div>
        <div class="property" data-id="03">
          <img class="property__image" src="/assets/03.jpg" alt="" />
          <h2 class="property__title">Langt fra byen</h2>
          <p class="property__address">Skodsborgvej 318, st. th, 2850 Nærum</p>
          <ul class="property__info">
            <li class="property__price">500.000,-</li>
            <li class="property__type">Rækkehus</li>
            <li class="property__rooms">5 Rum</li>
            <li class="property__size">140 m2</li>
          </ul>
        </div>
        <div class="property" data-id="04">
          <img class="property__image" src="/assets/04.jpg" alt="" />
          <h2 class="property__title">I hjertet af centrum</h2>
          <p class="property__address">
            J.M. Mørks Gade 5, 3. tv, 8000 Aarhus C
          </p>
          <ul class="property__info">
            <li class="property__price">7.000.000,-</li>
            <li class="property__type">Villa</li>
            <li class="property__rooms">12 Rum</li>
            <li class="property__size">800 m2</li>
          </ul>
        </div>
        <div class="property" data-id="05">
          <img class="property__image" src="/assets/05.jpg" alt="" />
          <h2 class="property__title">Værtshus i stuen</h2>
          <p class="property__address">
            Strandgade 24d, 1. tv, 1401 København K
          </p>
          <ul class="property__info">
            <li class="property__price">1.200.000,-</li>
            <li class="property__type">Ejerlejlighed</li>
            <li class="property__rooms">2 Rum</li>
            <li class="property__size">65 m2</li>
          </ul>
        </div>
        <div class="property" data-id="06">
          <img class="property__image" src="/assets/06.jpg" alt="" />
          <h2 class="property__title">Tyverisikret</h2>
          <p class="property__address">Møllehøj 10, 6. 3, 7400 Herning</p>
          <ul class="property__info">
            <li class="property__price">11.000.000,-</li>
            <li class="property__type">Villa</li>
            <li class="property__rooms">10 Rum</li>
            <li class="property__size">400 m2</li>
          </ul>
        </div>
        <div class="property" data-id="07">
          <img class="property__image" src="/assets/07.jpg" alt="" />
          <h2 class="property__title">Luksus for hobitter</h2>
          <p class="property__address">Søndre Molevej 6b, 3. 8, 4600 Køge</p>
          <ul class="property__info">
            <li class="property__price">6.000.000,-</li>
            <li class="property__type">Rækkehus</li>
            <li class="property__rooms">1 Rum</li>
            <li class="property__size">30 m2</li>
          </ul>
        </div>
        <div class="property" data-id="08">
          <img class="property__image" src="/assets/08.jpg" alt="" />
          <h2 class="property__title">Citroner i haven</h2>
          <p class="property__address">
            Strandlodsvej 11n, 4. tv, 2300 København S
          </p>
          <ul class="property__info">
            <li class="property__price">200.000,-</li>
            <li class="property__type">Villa</li>
            <li class="property__rooms">1 Rum</li>
            <li class="property__size">10 m2</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default App;
