## 🧐 assets: <a name = "tests"></a>

includes all images, icons and logos for this project

## 🏁 atoms: <a name = "tests"></a>

handles the unique state of the application through atomized and smaller particle atoms

## ⛏️ Components: <a name = "built_using"></a>

- CardCoin: Render a card with coin information.

- Coins: I received the data and it is processed by each coin card one by one, it acts as a container.

- Copyright: Shows the copyright on the development of this project.

- DetailCoin: Shows a page with the detail of the selected coin.

- FormSign: Show a modal with an authentication form to be able to add favorite coins.

- LoadMore: It shows a button that will perform the function of making the request to obtain more coins.

- Modal: Show an overlay with a frame, which takes another component as a children and renders it internally.

- NavBar: it shows a navigation bar in the header with the access ones.

- NotFound: When the search field is searched by filter and there are no matches, it displays information that says there are no matches.

- PrivateRoute: This component is responsible for making routes private depending on whether the user is authenticated.

- SearchBar: In the search bar you can enter a text and it searches for matches on the coins that are currently displayed. The search is done at the frontend level - locally on the coin object array.

- TextButton: It is responsible for showing a button of type submit or button as appropriate with its own styles.

- TextField: It is responsible for displaying a text field with its own styles.

## 🔧 constants: <a name = "tests"></a>

the access paths to the endpoints are defined

## 🔧 hooks: <a name = "tests"></a>

They act as container components that house and isolate the business logic from the presentational components.

## 🔧 pages: <a name = "tests"></a>

They are access views to the pages configured in the route system with react-route-dom.

## 🔧 services: <a name = "tests"></a>

They host the definition of asynchronous functions that execute promises to retrieve data or affect certain information.

## 🔧 styleguide: <a name = "tests"></a>

Stores files that have to do with the configuration of themes for the application such as common colors in each of the elements.

## 🔧 utils: <a name = "tests"></a>

Stores functions that act as pipes and that are used in some type of data to show within the render.

## 🚀 Ejecutar asi: <a name = "deployment"></a>

```
npm test -- --coverage
```

```
npm run cypress:open
```

```
npm run fake-api
```

```
npm run start
```

Testing with those credentials:

```
view the next file: data/db.json in sheme users
```

```
dany338@gmail.com
123456
```
