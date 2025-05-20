import { ChainId } from '@uniswap/sdk'
const NETWORK_CHAIN_ID: number = parseInt(process.env.REACT_APP_CHAIN_ID ?? '1')

// the Uniswap Default token list lives here
// export const DEFAULT_TOKEN_LIST_URL = 'https://misc.newswap.org/tokenlist/newswap_defi_100.json'
export const DEFAULT_TOKEN_LIST_URL = 'https://misc.newswap.org/tokenlist/default_list.json'
export const COMMUNITY_TOKEN_LIST_URL = 'https://misc.newswap.org/tokenlist/community_list.json'
export const TESTNET_TOKEN_LIST_URT = 'https://misc.newswap.org/tokenlist/testnet_list.json'
export const ABCORETEST_TOKEN_LIST_URT = 'https://misc.newswap.org/tokenlist/abcoretestnet_list.json'
export const ABCORE_TOKEN_LIST_URT = 'https://misc.newswap.org/tokenlist/abcore_list.json'

export const DEFAULT_LIST_OF_LISTS: string[] =
  NETWORK_CHAIN_ID === ChainId.ABCORE
    ? [ABCORE_TOKEN_LIST_URT]
    : NETWORK_CHAIN_ID === ChainId.ABCORETEST
    ? [ABCORETEST_TOKEN_LIST_URT]
    : NETWORK_CHAIN_ID === ChainId.ABCORETEST
    ? [TESTNET_TOKEN_LIST_URT]
    : [ABCORE_TOKEN_LIST_URT, COMMUNITY_TOKEN_LIST_URL]
