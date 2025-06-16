import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type Produto = {
    id: number
    nome: string
    preco: number
    foto: string
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
        adicionar: (state, action: PayloadAction<Produto>) => {
            state.itens.push(action.payload)
        }
    }
})

export const { adicionar } = carrinhoSlice.actions
export default carrinhoSlice.reducer
