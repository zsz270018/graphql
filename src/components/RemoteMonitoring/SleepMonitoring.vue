<template>
    <div class="_Sleep_Monitoring">
        <div class="_Sleep_Monitoring_header">
            <p></p>
            <p>健康监护异常预警</p>
            <p @click="FullScreen"><i class="iconfont icon-quanpingzuidahua"></i></p>
        </div>
        <div class="_Sleep_Monitoring_section">
            <div :class="$store.state.module.flag?'_Sleep_Monitoring_section_dl _Sleep_Monitoring_section_dlTure': '_Sleep_Monitoring_section_dl'">
                <div>
                    <p><span>房间号:{{"03_01"}}</span><span>{{'李先生'}}</span></p>
                    <dl>
                        <dt><img
                                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3928438994,3580620744&fm=26&gp=0.jpg"
                                @click="policeDetails(1)"/></dt>
                        <dd>
                            <p>心率:{{87}}</p>
                            <p>呼吸:{{17}}</p>
                            <p>呼吸暂停:{{0}}</p>
                        </dd>
                    </dl>
                </div>
                <div>
                    <p><span>房间号:{{"03_01"}}</span><span>{{'李先生'}}</span></p>
                    <dl>
                        <dt><img
                                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3928438994,3580620744&fm=26&gp=0.jpg"/>
                        </dt>
                        <dd>
                            <p>心率:{{87}}</p>
                            <p>呼吸:{{17}}</p>
                            <p>呼吸暂停:{{0}}</p>
                        </dd>
                    </dl>
                </div>
                <div>
                    <p><span>房间号:{{"03_01"}}</span><span>{{'李先生'}}</span></p>
                    <dl>
                        <dt><img
                                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3928438994,3580620744&fm=26&gp=0.jpg"/>
                        </dt>
                        <dd>
                            <p>心率:{{87}}</p>
                            <p>呼吸:{{17}}</p>
                            <p>呼吸暂停:{{0}}</p>
                        </dd>
                    </dl>
                </div>
                <div>
                    <p><span>房间号:{{"03_01"}}</span><span>{{'李先生'}}</span></p>
                    <dl>
                        <dt><img
                                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3928438994,3580620744&fm=26&gp=0.jpg"/>
                        </dt>
                        <dd>
                            <p>心率:{{87}}</p>
                            <p>呼吸:{{17}}</p>
                            <p>呼吸暂停:{{0}}</p>
                        </dd>
                    </dl>
                </div>
                <div>
                    <p><span>房间号:{{"03_01"}}</span><span>{{'李先生'}}</span></p>
                    <dl>
                        <dt><img
                                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3928438994,3580620744&fm=26&gp=0.jpg"/>
                        </dt>
                        <dd>
                            <p>心率:{{87}}</p>
                            <p>呼吸:{{17}}</p>
                            <p>呼吸暂停:{{0}}</p>
                        </dd>
                    </dl>
                </div>
                <div>
                    <p><span>房间号:{{"03_01"}}</span><span>{{'李先生'}}</span></p>
                    <dl>
                        <dt><img
                                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3928438994,3580620744&fm=26&gp=0.jpg"/>
                        </dt>
                        <dd>
                            <p>心率:{{87}}</p>
                            <p>呼吸:{{17}}</p>
                            <p>呼吸暂停:{{0}}</p>
                        </dd>
                    </dl>
                </div>
                <div>
                    <p><span>房间号:{{"03_01"}}</span><span>{{'李先生'}}</span></p>
                    <dl>
                        <dt><img
                                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3928438994,3580620744&fm=26&gp=0.jpg"/>
                        </dt>
                        <dd>
                            <p>心率:{{87}}</p>
                            <p>呼吸:{{17}}</p>
                            <p>呼吸暂停:{{0}}</p>
                        </dd>
                    </dl>
                </div>
                <div>
                    <p><span>房间号:{{"03_01"}}</span><span>{{'李先生'}}</span></p>
                    <dl>
                        <dt><img
                                src="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=3928438994,3580620744&fm=26&gp=0.jpg"/>
                        </dt>
                        <dd>
                            <p>心率:{{87}}</p>
                            <p>呼吸:{{17}}</p>
                            <p>呼吸暂停:{{0}}</p>
                        </dd>
                    </dl>
                </div>
            </div>
            <div class="_section_page">
                <el-pagination
                        layout="prev, pager, next"
                        style="background:#427aa1"
                        :total="1000">
                </el-pagination>
            </div>
        </div>
        <div :class="screenFlag?'_Sleep_Monitoring_Mask':'_Sleep_Monitoring_Mask _Sleep_Monitoring_Mask_block'">
            <div class="_Surveillance_Mask_frame">
                <header>
                    <h3>报警详情</h3>
                </header>
                <section>
                    <p>房间：06_02胡女士于2016-03-09 09:43:23发生连续无呼吸</p>
                </section>
                <footer>
                    <button @click="policeDetails(2)">知道了</button>
                </footer>
            </div>
        </div>
    </div>
