import * as S from './styles'

type ProdutoData = {
  id: number
  nome: string
  preco: number
  imagem: string
}

type ProdutoProps = ProdutoData & {
  aoComprar: (produto: ProdutoData) => void
  favoritar: (produto: ProdutoData) => void
  estaNosFavoritos: boolean
}

const paraReal = (valor: number) =>
  valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })

const Produto = ({
  id,
  nome,
  preco,
  imagem,
  aoComprar,
  favoritar,
  estaNosFavoritos
}: ProdutoProps) => {
  return (
    <S.Produto>
      <S.Capa>
        <img src={imagem} alt={nome} />
      </S.Capa>
      <S.Titulo>{nome}</S.Titulo>
      <S.Prices>
        <strong>{paraReal(preco)}</strong>
      </S.Prices>
      <S.BtnComprar
        onClick={() => favoritar({ id, nome, preco, imagem })}
        type="button"
      >
        {estaNosFavoritos
          ? '- Remover dos favoritos'
          : '+ Adicionar aos favoritos'}
      </S.BtnComprar>
      <S.BtnComprar
        onClick={() => aoComprar({ id, nome, preco, imagem })}
        type="button"
      >
        Adicionar ao carrinho
      </S.BtnComprar>
    </S.Produto>
  )
}

export default Produto
