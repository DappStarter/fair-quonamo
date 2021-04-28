require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame foot blanket response ridge color hundred light army genre'; 
let testAccounts = [
"0x8648d22869f3f7942a3e4456343b3aed6eb1e3b8b927808fc10bb6e7be3f2e6b",
"0x294fa72d0583469df608216ccb7f02ac1263b1a2481020bfa7b29d7edabbec92",
"0x8c6452c17d06af7534a7d14fa3b3282c53848bc3c3babd0200ed23c638a40484",
"0xe58a3f1a531fed3530d07b20464e68fdbdc2d79db32469825f96323c7895367a",
"0x053d88d7099f4085e6c7e2d1ecf5c0d8da9bfe110d701a3a596bce79d5e6e99b",
"0x2ad59f849a27a137130fd055d7d8c6285b520ce2ead323cc131bfce896cf816a",
"0x10641108f944ddd7590bbf7fa4bb972895a5f6de1f59c5426570bd9fb5bd69e4",
"0xa52349bc675f3e80fbc7d0a944e44c362b1c6a02916b1909282474d584f4a756",
"0x9b8cdeda69368c9a0b0867f1e3e2f9b42dc5f52f6f301aa23ee0c279a5f1782f",
"0x858b4ad96cf1f3c30a5bdb4dc9951ef42e9bdbbfad8d8aebd265eec6f3cfd571"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
