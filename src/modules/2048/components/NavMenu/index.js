import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled('div')`
	display: flex;
	justify-content: space-around;
	align-items: center;
	border-bottom: 1px solid grey;
`;

const Logo = styled('h1')`
`

const Navigation = styled('div')`
	display: flex;
	justify-content: space-between;

	a {
		display: block;
		margin: 20px;
		cursor: pointer;

		font-family: sans-serif;
	}
`

export const NavMenu = () => (
	<Wrapper>
		<Logo>2048</Logo>
		<Navigation>
			<a>Games</a>
			<a>Saved games</a>
			<a>Settings</a>
		</Navigation>
	</Wrapper>
)