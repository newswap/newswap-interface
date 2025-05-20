# Newswap Interface

An open source interface for Newswap -- a protocol for decentralized exchange of tokens on AB.

- Website: [newswap.org](https://newswap.org/)
- Interface: [app.newswap.org](https://app.newswap.org)

## Listing a token

[https://newswap.org/apply-listing/](https://newswap.org/apply-listing/) 


## Development

### Install Dependencies

```bash
yarn
```
### Patch @uniswap/sdk package
```bash
yarn patch-package
```

### Run

```bash
yarn start
```

### Configuring the environment (optional)

To have the interface default to a different network when a wallet is not connected:

1. Make a copy of `.env` named `.env.local`
2. Change `REACT_APP_NETWORK_ID` to `"{YOUR_NETWORK_ID}"`
3. Change `REACT_APP_NETWORK_URL`

## Contributions

**Please open all pull requests against the `master` branch.** 
CI checks will run against all PRs.
