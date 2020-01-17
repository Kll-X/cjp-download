<template>
    <div class="index">
        <img id="bg" :src="bg" alt="">

        <div class="wrapper w1">
            <div v-show="!status1" :class="{'in':true,'init':!status1}"
                 @click.stop="change_status(1)">
                <img :src="gap" alt="">
            </div>
            <div v-show="status1" class="in">
                <img class="text" :src="p1" alt="">
                <app-item v-for="(item,i) in app_database.list1" :key="i" :app_info="item"></app-item>
            </div>
        </div>

        <div class="wrapper w2">
            <div v-show="!status2" :class="{'in':true,'init':!status2}"
                 @click.stop="change_status(2)">
                <img :src="gap" alt="">
            </div>
            <div v-show="status2" class="in">
                <img class="text" :src="p2_1" alt="">
                <app-item v-for="(item,i) in app_database.list2" :key="i" :app_info="item"></app-item>
                <img class="text" :src="p2_2" alt="">
            </div>
        </div>

        <div class="wrapper w3">
            <div v-show="!status3" :class="{'in':true,'init':!status3}"
                 @click.stop="change_status(3)">
                <img :src="gap" alt="">
            </div>
            <div v-show="status3" class="in">
                <img class="text" :src="p3" alt="">
                <app-item v-for="(item,i) in app_database.list3" :key="i" :app_info="item"></app-item>
            </div>
        </div>

        <div class="wrapper w4">
            <div v-show="!status4" :class="{'in':true,'init':!status4}"
                 @click.stop="change_status(4)">
                <img :src="gap" alt="">
            </div>
            <div v-show="status4" class="in">
                <img class="text" :src="p4" alt="">
                <app-item v-for="(item,i) in app_database.list4" :key="i" :app_info="item"></app-item>
            </div>
        </div>

        <div class="wrapper w5">
            <div v-show="!status5" :class="{'in':true,'init':!status5}"
                 @click.stop="change_status(5)">
                <img :src="gap" alt="">
            </div>
            <div v-show="status5" class="in">
                <img class="text" :src="p5" alt="">
                <app-item v-for="(item,i) in app_database.list5" :key="i" :app_info="item"></app-item>
            </div>
        </div>

    </div>
</template>

