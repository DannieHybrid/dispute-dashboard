// SPDX-License-Identifier: MIT
pragma solidity ^0.8.24;

contract DisputeManager {
    event DisputeRaised(address indexed user, uint256 indexed id, string reason);
    event DisputeResolved(uint256 indexed id, bool outcome);

    function raiseDispute(uint256 id, string calldata reason) external {
        emit DisputeRaised(msg.sender, id, reason);
    }

    function resolveDispute(uint256 id, bool outcome) external {
        emit DisputeResolved(id, outcome);
    }
}
