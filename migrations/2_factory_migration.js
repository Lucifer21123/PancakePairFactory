const PancakeFactory = artifacts.require("PancakeFactory");

module.exports = function(deployer) {
    deployer.deploy(PancakeFactory, "0x8BaD257fCD93929a84c771f1145e2821Fbd1E518");
};