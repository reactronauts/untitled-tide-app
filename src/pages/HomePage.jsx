import { Header } from "../components/header";
import { Footer } from "../components/Footer";
import { DefaultLocationTiles } from "../components/DefaultLocationTiles";
import { Searchbar } from "../components/Searchbar";
import { Outlet } from "react-router-dom";


export function HomePage(){
    return(
        <div className="bg-light-blue w-screen flex flex-col h-screen">
            <Header />
            <Searchbar />
            <Outlet/>
            <div className="flex flex-col h-screen pb-10">
                <DefaultLocationTiles />
            </div>
            <div>
                <Footer />
            </div>
        </div>
        
    );
    
}