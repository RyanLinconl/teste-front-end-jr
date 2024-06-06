import './footer.scss';

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-section">
            <h3>Sobre nós</h3>
            <ul>
              <li>CONHEÇA</li>
              <li>COMO COMPRAR</li>
              <li>INDICAÇÃO E DESCONTO</li>
            </ul>
            <div className="social-icons">
              <img className="fab fa-facebook" src={`${process.env.PUBLIC_URL}/img/footer/facebook.png`}></img>
              <img className="fab fa-instagram" src={`${process.env.PUBLIC_URL}/img/footer/instagram.png`}></img>
              <img className="fab fa-youtube" src={`${process.env.PUBLIC_URL}/img/footer/youtube.png`}></img>
            </div>
          </div>
          <div className="footer-section">
            <h3>INFORMAÇÕES ÚTEIS</h3>
            <ul>
              <li>FALE CONOSCO</li>
              <li>DÚVIDAS</li>
              <li>PRAZOS DE ENTREGA</li>
              <li>FORMAS DE PAGAMENTO</li>
              <li>POLÍTICA DE PRIVACIDADE</li>
              <li>TROCAS E DEVOLUÇÕES</li>
            </ul>
          </div>
          <div className="footer-section">
            <h3>FORMAS DE PAGAMENTO</h3>
            <div className="payment-icons">
            <img src={`${process.env.PUBLIC_URL}/img/footer/formas_pagamento.png`}></img>
            </div>
          </div>
          <div className="footer-section newsletter">
            <h3>CADASTRE-SE E RECEBA NOSSAS NOVIDADES E PROMOÇÕES</h3>
            <p>Exceptetur sint occaecat cupidatat non ent, sunt in culpa qui officia lorem ipsum</p>
            <form>
              <input type="email" placeholder="SEU E-MAIL" />
              <button type="submit">OK</button>
            </form>
          </div>
        </div>
        <div className="footer-bottom">
          <p>COPYRIGHT © 2019. TODOS OS DIREITOS RESERVADOS. TODAS AS MARCAS E SUAS IMAGENS SÃO DE PROPRIEDADE DE SEUS RESPECTIVOS DONOS. É VEDADA A REPRODUÇÃO, TOTAL OU PARCIAL, DE QUALQUER CONTEÚDO SEM EXPRESSA AUTORIZAÇÃO.</p>
            <img src={`${process.env.PUBLIC_URL}/img/footer/logos.png`} alt="Econverse" />
        </div>
      </footer>
    );
  };
  
  export default Footer;