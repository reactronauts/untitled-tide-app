
import { LunarPageContainer } from "../components/LunarPageContainer";

export function LunarPage(props) {
    return (
        <div className="bg-[url('src/images/nightSky.jpg')] h-auto min-h-screen bg-cover flex wrap justify-center items-center flex-col">
             <LunarPageContainer />        
        </div>
    )
}

