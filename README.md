In parallel to a theoretical study, we have carried out concrete implementations of local cryptocurrencies, which allowed us to identify the parameters to be taken into account for their development.

Since few complementary local currencies have chosen to use a public blockchain, we wanted to develop a prototype local cryptocurrency using the main Ethereum network.
we wanted to develop a prototype of a local cryptocurrency using the main Ethereum network.
This prototype is thus intended as a proof of concept of a complementary local cryptocurrency.

 Global architecture of our application:

In order to get as close as possible to the functioning of cryptocurrencies, we have developed our own prototype. For this purpose, we relied on the Ethereum blockchain and, in the context of our work, on the Ropsten test blockchain. We have followed the ERC20 standard which underlies the implementation of smart-contracts for the exchange of tokens.
used to exchange tokens. We have named our token the Xcoin.
Our application is built around two parts:
- The first part is an HTML/JavaScript/PHP interface that constitutes the user interface of our currency.
- The second is the set of our smart contracts, i.e. the functions allowing to register exchanges on the blockchain. These smart contracts are written in Solidity, Ethereum's programming language. They are compiled and then deployed on the Ethereum network thanks to the
Remix platform. We also use Metamask, a cryptocurrency wallet management tool.
Finally, the link between the user interface and the smart contracts is realized using a JavaScript library called Web3, linked to the user interface.
library called Web3, developed by Ethereum.

![AccueilMetamaskConnecté](https://user-images.githubusercontent.com/66619069/119663581-c3598c00-be32-11eb-9ae3-39c4b82c37e9.png)
![Transfert(pourPayerqlqun)](https://user-images.githubusercontent.com/66619069/119663616-c94f6d00-be32-11eb-8c84-90908746729d.png)

