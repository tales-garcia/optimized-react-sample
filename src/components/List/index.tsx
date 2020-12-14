import React, { useCallback } from 'react';
import Post from '../Post';
import { ListContainer } from './styles';

interface ListProps {
    posts: any[];
}

function isEqual(prevProps: ListProps, actualProps: ListProps) {
    return prevProps.posts.length === actualProps.posts.length;
}

const List: React.FC<ListProps> = React.memo(({ posts }) => {
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
}, isEqual);

export default List;