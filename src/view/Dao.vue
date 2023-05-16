<script setup>
import { watch, computed ,onMounted,ref} from "vue";
import { ElNotification } from 'element-plus'
import Axios from '../axios'
import { useStore } from "vuex";
import { contract } from '../web3'
import BigNumber from "big.js";
import { contractAddress ,TokenConfig} from '../config'
BigNumber.NE = -40;
BigNumber.PE = 40;
const arbsList = ref([])
const svipList = ref([])
const arbIndex = ref(0)
const svipIndex = ref(0)
const daoAmount = ref(0)
const totalRewardAmount = ref(0)
const inAllowance = ref(false)
const inSVIPAllowance = ref(false)
const inSubscribe = ref(false)
const inSVIPSubscribe = ref(false)
const USDTAllowance = ref(new BigNumber(0))
const store = useStore();
const address = computed(() => {
  return store.state.address;
});
watch(
  address,
  (address) => {
    if (address) {
      contract.USDT.methods.balanceOf(address).call().then(res=>{
        let amount = new BigNumber(res).div(10 ** 6)
        console.log(amount,"获取用户余额")
      })
      getAllowance(contractAddress.Dao)
    }
  },
  {
    immediate: true,
  }
);
const ifApprove = computed(() => {
  if (arbsList.value[arbIndex.value] && USDTAllowance.value.gte(arbsList.value[arbIndex.value].buyAmount)) {
    return false;
  }
  return true;
});
const ifSVIPApprove = computed(() => {
  if (svipList.value[svipIndex.value] && USDTAllowance.value.gte(svipList.value[svipIndex.value].buyAmount)) {
    return false;
  }
  return true;
});
function getAllowance(toAddress) {
  contract.USDT.methods
    .allowance(address.value, toAddress)
    .call()
    .then((res) => {
      res = new BigNumber(res).div(10 ** TokenConfig.USDT.decimals);
      USDTAllowance.value = res
      console.log(res.toString(),"授权额度");
    });
}
function approve(type){
  let amount = new BigNumber("999999")
    .times(10 ** TokenConfig.USDT.decimals)
    .toString();
    if(type === 'vip' && inAllowance.value){
      return ElNotification({
        title: 'Warning',
        message: '请勿重复提交',
        type: 'warning',
      })
    }
    if(type === 'svip' && inSVIPAllowance.value){
      return ElNotification({
        title: 'Warning',
        message: '请勿重复提交',
        type: 'warning',
      })
    }
    if(type === 'vip'){
      inAllowance.value = true;
    }else{
      inSVIPAllowance.value = true;
    }
  contract.USDT.methods.approve(contractAddress.Dao,amount).send({from:address.value}).then(res=>{
    res = new BigNumber(res.events.Approval.returnValues.value).div(10 ** TokenConfig.USDT.decimals);
    USDTAllowance.value = res
  }).finally(()=>{
    if(type === 'vip'){
      inAllowance.value = false;
    }else{
      inSVIPAllowance.value = false;
    }
  })
}
function subscribe(id,type){
  if(type === 'vip' && inSubscribe.value){
      return ElNotification({
        title: 'Warning',
        message: '请勿重复提交',
        type: 'warning',
      })
    }
    if(type === 'svip' && inSVIPSubscribe.value){
      return ElNotification({
        title: 'Warning',
        message: '请勿重复提交',
        type: 'warning',
      })
    }
    if(type === 'vip'){
      inSubscribe.value = true;
    }else{
      inSVIPSubscribe.value = true;
    }
  console.log(id)
  Axios.post('/dao/stake',{
    id,
    userAddress:address.value
  }).then(res=>{
    if(res.data.code === 200){
      return contract.Dao.methods.stake(res.data.data).send({from:address.value})
    }
    console.log(res,"获取申购加密数据")
  }).then(res=>{
    console.log(res,'申购结果')
  }).finally(()=>{
    if(type === 'vip'){
      inSubscribe.value = false;
    }else{
      inSVIPSubscribe.value = false;
    }
  })
}
onMounted(()=>{
  Axios.get('/dao/base').then(res=>{
    if(res.data.code === 200){
      arbsList.value = res.data.data.arbsList
      svipList.value = res.data.data.svipList
    }
    console.log(res,"获取配置信息")
  })
})
</script>

