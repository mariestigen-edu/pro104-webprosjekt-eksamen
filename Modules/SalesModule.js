const SalesModule = function(){

    const sales = [
        {date: new Date("2021-05-10"), restaurant: "Oslo", transactions: 155, earnings: 20394.93,},
    ]

    const getAllSales =()=> sales;
    const getSalesByDate =(date)=> sales.filter(sales => sales.date.toDateString() === date);
    const getSalesByRestaurant =(restaurant)=> sales.filter(sales => sales.restaurant === restaurant);

    const getSalesByEarnings =(earnings)=> meny.filter(sales => sales.earnings === earnings);
    const printSalesItem =(salesItem)=> {return `
   
        `} 

        return{getAllSales, getSalesByDate, getSalesByEarnings, printSalesItem, getSalesByRestaurant}
}()

export default MenyModule;