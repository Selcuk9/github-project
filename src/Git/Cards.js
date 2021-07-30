import { render } from "@testing-library/react";
import React from "react"

const baseUrl = "https://api.github.com";
const path ="/search/repositories?q="

export default function Cards(repositories){
    //#region 
        // const [error,setError] = useState(null);
        // const [isLoaded,setIsLoaded] = useState(false);
        // const [items,setItems] = useState([]);
    
        //   // useEffect будет запущен один раз
    
        //   useEffect(()=>{
        //     try {
        //         fetch(baseUrl + path + text)
        //         .then(res => res.json())
        //         .then((result)=>{
        //             setIsLoaded(true);
        //             setItems(result);
        //         },
        //         (error) => {
        //             setIsLoaded(true);
        //             setError(error);
        //         });
        //     } catch (error) {
        //         console.log(error.message)
        //     }
    
        //   },[]);
        //#endregion

        
    
        
        return(        
        <div>
            <ul>
                <li>1</li>
                <li>2</li>
            </ul>
        </div>
    )
}