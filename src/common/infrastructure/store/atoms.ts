import { atom, selector } from 'recoil';
export type Todo = {
	id: string;
	value: string;
};
export const todoListState = atom<Todo[]>({
	key: 'todoListState',
	default: [{ id: '1', value: 'sad' }],
});
export const getTodos = selector({
	key: 'getTodoList',
	get: ({ get }) => {
		return get(todoListState);
	},
	set: ({ get, set }, todo) => {
		const old = get(todoListState);
		set(todoListState, [...old, todo as Todo]);
	},
});
