import { Navbar } from '../components/Navbar';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {/* <header>
        <h1 className="text-6xl font-bold text-center">My Coin Kub</h1>
        <nav className="my-4">
          <ul className="flex flex-row justify-center space-x-4">
            <li>
              <Link href="/">
                <a>Home</a>
              </Link>
            </li>
            <li>
              <Link href="/management">Management</Link>
            </li>
          </ul>
        </nav>
      </header> */}
      <Navbar />

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
