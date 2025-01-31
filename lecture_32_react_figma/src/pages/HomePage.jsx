import { Link } from 'react-router'
import './HomePage.scss'

export default function HomePage() {
    return (
        <div className='home-page'>
            <h1>Лучший магазин лучших вещей</h1>
            <div className="grid">
                <Link className='category-link' to='/electronics'>electronics</Link>
                <Link className='category-link' to='/jewelry'>jewelry</Link>
                <Link className='category-link' to='/mens-clothing'>men's clothing</Link>
                <Link className='category-link' to='/womens-clothing'>women's clothing</Link>
            </div>
        </div>
    )
}