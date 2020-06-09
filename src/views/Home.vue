<template>
    <div id="home-page">
        <soldier-preview
            v-for="(soldier, index) in data.soldiers"
            :key="index"
            :name="soldier.name"
            :photo="soldier.photo"
        />
    </div>
</template>

<script>
    import dataLoader from '../mixins/dataLoader';
    import data from '../content/soldiers.md';
    import SoldierPreview from '../components/SoldierPreview';

    export default {
        name: 'home',

        mixins: [dataLoader(data)],

        components: {
            SoldierPreview,
        },
    };
</script>

<style lang="scss" scoped>
    #home-page {
        height: 100vh;
        width: 100vw;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-template-rows: repeat(3, 1fr);
    }
</style>
