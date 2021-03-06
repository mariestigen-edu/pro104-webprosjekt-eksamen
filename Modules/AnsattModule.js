const AnsattModule = function(){

    const ansatte = [
        {name: "Jenny Jenny", anr: 73823, restaurant:"Oslo", percentage:100, position:"Daglig leder", status:"jobber", image:"girl_00.jpg"},
        {name: "Trude Trudesen", anr: 12032, restaurant:"Oslo", percentage:100, position:"Kokk", status:"jobber", image:"girl_01.jpg"},
        {name: "Maria Mena", anr: 32204, restaurant:"Stavanger", percentage:100, position:"Daglig leder", status:"sykemeldt", image:"girl_02.jpg"},
        {name: "Bob Bobby", anr: 23422, restaurant:"Oslo", percentage:60, position:"Servitør", status:"sykemeldt", image:"boy_00.jpg"},
        {name: "Lars Larsson", anr: 23024, restaurant:"Oslo", percentage:10, position:"Kokk, Vikar", status:"ferie", image:"boy_01.jpg"},
        {name: "Tix", anr: 12342, restaurant:"Bergen", percentage:100, position:"Kokk", status:"sykemeldt", image:"Tix.jpg"},
        {name: "Bjarne", anr: 23123, restaurant:"Kristiansand", percentage:100, position:"Servitør", status:"jobber", image:"Asmongold.png"},
        {name: "DrDisrespect", anr: 2, restaurant:"Oslo", percentage:100, position:"Servitør", status:"jobber", image:"DrDisrespect.jpg"},
        {name: "Erna Solborg", anr: 5423, restaurant:"Oslo", percentage:100, position:"Kokk", status:"sykemeldt", image:"ErnaSolberg.jpg"},
        {name: "Holk Hugan", anr: 1643, restaurant:"Kristiansand", percentage:70, position:"Kokk", status:"ferie", image:"HulkHogan.jpg"},
        {name: "Jeff Jeffsen", anr: 52, restaurant:"Kristiansand", percentage:100, position:"Daglig leder", status:"jobber", image:"InternettHistorian.jpg"},
        {name: "Luke Groundrunner", anr: 6243, restaurant:"Stavanger", percentage:30, position:"Servitør", status:"jobber", image:"LukeSkywalker.jpg"},
        {name: "Pepe", anr: 420, restaurant:"Bergen", percentage:100, position:"Daglig leder", status:"jobber", image:"Pepe.png"},
        {name: "Scarlett Johansen", anr: 69, restaurant:"Bergen", percentage:10, position:"Servitør", status:"sykemeldt", image:"ScarlettJohanson.jpg"},
        {name: "Solid Snek", anr: 20, restaurant:"Stavanger", percentage:100, position:"Kokk", status:"sykemeldt", image:"SolidSnake.jpg"},
        {name: "Sylva Lasthaug", anr: 6234, restaurant:"Kristiansand", percentage:100, position:"Servitør", status:"jobber", image:"SylviListhaug.jpg"},
        {name: "", anr: 0, restaurant:"", percentage:100, position:"", status:"", image:""},

    ]

    const getAllEmployees =()=> ansatte;
    const getEmployeeByRestaurant =(restaurant)=> ansatte.filter(ansatte => ansatte.restaurant.toLowerCase() === restaurant.toLowerCase());
    const getEmployeeByAnr =(anr)=> ansatte.filter(ansatte => ansatte.anr === ParseInt(anr));
    const addEmployee = (newName, newAnr, newRestaurant, newPercentage, newPosition, newStatus, newImage) => ansatte.push({name:newName, anr:newAnr, restaurant:newRestaurant, percentage:newPercentage, position:newPosition, status:newStatus, image:newImage}) 

    const printemployee =(ansatt)=> {
        
        //legger til riktig statusfarge
        const backgroundColor = checkColor(ansatt.position, ansatt.status)

        function checkColor(position, status){
            if(status.toLowerCase() === "jobber"){
                if(position.toLowerCase() === "daglig leder"){
                    return "green-background"
                }
                return "yellow-background"
            }
            return "red-background"
        }

        return `

    <!-- ANSATT-KORT -->
    <div class="card card-size card-padding">

        <!-- Stillingstittel -->
        <div class="card-header">
            <p class="${backgroundColor} card-header-title">
                ${ansatt.position.toUpperCase()}
            </p>
        </div>

        <!-- Profilbilde -->
        <div class="card-image">
            <figure class="circular-portrait image">
                <img src="../images/people/${ansatt.image}" alt="profile picture of employee, ${ansatt.name}">
            </figure>
        </div>

        <!-- Navn og ansattnummer-->
        <div class="card-content-size card-content">
            <p class="title is-4">${ansatt.name}</p>
            <p class="subtitle is-6">Anr. ${ansatt.anr}</p>
        </div>

        <!-- Stillingsprosent -->
        <div class="information-content is-italic">
        ${ansatt.status} - ${ansatt.percentage}%
        </div>

        <!-- Footer -->
        <div class="card-footer">
            <a href="#" class="card-footer-item">Info</a>
            <a href="#" class="card-footer-item">Edit</a>
            <a href="#" class="card-footer-item">Delete</a>
        </div>
    </div>
   
        `} 

        return{getAllEmployees, getEmployeeByAnr, getEmployeeByRestaurant, printemployee, addEmployee}
}()

export default AnsattModule;