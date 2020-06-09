<template>
    <div class="home">
        
    </div>
</template>

<script>
    import dataLoader from '../mixins/dataLoader';
    import data from '../content/home.md';

    export default {
        name: 'home',

        mixins: [dataLoader(data)],
    };
</script>
