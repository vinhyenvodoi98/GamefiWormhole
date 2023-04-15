import { Row, Col, Input, Button } from 'antd';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider, useQuery, gql } from '@apollo/client';

const httpLink = new HttpLink({
  uri: 'https://api.airstack.xyz/gql',
  headers: {
    Authorization: process.env.REACT_APP_AIRSTACK_API
  }
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
});

const GET_USERS_QUERY = gql`
  query MyQuery {
    CollectionStats(
      input: {blockchain: ethereum, timeFrame: DAILY, order: {firstTransactionBlockTimestamp: DESC}, filter: {tokenAddress: {_eq: "0xf48b45479ba7e121a3542626d5a5f3b07ec5b65d"}}, limit: 1}
    ) {
      CollectionStat {
        dappSlug
        averageSalePriceInUSDC
        lowestSalePriceInNativeToken
        lowestSalePriceInUSDC
        tokenAddress
        token {
          name
          symbol
        }
        firstTransactionBlockTimestamp
        lastTransactionBlockTimestamp
        dappName
      }
    }
  }
`;


const Hole = () => {
  const { loading, error, data } = useQuery(GET_USERS_QUERY);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <Row justify="center" align="middle" style={{ height: '100vh' }}>
    <Col xs={20} sm={16} md={12} lg={8} xl={6}>
      <div style={{ textAlign: 'center' }}>
      <h1>Linaio Gate</h1>
      <p>Crosschain collateral</p>
      </div>
      <Input placeholder="0xaaaa" style={{ marginBottom: 16 }} />
      <Button type="primary" block>
          Submit
      </Button>
      {console.log(data)}
    </Col>
    </Row>
  );
}

const Home = () => {
  return (
    <ApolloProvider client={client}>
      <Hole />
    </ApolloProvider>
  );
};


export default Home;
