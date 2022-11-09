const defaultState={
    Products:["Volvo","Panasonic","LG","Waister"]
}

let allProducts=["Volvo","Panasonic","LG","Waister"]
const ReducerComp=(state=defaultState,action)=>{
    switch (action.type) {
        case "GET_ALL_PRODUCTS":
            return allProducts
    
        default:
            return []
    }
} 
export default ReducerComp;