import React from "react";
import st from "./CardProduct.module.scss";
import ButtonLink from "../../ui/ButtonLink";

export default function CardProduct({ url, title, id }) {
  return (
    <div className={st.container}>
      <p>
        <img src={url} alt={title} className={st.productImage} />
        {title}
      </p>
      <ButtonLink type="button" className={st.btn} text="Добавить в корзину" />
    </div>
  );
}
