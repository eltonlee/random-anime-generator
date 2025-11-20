# Random Anime Generator

A beautiful React web app that generates random anime recommendations from MyAnimeList's extensive database. Features a modern, animated UI with glassmorphism effects and real-time data from the Jikan API.

![Random Anime Generator](https://media.giphy.com/media/GkD4U3VfiIbzcBhQNu/giphy.gif)

## Features

- **Random Anime Discovery**: Get truly random anime recommendations with each click
- **Modern UI**: Stunning gradient background with smooth animations
- **Glassmorphism Design**: Beautiful frosted glass effects on info cards
- **Detailed Information**: View anime title, cover image, score, airing status, and episode count
- **Direct Links**: Quick access to full anime details on MyAnimeList
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Free API**: Uses the free Jikan API v4 (unofficial MyAnimeList API)

## Tech Stack

- **React** 17.0.2
- **Jikan API v4** - Free unofficial MyAnimeList REST API
- **Sass** - Modern CSS preprocessing
- **React Loading** - Elegant loading animations
- **GitHub Pages** - Free hosting

## Getting Started

### Prerequisites

- Node.js (v14 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/eltonlee/random-anime-generator.git
cd random-anime-generator
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

The app will open at [http://localhost:3000/random-anime-generator](http://localhost:3000/random-anime-generator)

### Building for Production

Create an optimized production build:
```bash
npm run build
```

### Deployment

Deploy to GitHub Pages:
```bash
npm run deploy
```

## Usage

1. Visit the app
2. Click the "Randomize" button
3. Discover a random anime with detailed information
4. Click "For more info" to visit the anime's MyAnimeList page
5. Keep clicking to explore more anime!

## API Information

This app uses the [Jikan API v4](https://docs.api.jikan.moe/), a free unofficial MyAnimeList API. No authentication required!

- **Endpoint**: `https://api.jikan.moe/v4/random/anime`
- **Rate Limiting**: Please be respectful of API rate limits
- **Documentation**: [docs.api.jikan.moe](https://docs.api.jikan.moe/)

## Project Structure

```
random-anime-generator/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── AnimeImage.js
│   │   ├── button.js
│   │   ├── CenterLogo.js
│   │   ├── InfoBar.js
│   │   ├── LoadingEffect.js
│   │   └── Title.js
│   ├── App.js
│   ├── index.css
│   └── index.js
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- [Jikan API](https://jikan.moe/) for providing free access to MyAnimeList data
- [MyAnimeList](https://myanimelist.net/) for the comprehensive anime database
- React community for excellent tools and libraries

## Live Demo

Check out the live version: [https://eltonlee.github.io/random-anime-generator](https://eltonlee.github.io/random-anime-generator)
