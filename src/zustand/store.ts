import {create} from 'zustand';
const useStore = create(set => ({
  accessToken: null,
  setAccessToken: () => set(state => ({accessToken: state})),
}));

export default useStore;
