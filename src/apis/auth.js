import { onGet } from '@/utils/request';

export const login = ({ username,password }) => onGet('api/login/',);


