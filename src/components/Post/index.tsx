import React from 'react';
import { Container } from './styles';

interface PostData {
    title: string;
    url: string;
}

interface PostProps {
    post: PostData;
    style: React.CSSProperties;
}

const Post: React.FC<PostProps> = ({ post, style }) => {
    return (
        <Container style={style}>
            <h3>{post.title}</h3>
            <img src={post.url} alt={post.title} />
        </Container>
    );
}

export default Post;