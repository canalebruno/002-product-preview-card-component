import AddToCartButton from "../AddToCartButton";
import styles from "./styles.module.scss";

export default function ProductPreviewCard() {
  const backgroundImage = "image-product-desktop.jpg";

  return (
    <div className={styles.container}>
      <div
        className={styles.imageContainer}
        style={{ backgroundImage: `url(${backgroundImage})` }}
      />
      <div className={styles.textContainer}>
        <h2>PERFUME</h2>
        <h1>Gabrielle Essence Eau De Parfum</h1>
        <p>
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className={styles.priceContainer}>
          <span className={styles.currentPrice}>$149.99</span>
          <span className={styles.oldPrice}>$169.99</span>
        </div>
        <AddToCartButton />
      </div>
    </div>
  );
}
