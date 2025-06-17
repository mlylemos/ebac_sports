import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type Produto = {
  id: number
  nome: string
  preco: number
  foto: string
  imagem?: string
}

type CarrinhoState = {
  itens: Produto[]
  favoritos: Produto[]
}

const initialState: CarrinhoState = {
  itens: [],
  favoritos: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState,
  reducers: {
    adicionar(state, action: PayloadAction<Produto>) {
      state.itens.push(action.payload)
    },
    toggleFavorito(state, action: PayloadAction<Produto>) {
      const existe = state.favoritos.find((p) => p.id === action.payload.id)
      if (existe) {
        state.favoritos = state.favoritos.filter(
          (p) => p.id !== action.payload.id
        )
      } else {
        state.favoritos.push(action.payload)
      }
    }
  }
})

export const { adicionar, toggleFavorito } = carrinhoSlice.actions
export default carrinhoSlice.reducer
