# natural-langugage-processing-of-news

Project demonstrating Webpack, service workers and calls to Meaning CLoud's API to process news articles' meaning pulled from a user submitted URLs.

## Setup

- Download repo
- Open terminal at root folder
- Run `npm install`
- Create an API key by following instructions at `https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc`
- Create new file `.env` in your root directory
- Enter your API key : `API_KEY={your_API_key}` in the `.env` file
- In a terminal run `npm run build-prod` to generate a production build contained in the `dist` folder
- In the same terminal run `npm start` to start a server to host the build


## Interacting with the aoo

- Submit a valid news article URL
- If successful, stats on the entered URL will be displayed