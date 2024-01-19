import styles from '@/app/styles/navbar.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Nav from "@/app/components/Nav";

const Header = () => {
    return (
        <header className={styles.main_header}>
            <div className={styles.navbar_brand}>
                <Link href='/'>
                    <Image src="/logo1.png" height={40} width={150} />
                </Link>
            </div>
            <Nav />
        </header>
    )
}

export default Header