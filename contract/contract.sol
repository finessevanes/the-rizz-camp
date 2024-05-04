// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

// import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import {AggregatorV3Interface} from "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract SessionBooking {
    address payable public owner;
    AggregatorV3Interface internal priceFeed;
    uint256 constant SESSION_PRICE_USD = 100;

    enum SessionStatus {
        Pending,
        Booked,
        Completed
    }

    struct Session {
        address payable participant;
        string details;
        SessionStatus status;
    }

    mapping(address => Session) public sessions;

    event SessionBooked(address indexed participant, string details);

    // price feed ETH/USD SEPOLIA
    constructor() {
        owner = payable(msg.sender);
        priceFeed = AggregatorV3Interface(0x694AA1769357215DE4FAC081bf1f309aDC325306);
    }

    function bookSession(string memory _details) external payable {
        require(sessions[msg.sender].status != SessionStatus.Booked, "You already have a booked session.");
        require(msg.value >= usdToEth(SESSION_PRICE_USD), "Insufficient payment for session booking.");

        sessions[msg.sender] = Session(payable(msg.sender), _details, SessionStatus.Booked);
        emit SessionBooked(msg.sender, _details);
    }

    function usdToEth(uint256 _usdAmount) public view returns (uint256) {
        (, int256 price, , , ) = priceFeed.latestRoundData();
        require(price > 0, "Price feed returned invalid value.");

        uint256 ethPrice = uint256(price);
        return (_usdAmount * 1e18) / ethPrice;
    }

    function withdrawFunds() external {
        require(msg.sender == owner, "Only the contract owner can withdraw funds.");
        owner.transfer(address(this).balance);
    }
}
