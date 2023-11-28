import { Link } from "react-router-dom";
import * as S from "./styled";
import { Title } from "@/components-core/title";
import { Paragraph } from "@/components-core/paragraph";

function PostItem({ post }) {
    return (
        <S.PostItem>
            <Link to={`/posts/${post.id}`}>
                <Title as="h3" weight="xl" isHoverable={true}>
                    {post.title}
                </Title>
            </Link>
            <Paragraph clamp={3}>{post.body}</Paragraph>
        </S.PostItem>
    );
}

export { PostItem };
