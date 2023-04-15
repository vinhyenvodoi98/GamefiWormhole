import { Row, Col, Input, Button } from 'antd';
import { ApolloClient, InMemoryCache, HttpLink, ApolloProvider, useQuery, gql } from '@apollo/client';

const API_KEY = 'YOUR_API_KEY';

const httpLink = new HttpLink({
  uri: 'https://example.com/graphql',
  headers: {
    Authorization: `Bearer ${API_KEY}`
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


const Home = () => {
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
      </Col>
    </Row>
  );
}

export default Home;
