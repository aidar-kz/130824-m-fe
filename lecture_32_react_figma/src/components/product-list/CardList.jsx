import React from "react";
import CardProduct from "../cardProduct/CardProduct";
import st from "./CardList.module.scss";

export default function CardList({ data }) {
  return (
    <div className={st.container}>
      {data.map((el) => (
        <CardProduct title={el.description} url={el.url} key={el.id} />
      ))}
    </div>
  );
}
