<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
            </div>
            <div class="col-9">
                <UserProfilePosts :posts="posts" />
            </div>
        </div>
    </ContentBase>
</template>

<script>
import ContentBase from '@/components/ContentBase.vue';
import UserProfileInfo from '@/components/UserProfileInfo.vue';
import UserProfilePosts from '@/components/UserProfilePosts.vue';
import { reactive } from 'vue';

export default {
    name: 'UserProfileView',
    components: {
        ContentBase,
        UserProfileInfo,
        UserProfilePosts,
    },
    setup() {
        const user = reactive({
            id: 1,
            username: "uperbilite",
            lastName: "Deng",
            firstName: "Bilite",
            followerCount: 123,
            is_followed: true,
        })

        const posts = reactive({
            count: 3,
            posts: [
                {
                    id: 1,
                    userId: 1,
                    content: "text1",
                },
                {
                    id: 2,
                    userId: 1,
                    content: "text2",
                },
                {
                    id: 3,
                    userId: 1,
                    content: "text3",
                },
            ],
        })

        const follow = () => {
            if (user.is_followed) return;
            user.is_followed = true;
            user.followerCount++;
        };

        const unfollow = () => {
            if (!user.is_followed) return;
            user.is_followed = false;
            user.followerCount--;
        };

        return {
            user,
            follow,
            unfollow,
            posts,
        }
    },
}
</script>

<style scope>

</style>
