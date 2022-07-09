const MyContract = null

let web3 = null

let PDE = function (data) {
  this.name = null
  this.random = data.random
  this.web3 = data.web3
  this.walletAddress = data.walletAddress
  this.walletBalanceInWei = data.walletBalanceInWei
}

module.exports = PDE
