# natural-langugage-processing-of-news

Project demonstrating Webpack, service workers, jest testing and calls to Meaning CLoud's API to process news articles' meaning pulled from a user submitted URLs.

## Setup

- Download repo
- Create an API key by following instructions at `https://learn.meaningcloud.com/developer/sentiment-analysis/2.1/doc`
- Create new file `.env` in your root directory
- Enter your API key : `API_KEY={your_API_key}` in the `.env` file
- Open terminal at root folder
- Run `npm install`
- Run `npm run build-prod` to generate a production build contained in the `dist` folder
- Run `npm start` to start a server to host the build
- Open browswer and navigate to `http://localhost:8080/`


## Interacting with the aoo

- Submit a valid news article URL
- If successful, stats on the entered URL will be displayed