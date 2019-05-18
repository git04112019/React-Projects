import Layout from '../components/Layout';
import { Button, Jumbotron, Row, Col, Container } from 'react-bootstrap';

const Blog = () => (
  <Layout>
<Container>
  <Row>
    <Col sm={8}>sm=8</Col>
    <Col sm={4}>sm=4</Col>
  </Row>
  <Row>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
    <Col sm>sm=true</Col>
  </Row>
</Container>
    <Jumbotron>
      <h1>Our Simple Blog!</h1>

      <p>
        This is a simple hero unit, a simple jumbotron-style component for calling
        extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  </Layout>
);

export default Blog;