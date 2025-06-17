import * as S from './styles'

type ProdutoType = {
  id: number
  nome: string
  preco: number
  foto: string
  imagem?: string
}

type Props = {
  produto: ProdutoType
  aoComprar: (produto: ProdutoType) => void
  favoritar: (produto: ProdutoType) => void
  estaNosFavoritos: boolean
}

const Produto = ({
  produto,
  aoComprar,
  favoritar,
  estaNosFavoritos
}: Props) => {
  return (
    <S.Produto>
      <S.Capa>
        <img src={produto.imagem} alt={produto.nome} />
      </S.Capa>
      <S.Titulo>{produto.nome}</S.Titulo>
      <S.Prices>
        <strong>R$ {produto.preco.toFixed(2)}</strong>
      </S.Prices>
      <S.BtnComprar onClick={() => favoritar(produto)} type="button">
        {estaNosFavoritos ? 'Remover dos favoritos' : 'Favoritar'}
      </S.BtnComprar>
      <S.BtnComprar onClick={() => aoComprar(produto)} type="button">
        Comprar
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
