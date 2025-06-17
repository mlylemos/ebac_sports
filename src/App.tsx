import Header from './components/Header'
import Produtos from './containers/Produtos'
import { useGetProdutosQuery } from './services/api'
import { useDispatch, useSelector } from 'react-redux'
import { adicionar, toggleFavorito } from './store/reducers/carrinho'
import { RootState } from './store'
import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  foto: string
  imagem?: string
}

function App() {
  const dispatch = useDispatch()
  const { data: produtos = [] } = useGetProdutosQuery()
  console.log(produtos)
  const favoritos = useSelector((state: RootState) => state.carrinho.favoritos)
  const carrinho = useSelector((state: RootState) => state.carrinho.itens)

  function adicionarAoCarrinho(produto: Produto) {
    const existeNoCarrinho = carrinho.find((p) => p.id === produto.id)
    if (existeNoCarrinho) {
      alert('Item já adicionado')
    } else {
      dispatch(adicionar(produto))
    }
  }

  // Implemente a lógica de favoritar:
  function favoritar(produto: Produto) {
    dispatch(toggleFavorito(produto))
  }

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        <Produtos
          produtos={produtos}
          favoritos={favoritos}
          adicionarAoCarrinho={adicionarAoCarrinho}
          favoritar={favoritar}
        />
      </div>
    </>
  )
}

export default App
