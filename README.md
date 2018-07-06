Makerfolio
========

## Problems definition
- Current MakerDAO UI is pretty difficult to read and use.
- There's lack of critical user notifications.
- No way to see useful historical CDP information.
![](https://i.imgur.com/E9vGD74.jpg)
- No way to understand you perfomance
- No way to simulate system parameters changes

## User behaviour
User imports CDP through form using CDP id or address
User can see status of particular CDP in a clear visual form
User can set alert for liquidation price per CDP
User can see history for CDP in a clear textual way
User can see useful statistics for his CDP
User can hide and display app clicking tray icon
User sees list of imported CBDs

User sees global status of DAI system
Tray icon displays overall status

## User scenarios
as a user
- I can import CDP using its id or ethereum address
- On a main screen I see brief statistics for my CDPs.
- First I check oracle's ETH / USD price, then I refer to my CDPs liquidation price and how far I am.
- I also verify how much stability debt in DAI I already have and how much of PETH and DAI I can withdraw from the contract.
- I can view history and in-details stats for my CDP.
- History is dispayed in a table view in the following format:

![](https://i.imgur.com/z4rrNaF.jpg)
- Date of the operation with tx etherscan link
- Type of operation (DRAW, LOCK, WIPE, FREE)
- Amount
- Price of ETH
- Sum in USD

- I can change final price in USD for any type of operation and mark a history record as a margin action (meaning inner speculation without external capital investment)
- I see additional perfomance statistics such as my CDP invesment evaluation using current price, my actual investment in usd, what's my margin gain, my speculative earnings, what ethereum price should be to pay off CDP
- I can set, change and delete an alert for liquidation price and receive it as a desktop notification
- I can change oracle price to model my stats by that price and I can reset it to actual SC

## Challenge details

### The application should:

- provide a highly visible display of both the Liquidation Price and/or the Collateralization Ratio of the chosen CDP
- update every 30 seconds or so
- provide links to the specific CDP page at https://mkr.tools/cdp/
https://mkr.tools/cdp/2419 as example
- have some form of alerting mechanisms (email, pop-up, flashing red icons, etc)

### Nice to haves:

- Basic graphing of CDP history
- Show text history of CDP transactions
- Support multiple CDPs

----

*The application is built as a submission for Deconet hackathon and MakerDAO project*
https://source.deco.network/rich/challenge-hacksummit-MakerDAO


# challenge-hacksummit-MakerDAO


## About MakerDAO
[MakerDAO](https://makerdao.com/) is a decentralized organization dedicated to bringing stability to the crypto economy through Dai, the world's first stablecoin on the Ethereum blockchain. Dai is an asset-backed hard currency that addresses the crypto economy’s problems of volatility with a secure and transparent smart contract platform of permission-less loans.

## Challenges

### Cross Platform Tray Application for CDP Monitoring: Prize 2500 DAI

Create a cross platform (osx/linux/win) tray application that is capable of displaying the current health of a specific CDP. The tool should use the MakerDAO [Query API](https://developer.makerdao.com/dai/1/graphql/) as a data source if possible.

#### The application should:

* provide a highly visible display of both the Liquidation Price and/or the Collateralization Ratio of the chosen CDP
* update every 30 seconds or so
* provide links to the specific CDP page at [https://mkr.tools/cdp/<CDPID>](https://mkr.tools/cdp/)
* have some form of alerting mechanisms (email, pop-up, flashing red icons, etc)

#### Nice to haves:

* Basic graphing of CDP history
* Show text history of CDP transactions
* Support multiple CDPs

#### Super nice to haves:

* Some trending functionality. I.e. Mean time to default using last X days Collateralization Ratio trend

### Really Decentralize Things: Prize 1000 DAI

Package up the [CDP dashboard](https://github.com/makerdao/dai-explorer) or the Oasisdex trading interface into an Electron/Muon wrapper. Must have embedded MetaMask integration and support local parity nodes. Should have no dependencies on the existing web interfaces; contract interaction and local rendering only.

### Mobile upgrade for youvegoteth.github.io: Prize 500 DAI
We would love to be able to send people links to [youvegoteth.github.io](https://youvegoteth.github.io) so users can email Dai through their phones. 

To be successful, a pull request should be accepted by the project owners. Must include making the site mobile friendly so it works in browsers like Toshi or Cipher. The interface may have to be tweaked to make it more responsive as well.

## Judging Criteria
All submissions should use Dai, interact with a CDP, or somehow support the wider MakerDao ecosystem. Code should work and be awesome. We love open source, so we will be taking permissive licenses into account when judging.

## Prizes

* **2500 DAI:** Cross Platform Tray Application for CDP Monitoring
  * **500 DAI:** Runner Up
* **1000 DAI:** Really Decentralize Things
  * **300 DAI:** Runner Up
* **500 DAI:** Mobile upgrade for youvegoteth.github.io
  - **150 DAI:** Runner Up

## Technical Resources
A non exhaustive list of addresses, github repos/documentation, and tools for development in the Maker ecosystem:

* [Getting Started With Maker](https://www.reddit.com/r/MakerDAO/comments/8jsalu/getting_started_with_maker/)
* [Resources and Tools and Contracts](https://source.deco.network/rich/challenge-hacksummit-MakerDAO/src/branch/master/Resources%20and%20Tools.md)
* [MakerDao Articles, Blog Posts and Tutorials](https://www.reddit.com/r/MakerDAO/comments/8k8h51/makerdao_articles_blog_posts_and_tutorials/)

For questions about the specific challenges please message @rich.brown at the [chat.makerdao.com](https://chat.makerdao.com/home).

