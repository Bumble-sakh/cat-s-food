import { useState } from 'react';
import { CardFooter } from '../CardFooter/CardFooter';
import styles from './Card.module.scss';
import classNames from 'classnames';

export const Card = ({ product }) => {
  const [isActive, setIsActive] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [amount, setAmount] = useState(product.amount);

  const cardStyles = classNames([styles.card], {
    [styles.active]: isActive && !isDisabled,
    [styles.hover]: isHover && !isDisabled,
    [styles.disable]: isDisabled,
  });

  const onClick = () => {
    if (isActive) {
      setAmount((prev) => prev + 1);
    } else {
      setAmount((prev) => prev - 1);
    }

    amount === 1 ? setIsDisabled(true) : setIsDisabled(false);

    setIsHover(false);
    setIsActive((prev) => !prev);
  };

  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  if (isDisabled) {
  }

  return (
    <div className={cardStyles}>
      <div className={styles.card__border} onClick={onClick} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
        <div className={styles.card__body}>
          <div className={`${styles.brand} ${styles.text}`}>{product.brand}</div>
          <div className={`${styles.name} ${styles.text}`}>{product.name}</div>
          <div className={`${styles.flavor} ${styles.text}`}>{product.flavor}</div>
          <div className={`${styles.portion} ${styles.text}`}>
            <strong>{product.portion.split(' ').slice(0, 1)}</strong>
            {` ${product.portion.split(' ').slice(1).join(' ')}`}
          </div>
          <div className={`${styles.present} ${styles.text}`}>
            <strong>{product.present.split(' ').slice(0, 1)}</strong>
            {` ${product.present.split(' ').slice(1).join(' ')}`}
          </div>
          <div className={`${styles.present} ${styles.text}`}>{product.satisfied ? 'заказчик доволен' : null}</div>
          <div className={styles.weight}>
            <span className={styles.weight__count}>{product.weight}</span>
            <span className={styles.weight__description}>кг</span>
          </div>
        </div>
      </div>

      <CardFooter isActive={isActive} isDisabled={isDisabled} onClick={onClick} product={product} />
    </div>
  );
};
