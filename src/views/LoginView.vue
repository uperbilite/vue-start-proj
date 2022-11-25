<template>
    <ContentBase>
        <div class="row justify-content-md-center">
            <div class="col-3">
                <form>
                    <div class="mb-3">
                        <label for="username" class="form-label">用户名</label>
                        <input v-mod="username" type="text" class="form-control" id="username">
                    </div>
                    <div class="mb-3">
                        <label for="password" class="form-label">密码</label>
                        <input v-mod="password" type="password" class="form-control" id="password">
                    </div>
                    <button type="submit" class="btn btn-primary">登录</button>
                </form>
            </div>
        </div>
    </ContentBase>
</template>
  
<script>
import ContentBase from '@/components/ContentBase.vue';
import { ref } from 'vue';

export default {
    name: 'LoginView',
    components: {
        ContentBase,
    },
    setup() {
        let username = ref('');
        let password = ref('');

        return {
            username,
            password,
        }
    }
}
</script>

<style scoped>
button {
    width: 100%;
}
</style>
