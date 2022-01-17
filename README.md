# Reload opgave - januar 2022

Hej,

Inden næste jobsamtale har vi en opgave, som vi gerne vil bede dig løse. Opgaven repræsentere en simpel version af de opgaver, du vil kunne komme til at løse her i Reload, og de teknologier, vi arbejder med.

Du kan arbejde videre med opgaven ved at forke dette repository og arbejde videre med din fork. Jeg vil gerne have adgang til din løsning senest søndag 23/1.

I løsningen af opgaven må du gøre ved koden i repositoriet, hvad du vil. Koden repræsenterer det data, du har til rådighed, og et skelet, du kan arbejde videre ud fra, hvis det er en hjælp for dig.

Vi forventer ikke, at du bruger mere end en halv dag på opgaven. Du skal ikke nødvendigvis løse alle opgaverne eller komme frem til et perfekt resultat. Opgaven er en mulighed for, at vi kan se, hvordan du arbejder med kode, og så vi har et fælles udgangspunkt at snakke om til jobsamtalen. Vi vil både gerne se resultatet og høre dine tanker om de valg du har taget i processen. Hvis du foretrækker at optage dine udtalte tanker i processen, er du også velkommen til at optage dem inden samtalen og sende dem til os. Her kan vi anbefale værktøjet Loom.

Hvis du har spørgsmål til opgaven, er du velkommen til at skrive eller ringe til mig.

/Kasper - kasper@reload.dk - 29725957

## Opgaven: Boliglisten

Du arbejder på en projekt hvor I skal lave et nyt website til en lokal dansk ejendomsmængler. En af de ting I skal lave er en liste over de boliger, som ejendomsmægleren har til salg. Én kollager har lavet et API som stiller boligdata til rådighed og en anden er begyndt at opbygge listen i HTML og CSS. Du skal arbejde videre ud fra dette udgangspunkt.

Det involverer følgende punkter:

1. Design
   Boligerne skal vises i et gitter/tabel. Din kollega er gået i gang men er ikke blevet færdig. Tilføj kode så boligerne vises i et gitter. Boligerne skal fremstår ensartede med samme højde og bredde. Antallet af boliger per række skal varierer efter brugerens skærmbredde. Eksempel: På en mobiltelefon skal der kun vises 8 rækker med 1 bolig per række, men på en tablet skal der vises 3 rækker med 3 boliger per række.

2. Sortering
   Din kollega har tilføjet to knapper til listen der gør det muligt at sortere boligerne efter pris. Tilføj kode så de virker efter hensigten. Eksempel: Når brugeren trykker på "Pris, Faldende" skal boligen "Tyverisikret" vises først.

3. Filtrering
   Kunden ønsker sig også mulighed for at filtrere boliger efter størrelse. Opdater projektet så brugerne har mulighed for at se boliger, der ligger over og/eller under et vist antal kvadratmeter. Eksempel: Hvis brugeren vælger at filtrere på boliger unger 40m2 skal boligerne "Luksus for hobitter" og "Citroner i haven" vises.

## Teknisk setup

Repositoriet indeholdet et skelet bestående af følgende dele:

- En server med et API til hentning af boligdata baseret på Express
- En klient indeholdende et udgangspunkt for HTML og CSS for boliglisten
- Bundling håndteret af Parcel

For at komme i gang med at bruge skeletet kan du gøre følgende i et udviklingsmiljø hvor Node 16 allerede installeret:

1. Klon repositoriet ned på dit udviklingsmiljø
2. Kør `npm install`
3. Kør `npm run dev`
4. Åbn `http://localhost:3000` i en browser
5. Opdater kildekoden!