<script>
    // @ is an alias to /src
    import AppItem from '@/components/AppItem.vue'

    export default {
        name: 'index',
        components: {
            AppItem
        },
        data() {
            return {
                bg: require('@/assets/images/bg.png'),
                gap: require('@/assets/images/gap.png'),
                p1: require('@/assets/images/p1.png'),
                p2_1: require('@/assets/images/p2_1.png'),
                p2_2: require('@/assets/images/p2_2.png'),
                p3: require('@/assets/images/p3.png'),
                p4: require('@/assets/images/p4.png'),
                p5: require('@/assets/images/p5.png'),
                status1: 0,
                status2: 0,
                status3: 0,
                status4: 0,
                status5: 0,
                app_database: {
                    list1: [
                        {
                            id:'300002577051',
                            name: '快手',
                            link_in:'http://a.10086.cn/c/u/m6BzmieEnMjq',
                            link_out:'http://a.10086.cn/c/u/m6BzmieEnMjq',
                            logo:require('@/assets/images/1.png'),
                            key:[
                                'd6bc721da7fa4b8d88cbed0fd0abddc9',
                                '240b7cd710a14cc5a86ffa9def249662'
                            ]
                        },{
                            id:'300011869300',
                            name: '抖音',
                            link_in:'http://a.10086.cn/c/u/m6BzmieEnMjq',
                            link_out:'http://a.10086.cn/c/u/a6Rjyan6JNby',
                            logo:require('@/assets/images/2.png'),
                            key:[
                                '4e0c673212c543ddb201ba634e9db4dd',
                                'bcae4024a6e74bd1876a56cd3986a734'
                            ]
                        },{
                            id:'300011956761',
                            name: '波波视频',
                            link_in:'http://a.10086.cn/c/u/m6BzmieEnMjq',
                            link_out:'http://a.10086.cn/c/u/ENR7z2VZjyAb',
                            logo:require('@/assets/images/3.png'),
                            key:[
                                'eec8a388bbb74d15914189f411c88f3c',
                                '4e0ebda53a584904a41600c3cf147528'
                            ]
                        },{
                            id:'300009240030',
                            name: '王者荣耀',
                            link_in:'http://a.10086.cn/c/u/m6BzmieEnMjq',
                            link_out:'http://a.10086.cn/c/u/6jU7by67zuQn',
                            logo:require('@/assets/images/4.png'),
                            key:[
                                '58aff1fa482f4e91983d80c09f1b4e67',
                                '5440afc36ed6409da13a5506dd1fcc71'
                            ]
                        },{
                            id:'300011854067',
                            name: '和平精英',
                            link_in:'http://a.10086.cn/c/u/m6BzmieEnMjq',
                            link_out:'http://a.10086.cn/c/u/Nv2Qbyuq6jay',
                            logo:require('@/assets/images/5.png'),
                            key:[
                                '55df0865f3584ad8bc425c7a4b318583',
                                'bfe2c853145f484695f6494cecc72810'
                            ]
                        },{
                            id:'300009197635',
                            name: '天天斗地主',
                            link_in:'http://a.10086.cn/c/u/m6BzmieEnMjq',
                            link_out:'http://a.10086.cn/c/u/MFVVR32q2QZv',
                            logo:require('@/assets/images/6.png'),
                            key:[
                                '103fef8fbd914a6d8de2d3ce1ee23632',
                                '044ff740977742a28197a93b2df44cdf'
                            ]
                        }
                    ],
                    list2: [
                        {
                            id:'300011887337',
                            name: '支付宝',
                            link_in:'http://a.10086.cn/c/u/m6BzmieEnMjq',
                            link_out:'http://a.10086.cn/c/u/mqYveizQV7Ff',
                            logo:require('@/assets/images/7.png'),
                            key:[
                                'd987697c909f4aec89dc3a07277dc623',
                                'cc4f58c60df646caa79a7c6e74421b85'
                            ]
                        }
                    ],
                    list3: [
                        {
                            id:'300011869109',
                            name: '高德地图',
                            link_in:'http://a.10086.cn/c/u/m6BzmieEnMjq',
                            link_out:'http://a.10086.cn/c/u/A3M32y6JfuIr',
                            logo:require('@/assets/images/8.png'),
                            key:[
                                '321c38da46414ae28a16dfbf5f0e8f92',
                                'f9ea30277631481fbfa3f241f7b11087'
                            ]
                        },{
                            id:'300011953520',
                            name: '途牛旅游',
                            link_in:'http://a.10086.cn/c/u/m6BzmieEnMjq',
                            link_out:'http://a.10086.cn/c/u/63UveeuEZbiy',
                            logo:require('@/assets/images/9.png'),
                            key:[
                                '06435d33263d4709a3f0faaad21200a5',
                                '12fffb5aca054ab9814dc07a600aade3'
                            ]
                        },{
                            id:'300011953498',
                            name: '携程旅行',
                            link_in:'http://a.10086.cn/c/u/m6BzmieEnMjq',
                            link_out:'http://a.10086.cn/c/u/qeI3iaBFbmMb',
                            logo:require('@/assets/images/10.png'),
                            key:[
                                '4da6796261ed47ae82318a2418561a79',
                                'cac566d8544b418685e8bcc3cb49d2e8'
                            ]
                        }
                    ],
                    list4: [
                        {
                            id:'300011957005',
                            name: '绿洲',
                            link_in:'http://a.10086.cn/c/u/m6BzmieEnMjq',
                            link_out:'http://a.10086.cn/c/u/mYfiQbRNZbAn',
                            logo:require('@/assets/images/11.png'),
                            key:[
                                '8a297f09c6ad41a69f685bfd593ea180',
                                '221390eef5d34403bbf76ac710d57029'
                            ]
                        }
                    ],
                    list5: [
                        {
                            id:'300011878912',
                            name: '爱奇艺',
                            link_in:'http://a.10086.cn/c/u/m6BzmieEnMjq',
                            link_out:'http://a.10086.cn/c/u/riuUvuai6vme',
                            logo:require('@/assets/images/12.png'),
                            key:[
                                '872af32279bc47db8d4f893dd44734c6',
                                '5b5588d0a4ae4b4ea31568f87dcafb5e'
                            ]
                        },{
                            id:'300011887222',
                            name: '优酷视频',
                            link_in:'http://a.10086.cn/c/u/m6BzmieEnMjq',
                            link_out:'http://a.10086.cn/c/u/NzENVvuEneqq',
                            logo:require('@/assets/images/13.png'),
                            key:[
                                '15200b3828a946d2b5c0868d4d55a921',
                                'e023d57a8710467d99308a70f62782ce'
                            ]
                        },{
                            id:'300011958915',
                            name: '腾讯视频',
                            link_in:'http://a.10086.cn/c/u/m6BzmieEnMjq',
                            link_out:'http://a.10086.cn/c/u/RNfQrmmeuiea',
                            logo:require('@/assets/images/14.png'),
                            key:[
                                'a18f2efe17274cf990b2af51f807adf2',
                                '9a52db5ac42249baa8f2353677736b66'
                            ]
                        }
                    ]
                }

            }
        },
        methods: {
            change_status(i) {
                this['status' + i] = 1;
            }
        }
    }
</script>

<style lang="scss" scoped>
    .index {
        width: 100%;
        position: relative;

        #bg {
            width: 100%;
        }

        .wrapper {
            width: 8.66rem;
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            /*background: rgba(0,0,0,0.3);*/
            .text {
                width: 100%;
            }
        }

        .in {
            width: 100%;
            height: 100%;
            position: relative;
        }

        .w1 {
            top: 27.86rem;
            height: 13.29rem;
        }

        .w2 {
            top: 49.3rem;
            height: 11.01rem;
        }

        .w3 {
            top: 74.9rem;
            height: 9.46rem;
        }

        .w4 {
            top: 93.366rem;
            height: 6.82rem;
        }

        .w5 {
            top: 110.026rem;
            height: 8.34rem;
        }

        .init {
            border: 1px solid #4a8686;
            box-sizing: border-box;
            display: flex;
            justify-content: center;
            align-items: center;

            img {
                display: block;
                width: 100%;
            }
        }


    }
</style>