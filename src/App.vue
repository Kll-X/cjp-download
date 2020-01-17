<template>
    <div id="app">
        <router-view />
    </div>
</template>
<script>
    import CONFIG from '@/self_config.js'
    import {pvAnalysis} from '../public/lib/js/analysis'
    import '../public/lib/js/mmapp2018912'


    export default {
        mounted() {
            let self = this;
            //添加预埋统计
            pvAnalysis(CONFIG.activity_id, "", CONFIG.dev);


            window.myevent = new Event('mmdl_success');

            document.querySelector('html').addEventListener('mmdl_success', function (e) {
                self.$EventBus.$emit("mmdl_success");
            }, false);
        }
    }
</script>

<style lang="scss">
    * {
        margin: 0;
        padding: 0;
        outline: 0;
    }
</style>
