const ZaiaToken = artifacts.require("ZaiaToken");

module.exports = function (deployer) {
  deployer.deploy(ZaiaToken, "ZaiaTokens", "ZAIA");
};
