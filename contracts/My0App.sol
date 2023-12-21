// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import "@layerzerolabs/lz-evm-oapp-v2/contracts/oft/OFT.sol";

contract SLVRToken is OFT {
    constructor(
        string memory _name, // token name
        string memory _symbol, // token symbol
        address _lzEndpoint, // LayerZero Endpoint address
        address _owner // token owner
    ) OFT(_name, _symbol, _lzEndpoint, _owner) {
        // your contract logic here
        _mint(_msgSender(), 10000000 * 10 ** decimals()); // mints 100 tokens to the deployer
    }
}
