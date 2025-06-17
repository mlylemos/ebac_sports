import * as S from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import cesta from '../../assets/cesta.png'

const Header = () => {
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.carrinho.itens
  )
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)
  const valorTotal = itensNoCarrinho.reduce((acc, item) => acc + item.preco, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Carrinho" />
        <span>
          {itensNoCarrinho.length} itens, valor total: R${' '}
          {valorTotal.toFixed(2)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
