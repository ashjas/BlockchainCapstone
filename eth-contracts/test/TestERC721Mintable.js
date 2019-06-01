var MyERC721PropertyToken = artifacts.require('MyERC721PropertyToken');

contract('TestERC721Mintable', accounts => {

    const account0 = accounts[0];
    const account1 = accounts[1];
    const account2 = accounts[2];
    const account3 = accounts[3];
    const account4 = accounts[4];
    const account5 = accounts[5];
    const account6 = accounts[6];
    const account7 = accounts[7];
    const account8 = accounts[8];
    const account9 = accounts[9];



    describe('match erc721 spec', function () {
        beforeEach(async function () { 
            const tokenId = 1;
            this.contract = await MyERC721PropertyToken.new({from: account0});
            await this.contract.mint.call(account1,tokenId,{from: account0});
            //let uri = await this.contract.tokenURI.call(1,{from: account0});
            let owner = await this.contract.ownerOf.call(tokenId,{from: account0});
            console.log(owner);
            //assert.equal(uri,"https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1","Uri does not match..");

            // TODO: mint multiple tokens
        })

        it('should return total supply', async function () { 
            
        })

        it('should get token balance', async function () { 
            
        })

        // token uri should be complete i.e: https://s3-us-west-2.amazonaws.com/udacity-blockchain/capstone/1
        it('should return token uri', async function () { 
            
        })

        it('should transfer token from one owner to another', async function () { 
            
        })
    });

    describe('have ownership properties', function () {
        beforeEach(async function () { 
            this.contract = await MyERC721PropertyToken.new({from: account1});
        })

        it('should fail when minting when address is not contract owner', async function () { 
            
        })

        it('should return contract owner', async function () { 
            
        })

    });
})