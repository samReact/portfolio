import '../Home.css';

const Home = () => (
  <div id="home">
    <div className="background">
      <div className="layer"></div>
    </div>
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
      <h1
        style={{
          color: 'rgba(255,255,255,1)',
          fontFamily: 'MyFont',
        }}
      >
        Hi I'm Samir
      </h1>
      <hr
        style={{
          width: '200px',
          height: '1px',
          backgroundColor: '#39bb88',
        }}
      />
      <h1
        style={{
          color: 'rgba(255,255,255,1)',
          fontFamily: 'MyFont',
        }}
      >
        {'<'} FrontEnd Developer {'/>'}
      </h1>
    </div>
  </div>
);

export default Home;
