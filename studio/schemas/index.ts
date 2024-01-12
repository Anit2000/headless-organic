// document types
import collection from './documents/collection'
import product from './documents/product'
import productVariant from './documents/productVariant'
import layout from './documents/layout'

// objects
import header from './objects/header'
import accordion from './objects/accordion'
import accordionGroup from './objects/accordionGroup'
import callout from './objects/callout'
import inventory from './objects/inventory'
import option from './objects/option'
import priceRange from './objects/priceRange'
import proxyString from './objects/proxyString'
import shopifyCollection from './objects/shopifyCollection'
import shopifyCollectionRule from './objects/shopifyCollectionRule'
import shopifyProduct from './objects/shopifyProduct'
import shopifyProductVariant from './objects/shopifyProductVariant'

// block content
import blockContent from './blocks/blockContent'

export const schemaTypes = [
  // document types
  layout,
  collection,
  product,
  productVariant,

  // objects
  header,
  accordion,
  accordionGroup,
  callout,
  inventory,
  option,
  priceRange,
  proxyString,
  shopifyCollection,
  shopifyCollectionRule,
  shopifyProduct,
  shopifyProductVariant,

  // block content
  blockContent,
]
