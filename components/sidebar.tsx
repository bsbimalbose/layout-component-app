import Link from 'next/link';
import styles from './sidebar.module.css';
import { useRouter } from 'next/router';

export default function Sidebar() {
  const router = useRouter();

  const activeStyle = { background: '#323952', color: 'white' };
  return (
    <nav className={styles.nav}>
      <input className={styles.input} placeholder='Search...' />
      <Link style={router.pathname == '/' ? activeStyle : {}} href='/'>
        Home
      </Link>
      <Link style={router.pathname == '/about' ? activeStyle : {}} href='/about'>
        About
      </Link>
      <Link style={router.pathname == '/contact' ? activeStyle : {}} href='/contact'>
        Contact
      </Link>
    </nav>
  );
}
