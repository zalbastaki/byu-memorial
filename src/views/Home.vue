<template>
    <div class="home">
        <router-link
            v-for="(soldier, index) in data.soldiers"
            :key="index"
            :to="{ name: soldier.name }"
        >
            {{ soldier.name }}
        </router-link>
    </div>
</template>

<script>
    import dataLoader from '../mixins/dataLoader';
    import data from '../content/soldiers.md';

    export default {
        name: 'home',

        mixins: [dataLoader(data)],
    };
</script>
