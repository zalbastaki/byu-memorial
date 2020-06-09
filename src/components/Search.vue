<template>
    <div class="search">
        <label for="search-field" id="search-label">{{ label }}</label>
        <input
            type="text"
            name="search-field"
            id="search-field"
            autocomplete="off"
            :placeholder="placeholder"
            v-model="searchTerm"
        />
        <ul v-if="searchTerm" id="search-results">
            <li v-for="(result, index) in searchResults" :key="index">
                <router-link :to="{ name: result }" class="result">
                    {{ result }}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: 'search',

        props: {
            label: {
                type: String,
                required: true,
            },

            placeholder: {
                type: String,
                required: true,
            },

            searchList: {
                type: Array,
                required: true,
            },
        },

        data() {
            return {
                searchTerm: '',
            };
        },

        computed: {
            searchResults() {
                return this.searchList.filter(listItem =>
                    listItem
                        .toLowerCase()
                        .includes(this.searchTerm.toLowerCase())
                );
            },
        },
    };
</script>

<style lang="scss" scoped>
    .search {
        width: 80%;
        position: relative;

        #search-label {
            display: block;
            text-transform: uppercase;
            letter-spacing: 2px;
            margin-bottom: 20px;
        }

        #search-field {
            display: block;
            padding: 10px;
            width: calc(100% - 20px);
            border: 0;
            background: $light;

            &:focus {
                outline: rgba($dark, 0.3) auto 1px;
            }
        }

        #search-results {
            position: absolute;
            list-style: none;
            margin: 0;
            background: $light;
            padding: 0 10px;
            width: calc(100% - 20px);
            max-height: 250px;
            overflow: scroll;

            li {
                padding: 10px 0;
            }

            li:not(:last-of-type) {
                border-bottom: rgba($dark, 0.3) solid 1px;
            }

            .result {
                text-decoration: none;
                color: $dark;
            }
        }
    }
</style>
