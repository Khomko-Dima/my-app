import React, { useEffect } from 'react';
import './index.scss';
import { Button, PageHeader } from 'antd';
import { useGoogleApi } from 'react-gapi';

const Header = () => {
	const gapi = useGoogleApi({
		scopes: ['profile'],
	});

	const auth = gapi?.auth2?.getAuthInstance();

	const user = auth?.currentUser.get().getBasicProfile();
	const image = auth?.currentUser.get().getBasicProfile()?.getImageUrl();

	return (
		<PageHeader
			title={user ? user?.getName() : ''}
			subTitle={'SENLA | Software Engineering Laboratory'}
			className="header"
			extra={
				!user ? (
					[
						<Button key="1" onClick={() => auth.signIn()} type="primary">
							Login
						</Button>,
					]
				) : (
					<Button
						key="2"
						onClick={() => {
							auth.disconnect();
							window.location.reload();
						}}
						type="primary"
					>
						SignOut
					</Button>
				)
			}
			avatar={
				user
					? {
							src: image ? image : 'https://avatars1.githubusercontent.com/u/8186664?s=460&v=4',
							shape: 'circle',
					  }
					: undefined
			}
			footer={
				<div className="header__menu">
					<ul>
						<li>CV</li>
					</ul>
				</div>
			}
		/>
	);
};
export default Header;
