import { Header } from "../components/header";
// import { DefaultLocationTiles } from "../components/DefaultLocationTiles";
import { Searchbar } from "../components/Searchbar";


export function HomePage(){
    return(
        <div className="bg-light-blue w-screen h-screen">
            <Header />
            <Searchbar />
            {/* <DefaultLocationTiles /> */}
        </div>
    )
    
}