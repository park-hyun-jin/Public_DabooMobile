import create from 'zustand';
export const useStore = create(set => ({
  accessToken: null,
  setAccessToken: () => set(state => ({accessToken: state})),
}));
