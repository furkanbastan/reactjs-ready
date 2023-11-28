import { Button } from "@/components-core/button";
import { PostItem } from "../post-item";
import * as S from "./styled";
import { Link } from "react-router-dom";
import { postApi } from "@/stores/post-store";

const init = {
    id: 1,
    name: "Leanne Graham",
    username: "Bret",
    email: "Sincere@april.biz",
    address: {
        street: "Kulas Light",
        suite: "Apt. 556",
        city: "Gwenborough",
        zipcode: "92998-3874",
        geo: {
            lat: "-37.3159",
            lng: "81.1496",
        },
    },
    phone: "1-770-736-8031 x56442",
    website: "hildegard.org",
    company: {
        name: "Romaguera-Crona",
        catchPhrase: "Multi-layered client-server neural-net",
        bs: "harness real-time e-markets",
    },
};

function ProfileDetail({ user }) {
    const queryPosts = postApi.useGetPostsByUserIdQuery(init.id);

    if (queryPosts.isError) return <div>Error !!</div>;

    if (queryPosts.isLoading) return <div>Loading!</div>;

    return (
        <S.ProfileDetail>
            <S.ProfileSection>
                <S.Header>
                    <S.UserAvatar src="/assets/icons/profile-avatar.svg" />
                    <S.NameSection>
                        <S.Name>{user.name}</S.Name>
                        <S.UserName>{user.username}</S.UserName>
                    </S.NameSection>
                </S.Header>
                <S.InfoSection>
                    <S.Icon src="/assets/icons/icon-email.svg" />
                    <S.Info>{user.email}</S.Info>
                </S.InfoSection>

                <S.InfoSection>
                    <S.Icon src="/assets/icons/icon-phone.svg" />
                    <S.Info>{user.phone}</S.Info>
                </S.InfoSection>

                <S.InfoSection>
                    <S.Icon src="/assets/icons/icon-site.svg" />
                    <S.Info>{user.website}</S.Info>
                </S.InfoSection>

                <S.InfoSection>
                    <S.Icon src="/assets/icons/icon-company.svg" />
                    <S.Info>{user.company.name}</S.Info>
                </S.InfoSection>

                <S.InfoSection>
                    <S.Icon src="/assets/icons/icon-address.svg" />
                    <S.Info>{user.address.city}</S.Info>
                </S.InfoSection>

                <S.Link to={`/profile/${user.id}/edit`}>
                    <Button size="2">Edit Profile</Button>
                </S.Link>
            </S.ProfileSection>

            <S.PostListSection>
                {queryPosts.currentData.map((item) => (
                    <PostItem key={item.id} post={item} />
                ))}
            </S.PostListSection>
        </S.ProfileDetail>
    );
}

export { ProfileDetail };
