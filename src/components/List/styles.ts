import styled from 'styled-components';
import { FixedSizeList } from 'react-window';

export const ListContainer = styled(FixedSizeList)`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100vw;
    height: 100vh;
`;