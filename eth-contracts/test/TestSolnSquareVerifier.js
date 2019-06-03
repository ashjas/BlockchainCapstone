// Test if a new solution can be added for contract - SolnSquareVerifier

// Test if an ERC721 token can be minted for contract - SolnSquareVerifier
var SolnSquareVerifier = artifacts.require('SolnSquareVerifier');
var SquareVerifier = artifacts.require('SquareVerifier');
var Proof = require("./proofs/proof")

contract('SolnSquareVerifier', accounts => {
    const account0 = accounts[0];
    const account1 = accounts[1];
    const account2 = accounts[2];

    describe('Test SolnSquareVerifier', function () {
        beforeEach(async function () { 
            const verifier = await SquareVerifier.new({from:account0});
            this.contract = await SolnSquareVerifier.new(verifier.address,{from: account0});
        })

        it('Test if new token can be minted.', async function () { 
            let success = await this.contract.mintVerifiedToken(account0,1,Proof.proof.A,Proof.proof.A_p,Proof.proof.B,Proof.proof.B_p,Proof.proof.C,Proof.proof.C_p,Proof.proof.H,Proof.proof.K,Proof.input,{from:account0});
            //assert.equal(success,true,"Verification should pass with correct proof");
        })

        it('Test failure on new token minted with same solution', async function () {
            let exception = false;
            try{
            let success = await this.contract.mintVerifiedToken(account0,1,Proof.proof.A,Proof.proof.A_p,Proof.proof.B,Proof.proof.B_p,Proof.proof.C,Proof.proof.C_p,Proof.proof.H,Proof.proof.K,Proof.input,{from:account0});
            success = await this.contract.mintVerifiedToken(account0,1,Proof.proof.A,Proof.proof.A_p,Proof.proof.B,Proof.proof.B_p,Proof.proof.C,Proof.proof.C_p,Proof.proof.H,Proof.proof.K,Proof.input,{from:account0});
            }
            catch (e){
                exception = true;
            }
            assert.equal(exception,true,"Verification should fail with repeated solution.");
        })

    });
})