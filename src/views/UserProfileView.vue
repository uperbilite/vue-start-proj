<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserProfileInfo @follow="follow" @unfollow="unfollow" :user="user" />
                <UserProfileWrite v-if="is_me" @submit_post="submit_post"/>
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
import UserProfileWrite from '@/components/UserProfileWrite.vue';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';
import $ from 'jquery';
import { useStore } from 'vuex';
import { computed } from 'vue';

export default {
    name: 'UserProfileView',
    components: {
        ContentBase,
        UserProfileInfo,
        UserProfilePosts,
        UserProfileWrite,
    },
    setup() {
        const store = useStore();
        const route = useRoute();
        const userId = parseInt(route.params.userId);
        console.log(userId);
        const user = reactive({});
        const posts = reactive({});

        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/getinfo/",
            type: "GET",
            data: {
                user_id: userId,
            },
            headers: {
                'Authorization': "Bearer " + store.state.user.access,
            },
            success(resp) {
                user.id = resp.id;
                user.username = resp.username;
                user.photo = resp.photo;
                user.followerCount = resp.followerCount;
                user.is_followed = resp.is_followed;
            }
        });

        $.ajax({
            url: "https://app165.acapp.acwing.com.cn/myspace/post/",
            type: "GET",
            data: {
                user_id: userId,
            },
            headers: {
                'Authorization': "Bearer " + store.state.user.access,
            },
            success(resp) {
                posts.posts = resp;
            }
        });

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

        const submit_post = (content) => {
            posts.count++;
            posts.posts.unshift({
                id: posts.count,
                userId: 1,
                content: content,
            })
        };

        const is_me = computed(() => userId == store.state.user.id);

        return {
            user,
            follow,
            unfollow,
            posts,
            submit_post,
            is_me,
        }
    },
}
</script>

<style scoped>

</style>
