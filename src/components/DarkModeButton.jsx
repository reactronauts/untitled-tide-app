import { useState } from "react";


export function DarkModeButton() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };

  const buttonStyle = {
    backgroundColor: darkMode ? "#111827" : "#EFF6FF",
  };


  return (
    <button className="DarkMode" onClick={toggleDarkMode} style={buttonStyle}>
      <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />
      </svg>
    </button>
  );
}



// export function DarkMode() {
//     var element = document.body;
//     element.classList.toggle("dark-mode");
//     if(element.classList.contains("dark-mode")){
//        localStorage.setItem("toggle","yes");
//     }else{
//        localStorage.setItem("toggle","no");
//     }
// }
