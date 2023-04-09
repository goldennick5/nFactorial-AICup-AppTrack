import s from "./navbar.module.scss";

const Navbar = () => {
  return (
    <header className={s.header}>
      <nav className={s.nav}>
        <a href="#">
          <img className={s.logo} src="src/assets/nfac-logo.png" alt="logo" />
        </a>
        <p className={s.paragraph}>nHelper</p>
      </nav>
    </header>
  );
};

export default Navbar;
