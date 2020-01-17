<template>
    <div class="app_item">
        <img class="logo" :src="app_info.logo" alt="">
        <div class="name">{{app_info.name}}</div>
        <span class="btn" @click.stop="download">下载</span>
    </div>
</template>

<script>
    import CONFIG from '@/self_config.js'
    import {customAnalysis} from '../../public/lib/js/analysis'


    export default {
        name: 'AppItem',
        props: ['app_info'],
        data() {
            return {
                flag: false
            }
        },
        methods: {
            download() {
                let self = this;
                self.flag = true;
                window.mm.download(self.app_info.id, false);

                window.mm.error(() => {
                    customAnalysis(CONFIG.activity_id, self.app_info.key[1], '', CONFIG.debug);
                    location.href = self.app_info.link_out;
                })
            }
        },
        mounted() {
            let self = this;
            this.$EventBus.$on("mmdl_success", () => {
                if (self.flag) {
                    //站内下载
                    self.flag = false;
                    customAnalysis(CONFIG.activity_id, self.app_info.key[0], '', CONFIG.debug);
                }
            });
        },
        beforeDestroy() {
            this.$EventBus.$off('mmdl_success')
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .app_item {
        background: #f7f7f7;
        width: 100%;
        padding: 0.1rem 0.72rem 0 0.4rem;
        box-sizing: border-box;
        height: 1.22rem;
        display: flex;
        align-items: center;

        .logo {
            width: 1.12rem;
            height: 1.12rem;
            border-radius: 0.08rem;
        }

        .name {
            flex: 3;
            color: #000;
            font-size: 0.35rem;
            display: block;
            height: 100%;
            padding: 0.15rem 0 0 0.4rem;
        }

        .btn {
            flex: 1;
            width: 1.2rem;
            height: 0.6rem;
            border-radius: 0.08rem;
            border: 2px solid #3cb3d7;
            color: #3cb3d7;
            font-size: 0.28rem;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }
</style>
