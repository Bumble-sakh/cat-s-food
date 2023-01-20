import { Cards } from '../Cards/Cards';
import styles from './Page.module.scss';

export const Page = () => {
  return (
    <section className={styles.section}>
      <h2 className={styles.header}>Ты сегодня покормил кота?</h2>
      <Cards />
    </section>
  );
};
