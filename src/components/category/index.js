import './Category.scss';

const Category = () => {
  return (
    <div className='category-all'>
      <ul>
        <div className="category-ul">
          <li>
            <img src={`${process.env.PUBLIC_URL}/img/category/monitorCelular.svg`} alt="Tecnologia" />
            <span>Tecnologia</span>
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/img/category/supermercado.svg`} alt="Supermercado" />
            <span>Supermercado</span>
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/img/category/whiskey.svg`} alt="Bebidas" />
            <span>Bebidas</span>
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/img/category/ferramentas.svg`} alt="Ferramentas" />
            <span>Ferramentas</span>
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/img/category/saude.svg`} alt="Saúde" />
            <span>Saúde</span>
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/img/category/corrida.svg`} alt="Esportes e Fitness" />
            <span>Esportes e Fitness</span>
          </li>
          <li>
            <img src={`${process.env.PUBLIC_URL}/img/category/moda.svg`} alt="Moda" />
            <span>Moda</span>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default Category;
