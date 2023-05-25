import { DefaultLocationTiles } from "../components/DefaultLocationTiles";
// import { Searchbar } from "../components/Searchbar";
import { Article } from "../components/Articles";
// import { useState } from "react";
// import { DarkModeButton } from "../components/DarkModeButton";


export default function HomePage(){
    
    return(
        <div className="bg-light-blue w-screen flex flex-col">
            <div className="flex flex-col h-screen pb-10">
                <div className="overflow-y-auto">
                    <DefaultLocationTiles />
                    <Article />
                </div>
            </div>
        </div>
        
        
    );
    
}