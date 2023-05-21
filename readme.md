# Astra Mar
### A weather app with a tidal and astrological twist. Built with React and Tailwind.
#### User receives live data relevant to geolocation entered.


## General Plan 
- weather/tidal app with current/upcoming astrological events for user's geographic location or desired location
	- store geolocation in local storage?
	- useContext for global access to geolocation 
	- useReducer for complex access to geolocation and routes 
	- useState for when a user alters the location
	- CSS styling using React 
		- Tailwind 
	- deployment to Netlify (maybe GH Pages) 


## Data Structures / Models 

- No requirement for stored data at this time
 <!--
	- ID (number)
	- title (string)
	- description (string)
	- isCompleted (boolean)
	- due date (JS Date)
	- created at date (JS Date) -->
    

## Development Plan 

- Plan:
	- routing: 
		- useParams for routes to do things on specific pages

Essential tickets:
- /
    - Homepage
        1. Display 3 or 4 default location weather data (NY, London, Tokyo, Sydney)
        2. Create an input for user's desired location
- /geo
    - Page once user enters location (rerender of homepage)
        1. Display data from api call of weather and some filler info
        2. Option for user to select a 14-day or monthly outlook (calendar format) with weather info, moon phase, and tidal info for user planning purposes
- /lunar
    - astrological events page 
        1. Display data from api call of astrological events in their area and some filler info
- /tidal
    - Tidal data with visualizer
        1. Display data from api call of tidal information and some filler info
        2. visualizer (animation) to reflect two panels of data and toggle between to appear "wavy" (maybe 0-12h, and 12-24h tides)
        3. Show a weekly panel with tidal information (highs and lows with time)

Nice to have:
- light/dark mode consistent with theme (maybe dark mode represented by moon icon on a slider which changes to sun for light mode)


Nicer to have:
- some sort of animated homepage background that ties into tidal/starry theme


Components:
- header
    - show title and interactive nav bar
    - use navlinks 
- footer
    - nav bar but slightly reformatted
- defaultWeatherContainer
    - Show default locations' data
- geoInput
    - If a prop.userLocation exists, show correct page render
    - Else, show an empty input with placeholder content 
    - Show submit button 
<!-- - NoteContainer
    - Store state about display/edit mode
    - Toggle between NoteDisplay and NoteForm 
    - Contain a reference to a note via note ID 
- NewestNoteDisplay
    - Logic to determine which note is newest and retrieve that data from global state
    - Show note data 
        - NoteContainer re-used here 
- CountNoteDisplay
    - Logic to count how many notes exist in global state 
    - Show number
- SortedNotesList
    - Logic to copy global state into local state and sort it
    - Properties to sort by are received as props 
    - List a bunch of NoteContainers based on the sorted data  -->