</template>
<script>
    import {mapState, mapMutations} from 'vuex';

    export default {
        data() {
            return {
                screenFlag: true
            }
        },
        computed: {
            // ...mapState({
            //     flag: state => state.module.flag
            // })
        },
        methods: {
            // ...mapMutations({
            //     updateProvinces: 'module/updateProvinces'
            // }),
            FullScreen() {
                this.updateProvinces()
            },
            policeDetails(id) {
                if (id === 1) {
                    this.screenFlag = false
                } else {
                    this.screenFlag = true
                }

            }
        }
    }
</script>
<style scoped>
    ._Sleep_Monitoring {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
    }

    ._Sleep_Monitoring_header {
        display: flex;
        height: 60px;
        background: #FFFFFF;
        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.30);
        align-items: center;
        justify-content: space-between;

    }

    ._Sleep_Monitoring_header p {
        margin-right: 20px;
    }

    ._Sleep_Monitoring_header p:nth-child(2) {
        font-size: 20px;
        color: #2B5768;
        font-weight: 600;
    }

    ._Sleep_Monitoring_header p i {
        font-size: 20px;
    }

    ._Sleep_Monitoring_section {
        flex: 1;
        background-color: #427aa1;
    }

    /* ._Sleep_Monitoring_header{
      width: 50px;
      height: 50px;
      display: block;
    } */
    ._Sleep_Monitoring_section_dl {
        display: flex;
        flex-wrap: wrap;
        padding: 35px 20px 0 20px;
    }

    ._Sleep_Monitoring_section_dl > div {
        width: 22%;
        background: #FFFFFF;
        border: 1px solid #EAEAEA;
        border-radius: 4px;
        padding: 0 10px;
        margin: 10px 0 0 1%;
    }

    ._Sleep_Monitoring_section_dlTure > div {
        width: 17% !important;
    }

    ._Sleep_Monitoring_section_dl > div > p:nth-child(1) {
        color: #666666;
        padding-left: 10px;
        line-height: 35px;
        display: flex;
        justify-content: space-between;
    }

    ._Sleep_Monitoring_section_dl > div dl {
        display: flex;
        flex-direction: row-reverse;
    }

    ._Sleep_Monitoring_section_dl > div dl dt {
        width: 50%;
        text-align: center;
    }

    ._Sleep_Monitoring_section_dl > div dl dt img {
        width: 75%;
    }

    ._Sleep_Monitoring_section_dl > div dl dd {
        flex: 1;
        text-align: left;
    }

    ._Sleep_Monitoring_section_dl > div dl dd p {
        line-height: 40px;
        display: flex;
        align-items: center;
    }

    ._Sleep_Monitoring_section_dl > div dl dd p i {
        width: 10px;
        height: 20px;
        background: url('../../assets/up.png') no-repeat;
        background-size: 10px;
        margin-left: 5px;
    }

    ._section_page {
        text-align: center;
        background-color: #427aa1;
        margin-top: 10%;
        padding-bottom: 10%;
    }

    .el-pagination {
        background-color: #427aa1;
    }

    ._Sleep_Monitoring_Mask {
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.40);
        display: none;
    }

    ._Sleep_Monitoring_Mask_block {
        display: block !important;
    }

    ._Surveillance_Mask_frame {
        width: 30%;
        background: #FFFFFF;
        border-radius: 8px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }

    ._Surveillance_Mask_frame header {
        width: 100%;
        height: 50px;
        background: #0385E8;
        text-align: center;
        line-height: 50px;
        color: #fff;
        border-radius: 8px 8px 0 0;
    }

    ._Surveillance_Mask_frame section {
        height: 100px;
    }

    ._Surveillance_Mask_frame section p {
        margin-top: 15px;
        text-indent: 25px;
    }

    ._Surveillance_Mask_frame footer {
        height: 70px;
        border-top: 1px solid #EAEAEA;
        text-align: center;
        line-height: 70px;
    }

    ._Surveillance_Mask_frame footer button {
        width: 30%;
        border: none;
        outline: none;
        padding: 10px 0;
        background: #45AEFF;
        border-radius: 4px;
        cursor: pointer;
        color: #fff;
        font-size: 20px;
    }
</style>

