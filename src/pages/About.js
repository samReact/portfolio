import Chart from 'chart.js/auto';
import { useEffect } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { useChartData } from '../hooks/useChartData';
import { skills } from '../utils/datas';

const About = ({ theme }) => {
  const [
    backgroundColors,
    borderColors,
    typeDatas,
    type,
    setType,
  ] = useChartData();

  useEffect(() => {
    var ctx = 'myChart';
    Chart.defaults.datasets.line.showLine = false;
    var myChart = new Chart(ctx, {
      type: 'polarArea',
      data: {
        labels: typeDatas.map((type) => type.name),
        datasets: [
          {
            data: typeDatas.map((type) => type.level),
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
  }, [typeDatas, backgroundColors, borderColors]);

  const types = Object.keys(skills);
  return (
    <Container style={{ height: '100vh', marginTop: 150 }}>
      <Row className="align-items-center justify-content-center">
        <Col sm={6} md={4}>
          <Row className="d-flex justify-content-center">
            {types.map((elt) => (
              <Button
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
