import { Header } from "../components/header";
// import { DefaultLocationTiles } from "../components/DefaultLocationTiles";
// import { Searchbar } from "../components/Searchbar";

export function HomePage(){
    return(
        <div className="bg-light-blue w-screen h-screen">
            <Header />
            <div className="flex justify-center text-5xl text-white font-serif pt-8">
                moonSwell
            </div> 
            {/* <DefaultLocationTiles /> */}

        </div>
       

    )
    
}