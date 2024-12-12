# RiseIn Bridge to Turbin3 Day 2 - Solana Wallet Scripts

A collection of basic Solana wallet scripts for learning purposes. Those are the scripts that were shown in the RiseIn Bridge to Turbin3 Day 2.

## ⚠️ Security Warning
**This is for educational purposes only!** 
- Never store private keys in plain text files in production
- Never reuse these wallet addresses for real transactions
- This implementation is NOT secure and should only be used for learning with test tokens
- For production applications, always use proper key management solutions and hardware wallets

## Setup
1. First, generate a new keypair:
```bash
yarn keygen
```
2. Create a `wallet.json` file in the root directory
3. Copy the generated secret key byte array into `wallet.json` - make sure to have everything in one line

## Available Scripts

```bash
# Generate a new keypair
yarn keygen

# Request an airdrop of 20 SOL (works on local validator - for devnet reduce the amount for the airdrop to 2 SOL)
yarn airdrop

# Transfer 1.1 SOL to a randomly generated address
yarn transfer

# Empty wallet by transferring all SOL to a randomly generated address
yarn emptyWallet
```

## Network Configuration
By default, scripts connect to a local validator (`http://127.0.0.1:8899`). Make sure to have a local validator running using the `solana-test-validator` command.
To use devnet instead, uncomment the devnet connection line in the respective script.

## Dependencies
- @solana/web3.js
- bs58
- typescript
