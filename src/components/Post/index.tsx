import React from 'react';
import { Container } from './styles';

interface PostData {
    title: string;
    url: string;
    id: string;
}

interface PostProps {
    post: PostData;
    style: React.CSSProperties;
}

function isEqual(prevProps: PostProps, actualProps: PostProps) {
    return prevProps.post.id === actualProps.post.id;
}

const Post: React.FC<PostProps> = React.memo(({ post, style }) => {
    return (
        <Container style={style}>
            <h3>{post.title}</h3>
            <img src={post.url} alt={post.title} />
        </Container>
    );
}, isEqual);

export default Post;