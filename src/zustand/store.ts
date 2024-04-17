import {create} from 'zustand';

interface useStoreInterface {
  accessToken: string | null;
  refreshToken: string | null;
  setAccessToken: (value: string) => void;
  setRefreshToken: (value: string) => void;
}
const useStore = create<useStoreInterface>(set => ({
  accessToken: null,
  refreshToken: null,
  setAccessToken: (value: string) => set(state => ({accessToken: value})),
  setRefreshToken: (value: string) => set(state => ({refreshToken: value})),
}));

export default useStore;
