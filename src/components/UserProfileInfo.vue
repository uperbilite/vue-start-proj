<template>
    <div class="card">
        <div class="card-body">
            <div class="row">
                <div class="col-3">
                    <img class="img-fluid" src="http://www.bingguner.com/upimg/allimg/191210/19-191210103310293.jpg" alt="">
                </div>
                <div class="col-9">
                    <div class="username">uperbilite</div>
                    <div class="fansnum">粉丝数</div>
                    <button type="button" class="btn btn-light btm-sm">关注</button>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: "UserProfileInfo",
}
</script>

<style scoped>
img {
    border-radius: 50%;
}

.username {
    font-weight: bold;
}

.fansnum {
    font-size: 12px;
    color: gray;
}

button {
    padding:2px 4px;
    font-size: 12px;
}
</style>