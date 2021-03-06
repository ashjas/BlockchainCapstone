var SquareVerifier = artifacts.require('SquareVerifier');
var Proof = require("./proofs/proof")

contract('SquareVerifier', accounts => {

    const account0 = accounts[0];
    describe('Check Zokrates SquareVerifier.sol', function () {
        beforeEach(async function () { 
            this.contract = await SquareVerifier.new({from: account0});
        })

        it('Test verification with correct proof', async function () { 
            let success = await this.contract.verifyTx.call(Proof.proof.A,Proof.proof.A_p,Proof.proof.B,Proof.proof.B_p,Proof.proof.C,Proof.proof.C_p,Proof.proof.H,Proof.proof.K,Proof.input,{from:account0});
            assert.equal(success,true,"Verification should pass with correct proof");
        })

        it('Test verification with incorrect proof', async function () { 
            let FailedA_p = ["0x21e1d33701f5bf4ebe3b95a880453bf587329bd68e9f7d3997d3ceb96304c9b2", "0x291d923497ad4b791af0f2be7460bcc392025d45a0fb188a72c23a817fbfa54"];
            let success = await this.contract.verifyTx.call(Proof.proof.A,FailedA_p,Proof.proof.B,Proof.proof.B_p,Proof.proof.C,Proof.proof.C_p,Proof.proof.H,Proof.proof.K,Proof.input,{from:account0});
            assert.equal(success,false,"Verification should fail with incorrect proof");
        })

    });
})