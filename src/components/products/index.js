import React, { useState, useEffect } from 'react';
import './products.scss';

const url = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/lista-produtos/produtos.json';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Erro');
                }
                const data = await response.json();
                setProducts(data.products);
            } catch (error) {
                console.error('Erro ao buscar os produtos:', error);
            }
        };
        fetchProducts();
    }, []);

    return (
        <div className='products'>
            <h3>Produtos relacionados</h3>
            <div className='products-nav'>
            </div>
            <div className='products-carousel'>
                {products.map(product => (
                    <div className='product-card' key={product.productName}>
                        <img src={product.photo} alt={product.productName} />
                        <p>{product.descriptionShort}</p>
                        <p className='old-price'>R$ {product.price}</p>
                        <p className='price'>R$ {product.price}</p>
                        <p>ou 2x de R$ {(product.price / 2).toFixed(2)} sem juros</p>
                        <p className='free-shipping'>Frete grátis</p>
                        <button>COMPRAR</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Products;