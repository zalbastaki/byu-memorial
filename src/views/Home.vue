<template>
    <div id="home-page">
        <soldier-preview
            v-for="(soldier, index) in soldiers"
            :key="index"
            :name="soldier.name"
            :photo="soldier.photo"
        />

        <div class="search-container">
            <search
                label="They're not just a name. Meet them."
                placeholder="Type their name here..."
                :search-list="searchList"
            />
        </div>
    </div>
</template>

<script>
    import dataLoader from '../mixins/dataLoader';
    import data from '../content/soldiers.md';
    import SoldierPreview from '../components/SoldierPreview';
    import Search from '../components/Search';

    export default {
        name: 'home',

        mixins: [dataLoader(data)],

        components: {
            SoldierPreview,
            Search,
        },

        data() {
            return {
                soldiers: [],
            };
        },

        mounted() {
            this.selectSoldiers();
            setInterval(this.selectSoldiers, 5000);
        },

        computed: {
            searchList() {
                return this.data.soldiers.map(soldier => soldier.name);
            },
        },

        methods: {
            selectSoldiers() {
                this.soldiers = this.getRandom(this.data.soldiers, 10);
            },

            getRandom(arr, n) {
                let result = new Array(n);
                let len = arr.length;
                let taken = new Array(len);

                if (n > len) {
                    throw new RangeError(
                        'getRandom: more elements taken than available'
                    );
                }

                while (n--) {
                    var x = Math.floor(Math.random() * len);
                    result[n] = arr[x in taken ? taken[x] : x];
                    taken[x] = --len in taken ? taken[len] : len;
                }

                return result;
            },
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

        .search-container {
            grid-row: 2;
            grid-column-start: 2;
            grid-column-end: 4;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
</style>
