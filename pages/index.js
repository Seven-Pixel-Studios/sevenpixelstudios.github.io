import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Grid from '../components/grid';
import Card from '../components/card';

export default function Home() {
  /*** CARDS ***/
  /* Joey */
  let joeyImage = <Image 
                    src="/images/Joey.jpg"
                    width="220"
                    height="293"
                  />;
  let joeyTitle = "Joseph Toscano";
  let joeyText = "Primary pixel artist, game designer, programmer, and co-founder of Seven Pixel Studios. " +
  "Born and raised in the state of Florida, current student at University of California San Diego. " +
  "I love to play and create videogames! The inspiration for our first game Battle Paddles and " +
  "Seven Pixel Studios as a whole came from hours playing Shovel Knight, Undertale, Binding of Isaac, " + 
  "and other indie titles.";

  /* Zachary */
  let zacharyImage = <Image 
                       src="/images/Zachary.jpg"
                       width="360"
                       height="293"
                     />;
  let zacharyTitle = "Zachary Li Norman";
  let zacharyText = "Game developer, game designer, business creator, and co-founder of Seven Pixel Studios. " +
  "Born and raised in SoCal, I grew up playing and loving video games. I started software development " +
  "with Minecraft mods, and now work full-time as a Software Engineer. Some of my favorite games include " +
  "League of Legends, MapleStory, Minecraft, and Idle Heroes.";

  /* Battle Paddles */
  let bpImage = <Image 
                  src="/images/bpApp_Icon.png"
                  width="256"
                  height="256"
                />;
  let bpTitle = "Battle Paddles";
  let bpText = "Joey and Zach met at UCSD because there were both part of the same student organization, Alpha Phi Omega. " +
  "From there, the two found a shared passion for game design and started to work on a prototype for a simple mobile game. " +
  "After taking time to study for finals and abandoning the project temporarily, the group reconvened, " +
  "formed Seven Pixel Studios, and Battle Paddles was born.";
  /***************/

  return (
    <div className={styles.container}>
      <Head>
        <title>Seven Pixel Studios</title>
        <link rel="icon" href="/7PixelStudioLogoWhite.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet"/>
      </Head>

      <div className={styles.header}>
        <Image 
          src="/images/7PixelStudioLogoBig.png"
          width="256"
          height="256"
        />
        <div style={{paddingTop: "10px"}}>
          <h1 className={styles.title}>
            Seven Pixel Studios
          </h1>
          <p className={styles.description}>
            A Video Game Company Founded By Joseph Toscano and Zachary Li Norman
          </p>
        </div>
      </div>
      <main>
        <h1 className={styles.title}>
          About Us
        </h1>

        <Grid>
          <Card 
            image={joeyImage}
            title={joeyTitle}
            text={joeyText}
          />

          <Card
            image={zacharyImage}
            title={zacharyTitle}
            text={zacharyText}
          />
        </Grid>
        
        <h1 className={styles.title} style={{marginTop: "3rem"}}>
          The Story
        </h1>
        <Grid>
          <Card
            image={bpImage}
            title={bpTitle}
            text={bpText}
          />
        </Grid>
      </main>

      <footer>
        <a
          href="mailto:compnay@sevenpixelstudios.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us: company@sevenpixelstudios.com
        </a>
        <p>2023 © Seven Pixel Studios</p>
      </footer>

      <style jsx>{`
        main {
          padding: 3rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          display: flex;
          flex-direction:column;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
