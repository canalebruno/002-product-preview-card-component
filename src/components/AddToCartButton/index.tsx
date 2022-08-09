import styles from "./styles.module.scss";

export default function AddToCartButton() {
  return (
    <button className={styles.container}>
      <div className={styles.textContainer}>
        <img src="icon-cart.svg" alt="Add to Cart" />
        Add to Cart
      </div>
    </button>
  );
}
