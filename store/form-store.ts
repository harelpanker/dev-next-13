import { atom } from 'jotai';

const success = atom<boolean>(false);
const isOpen = atom<boolean>(false);
const step = atom<number>(1);
const personName = atom<string>('');
const personEmail = atom<string>('');
const personMessage = atom<string>('');

export { success, step, personName, personEmail, personMessage, isOpen };
