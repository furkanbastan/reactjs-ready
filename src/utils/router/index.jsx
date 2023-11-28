import { MainLayout } from "@/layouts/main-layout";
import { HomePage } from "@/pages/home-page";
import { PostAddPage } from "@/pages/post-add-page";
import { PostDetailPage } from "@/pages/post-detail-page";
import { PostEditPage } from "@/pages/post-edit-page";
import { PostListPage } from "@/pages/post-list-page";
import { ProfileEditPage } from "@/pages/profile-edit-page";
import { ProfilePage } from "@/pages/profile-page";
import { SignInPage } from "@/pages/sign-in-page";
import { SignUpPage } from "@/pages/sign-up-page";
import { createBrowserRouter } from "react-router-dom";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <HomePage />,
            },
            {
                path: "posts/add",
                element: <PostAddPage />,
            },
            {
                path: "posts/:postId/edit",
                element: <PostEditPage />,
            },
            {
                path: "posts/:postId",
                element: <PostDetailPage />,
            },
            {
                path: "posts",
                element: <PostListPage />,
            },
            {
                path: "profile/:userId/edit",
                element: <ProfileEditPage />,
            },
            {
                path: "profile",
                element: <ProfilePage />,
            },
            {
                path: "sign-in",
                element: <SignInPage />,
            },
            {
                path: "sign-up",
                element: <SignUpPage />,
            },
        ],
    },
]);
