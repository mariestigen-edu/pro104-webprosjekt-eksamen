const MenuModule = function () {

    const menu = [
        { category: "Pizza", image: "pizza_00.jpg", name: "OsloPizza", price: 199.99, description: "pizza med tomatsaus, ost, kebabkjøtt og mais", ingredients: ["kebabkjøtt", "ost", "tomatsaus"], allergies: ["hvete", "melk", "nøtter"] },
        { category: "Pizza", image: "pizza_01.jpg", name: "Hawaii", price: 149.99, description: "pizza med tomatsaus, ost, ananas, løk og kylling", ingredients: ["kebabkjøtt", "ost", "tomatsaus"], allergies: ["hvete", "melk"] },
        { category: "Pizza", image: "pizza_02.jpg", name: "Pepperoni", price: 159.99, description: "pizza med tomatsaus, ost og pepperoni", ingredients: ["kebabkjøtt", "ost", "tomatsaus"], allergies: ["melk", "nøtter"] },
        { category: "Pizza", image: "pizza_03.jpg", name: "Skinke", price: 149.99, description: "pizza med tomatsaus, ost og skinke", ingredients: ["kebabkjøtt", "ost", "tomatsaus"], allergies: ["hvete", "melk"] },
        { category: "Pizza", image: "pizza_04.jpg", name: "Maragrita", price: 129.99, description: "pizza med tomatsaus og ost", ingredients: ["kebabkjøtt", "ost", "tomatsaus"], allergies: ["hvete", "melk"] },
        { category: "Pizza", image: "pizza_00.jpg", name: "Meat heaven", price: 299.99, description: "pizza med kebabkjøtt og ost", ingredients: ["kebabkjøtt", "ost", "tomatsaus"], allergies: ["hvete"] },
        { category: "Drink", image: "cola.jpg", name: "0.5L Coca Cola", price: 29.99, description: "Coca Cola", ingredients: [], allergies: [] },
        { category: "Drink", image: "zero.jpg", name: "0.5L Coca Cola Zero", price: 29.99, description: "Coca Cola Zero", ingredients: [], allergies: [] },
        { category: "Drink", image: "sjoko.jpg", name: "0.5L Sjokomelk", price: 29.99, description: "Hjemmelaget sjokolademelk", ingredients: [], allergies: [] },
        { category: "Drink", image: "farris.jpg", name: "0.5L Farris Naturell", price: 29.99, description: "Farris Naturell", ingredients: [], allergies: [] },
        { category: "Extra", image: "hvitløk.jpg", name: "Hvitløksdressing", price: 29.99, description: "Hjemmelaget hvitløksdressing", ingredients: ["hvitløk, rømme"], allergies: [] },
        { category: "Extra", image: "chilli.jpg", name: "Hvitløk- og chillidressing", price: 39.99, description: "Hjemmelaget hvitløk- og chillidressing", ingredients: ["hvitløk, chilli, rømme"], allergies: [] },
        { category: "Extra", image: "oregano.jpg", name: "Oregano", price: 9.99, description: "Oregano", ingredients: ["Oregano"], allergies: [] },
    ]

    const getAllMenuItems = () => menu;
    const getMenuItemByName = (name) => menu.filter(menu => menu.name === name);
    const getMenuItemByAllergie = (allergie) => menu.filter(menu => menu.allergie === allergie);
    const addMenuItem = (newCategory, newImage, newName, newPrice, newDescription, newIngredients, newAllergies) => menu.push({ category: newCategory, image: newImage, name: newName, price: newPrice, description: newDescription, ingredients: newIngredients, allergies: newAllergies })
    const printMenuItem = (menuItem) => {

        //for å få mellomrom når arrayene printer ut. Fjerner siste ", " fra stringen
        function splitArrays(inp) {
            let stringOutput = ""
            if (inp === "i") {
                menuItem.ingredients.forEach(item => { stringOutput += (item + ", ") })
            }
            else if (inp === "a") {
                menuItem.allergies.forEach(item => { stringOutput += (item + ", ") })
            }

            return stringOutput.slice(0, stringOutput.length - 2);
        }

        return `
            <div class="card card-size card-padding">
                <div class="card-header">
                    <h3 class="yellow-background card-header-title">
                        ${menuItem.name}
                    </h3>
                </div>

                <div class="card-image">
                    <figure class="circular-portrait image">
                        <img src= "../images/menu/${menuItem.image}" "alt="picture of menu item, ${menuItem.name}">
                    </figure>
                </div>

                <div class="card-content card-content-size-250 card-height">
                <p class="">
                    ${menuItem.description}.
                </p>
                <br>
                <h4 class="has-text-weight-bold">
                    Ingredienser
                </h4>
                <p>${splitArrays("i")}</p>
                <br>

                <h4 class="has-text-weight-bold">
                    Allergier
                </h4>
                <p>
                ${splitArrays("a")}
                </p>
                <p class="information-content-menu">
                    ${menuItem.price},-</p>
                </div>

                <div class="card-footer">
                <a href="#" class="card-footer-item">Edit</a>
                <a href="#" class="card-footer-item" >Delete</a>
                </div>
            </div>    
        `

    }

    return { getAllMenuItems, getMenuItemByName, getMenuItemByAllergie, printMenuItem, addMenuItem }
}()

export default MenuModule;