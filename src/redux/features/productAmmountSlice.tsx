import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AmmounterState {

  value: Array<{
    id: string,
    company: string,
    count: number,
    src: string,
    imageArray: [],
    images: [],
    title: string,
    description: string,
    price: string,
    previousPrice: string,
    percentage: string,
    data?: unknown

  }>;
}

export const ProductAmmountSlice = createSlice({
  name: 'Ammounter',
  initialState: {
    value: [],
  } as AmmounterState,
  reducers: {
    increment: (state, action) => {
      const { id, count } = action.payload;
      const existingItem = state.value.find(item => item.id === id);
      if (!existingItem) {
        state.value.push({
          id, count: count + 1, 
          company: '',
          src: '',
          imageArray: [],
          images: [],
          title: '',
          description: '',
          price: '',
          previousPrice: '',
          percentage: ''
        });
      } else {
        if (existingItem.count > 19) {
          return;
        }
        existingItem.count += 1;
      }
    },
    decrement: (state, action: PayloadAction<{ id: string; count: number; }>) => {
      const { id, count } = action.payload;
      const existingItem = state.value.find(item => item.id === id);
      if (!existingItem) {
        state.value.push({ id, count: count - 1,
          company: '',
          src: '',
          imageArray: [],
          images: [],
          title: '',
          description: '',
          price: '',
          previousPrice: '',
          percentage: ''});
      } else {
        if (existingItem.count < 1) {
          return;
        }
        existingItem.count -= 1;
      }
    },
  },
});

// eslint-disable-next-line react-refresh/only-export-components
export const { increment, decrement } = ProductAmmountSlice.actions;

export default ProductAmmountSlice.reducer;
