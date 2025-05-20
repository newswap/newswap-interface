import base58check from 'base58check'

const TESTNET_INFO_URL_PREFIX = 'https://info.testnet.newswap.org'
const MAINNET_INFO_URL_PREFIX = 'https://info.newswap.org'

// config chain ID
const devChainId = 1002
const testChainId = 1007
const mainChainId = 1012

const PREFIX = 'NEW'

/**
 * convert hex address to new address.
 * @param {string|undefined} hexAddress
 * @param {number} chainId
 */
function hexAddress2NewAddress(hexAddress: string | null | undefined, chainId: string | number | undefined): string {
  if (hexAddress === undefined || hexAddress === null || chainId === undefined) {
    return ''
  }
  if (chainId !== devChainId && chainId !== testChainId && chainId !== mainChainId) {
    return hexAddress
  }
  hexAddress = hexAddress.trim()
  if (hexAddress.startsWith(PREFIX)) {
    return hexAddress
  }
  if (hexAddress.startsWith('0x')) {
    hexAddress = hexAddress.slice(2)
  }
  if (hexAddress.length !== 40) {
    return ''
  }
  chainId = Number(chainId)
  let data = chainId.toString(16).slice(-8) + hexAddress
  if (data.length % 2 !== 0) {
    data = '0' + data
  }
  return PREFIX + base58check.encode(data)
}

/**
 * convert new address to hex address.
 * @param {string|undefined} newAddress
 * @return {string} hexAddress
 */
function newAddress2HexAddress(newAddress: string | undefined): string {
  if (newAddress === undefined) {
    return ''
  }
  newAddress = newAddress.trim()
  if (newAddress.startsWith(PREFIX) && newAddress.length === 39) {
    return '0x' + base58check.decode(newAddress.slice(3), 'hex').data.slice(4)
  } else {
    return ''
  }
}

/**
 * check address is valid AB address head or not
 * @param {string|undefined} address
 * @returns {boolean}
 */
function isValidNewAddressHead(address: string | undefined): boolean {
  if (address === undefined) {
    return false
  }
  const addressLengthIsLessThanFull = address.length < 39
  const addressIsPrefixWithNEW = address.startsWith(PREFIX)

  return addressLengthIsLessThanFull && addressIsPrefixWithNEW
}

/**
 * check address is valid AB address or not
 * @param {string|undefined} address
 * @returns {boolean}
 */
function isValidNewAddress(address: string | undefined): boolean {
  if (address === undefined) {
    return false
  }
  if (address.startsWith(PREFIX) && address.length === 39) {
    try{
      const hexAddress = newAddress2HexAddress(address)
      if (hexAddress.length === 42) {
        return true
      }
    } catch {
      return false
    }
  }
  return false
}

// module.exports = { devChainId, testChainId, mainChainId, hexAddress2NewAddress, newAddress2HexAddress }
export {
  devChainId,
  testChainId,
  mainChainId,
  hexAddress2NewAddress,
  newAddress2HexAddress,
  isValidNewAddressHead,
  isValidNewAddress,
  TESTNET_INFO_URL_PREFIX,
  MAINNET_INFO_URL_PREFIX
}
