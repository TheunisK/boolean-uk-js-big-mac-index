const usBigMac = 5.66;

const swissBigMac = 6.50;
const saBigMac = 33.5;
const turkeyBigMac = 14.99;
const norwayBigMac = 52;
const russianBigMac = 135;

const swissDollarRate = 1.08;
const randDollarRate = 0.068;
const liraDollarRate = 0.11;
const kroneDollarRate = 0.12;
const rubleDollarRate = 0.014;

const swissIpp = (usBigMac / swissBigMac);
const randIpp = (usBigMac / saBigMac);
const liraIpp = (usBigMac / turkeyBigMac);
const kroneIpp = (usBigMac / norwayBigMac);
const rubleIpp = (usBigMac / russianBigMac);

const swissBMI = (swissDollarRate - swissIpp) / swissIpp;
const saBMI = (randDollarRate - randIpp) / randIpp;
const turkeyBMI = (liraDollarRate - liraIpp) / liraIpp;
const norwayBMI = (kroneDollarRate - kroneIpp) / kroneIpp;
const russiaBMI = (rubleDollarRate - rubleIpp) / rubleIpp;

console.log(swissBMI);
console.log(saBMI);
console.log(turkeyBMI);
console.log(norwayBMI);
console.log(russiaBMI);

console.log(swissBMI > saBMI);
console.log(swissBMI > turkeyBMI);
console.log(swissBMI > norwayBMI);
console.log(swissBMI > russiaBMI);

console.log(saBMI > turkeyBMI);
console.log(saBMI > norwayBMI);
console.log(saBMI > russiaBMI);

console.log(turkeyBMI > norwayBMI);
console.log(turkeyBMI > russiaBMI);

console.log(norwayBMI > russiaBMI);

const swissPercent = 100 * (swissBMI.toFixed(2));
const saPercent = -100 * (saBMI.toFixed(2));
const turkeyPercent = -100 * (turkeyBMI.toFixed(2));
const norwayPercent = 100 * (norwayBMI.toFixed(2));
const russiaPercent = -100 * (russiaBMI.toFixed(2));



console.log("The Swiss Franc is overvalued against the Dollar by " 
            + swissPercent + "%.");

console.log("The South African Rand is undervalued against the Dollar by " 
            + saPercent + "%.");  
            
console.log("The Turkish Lira is undervalued against the Dollar by " 
            + turkeyPercent + "%.");

console.log("The Norwegian Krone is overvalued against the Dollar by " 
            + norwayPercent + "%.");

console.log("The Russian Ruble is undervalued against the Dollar by " 
            + russiaPercent + "%.");




