import { useQuery, useQueryClient, useMutation } from 'react-query';

const useTestQueryHooks = () => {
	return useQuery('test', () => {});
};
const testSend = () => {
	return new Promise((resolve, reject) => {
		resolve({ id: 1 });
	});
};
const useAddTestData = () => {
	const queryClient = useQueryClient();
	return useMutation(testSend, {
		onSuccess: () => {
			queryClient.invalidateQueries('test');
		},
	});
};
export { useTestQueryHooks };
