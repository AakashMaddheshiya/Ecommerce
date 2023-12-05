import React ,{createContext} from "react";
import all_product from "../Components/Assets/all_product"


export const ShopContext=createContext(null)
const contextValue={all_product};

const ShopContextProvider=(props)=>{
    
    
    console.log(Array.isArray(contextValue))


    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    ) 
}
export default ShopContextProvider;



