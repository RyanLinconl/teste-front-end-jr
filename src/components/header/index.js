import './header.scss'

const Header = () => {
    return (
        <header>
            <div className='header-top'>
                <div className='header-top-detail'>
                    <img src={`${process.env.PUBLIC_URL}/img/header/shield.png`}></img>
                    <p>Compra<strong className='header-strong'> 100% segura</strong></p>
                </div>
                <div className='header-top-detail'>
                    <img src={`${process.env.PUBLIC_URL}/img/header/truck.png`}></img>
                    <p><strong className='header-strong'>Frete grátis</strong> acima de R$ 200</p>
                </div>
                <div className='header-top-detail'>
                    <img src={`${process.env.PUBLIC_URL}/img/header/creditCard.png`}></img>
                    <p><strong className='header-strong'>Parcele</strong> suas compras</p>
                </div>
            </div>
            <div className='heather-search-section'>
                <img src={`${process.env.PUBLIC_URL}/img/header/logo.png`} className='heather-search-logo'></img>
                <input type='search' placeholder='O que está buscando?'></input>
                <div>
                    <a href='#' className='heather-search-section-icons'>
                        <img src={`${process.env.PUBLIC_URL}/img/header/group.png`}></img>
                        <img src={`${process.env.PUBLIC_URL}/img/header/heart.png`}></img>
                        <img src={`${process.env.PUBLIC_URL}/img/header/userCircle.png`}></img>
                        <img src={`${process.env.PUBLIC_URL}/img/header/shoppingCart.png`}></img>
                    </a>
                </div>
            </div>
            <div className='header-category'>
                <ul className='header-ul'>
                    <a href='#'>TODAS AS CATEGORIAS</a>
                    <a href='#'>SUPERMERCADO</a>
                    <a href='#'>LIVROS</a>
                    <a href='#'>MODA</a>
                    <a href='#'>LANÇAMENTOS</a>
                    <a href='#'>OFERTAS DO DIA</a>   
                    <a href='#'>ASSINATURA</a>
                    
                </ul>
            </div>
        </header>
    )
}

export default Header;