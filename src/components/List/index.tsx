import React, { useCallback } from 'react';
import Post from '../Post';
import { ListContainer } from './styles';

interface ListProps {
    posts: any[];
}

const List: React.FC<ListProps> = ({ posts }) => {
    const row = useCallback(({ style, index }: any) => {
        return (
            <Post style={style} key={posts[index].id} post={posts[index]} />
        );
    }, [posts]);

    return (
        <ListContainer
            itemCount={posts.length}
            itemSize={280}
            height={650}
            width={'100%'}
            itemData={posts}
        >
            {row}
        </ListContainer>
    );
}

export default List;