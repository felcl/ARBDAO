<script setup>
import {onMounted , ref , watch , computed} from 'vue'
import {useRoute} from 'vue-router'
import Axios from '../axios';
import {dateFormat} from "../utils/tool";
import { useStore } from "vuex";
const store = useStore();
const route = useRoute()
const type = ref('A')
const RewardList = ref([])
const typeMap = {
    A:1,
    SVIP:2
}
const token = computed(() => {
  return store.state.token;
});
watch(token,(token)=>{
if(token){
    Axios.get(`/dao/rewardDetail/${typeMap[type.value]}`).then(res=>{
        RewardList.value = res.data.data
        console.log(res,"收益记录")
    })
}
},{
    immediate:true
})

onMounted(()=>{
    if(route.query.type){
        type.value = route.query.type
    }
    
})
</script>
<!-- 收益记录 -->
<template>
  <div class="Reward">
    <div class="RewardHead">
        <img src="" alt="">
        <div>
            <div class="StakeTitle">{{ type }} Reward</div>
            <!-- <div class="StakeSubTitle">Track your MATIC staking rewards with ARB</div> -->
        </div>
        <div>
        </div>
    </div>
    <div class="RewardBox">
        <div class="RewardRow" v-for="item in RewardList">
            <span class="num">+{{ item.rewardArb }}</span>
            <span class="time">{{ dateFormat('YYYY/mm/dd HH:MM:SS',new Date(item.createTime)) }}</span>
        </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.Reward{
    background: #F5FBFF;
    padding-top: 10rem;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    align-items: center;
    min-height: 100vh;
    @media (max-width:767px) {
        padding-top: 20rem;
    }
    .RewardHead{
        display: flex;
        justify-content: space-between;
        width: 37.5rem;
        margin:0 auto;
    }
    .StakeTitle{
        font-size: 2rem;
        line-height: 1;
        font-weight: 500;
        color: #262626;
        text-align: center;
        @media (max-width:1024px) {
            font-size: 3rem;
        }
        @media (max-width:425px) {
            font-size: 5rem;
        }
    }
    .StakeSubTitle{
        font-size: 14px;
        line-height: 1;
        color: #282828;
        text-align: center;
        margin: 8px 0 18px;
        @media (max-width:425px) {
            font-size: 12px;
        }
    }
    .RewardBox{
        width: 750px;
        // margin: auto;
        background: #FFFFFF;
        height: 500px;
        box-shadow: 0px 3px 20px 0px rgba(0,0,0,0.1);
        border-radius: 2.5rem;
        padding: 50px;
        box-sizing: border-box;
        @media (max-width:768px) {
            width: 95%;
            padding: 20px;
        }
        .RewardRow{
            display: flex;
            justify-content: space-between;
            margin-bottom: 17px;
            .num{
                color: #49DE3D;
                font-size: 14px;
            }
            .time{
                color: #262626;
                font-size: 14px;
            }
        }
        .RewardRow:nth-last-child(1){
            margin-bottom: 0;
        }
    }
}

</style>