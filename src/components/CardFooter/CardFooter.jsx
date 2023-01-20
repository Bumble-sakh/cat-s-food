import styles from './CardFooter.module.scss';
import classNames from 'classnames';

export const CardFooter = ({ isActive, isDisabled, onClick, product }) => {
  const footerStyles = classNames([styles.footer], {
    [styles.disable]: isDisabled,
  });

  return (
    <div className={footerStyles}>
      {!isActive && !isDisabled ? 'Чего сидишь? Порадуй котэ, ' : null}
      {!isActive && !isDisabled ? (
        <span className={styles.buy} onClick={onClick}>
          купи.
        </span>
      ) : null}
      {isActive && !isDisabled ? product.description : null}
      {isDisabled ? `Печалька, ${product.flavor} закончился.` : null}
    </div>
  );
};
