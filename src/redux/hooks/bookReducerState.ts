import { useAppSelector } from '../../app/store';

export const useBoxState = () => useAppSelector((state) => state.box);