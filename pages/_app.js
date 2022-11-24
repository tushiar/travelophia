import "../styles/globals.css";
import "../styles/Home.css"

function MyApp({ Component, pageProps }) {
  return (
    <div id='wrapper'>
      <header className="main-header">Travelophia</header>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
