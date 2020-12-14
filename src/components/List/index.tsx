import React from 'react';
import { ListContainer } from './styles';

interface ListProps {
    posts: object;
}

const List: React.FC<ListProps> = ({ posts }) => {
    return (
        <ListContainer>
            {}
        </ListContainer>
    );
}

export default List;