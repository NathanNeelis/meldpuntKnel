# Meldpunt Knel

### Bekijk de applicatie

:earth_americas: [live website](https://meldpuntknel.herokuapp.com/)

#### Omschrijving

Meldpunt Knel is de oplossing voor het zorgpersoneel om eenvoudig een verbazing te melden. Deze melding wordt vervolgens getoond in het overzicht zodat, tijdens de dagelijkse manier van werken, er verdieping op de situatie kan plaats vinden en iemand de verantwoordelijkheid kan nemen om deze situatie te verbeteren.

Meldpunt Knel is een web applicatie en kan daarom op mobile devices gebruikt worden zodat er sneller en eenvoudiger een verbazing gemeld worden. Dit is belangrijk, omdat in de huidige situatie, dit moet worden onthouden tot er tijd is om het op het dagstart bord te schrijven. Ook is nu altijd en overal toegang tot de afdelingsoverzichtelijke informatie.

<img width="600" alt="Meldpunt Knel - whiteboard" src="https://user-images.githubusercontent.com/55492381/172162882-85de5b3d-309e-484e-a6a6-0c95ec582bcf.png">

## Design Challenge

Hoe kan het zorgpersoneel door middel van een digitaal, interactief product, inzicht krijgen in de knelpunten op de afdeling om zo de zorgkwaliteit continu te blijven verbeteren?

## Getting started

### Cloning the repo

1. Create your git repo

   ```bash
   mkdir foldername
   cd "/foldername"
   git init
   ```

2. Clone this repo

   ```bash
   git clone https://github.com/NathanNeelis/meldpuntKnel.git
   ```

3. install packages

   ```bash
   npm install
   ```

4. Create a .env file with database and sessions variables like this:

   ```bash
   DB_HOST=’host url’
   DB_PORT=’port van database’
   DB_NAME=’database naam’
   SESSION_SECRET=’uniek wachtwoord als session secret’
   ```

5. Start the app on localhost:2000
   ```bash
   npm start
   ```

## License

[MIT](https://github.com/NathanNeelis/meesterproef-2021/blob/master/LICENSE)
