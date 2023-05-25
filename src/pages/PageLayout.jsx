import { Header } from "../components/header";
import { Footer } from "../components/Footer";
// import { Searchbar } from "../components/Searchbar";
import { Outlet } from "react-router-dom";
// import { useState } from "react";
// import { DarkModeButton } from "../components/DarkModeButton";


export function PageLayout(){
    
    return(
        <div className="bg-light-blue w-screen flex flex-col">
            <Header />
            {/* <Searchbar /> */}
            <Outlet/>
            <Footer />
        </div>
        
        
    );
    
}