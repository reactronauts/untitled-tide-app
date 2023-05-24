function TidePage() {
    const TIDE_STATES = ["VIC", "NSW", "QLD", "TAS", "SA", "NT"];

    return (
        <div className="">
            {TIDE_STATES.map((state, index) => (
                <div key={index}>
                    <button>{state}</button>
                </div>
            ))}
        </div>
    );
}

export default TidePage;
