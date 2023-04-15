# Run validator by docker
```
docker run --env-file validator.env --mount type=bind,source="$(pwd)/artifacts",target=/config --mount type=bind,source="$(pwd)/hyperlane-validator-signatures-mantle-test",target=/data -it -p 9090:9090 gcr.io/abacus-labs-dev/hyperlane-agent:debafb9-20230414-183521 ./validator
```