import AnsattModule from '../Modules/AnsattModule.js';

const ansattNavn = document.querySelector('#ansattNavnInput');
const avdelingsNavn = document.querySelector('#avdelingsMenu');
const stillingsNavn = document.querySelector('#stillingsMenu');
// [avdelingsNavn/stillingsNavn].options[avdelingsNavn/stillingsNavn.selectedIndex].text;
// for å hente det som er valgt i selve valg boksen^

//Henter container for layout til .innerHTML
const searchResultDiv = document.querySelector('#layoutAndAnsatt');

let htmlAnsattTxt= "";

// Array med alle ansatte
var ansattArray = AnsattModule.getAllEmployees();

// Henter knappen og får knappen til å gjøre noe          ----- KNAPP START -----
document.querySelector('#searchBtn').addEventListener('click', function() {

    // inni her er det som skjer når knappen er trykket på
    htmlAnsattTxt ="";

    //Lager HOVEDLAYOUT for det som er valgt i AVDELING dropdown menu
    //Når ingen AVDELING er valgt i AVDELING
    if("Alle Avdelinger" == avdelingsNavn.options[avdelingsNavn.selectedIndex].text){
        window.alert(avdelingsNavn.options[avdelingsNavn.selectedIndex].text + " MÅ FIKSES PÅ!!");
        htmlAnsattTxt += `<div id="layoutAndAnsatt">

        <div class="columns mt-2"> <!-- Topdelen av layoutet -->
          <div class="column is-half is-offset-1">
            <p class="has-text-weight-bold"> ${avdelingsNavn.options[avdelingsNavn.selectedIndex].text} <span class="is-pulled-right">[Legg til]</span></p>
            <hr style="border-top: 1px solid black;">
          </div>
        </div>
        <div class="columns"><!-- Kortene av ansatte -->
          <!-- ANSATT-KORT [alt under er fjernet]-->
        `;

    //Når en AVDELING valgt i AVDELING    
    } else {
        window.alert(avdelingsNavn.options[avdelingsNavn.selectedIndex].text);
        htmlAnsattTxt += `<div class="columns mt-2"> <!-- Topdelen av layoutet -->
        <div class="column is-half is-offset-1">
        <p class="has-text-weight-bold"> ${avdelingsNavn.options[avdelingsNavn.selectedIndex].text} <span class="is-pulled-right">[Legg til]</span></p>
        <hr style="border-top: 1px solid black;">
        </div>
    </div>
    <div class="columns is-multiline"><!-- Kortene av ansatte -->
        <!-- ANSATT-KORT [alt under er fjernet]-->
    `;
    }
    
    
    window.alert("Setter in ansatte fra " + avdelingsNavn.options[avdelingsNavn.selectedIndex].text);
    
    
    
    // Filter funksjoner for søke options!      ----- FILTER START -----
    console.log(ansattArray);
    
    //Array med ansatte basert på STILLING
    var ansattStillingArray = [];
    
    stillingsFilter(ansattArray);
    function stillingsFilter(Array){
      for(var i = 0; i < Array.length; i++){
        console.log(Array.length);
        console.log(Array[i].position);
        console.log(stillingsNavn.options[stillingsNavn.selectedIndex].text);
        if(Array[i].position.includes(stillingsNavn.options[stillingsNavn.selectedIndex].text) || "Alle Stillinger" === stillingsNavn.options[stillingsNavn.selectedIndex].text){
          
          ansattStillingArray.push(Array[i]);
        }
      }
    }
    console.log(ansattStillingArray);
    
    
    var ansattAvdelingsArray = [];
    
    avdelingsFilter(ansattStillingArray);
    function avdelingsFilter(Array){
      for(var i = 0; i < ansattStillingArray.length; i++){
        if(Array[i].restaurant.includes(avdelingsNavn.options[avdelingsNavn.selectedIndex].text) || "Alle Avdelinger" === avdelingsNavn.options[avdelingsNavn.selectedIndex].text){
          
          ansattAvdelingsArray.push(Array[i]);
        }
      }
    }
    console.log(ansattAvdelingsArray);
    
    var ansattNavnArray = [];
    
    navnFilter(ansattAvdelingsArray)
    function navnFilter(Array){
      for(var i = 0; i < ansattAvdelingsArray.length; i++){
        if(Array[i].name.toLowerCase().includes(ansattNavn.value.toLowerCase()) ){
          
          ansattNavnArray.push(Array[i]);
        }
      }
    }
    
    console.log(ansattNavnArray);
    
    // ansattNavnArray inneholder filtrert resultat basert på alle feltene!!!     ----- FILTER SLUTT -----

    // Skriver inn ANSATTE etter søk har filtrert ansatte basert på valgte options
    ansattNavnArray.forEach(ansatte =>{
      
      htmlAnsattTxt +=
      
      AnsattModule.printemployee(ansatte);

    })
    
    
    //Brukes for å lukke columns
    htmlAnsattTxt += `
    </div>
    `;
    
    searchResultDiv.innerHTML = htmlAnsattTxt;
    
    //For å resete arrays
    ansattStillingArray = [];
    ansattAvdelingsArray = [];
    ansattNavnArray = [];
  }); // Slutten av knappen             ----- KNAPP SLUTT -----
  
  
  
  
  
  
  
  
  //Setter inn ANSATTE basert på valgte AVDELINGER 
  //  addAnsatteMedAvdeling();
  
  //funksjon for å legge til ansatte basert på Avdeling
  function addAnsatteMedAvdeling(){
    AnsattModule.getEmployeeByRestaurant(avdelingsNavn.options[avdelingsNavn.selectedIndex].text).forEach(ansatte =>{
      
      htmlAnsattTxt += `
      
      <div class="card card-size ml-4">
      
      <!-- Stillingstittel -->
      <div class="card-header">
      <p class="green-background card-header-title">
          ${ansatte.position}
        </p>
      </div>
      
      <!-- Profilbilde -->
      <div class="card-image">
        <figure class="circular-portrait image">
          <img src="../images/people/${ansatte.image}" alt="profile picture of employee, ${ansatte.name}">
        </figure>
      </div>
      
      <!-- Navn og ansattnummer-->
      <div class="card-content">
        <p class="title is-4">${ansatte.name}</p>
        <p class="subtitle is-6">Anr. ${ansatte.anr}</p>
      </div>
      
      <!-- Stillingsprosent -->
      <div class="information-content">
        ${ansatte.percentage}%
      </div>
      
      <!-- Footer -->
      <div class="card-footer">
        <a href="#" class="card-footer-item">Info</a>
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </div>
      
    </div>
    
  <!-- til hit var det kuttet [må kanskje ha med en /div ?]-->
      `
  })
}





