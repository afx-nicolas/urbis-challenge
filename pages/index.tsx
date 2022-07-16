import type { NextPage, NextPageContext } from 'next';
import { parseCookies } from 'nookies';
import { useState } from 'react';

import useCredentials from '../hooks/useCredentials';
import { auth } from '../lib/auth';

import styles from '../styles/Home.module.css';

const emailRegex = /^[A-z0-9.\-_]+@[A-z0-9.\-_]+\.[A-z]{2,4}(\.[A-z]{2,4})?$/;

const Home: NextPage = () => {
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isValidCredentials, setIsValidCredentials] = useState(true);
  const { credentials, dispatch } = useCredentials();

  function handleEmailInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'updateEmail', value: e.target.value });
    setIsEmailValid(true);
  }

  function handlePasswordInput(e: React.ChangeEvent<HTMLInputElement>) {
    dispatch({ type: 'updatePassword', value: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const { email, password } = credentials;

    if (!emailRegex.exec(email)) {
      return setIsEmailValid(false);
    }

    const isAuthenticated = await auth(credentials);

    if (!isAuthenticated) {
      dispatch({ type: 'clearPassword' });
      return setIsValidCredentials(false);
    }
  }

  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Clube de vantagens Staging</h1>
        <h2>Login</h2>
        {isValidCredentials ? null : (
          <div className={styles.invalidCredentials}>
            <span>E-mail ou senha incorretos</span>
          </div>
        )}
        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.inputGroup}>
            <label htmlFor="email">E-mail</label>
            <input
              className={
                isEmailValid
                  ? styles.input
                  : [styles.input, styles.invalid].join(' ')
              }
              type="email"
              name="email"
              value={credentials.email}
              onChange={handleEmailInput}
            />
            {isEmailValid || (
              <small className={styles.alert}>Digite um e-mail válido</small>
            )}
          </div>
          <div className={styles.inputGroup}>
            <label htmlFor="password">Senha</label>
            <input
              className={styles.input}
              type="password"
              name="password"
              value={credentials.password}
              onChange={handlePasswordInput}
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

export async function getServerSideProps(ctx: NextPageContext) {
  const { token } = parseCookies(ctx, 'token');

  if (token) {
    return {
      redirect: {
        destination: '/beneficios',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
