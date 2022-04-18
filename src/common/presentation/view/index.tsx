import React, { FC } from 'react';
import { RecoilRoot } from 'recoil';

const CommonModule: FC<{ children: any }> = ({ children }) => {
	return <RecoilRoot>{children}</RecoilRoot>;
};
export default CommonModule;
