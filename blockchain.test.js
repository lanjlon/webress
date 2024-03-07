// tests/blockchain.test.js
const chai = require('chai');
const expect = chai.expect;
const { getBalance, sendTransaction } = require('../src/blockchain');

describe(' Tests', function() {
  // Test for querying the balance of an address on the Ethereum test network
  it('should return the balance of a given address !!!', async function() {
    const address = '0x...'; // Enter a valid Ethereum address for testing
    const balance = await getBalance(address);
    expect(balance).to.be.a('string');
    console.log(`balance result : ${balance}`);
  });

  // Test for sending a transaction and returning a receipt string (Use this test with caution as it may incur costs)
  it('should send a transaction and return a receipt string ', async function() {
    this.timeout(50000); // The transaction might take a long time
    const fromAddress = '0x...'; // Sender's address
    const privateKey = 'your_private_key address'; // Private key of the sender's address
    const toAddress = '0x...'; // Recipient's address
    const amountEther = '0.001'; // Amount of Ether to send
    const receipt = await sendTransaction(fromAddress, privateKey, toAddress, amountEther);
    expect(receipt).to.have.property('transactionHash');
    console.log(`Transaction Hash string : ${receipt.transactionHash}`);
  });
});
