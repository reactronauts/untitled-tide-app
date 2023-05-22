const Search = () => {
    const handleSearch = (event) => {
        event.preventDefault();
    };

    return (
        <div className="m-5 flex flex-col items-center gap-2">
            Search Component
            <form
                action="get"
                className="flex flex-col gap-1 sm:flex-row"
                onSubmit={handleSearch}
            >
                <input type="text" className="border-2 p-2" />
                <button type="submit" className="border-2 p-2">
                    Search
                </button>
            </form>
        </div>
    );
};

export default Search;
