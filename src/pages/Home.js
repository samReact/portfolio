import ParticlesComponent from '../components/Particles';

const Home = ({ theme }) => (
  <>
    <ParticlesComponent theme={theme} />
    <div>
      <div
        style={{
          left: 0,
          right: 0,
          textAlign: 'center ',
          position: 'absolute',
          top: '50%',
          transform: 'translateY(-50%)',
        }}
      >
        <h1 className="theme-color">Hi I'm Samir</h1>
        <hr
          style={{
            width: '200px',
            height: '1px',
            backgroundColor: '#01ccff',
          }}
        />
        <h1 className="theme-color">
          {'<'} FrontEnd Developer {'/>'}
        </h1>
      </div>
    </div>
  </>
);

export default Home;
