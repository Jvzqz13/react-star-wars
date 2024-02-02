import Card from 'react-bootstrap/Card';

function BodyOnlyExample(starships) {
  return (
    <Card>
      <Card.Body>{ starships.name }</Card.Body>
    </Card>
  );
}

export default BodyOnlyExample;