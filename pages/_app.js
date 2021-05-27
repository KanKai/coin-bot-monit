import Link from 'next/link';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/management">Management</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
