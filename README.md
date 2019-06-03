# Udacity Blockchain Capstone "AS_Properties Marketplace"

AS_Properties Marketplace is the capstone project for Udacity's Blockchain course. 
## Install

This repository contains Smart Contract code in Solidity (using Truffle), tests (also using Truffle)

To install, download or clone the repo, then:

`npm install`

In directory `eth-contracts/`  
`truffle compile`

## Tests
To run truffle tests:
In directory `eth-contracts/`

For all tests:    
`truffle test` 
All 10 tests should pass.
For single file tests:  
`truffle test test/TestERC721Mintable.js`  
`truffle test test/TestSquareVerifier.js`  
`truffle test test/TestSolnSquareVerifier.js`  
## Addresses and Links 
Contract address (Token) : [0x4baD3d135747B2843A9afF212cadD3E186f01c7D](https://rinkeby.etherscan.io/address/0x4baD3d135747B2843A9afF212cadD3E186f01c7D)  
Contract address (Verifier): [0x2F06031173b442ac25C0d52da11d58e303189894](https://rinkeby.etherscan.io/address/0x2F06031173b442ac25C0d52da11d58e303189894)  
OpenSea Marketplace Storefront link's: [AS_Properties Marketplace](https://rinkeby.opensea.io/category/as_properties)
## ZoKrates
#### Step 1: Run ZoKrates in Docker
``` 
docker run -v <path to your project folder>:/home/zokrates/code -ti zokrates/zokrates:0.3.0 /bin/bash
```


#### Step 2: Compile the program written in ZoKrates DSL
``` 
./zokrates compile -i code/zokrates/code/square/square.code
``` 

#### Step 3: Generate the Trusted Setup
``` 
./zokrates setup
```

#### Step 4: Compute Witness
``` 
./zokrates compute-witness -a 3 9
```

#### Step 5: Generate Proof
```
./zokrates generate-proof
```

#### Step 6: Export Verifier
```  
./zokrates export-verifier
```
# Deploy to Rinkeby

Create a `.secret` file in `/eth-contracts/` with your mnemonic.

Example `.secret` content:
```
hood outer advance century enter marriage symbol acquire access cactus family rather
``` 
 
Start deployment
```
truffle migrate --network rinkeby
```

# Project Resources

* [Remix - Solidity IDE](https://remix.ethereum.org/)
* [Visual Studio Code](https://code.visualstudio.com/)
* [Truffle Framework](https://truffleframework.com/)
* [Ganache - One Click Blockchain](https://truffleframework.com/ganache)
* [Open Zeppelin ](https://openzeppelin.org/)
* [Interactive zero knowledge 3-colorability demonstration](http://web.mit.edu/~ezyang/Public/graph/svg.html)
* [Docker](https://docs.docker.com/install/)
* [ZoKrates](https://github.com/Zokrates/ZoKrates)
