pragma solidity >=0.4.21 <0.6.0;
import "openzeppelin-solidity/contracts/utils/Address.sol";
import "./ERC721Mintable.sol";
import "./Verifier.sol";

// TODO define a contract call to the zokrates generated solidity contract <Verifier> or <renamedVerifier>
contract SquareVerifier is Verifier{

}


// TODO define another contract named SolnSquareVerifier that inherits from your ERC721Mintable class
contract SolnSquareVerifier is MyERC721PropertyToken {
    struct solution{
        uint256 tokenId;
        address owner;
    }
    mapping (bytes32 => solution) internal solutions;
    event SolutionAdded(uint256 tokenId, address owner);
    function addSolution(uint256 tokenId, address owner, bytes32 key) internal {
        solution storage sol = solutions[key];
        sol.tokenId = tokenId;
        sol.owner = owner;

        emit SolutionAdded(tokenId, owner);
    }

    SquareVerifier public verifier_;
    constructor( address verifierAddress) public {
        verifier_ = SquareVerifier(verifierAddress);
    }

    function mintVerifiedToken(
        uint256 tokenId,
        address to,
        uint[2] memory a,
        uint[2] memory a_p,
        uint[2][2] memory b,
        uint[2] memory b_p,
        uint[2] memory c,
        uint[2] memory c_p,
        uint[2] memory h,
        uint[2] memory k,
        uint[2] memory input
    )
    public returns (bool){
        //verify the solution.
        bool success = verifier_.verifyTx(a,a_p,b,b_p,c,c_p,h,k,input);
        require(success,"Solution didnt verify!");

        //if verified, calculate the unique has to solution for keeping..
        bytes32 key = keccak256(abi.encodePacked(a,a_p,b,b_p,c,c_p,h,k,input));

        //require that the solution doesnt exist.
        require(solutions[key].owner == address(0),"Solution not unique");

        //add to unique solutions.
        addSolution(tokenId,to,key);

        super.mint(to,tokenId);
    }
}

























