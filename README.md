# GamefiWormhole
a crosschain NFT collateral solution that makes gamefi easily accessible

# Description
The problem now is that there are too many different NFTs and they are slowly losing value. My solution was to create a method that can reuse NFTs from other chains instead of creating new ones. Users will first collateralize NFT from ethereum. i use airstack to get their floor price on opensea. evaluate the value then decide to migrate the amount of stablecoin tokens in mantle corresponding to 50% of the value. users will then use this new stablecoin to purchase in-game characters. The special feature is that it is possible to use hyperlane for crosschain collateral.

# Tech
- Use mantle network to implement game because transaction fast and cheap fee
- Airstack for get floor price of collateral NFT 
- Hyperlane to crosschain collateral
