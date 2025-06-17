import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../store'
import { adicionarAoCarrinho } from '../store/reducers/carrinho'
import { toggleFavorito } from '../store/reducers/favoritos'
import Produto from '../components/Produto'
import * as S from './styles'

type ProdutoType = {
  id: number
  nome: string
  preco: number
  imagem: string
}

type Props = {
  produtos: ProdutoType[]
}

const Produtos = ({ produtos }: Props) => {
  const dispatch = useDispatch()
  const favoritos = useSelector((state: RootState) => state.favoritos.itens)

  const aoComprar = (produto: ProdutoType) => {
    dispatch(adicionarAoCarrinho(produto))
  }

  const favoritar = (produto: ProdutoType) => {
    dispatch(toggleFavorito(produto))
  }

  return (
    <S.Produtos>
      {produtos.map((produto) => (
        <Produto
          key={produto.id}
          id={produto.id}
          nome={produto.nome}
          preco={produto.preco}
          imagem={produto.imagem}
          aoComprar={aoComprar}
          favoritar={favoritar}
          estaNosFavoritos={favoritos.some(
            (item: ProdutoType) => item.id === produto.id
          )}
        />
      ))}
    </S.Produtos>
  )
}

export default Produtos
