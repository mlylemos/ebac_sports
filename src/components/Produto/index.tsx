import { useDispatch } from 'react-redux'
import { adicionar } from '../../store/reducers/carrinho'

type ProdutoType = {
  id: number
  nome: string
  preco: number
  foto: string
}

type Props = {
  produto: ProdutoType
  aoComprar: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
}

const Produto = ({ produto, aoComprar, favoritar, estaNosFavoritos }: Props) => {
  const dispatch = useDispatch()

  const comprar = () => {
    dispatch(adicionar(produto))
    aoComprar(produto)
  }

  const favoritarProduto = () => {
    favoritar(produto)
  }

  return (
    <div>
      <img src={produto.foto} alt={produto.nome} />
      <h3>{produto.nome}</h3>
      <p>R$ {produto.preco.toFixed(2)}</p>
      <button onClick={comprar}>Comprar</button>
      <button onClick={favoritarProduto}>
        {estaNosFavoritos ? 'Remover dos favoritos' : 'Favoritar'}
      </button>
    </div>
  )
}

export default Produto
