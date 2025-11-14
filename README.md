# UniSearch

A simple web app that lets you search for universities around the world by country name. Built this to practice working with external APIs and TypeScript in React.

## What it does

Type in a country name, hit search, and you'll get a list of universities in that country with links to their websites. That's pretty much it - nothing fancy, just a straightforward search tool.

The data comes from the [Hipolabs Universities API](http://universities.hipolabs.com/), which is free and doesn't need authentication.

## Tech Stack

- React 19
- TypeScript
- Vite
- CSS (no frameworks, just plain styling)

## Getting Started

You'll need Node.js installed on your machine.

```bash
# Install dependencies
npm install

# Run the dev server
npm run dev
```

The app should open at `http://localhost:5173` (or whatever port Vite assigns).

## Building for Production

```bash
npm run build
```

This creates an optimized build in the `dist` folder.

## Project Structure

```
src/
├── components/
│   ├── hero.tsx       # Main search component
│   └── hero.css       # Styling for the search
├── App.tsx            # Header/navigation
├── main.tsx           # Entry point
└── index.css          # Global styles
```

## How it works

The search component makes a fetch request to the Universities API when you submit the form. It shows a loading state while fetching, then displays the results with clickable links to each university's website.

I added TypeScript interfaces to make sure the data structure is correct and avoid runtime errors.

## Things I learned

- Working with external APIs in React
- Proper form handling with TypeScript
- Using the FormData API instead of accessing form elements directly
- TypeScript generics with useState

## Known Issues

- No error handling if the API is down
- Doesn't validate country names before searching
- Results aren't paginated (some countries have a lot of universities)

Feel free to fork and improve it if you want!

## License

MIT - do whatever you want with it.