import React, { FC } from 'react';
import styles from './ProductItem.module.css';

interface ProductItemProps {}

const ProductItem: FC<ProductItemProps> = () => (
  <div className={styles.ProductItem}>
    ProductItem Component
  </div>
);

export default ProductItem;
