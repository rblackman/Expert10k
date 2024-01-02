import User from '@t/user';
import { atom } from 'recoil';

export const userState = atom<User | null>({
	key: 'userState',
	default: null,
});
