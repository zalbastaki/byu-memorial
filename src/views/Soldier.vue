<template>
    <div></div>
</template>

<script>
    import dataLoader from '../mixins/dataLoader';
    import data from '../content/soldiers.md';

    export default {
        name: 'soldier',

        mixins: [dataLoader(data)],

        computed: {
            soldier() {
                return this.data.soldiers.find(
                    soldier => soldier.name === this.$route.name
                );
            },
        },
    };
</script>

<style lang="scss" scoped></style>
