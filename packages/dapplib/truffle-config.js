require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/wallet-provider');


let mnemonic = 'inner enroll bundle food story remember stereo unfold grunt light army gentle'; 
let testAccounts = [
"0x72d85bbc9f8da0093b5b8e83a9151f81be58c907a00d29614affd77b0ba01684",
"0x7b71364662dbc993c044cb35c34bf94568e40609e08d2fb31ab87c0e4f4e8e7d",
"0x08f92afa8894b2a0fb80efe4160c7ddb0a0f1b6c015e78ed9568b4a738e83f43",
"0x8b898a755e80ec1e3ba84bb04ecd75b99bca2e1e19b0b1dba0d0dd88a5b607ae",
"0x311cdb197839bc8509625b0c22ea99d0a52b78b2898ca639e326f5bdad5266a4",
"0x1af9829515d18cd212eee15dd8b9ea8bdd00501d22644e1a707c0cdb15d481c0",
"0x8d9df2f40beef5195c17fd941bb75095a958031a8a4dc0dcce04e1eb445b57c5",
"0x827813e300525e4ca4a7f6212822ac74f1e07be7375a59add0c32a0b94111b1b",
"0x62d60acb7e232d7697154fc870466e33b98ccec60dfe6e81f360ca4af171f58a",
"0xae2c910a25c14178ef88c015a26634f6484b8f9412392faa27a890078f4e8f00"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


