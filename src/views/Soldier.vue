<template>
    <div id="soldier-page" :class="$mq">
        <div
            class="photo"
            :style="{ 'background-image': `url(${soldier.photo})` }"
        />

        <div class="text">
            <div>
                <h1 class="name">{{ soldier.name }}</h1>
                <p v-html="makeHtml(soldier.bio)" />
            </div>

            <router-link to="/" class="back-btn">
                <fa-icon :icon="['fas', 'chevron-left']" />
                Back
            </router-link>
        </div>
    </div>
</template>

<script>
    import dataLoader from '../mixins/dataLoader';
    import data from '../content/soldiers.md';
    import showdown from 'showdown';

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

        methods: {
            makeHtml(content) {
                const converter = new showdown.Converter();
                return converter.makeHtml(content);
            },
        },
    };
</script>

<style lang="scss" scoped>
    #soldier-page {
        display: flex;
        position: relative;
        width: 100vw;
        height: 100vh;

        .photo {
            width: 50%;
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            position: fixed;
            top: 0;
            bottom: 0;
            left: 0;
        }

        .text {
            width: calc(50% - 100px);
            margin: 70px 50px;
            position: absolute;
            right: 0;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            .name {
                font-size: 40px;
                margin: 0 0 35px;
                text-transform: uppercase;
                letter-spacing: 5px;
            }

            /deep/ p {
                line-height: 23px;
            }

            .back-btn {
                margin-top: 10px;
                display: inline-block;
                align-self: flex-end;
                color: $light;
                text-decoration: none;
                text-transform: uppercase;

                &:hover {
                    text-decoration: underline;
                }
            }
        }

        &.mobile {
            flex-direction: column;

            .photo {
                height: 50%;
                width: unset;
                position: unset;
            }

            .text {
                height: calc(50% - 100px);
                margin: 50px 30px;
                width: unset;
                position: unset;

                .back-btn {
                    margin-bottom: 50px;
                }
            }
        }
    }
</style>
