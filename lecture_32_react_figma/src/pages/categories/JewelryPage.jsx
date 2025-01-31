import { Link } from 'react-router'
import './JewelryPage.scss'
import ProductCard from '../../components/product-card/ProductCard.jsx';
import data from '../../api/data.js'

export default function JewelryPage() {
    return (
        <div className='page-container'>
            <h1>Jewelry</h1>
            <div className="products-grid">
                {data.map(product => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}