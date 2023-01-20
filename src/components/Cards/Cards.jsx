import { Card } from '../Card/Card';
import products from '../../data/products.json';
import styles from './Cards.module.scss';

export const Cards = () => {
  return (
    <div className={styles.cards}>
      {products.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </div>
  );
};
