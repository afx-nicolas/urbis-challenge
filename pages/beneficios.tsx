import Card from '../components/Card';
import Header from '../components/Header';
import styles from '../styles/Beneficios.module.css';

export default function Beneficios() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.container}>
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </main>
    </>
  );
}
