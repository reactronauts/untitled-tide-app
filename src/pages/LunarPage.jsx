
import { LunarPageContainer } from "../components/LunarPageContainer";

export function LunarPage(props) {
    return (
        <div className="bg-[url('src/images/nightSky.jpg')] h-screen bg-cover flex wrap justify-center items-center flex-col">

            <h1 className="text-white">Lunar Page</h1>
                <LunarPageContainer />
                    
        </div>
    )
}

