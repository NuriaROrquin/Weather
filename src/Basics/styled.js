import styled from 'styled-components';

export const FieldGroup = styled.div`
	display: flex;
	flex-direction: column;
	min-width: 50%;

	select {
		height: 3.8rem;

		option {
			padding: auto;
			margin: auto;
		}
	}
`;

export const FieldSelect = styled.select`
    display: flex;
    color: white;
    font-size: 2rem;
    align-self: center;
	text-align-last: center;

	border: 1px solid white;
	background: transparent;
	box-sizing: border-box;
	border-radius: 1rem;
	height: 3.8rem;
	padding: 0 1rem;
	width: 100%;

	option {
		color: black;
	}
`;