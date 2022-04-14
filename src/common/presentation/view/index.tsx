import React, { FC } from 'react';
import { CommonStore } from '@common/infrastructure/store/provider';

const CommonModule: FC<{ children: any }> = ({ children }) => {
	return <CommonStore>{children}</CommonStore>;
};
export default CommonModule;
