<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserProfileInfo :user="user" />
            </div>
            <div class="col-9">
                <UserProfilePosts />
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
            is_followed: false,
        })
        return {
            user,
        }
    },
}
</script>

<style scope>

</style>
