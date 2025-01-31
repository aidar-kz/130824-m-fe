import React from "react";
import st from "./ProductCard.module.scss";
import ButtonLink from "../ui/button-link/ButtonLink.jsx";
import { Link } from "react-router";

export default function ProductCard({ product }) {
  return (
    <Link>
      <div className={st.container}>
        <p>
          <img src={product.url} alt={product.description} className={st.productImage} />
          <br />
          {product.description}
        </p>
        <ButtonLink type="button" text="Добавить в корзину" />
      </div>
    </Link>
  );
}
