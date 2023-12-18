const WayneBarnett = {nome: 'Wayne Barnett', ruolo: 'Founder & CEO', immagine: 'wayne-barnett-founder-ceo.jpg'}
const AngelaCaroll = {nome: 'Angela Caroll', ruolo: 'Chief Editor', immagine: 'angela-caroll-chief-editor.jpg'}
const WalterGordon = {nome: 'Walter Gordon', ruolo: 'Office Manager', immagine: 'walter-gordon-office-manager.jpg'}
const AngelaLopez = {nome: 'Angela Lopez', ruolo: 'Social Media Manager', immagine: 'angela-lopez-social-media-manager.jpg'}
const ScottEstrada = {nome: 'Scott Estrada', ruolo: 'Developer', immagine: 'scott-estrada-developer.jpg'}
const BarbaraRamos = {nome: 'Barbara Ramos', ruolo: 'Graphic Designer', immagine: 'barbara-ramos-graphic-designer.jpg'}
const body = document.querySelector('body');



const team = {
    WayneBarnett,
    WalterGordon,
    AngelaLopez,
    ScottEstrada,
    BarbaraRamos,
};

console.log(team);
console.log(WayneBarnett);
console.log(AngelaCaroll);
console.log(WalterGordon);
console.log(AngelaLopez);
console.log(ScottEstrada);
console.log(BarbaraRamos);

//funzione per visualizzare il contenuto dell'oggetto

let i = 0;
for ( let key in team ) {
    const persona = document.createElement('div');
    persona.innerHTML = team.key;
    body.append(persona);
    i++;
};