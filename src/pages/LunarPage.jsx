import { LunarPageContainer } from "../components/LunarPageContainer";

export function LunarPage(props) {
    return (
        <div className="wrap flex h-auto min-h-screen flex-col items-center justify-center bg-[url('/nightSky.jpg')] bg-cover">
            <LunarPageContainer />
        </div>
    );
}
