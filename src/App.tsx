import Header from './components/Header'
import Produtos from './containers/Produtos'
import { useGetProdutosQuery } from './services/api'
import { useDispatch, useSelector } from 'react-redux'
import { adicionar } from './store/reducers/carrinho'
import { RootState } from './store'
import { GlobalStyle } from './styles'

export type Produto = {
  id: number
  nome: string
  preco: number
  foto: string
}

function App() {
  const dispatch = useDispatch()
  const { data: produtos = [] } = useGetProdutosQuery()
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

  function favoritar(produto: Produto) {
    // lógica de favoritar aqui
  }

  return (
    <>
      <GlobalStyle />
      <Header />
      <Produtos
        produtos={produtos}
        favoritos={favoritos}
        adicionarAoCarrinho={adicionarAoCarrinho}
        favoritar={favoritar}
      />
    </>
  )
}

export default App
