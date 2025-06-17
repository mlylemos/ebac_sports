import Header from './components/Header'
import Produtos from './containers/Produtos'
import { GlobalStyle } from './styles'
import { useGetProdutosQuery } from './store/services/produtosApi'

function App() {
  const { data: produtos = [], isLoading, error } = useGetProdutosQuery()

  return (
    <>
      <GlobalStyle />
      <div className="container">
        <Header />
        {isLoading && <p>Carregando...</p>}
        {error && <p>Erro ao carregar produtos.</p>}
        <Produtos produtos={produtos} />
      </div>
    </>
  )
}

export default App
