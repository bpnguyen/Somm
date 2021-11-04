# ***Somm***

## *An app for explorative wine connoisseurs*

--- 

### Introduction

This project was created for the COMP 322 - F21 semester group project at Loyola University Chicago.

### Contributors

- Brian Nguyen: <bnguyen3@luc.edu>
- Zac Neuhardt: <zneuhardt@luc.edu>
- Brian Waddell: <bwaddell@luc.edu>
- Adeline Azungue: <aazungue@luc.edu>

### Concepts

1) Main screen: User is initially offered two choices (perhaps in the form of buttons): recommend a random bottle or apply filters to a suggestion.

    - If random bottle: Choose any row from dataset as suggestion

    - If filters: Transition screen (through some simply animation like current screen swipes up to reveal new screen) to a dropdown box form allowing user to filter suggestion by country, region, etc. (filters based on dataset features)

2) Loading screen transition: Screen is a ‘wine glass’ that is filling up to the top with either red/white/pink/yellow ‘liquid’, which corresponds with the color of the suggestion about to be revealed (as sort of a hint)

3) Suggestion reveal: A clipart wine bottle (something like [this](https://external-content.duckduckgo.com/iu/?u=https://static.vecteezy.com/system/resources/previews/000/301/395/original/different-colors-of-wine-bottles-vector.jpg&f=1&nofb=1)) with its blank label populated with the suggested wine’s information and some type of map API indicating the winery/region the wine originated from. The user could then have an option to add this wine to a ’To Drink’ list or give a new suggestion.

4) User-created lists: Drinks added to the ’To Drink’ list can then be modified to move it to a ’Drank’ list and add a ranking/notes. All lists will have the option to remove records and sort their order in various manners.

### Dataset Sourcing

This program utilizes the [Wine Rating & Price](https://www.kaggle.com/budnyak/wine-rating-and-price) dataset.