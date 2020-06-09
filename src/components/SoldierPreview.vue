<template>
    <router-link
        :to="{ name: name }"
        class="soldier-preview"
        :style="{ 'background-image': `url(${photo})` }"
    />
</template>

<script>
    export default {
        name: 'soldier-preview',

        props: {
            name: {
                type: String,
                required: true,
            },

            photo: {
                type: String,
                required: true,
            },
        },
    };
</script>

<style lang="scss" scoped>
    .soldier-preview {
        display: block;
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center;
    }
</style>
