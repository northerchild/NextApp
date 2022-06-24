import { ActiveLink } from './ActiveLink'
import styles from './Navbar.module.css'

export const Navbar = () => {
  const menuItems = [
    {
        text: 'Home',
        href: '/',
        index:1
    },
    {
        text: 'About',
        href: '/about',
        index:2
    },
    {
        text: 'Contact',
        href: '/contact',
        index:3
    },
    {
        text: 'Pricing',
        href: '/pricing',
        index:4
    },
];
  return (
    <nav className={styles["menu-container"]}>
        {menuItems.map(menuItem => (
          <ActiveLink key={menuItem.index} text={menuItem.text} href={menuItem.href}/>
        ))}
    </nav>
  )
}
