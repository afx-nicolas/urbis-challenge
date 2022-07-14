import type { NextPage } from 'next';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Clube de vantagens Staging</h1>
        <h2>Login</h2>
        <form className={styles.form}>
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              className={styles.input}
              type="email"
              name="email"
              id="email"
            />
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input
              className={styles.input}
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button className={styles.submitButton} type="submit">
            Entrar
          </button>
        </form>
      </main>
      <footer className={styles.footer}>
        <small>Made with {'<3'} by Nicolas A Feitoza</small>
      </footer>
    </div>
  );
};

export default Home;
