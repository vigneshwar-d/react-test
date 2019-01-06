### How to run this project?
---
- Run `npm start` to start the server at `localhost:3000`.
- And then run `npm run launch` to start the client at `localhost:8081`

### Why there are two separate commands for server and client?
---
 - I tried to run both of them parallely using the `concurrently` package. But in the real world both server and client run separately on different ports completely independent of each other, so I wanted to have that clear separation between those two.
---
### Features:
- [x] Display products in a grid.
- [x] Show the ASCII faces in their correct size, to give customers a realistic impression of what they're buying.
- [x] Format the price in USD.
- [x] Display the date in relative format.
- [x] Automatically load more products as the user scrolls down.
- [x] Display an animated loading message when new set of data is loading.
- [x] Show advertisement for every 20th result.
- [x] Sort products by `size`, `price` and `ID`.
- [x] Show '~ end of catalogue ~ in the end.
