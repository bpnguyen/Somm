# ***Somm***

## *An app for explorative wine connoisseurs*

--- 

### Introduction

This project was created for the COMP 322 - F21 semester group project at Loyola University Chicago.

### Contributors

- **Brian Nguyen**: <bnguyen3@luc.edu>
- **Zac Neuhardt**: <zneuhardt@luc.edu>
- **Brian Waddell**: <bwaddell@luc.edu>
- **Adeline Azungue**: <aazungue@luc.edu>

### Concepts

1) Home screen: User is initially offered two choices (perhaps in the form of pressable): recommend a random bottle or apply filters to a suggestion.

    - If random bottle: Choose any row from dataset as suggestion

    - If filters: Transition screen (through some simply animation like current screen swipes up to reveal new screen) to a dropdown box form allowing user to filter suggestion by country, region, etc. (filters based on dataset features)
        - ***NOTE***: Currently unfuntional and included only for comceptual purposes.

3) Suggestion reveal: A clipart wine bottle (something like [this](https://external-content.duckduckgo.com/iu/?u=https://static.vecteezy.com/system/resources/previews/000/301/395/original/different-colors-of-wine-bottles-vector.jpg&f=1&nofb=1)) with its blank label populated with the suggested wine’s information and some type of map API indicating the winery/region the wine originated from. The user could then have an option to add this wine to a ’Favorites’ list or give a new suggestion.

4) Favorites list: Drinks added to a user-created ’Favorites’ list and displayed with the 'Refresh' pressable to update the list from AsyncStorage upon new wines being added. Upon selecting an individual list item, a Modal pop-up will be displayed with that given wine's additional features information from the dataset. The user can also clear their entire 'Favorites' list, giving them a fresh start to the list itself.

### Dataset Sourcing

This program utilizes the [Wine Rating & Price](https://www.kaggle.com/budnyak/wine-rating-and-price) dataset.

### Installation Instructions

1) Create a new React Native project.
2) Replace existing `App.js`, `App.json`, `index.js`, `package.json`, and (if applicable) `react-native.config.js` files in the project's `root` folder.
3) Add `StackRoutes.js` into project's `root` folder.
4) Add `./src` directory into project's `root` folder.
5) Execute `npm install` to install all required Node module dependencies from the project's `root` folder.
6) Execute `npx react-native link` to link all assets to React Native project files project's `root` folder.
7) This project was designed and built using Android, it is suggested to start the project with `npx react-native run-android` from the project's `root` folder.
