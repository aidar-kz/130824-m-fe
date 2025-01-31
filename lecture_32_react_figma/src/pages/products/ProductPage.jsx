import ButtonLink from "../../components/ui/button-link/ButtonLink"

export default ProductPage() {
    return (
        <div className="page-container">
            <div>
                <img src="/images/image1.png" alt="Product image" />
            </div>
            <div>
                <h1>Product title</h1>
                <p>Product description</p>
                <div>
                    <span>Price: 695</span>
                    <ButtonLink type="button" className={st.btn} text="Добавить в корзину" />
                </div>
            </div>
        </div>
    )
}