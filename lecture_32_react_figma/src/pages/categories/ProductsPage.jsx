import React from "react";
import SectionsTitle from "../components/sectionsTitle/SectionsTitle";
import CardList from "../components/cardList/CardList";
import data from "../data";
export default function ProductsPage() {
  return (
    <div>
      <SectionsTitle text="Products" />
      <CardList data={data} />
    </div>
  );
}
