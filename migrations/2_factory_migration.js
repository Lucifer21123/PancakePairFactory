const PancakeFactory = artifacts.require("PancakeFactory");

module.exports = function(deployer) {
    deployer.deploy(PancakeFactory);
};