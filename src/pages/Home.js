import Particles from 'react-particles-js';

const Home = () => (
  <>
    <Particles
      params={{
        fpsLimit: 60,
        backgroundMode: {
          enable: true,
          zIndex: 0,
        },
        particles: {
          number: {
            value: 180,
            density: {
              enable: true,
              area: 800,
            },
          },
          color: {
            value: '#ff0000',
            animation: {
              enable: true,
              speed: 10,
              sync: true,
            },
          },
          stroke: {
            width: 1,
          },
          size: {
            value: 2,
            random: true,
            animation: {
              enable: false,
              speed: 5,
              minimumValue: 0.1,
              sync: false,
            },
          },
          links: {
            enable: true,
            distance: 100,
            color: '#ffffff',
            opacity: 0.2,
            width: 3,
          },
          move: {
            enable: true,
            speed: 1,
            direction: 'none',
            random: false,
            straight: false,
            outMode: 'out',
            attract: {
              enable: false,
              rotateX: 600,
              rotateY: 1200,
            },
          },
        },
        interactivity: {
          detectsOn: 'window',
          events: {
            onHover: {
              enable: true,
              mode: 'repulse',
            },
            resize: true,
          },
          modes: {
            grab: {
              distance: 200,
              links: {
                opacity: 0.6,
              },
            },
            bubble: {
              distance: 400,
              size: 2,
              duration: 2,
              opacity: 0.2,
            },
            repulse: {
              distance: 100,
            },
          },
        },
        detectRetina: true,
        background: {
          color: '#000000',
          size: 'cover',
        },
      }}
    />
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
  </>
);

export default Home;
