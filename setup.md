Steps I went through to set up this repo initially.

## Install Vite

Vite is our bundler and app runner.

1. `npm create vite@latest` and follow the prompts.
2. `cd <project-name>` into the project dir.
3. `npm install` to install all required modules.

## Install ReactRouter

ReactRouter is our routing solution.

1. `npm install react-router-dom`.

## Install Tailwind

Tailwind is our CSS library.

1. `npm install -D tailwindcss postcss autoprefixer` to install the necessary dependencies for tailwind.

2. `npx tailwindcss init -p` to initialise the tailwind config.

3. Update the `tailwind.config.js` file to add the paths to the files we want Tailwind to know about. For this project that's just './index.html' and the './src/' folder & any subfolders.

4. Open `src/index.css` and copy in the tailwind "directives", this is the different parts of Tailwind you can import. 

## Install Prettier & Prettier-Tailwind

Prettier is our code formatter. Prettier has a plugin called `prettier-plugin-tailwind` that automatically sorts Tailwind classes by the team's recommended order. 

1. `npm install -D prettier prettier-plugin-tailwindcss` install the two packages we need.

2. Create a prettier config (`prettier.config.cjs`). Add the plugin into here (maybe not required but just in case!).



