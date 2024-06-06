import React from 'react';
import './partners.scss';

const Partners = () => {
    return (
        <div className="parceiros">
            <div className="card-container">
                <div className="card">
                    <h3>Parceiros</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <button>CONFIRA</button>
                </div>
                <div className="card">
                    <h3>Parceiros</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <button>CONFIRA</button>
                </div>
            </div>
            <div className="header">
                <h3>Produtos relacionados</h3>
                <a href="#">Ver todos</a>
            </div>
            <div className="card-container">
                <div className="card">
                    <h3>Produtos</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <button>CONFIRA</button>
                </div>
                <div className="card">
                    <h3>Produtos</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur</p>
                    <button>CONFIRA</button>
                </div>
            </div>
            <div className="header-bottom">
                <h3>Navegue por marcas</h3>
                <div className="icon-row">
                    {[...Array(6)].map((_, index) => (
                        <div className="icon-circle" key={index}>
                            <img src={`${process.env.PUBLIC_URL}/img/header/logo.png`} alt="VTEX logo" />
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
};

export default Partners;

