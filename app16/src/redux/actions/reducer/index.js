const getData={
    Products:["fridge","Aircooler","Washingmachine"],
    Students:["Harish","Lokesh","Chandu","Hari"],
    Items:{
        no:1,
        name:"Laptop",
        version:"corei3"
    },
    Image:<img src="https://tse2.mm.bing.net/th?id=OIP.4avihcY2aYmg3obVqvbNEgHaER&pid=Api&P=0&w=310&h=180" alt=""/>,
};


export default function rootReducer(state=getData,action) {
    switch (action.type) {
        case "GET_ALL_STUDENTS":
            return "Hello from Students";

            case "GET_ALL_PRODUCTS":
            return "Hello from Products";
            
            
        default:
            return state;
    }
    
}