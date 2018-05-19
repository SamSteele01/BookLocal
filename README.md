# EthMemphis
The proof of concept version booking app made for EthMemphis. Uses ERC721 to define non-fungible tokens and ERC809 to interface with renting functions.

Deployed on [github-pages.](http://booklocal.github.io/EthMemphis/)

This project was created using Truffle unbox React.

To run locally: clone or fork, ```npm install```, and ```npm start```. 

To make changes to the style sheets: the ```npm run dev``` command runs a localhost and listens for changes in the .scss files. Don't change the .css file, it won't persist. You need [sass installed](https://sass-lang.com/install) globally on your machine to use this script. 

Dev merges pull requests from other branches.

Pull from Dev and then make a branch with your name or the issue you are working on. Only push to that branch. Pull from Dev and merge, and run locally to catch errors before opening a pull request.


### Admin calls
1) addRooms(uint[] beds, uint[] roomNum)
2) addAccessCode(address[] guest)............... add your own for testing

### Book
3) reserve(start, stop)

### Status
4) getNextReservation(address _yourAddr) returns (tokenId, checkInDate, checkOutDate)
5) getReservations(tokenId, start, stop).........alternative to the above that shows how we store the info. Only interesting for devs to see.
6) getRoomInfo(tokenId)..........displays the status including current renter and number of beds etc. 

### CheckIn
6) access(token_Id)

### CheckOut
7) settle(token_Id)...... optional. We can call that for them.

