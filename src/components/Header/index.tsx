import * as S from './styles'
import { Produto } from '../../App'
import cesta from '../../assets/cesta.png'
import { useSelector } from 'react-redux'
import { RootState } from '../../store'

const paraReal = (valor: number) => {
  return `R$ ${valor.toFixed(2)}`
}

const Header = () => {
  const itensNoCarrinho = useSelector(
    (state: RootState) => state.carrinho.itens
  )

  const favoritos = useSelector((state: RootState) => state.carrinho.favoritos)

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    return acc + item.preco
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img src={cesta} alt="Carrinho" />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
