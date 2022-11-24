<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserProfileInfo />
            </div>
            <div class="col-9">
                <UserProfilePosts />
            </div>
        </div>
    </ContentBase>
</template>
  
<script>
import ContentBase from '@/components/ContentBase.vue';
import UserProfileInfo from '@/components/UserProfileInfo.vue'
import UserProfilePosts from '@/components/UserProfilePosts.vue'

export default {
    name: 'UserProfileView',
    components: {
        ContentBase,
        UserProfileInfo,
        UserProfilePosts,
    }
}
</script>

<style scope>

</style>
