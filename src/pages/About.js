import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useChartData } from '../hooks/useChartData';
import { skills } from '../utils/datas';

const About = () => {
  const [typeDatas, type, setType] = useChartData();

  useEffect(() => {
    if (typeDatas) {
      const { backgroundColors, borderColors, datas } = typeDatas;

      var ctx = 'myChart';
      Chart.defaults.datasets.line.showLine = false;
      var myChart = new Chart(ctx, {
        type: 'polarArea',
        data: {
          labels: datas.map((type) => type.name),
          datasets: [
            {
              data: datas.map((type) => type.level),
              backgroundColor: backgroundColors,
              borderColor: borderColors,
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            r: {
              ticks: {
                display: false,
              },
              grid: {
                display: false,
              },
            },
          },
        },
      });
      return () => myChart.destroy();
    }
  }, [typeDatas]);

  const types = Object.keys(skills);
  return (
    <Container style={{ marginTop: '10vh' }}>
      <Row className="align-items-center justify-content-center">
        <Col sm={6} md={4}>
          <Row className="d-flex justify-content-center">
            {types.map((elt) => (
              <Button
                key={elt}
                size="sm"
                type="button"
                onClick={() => setType(elt)}
                disabled={elt === type}
                className="m-2"
              >
                {elt}
              </Button>
            ))}
          </Row>
        </Col>
        <Col sm={6} md={8} className="d-flex justify-content-center mt-5">
          <div style={{ width: '80%' }}>
            <canvas id="myChart" />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default About;
