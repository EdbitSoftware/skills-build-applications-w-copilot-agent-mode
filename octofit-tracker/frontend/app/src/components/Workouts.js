
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';

const Workouts = () => {
  const [workouts, setWorkouts] = useState([]);
  const apiUrl = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;

  useEffect(() => {
    fetch(apiUrl)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setWorkouts(results);
        console.log('Fetched workouts:', results);
        console.log('API endpoint:', apiUrl);
      })
      .catch(err => console.error('Error fetching workouts:', err));
  }, [apiUrl]);

  return (
    <Card className="mb-4 shadow-sm">
      <Card.Body>
        <Card.Title as="h2" className="mb-4">Workouts</Card.Title>
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {workouts.map((workout, idx) => (
              <tr key={idx}>
                <td>{idx + 1}</td>
                <td>{workout.name}</td>
                <td>{workout.description}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default Workouts;
