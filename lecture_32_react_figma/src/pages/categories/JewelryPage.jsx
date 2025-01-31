import { Link } from 'react-router'
import './JewelryPage.scss'

export default function JewelryPage() {
    return (
        <div className='page-container'>
            <h1>Jewelry</h1>
            <div className="grid">
                <Link className='category-link' to='/electronics'>electronics</Link>
                <Link className='category-link' to='/jewelry'>jewelry</Link>
                <Link className='category-link' to='/mens-clothing'>men's clothing</Link>
                <Link className='category-link' to='/womens-clothing'>women's clothing</Link>
            </div>
        </div>
    )
}