<template>
  <div class="Stake">
    <div class="StakeTitle">DAO</div>
    <div class="StakeSubTitle">Stake USDT and receive A while staking.</div>
    <div class="StakeItem">
      <div class="totalNetwork">
        <div class="totalItem">
          <div class="label">全网收益总量</div>
          <div class="number">{{ totalRewardAmount }}</div>
        </div>
        <div class="separate"></div>
        <div class="totalItem">
          <div class="label">DAO 国库</div>
          <div class="number">{{ daoAmount }}</div>
        </div>
      </div>
      <div class="Increase">
        <div class="Left">
          <div class="Icon">
            <img src="" alt="" />
          </div>
          <div>
            <div class="name">OP</div>
            <div class="priceInfo">
              <span class="price">$ 2.1856</span>
              <span class="pro">4.7%</span>
            </div>
          </div>
        </div>
        <div class="Right">
          <span>0.00</span>
          <span>$ 0.00</span>
        </div>
      </div>
      <div class="subscribe">
        <div class="subscribeTitle">A币申购</div>
        <div class="subscribeLabel">申购类型</div>
        <div class="subscribeRow">
          <div class="item flexCenter" :class="{Active:arbIndex === index}" v-for="(item,index) in arbsList" @click="arbIndex = index">{{item.buyAmount}}A</div>
        </div>
        <div class="Submit flexCenter" v-if="ifApprove" @click="approve('vip')">
          <svg viewBox="25 25 50 50" v-if="inAllowance">
            <circle cx="50" cy="50" r="20"></circle>
          </svg>
          approve
        </div>
        <div class="Submit flexCenter" v-else @click="subscribe(arbsList[arbIndex].id,'vip')">
          <svg viewBox="25 25 50 50" v-if="inSubscribe">
            <circle cx="50" cy="50" r="20"></circle>
          </svg>
          Submit
        </div>
      </div>
    </div>
    <div class="subscribe independence">
      <div class="subscribeTitle">A币申购</div>
      <div class="subscribeLabel">申购类型</div>
      <div class="subscribeRow">
        <div class="item flexCenter" :class="{Active:svipIndex === index}" v-for="(item,index) in svipList" @click="svipIndex = index">{{item.buyAmount}}A</div>
      </div>
      <div class="Submit flexCenter" v-if="ifSVIPApprove" @click="approve('svip')">
          <svg viewBox="25 25 50 50" v-if="inSVIPAllowance">
            <circle cx="50" cy="50" r="20"></circle>
          </svg>
          approve
      </div>
      <div class="Submit flexCenter" v-else @click="subscribe(svipList[svipIndex].id,'svip')">
        <svg viewBox="25 25 50 50" v-if="inSVIPSubscribe">
            <circle cx="50" cy="50" r="20"></circle>
          </svg>
        Submit
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.Stake {
  background: #f5fbff;
  min-height: 100vh;
  padding-top: 10rem;
  @media (max-width: 767px) {
    padding-top: 20rem;
  }
  .StakeTitle {
    font-size: 1.5rem;
    line-height: 1;
    color: #262626;
    text-align: center;
    @media (max-width: 1024px) {
      font-size: 3rem;
    }
    @media (max-width: 425px) {
      font-size: 4rem;
    }
  }
  .StakeSubTitle {
    font-size: 14px;
    line-height: 1;
    color: #262626;
    text-align: center;
    margin-top: 8px;
    @media (max-width: 425px) {
      font-size: 12px;
    }
  }
  .StakeItem {
    background: url("../assets/Home/DaoBg.png") no-repeat center 0 / 100%;
    .totalNetwork {
      display: flex;
      justify-content: space-between;
      margin: 80px 67px 70px;
      align-items: center;
      @media (max-width: 768px) {
        margin: 40px 33px 35px;
      }
      .totalItem {
        .label {
          font-weight: 400;
          color: #e0f1ff;
          font-size: 20px;
          margin-bottom: 36px;
        }
        .number {
          font-size: 40px;
          font-weight: 600;
          color: #ffffff;
          @media (max-width: 768px) {
            font-size: 30px;
          }
          @media (max-width: 550px) {
            font-size: 24px;
          }
          @media (max-width: 425px) {
            font-size: 18px;
          }
        }
      }
      .separate {
        border-left: 1px solid #fff;
        height: 66px;
      }
    }
    display: flex;
    flex-direction: column;
    width: 750px;
    // background: #00b3ff;
    border-radius: 2.5rem;
    margin: 20px auto 0;
    @media (max-width: 1024px) {
      width: 95%;
      margin: 20px auto;
    }
    .Increase {
      margin: 0 67px 84px;
      display: flex;
      justify-content: space-between;
      @media (max-width: 768px) {
        margin: 0 33px 62px;
      }
      .Left {
        display: flex;
        align-items: center;
        .name {
          font-weight: 600;
          color: #ffffff;
          font-size: 20px;
        }
        .price {
          font-weight: 400;
          color: #ffffff;
          font-size: 20px;
        }
        .pro {
          color: #49de3d;
          font-weight: 600;
          font-size: 20px;
          margin-left: 25px;
        }
      }
      .Right {
        font-weight: 600;
        color: #ffffff;
        font-size: 20px;
        display: flex;
        flex-direction: column;
      }
      .Icon {
        width: 52px;
        height: 52px;
        margin-right: 28px;
        border-radius: 50%;
        background: #ff0000;
        @media (max-width: 768px) {
          width: 35px;
          height: 35px;
        }
      }
    }
  }

  .subscribe {
    width: 750px;
    margin: 20px auto 0;
    padding: 70px 80px 50px;
    box-sizing: border-box;
    border-radius: 50px;
    background: #ffffff;
    box-shadow: 0px 3px 20px 0px rgba(0, 0, 0, 0.1);
    @media (max-width: 768px) {
      padding: 35px 40px 25px;
    }
    @media (max-width: 1024px) {
      width: 100%;
      margin: 20px auto;
    }
    .subscribeTitle {
      font-weight: 500;
      color: #262626;
      font-size: 30px;
      text-align: center;
    }
    .subscribeLabel {
      font-weight: 400;
      color: #3d3d3d;
      font-size: 14px;
      margin-top: 36px;
    }
    .subscribeRow {
      margin-top: 15px;
      display: flex;
      justify-content: space-between;
      .item {
        width: 179px;
        height: 56px;
        background: #fff;
        border: 1px solid #00a0e9;
        border-radius: 12px;
        font-weight: 400;

        color: #00a0e9;
        font-size: 20px;
      }
      .Active {
        background: linear-gradient(360deg, #299fef 0%, #69c0fa 100%);
        border: none;
        color: #ffffff;
      }
    }
    .Submit {
      background: linear-gradient(360deg, #299fef 0%, #69c0fa 100%);
      height: 56px;
      border-radius: 12px;
      margin-top: 60px;
      color: #fff;
    }
  }
  .independence {
    width: 750px;
    margin: 30px auto;
    @media (max-width: 1024px) {
      width: 95%;
    }
  }
}
.flexCenter {
  display: flex;
  align-items: center;
  justify-content: center;
}
svg {
  width: 1.5em;
  transform-origin: center;
  animation: rotate 2s linear infinite;
}

circle {
  fill: none;
  stroke: #fc2f70;
  stroke-width: 5;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  stroke-linecap: round;
  animation: dash 1.5s ease-in-out infinite;
}

@keyframes rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dashoffset: -125px;
  }
}
</style>
