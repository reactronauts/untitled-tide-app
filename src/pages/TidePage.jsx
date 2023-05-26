import { UilLocationPoint } from "@iconscout/react-unicons";
import axios from "axios";
import { useState } from "react";
function TidePage() {
    const TIDE_STATES = ["VIC", "NSW", "QLD", "TAS", "SA", "NT"];
    const STATE_NAMES = {
        VIC: "Victoria",
        NSW: "New South Wales",
        QLD: "Queensland",
        TAS: "Tasmania",
        SA: "South Australia",
        NT: "Northern Territory",
    };

    const [selectedState, setSelectedState] = useState("");
    const [tideData, setTideData] = useState([]);

    const handleClick = (event) => {
        const buttonState = event.currentTarget.getAttribute("data-tide-state");
        setSelectedState(buttonState);
        console.log(
            `fetching https://tidal-data.onrender.com/tides/${buttonState}`
        );
        const newTideData = axios(
            `https://tidal-data.onrender.com/tides/${buttonState}`
        );
        newTideData
            .then((response) => {
                setTideData(response.data);
            })
            .catch((err) => console.log(err));
    };

    return (
        <main className="mx-6 my-2 flex min-h-screen flex-col items-stretch gap-5 py-2 text-center">
            <h1 className="py-2 text-2xl text-white sm:text-3xl">
                Your local tides
            </h1>
            <div className="grid w-full max-w-[80%] grid-cols-2 gap-5 self-center sm:grid-cols-3">
                {TIDE_STATES.map((state, index) => (
                    <button
                        key={index}
                        className="flex flex-col items-center gap-2 rounded-lg bg-yellow p-2 transition ease-out hover:scale-110"
                        type="button"
                        onClick={handleClick}
                        data-tide-state={state}
                    >
                        <UilLocationPoint
                            size={37}
                            className="cursor-pointer text-light-blue"
                        />
                        <div>{state}</div>
                    </button>
                ))}
            </div>
            {selectedState ? (
                <h2 className="py-2 text-xl text-white sm:text-2xl">
                    {STATE_NAMES[selectedState]}
                </h2>
            ) : (
                <h2 className="py-2 text-xl text-white sm:text-2xl">
                    Select a state
                </h2>
            )}
            {tideData.length ? (
                <div className=" rounded-lg border-2 bg-slate-50">
                    <p className="my-1">Today&apos;s Tides</p>
                    <table className="w-full">
                        <thead>
                            <tr className="bg-slate-200 font-bold">
                                <th className="border border-l-0 border-slate-300">
                                    Type
                                </th>
                                <th className="border border-slate-300">
                                    Time
                                </th>
                                <th className="border border-r-0 border-slate-300">
                                    Height
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {tideData &&
                                tideData[0].tides.map((tide, index) => {
                                    return (
                                        <tr
                                            key={index}
                                            className={
                                                tide.rowType.toLowerCase() ===
                                                "low"
                                                    ? "bg-custom-purple"
                                                    : "bg-slate-200"
                                            }
                                        >
                                            <td>{tide.rowType}</td>
                                            <td>
                                                {new Date(
                                                    tide.rowTime
                                                ).toLocaleTimeString("en-AU", {
                                                    hour: "numeric",
                                                    minute: "2-digit",
                                                })}
                                            </td>
                                            <td>{tide.rowHeight}</td>
                                        </tr>
                                    );
                                })}
                        </tbody>
                    </table>
                </div>
            ) : (
                <></>
            )}
        </main>
    );
}

export default TidePage;
