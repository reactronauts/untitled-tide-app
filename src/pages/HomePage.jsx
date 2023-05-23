import { Header } from "../components/header";
// import { DefaultLocationTiles } from "../components/DefaultLocationTiles";
// import { Searchbar } from "../components/Searchbar";

export function HomePage(){
    return(
        <div className="bg-sky-200/25 w-screen h-screen">
            <Header />
            <div className="flex justify-center text-5xl">
                moonSwell
            </div> 
            {/* <DefaultLocationTiles /> */}

        </div>
       

    )
    
}