# Deploy contract to mantletest
```
yarn ts-node scripts/deploy-hyperlane.ts --local mantletest \
  --remotes goerli \
  --key 1b159035badf2418db62eaa48f6799fe3186f1d3601ed663ca67149296c1e8bc
```

# Test sending message
```
yarn ts-node scripts/test-messages.ts \
  --chains goerli mantletest \
  --key 1b159035badf2418db62eaa48f6799fe3186f1d3601ed663ca67149296c1e8bc
```
<img width="983" alt="Screen Shot 2023-04-16 at 2 39 45" src="https://user-images.githubusercontent.com/33363513/232253348-a6c1e3fb-084b-41f1-b9f7-0d8326b3a314.png">

# Run validator by docker
```
docker run --env-file validator.env --mount type=bind,source="$(pwd)/artifacts",target=/config --mount type=bind,source="$(pwd)/hyperlane-validator-signatures-mantle-test",target=/data -it gcr.io/abacus-labs-dev/hyperlane-agent:debafb9-20230414-183521 ./validator
```
Then

https://docs.hyperlane.xyz/docs/operators/validators/announcing-your-validator#submitting-your-validators-announcement
# Run relayers
```
docker run --env-file relayers_goerli.env --mount type=bind,source="$(pwd)/artifacts",target=/config --mount type=bind,source="$(pwd)/hyperlane-validator-signatures-mantle-test",target=/data -e HYP_RELAYER_GASPAYMENTENFORCEMENT='[{"type":"none"}]' -e HYP_RELAYER_WHITELIST='[{"senderAddress":"*","destinationDomain":["5", "5001"],"recipientAddress":"*"}]' -it gcr.io/abacus-labs-dev/hyperlane-agent:debafb9-20230414-183521 ./relayer
```

```
docker run --env-file relayers_mantletest.env --mount type=bind,source="$(pwd)/artifacts",target=/config --mount type=bind,source="$(pwd)/hyperlane-validator-signatures-mantle-test",target=/data -e HYP_RELAYER_GASPAYMENTENFORCEMENT='[{"type":"none"}]' -e HYP_RELAYER_WHITELIST='[{"senderAddress":"*","destinationDomain":["5", "5001"],"recipientAddress":"*"}]' -it gcr.io/abacus-labs-dev/hyperlane-agent:debafb9-20230414-183521 ./relayer
```
