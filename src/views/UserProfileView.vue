<template>
    <ContentBase>
        <div class="row">
            <div class="col-3">
                <UserProfileInfo />
            </div>
            <div class="col-9">
                帖子列表
            </div>
        </div>
    </ContentBase>
</template>
  
<script>
import ContentBase from '@/components/ContentBase.vue';
import UserProfileInfo from '@/components/UserProfileInfo.vue'

export default {
    name: 'UserProfileView',
    components: {
        ContentBase,
        UserProfileInfo,
    }
}
</script>

<style scope>
</style>
