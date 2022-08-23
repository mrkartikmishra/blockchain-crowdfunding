// SPDX-License-Identifier: Unlicensed

pragma solidity >0.7.0 <=0.9.0;

contract CrowdFunding {

    address[] public campaignAddresses;

    event campaignCreated(
        string title,
        uint256 requiredAmount,
        address indexed owner,
        address campaignAddress,
        string image,
        uint256 timestamp,
        string category
    );

    function createCampaign(
       string memory _title,
        string memory _story,
        string memory _category,
        uint256 _requiredAmount,
        string memory _image
    ) public {
        Campaign campaign = new Campaign(_title, _story, _category, _requiredAmount, _image);
        campaignAddresses.push(address(campaign));

        emit campaignCreated(
            _title,
            _requiredAmount,
            msg.sender,
            address(campaign),
            _image,
            block.timestamp,
            _category
        );
        
    }

}

contract Campaign {
    string public title;
    string public story;
    string public category;
    string public image;
    uint256 public requiredAmount;
    uint256 public receivedAmount;
    address payable public owner;

    event donated(address indexed donar, uint256 amount, uint256 timestamp);

    constructor(
        string memory _title,
        string memory _story,
        string memory _category,
        uint256 _requiredAmount,
        string memory _image
    ) {
        title = _title;
        requiredAmount = _requiredAmount;
        story = _story;
        category = _category;
        image = _image;
        owner = payable(msg.sender);
    }

    function donate() public payable {
        require(requiredAmount > receivedAmount, "Required Amount received by the applicant.");

        owner.transfer(msg.value);
        receivedAmount += msg.value;

        emit donated(msg.sender, msg.value, block.timestamp);
    }
}