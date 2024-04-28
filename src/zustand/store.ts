import {create} from 'zustand';

interface useStoreInterface {
  accessToken: string;
  refreshToken: string;
  setAccessToken: (value: string) => void;
  setRefreshToken: (value: string) => void;
}
const useStore = create<useStoreInterface>(set => ({
  accessToken: '',
  refreshToken: '',
  setAccessToken: (value: string) => set(state => ({accessToken: value})),
  setRefreshToken: (value: string) => set(state => ({refreshToken: value})),
}));

export default useStore;
