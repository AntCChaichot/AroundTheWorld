# Around The World
## Basic Ionic Mobile Application Project for Advanced Computer Programming
### Setup
  - install npm e.g. (sudo apt install npm) or (https://www.npmjs.com/get-npm)
  - install ionic (npm install @ionic/cli)
### Run Ngrok with Colab
  - https://colab.research.google.com/drive/1txK-n3yKu8GY4KzTRVzSOU_3lbGcawWi?usp=sharing
  - run install dependencies cell
  - run last cell (flask_ngrok)
  - get ngrok link
### Change Ngrok link
  - navigate to /src/app/providers/my-data-provider.service.ts
  - change URL = "http://ngroklink.ngrok.io" to according link from colab
### Run on Localhost
  - run with ionic (ionic serve --lab) on root directory
  - Enjoy on localhost with port number according to ionic
