<script setup>
import "../assets/style/Rewares.scss";
import { AddrHandle , GetQueryString , dateFormat} from "../utils/tool";
import {useRouter,useRoute} from 'vue-router'
import { ElNotification } from 'element-plus'
import { useStore } from "vuex";
import Axios from '../axios'
import copy from "copy-to-clipboard";
import { ref , computed , watch,onMounted} from "vue";
import { contract } from '../web3'
const router = useRouter()
const store = useStore();
const tabVal = ref("Reward");
const centerDialogVisible = ref(false)
const WithdrawVisible = ref(false)
const WithdrawAmount = ref('')
const InviteUrl = ref("");
const InvitationLink = ref("");
const AIncome = ref([]);
const SCVIPIncome = ref([]);
const invitelist = ref([]);
const Withdrawallist = ref([]);
const WithdrawalTotal = ref(0);
const rewardTotalAmount = ref(0);
const isBind = ref(0);
const inWithdraw = ref(false);
const svipLevel = ref(0);
const stakeTotalAmount = ref(0);
const amount = ref(0);
let dialogWidth = ref("550px")
const goPath=(path)=>{
  router.push(path)
}
const address = computed(() => {
  return store.state.address;
});
const token = computed(() => {
  return store.state.token;
});
onMounted(()=>{
  setDialogWidth()
  window.onresize = () => {
    setDialogWidth()
  }
})
let setDialogWidth = (()=>{
  let val = document.body.clientWidth
  const def = 550 // 默认宽度
  if (val < def) {
    dialogWidth.value = '98%'
  } else {
    dialogWidth.value = def + 'px'
  }
})
watch(address,(address)=>{
 if(address){
  InviteUrl.value = window.location.origin+window.location.pathname+'#/?address=' + address
 }
},{
  immediate:true
})
watch(token,(token)=>{
 if(token){
  WithdrawalTotal.value = 0
  Axios.get('/dao/userBase').then(res=>{
    if(res.data.code === 200){
        amount.value = res.data.data.amount
      rewardTotalAmount.value = res.data.data.rewardTotalAmount
      stakeTotalAmount.value = res.data.data.stakeTotalAmount
    }
    console.log(res,"用户质押信息")
  })
  Axios.get('/dao/rewardDetail/1').then(res=>{
    if(res.data.code === 200){
        AIncome.value = res.data.data
    }
    console.log(res,"用户A币收益列表")
  })
  Axios.get('/dao/rewardDetail/2').then(res=>{
    if(res.data.code === 200){
        SCVIPIncome.value = res.data.data
    }
    console.log(res,"用户SVIP收益列表")
  })
  Axios.get('/dao/drawDetail').then(res=>{
    if(res.data.code === 200){
        res.data.data.forEach(item=>{
            WithdrawalTotal.value += item.drawAmount
        })
        Withdrawallist.value = res.data.data
    }
    console.log(res,"用户提现记录")
  })
  Axios.get('/dao/userReferee').then(res=>{
    if(res.data.code === 200){
        invitelist.value = res.data.data
    }
    console.log(res,"用户邀请记录")
  })
  Axios.get('/uUser/checkBind').then(res=>{
    if(res.data.code === 200){
        isBind.value = res.data.data
    }
    console.log(res,"检测是否绑定上级地址")
  })
  Axios.get('/uUser/userDetail').then(res=>{
    if(res.data.code === 200){
      svipLevel.value = res.data.data.svipLevel
        // isBind.value = res.data.data
    }
    console.log(res,"用户详情")
  })
 }
},{
  immediate:true
})
const copyFun = (text)=>{
    copy(text)
    ElNotification({
        title: 'Success',
        message: '复制成功',
        type: 'success',
    })
}
function bind(){
  if(!InvitationLink.value){
    return ElNotification({
        title: 'Warning',
        message: '请输入邀请链接',
        type: 'warning',
    })
  }
  let refereeUserAddress = GetQueryString('address',InvitationLink.value)
  if(!refereeUserAddress){
    return ElNotification({
        title: 'Warning',
        message: '请输入正确的邀请链接',
        type: 'warning',
    })
  }
  // GetQueryString('address',InvitationLink.value)
  Axios.post('/uUser/bind',{
	  refereeUserAddress
  }).then(res=>{
    if(res.data.code === 200){
        Axios.get('/uUser/checkBind').then(res=>{
            if(res.data.code === 200){
                isBind.value = res.data.data
            }
            console.log(res,"检测是否绑定上级地址")
        })
      ElNotification({
          title: 'Success',
          message: '绑定成功',
          type: 'success',
      })
    }else{
      ElNotification({
          title: 'Warning',
          message: '绑定失败',
          type: 'warning',
      })
    }
    console.log(res,"绑定上级")
  })
}
function Withdraw(){
    if(inWithdraw.value){
        return yaElNotification({
            title: 'Warning',
            message: '请勿重复提交',
            type: 'warning',
        })
    }
    if(!amount.value){
        return ElNotification({
          title: 'Warning',
          message: '暂无收益',
          type: 'warning',
      })
    }
    inWithdraw.value = true
    Axios.post('/dao/draw',{
        amount:WithdrawAmount.value
    }).then(res=>{
        console.log(res)
        if(res.data.code === 200){
            WithdrawVisible.value =false
            contract.Dao.methods.drawToken(res.data.data).send({from:address.value}).then(res=>{
                ElNotification({
                    title: 'Success',
                    message: '领取成功',
                    type: 'success',
                })
                console.log(res,"提现")
            }).finally(()=>{
                inWithdraw.value = false
            })
        }else{
            ElNotification({
                    title: 'Warning',
                    message: '领取失败',
                    type: 'warning',
                })
            inWithdraw.value = false
        }
    },()=>{
        inWithdraw.value = false
    })
}
function changeNumPut(event) {
  let value = event.target.value;
  if (/^\./g.test(value)) {
    value = "0" + value;
  }
  let putVal = value.replace(/[^\d.]/g, "");
  let putArr = putVal.split(".");
  if (putArr[1] && putArr[1].length > accuracy) {
    putArr[1] = putArr[1].slice(0, accuracy);
  }
  putVal = putArr.join(".");
  WithdrawAmount.value = putVal;
}
</script>

<template>
  <div class="Rewares">
    <div class="StakeTitle">REWARDS</div>
    <!-- <div class="StakeSubTitle">Track your MATIC staking rewards with ARB</div> -->
    <div class="Tabs">
      <div
        class="tabItem flexCenter"
        :class="{ active: tabVal === 'Reward' }"
        @click="tabVal = 'Reward'"
      >
        Reward
      </div>
      <div
        class="tabItem flexCenter"
        :class="{ active: tabVal === 'Record' }"
        @click="tabVal = 'Record'"
      >
        Record
      </div>
    </div>
    <div class="RewaresInfo">
      <div class="InfoRow">
        <div class="address">
          <div class="headImg">
            <img src="" alt="" />
          </div>
          <span>{{ address ? AddrHandle(address,7,7) :'请链接钱包' }}</span>
          <img
            @click="copyFun(address)"
            class="copy"
            src="../assets/Home/copy.png"
            alt=""
          />
          <img src="../assets/Home/SVIP.png" class="svip" v-if="svipLevel" alt="" />
        </div>
        <div class="link">
          <span
            >
            {{ AddrHandle(InviteUrl,11,11) }}
            <img
              src="../assets/Home/copy.png"
              @click="copyFun(InviteUrl)"
              alt=""
          /></span>
          <div v-if="isBind === 0" class="Team flexCenter" @click="centerDialogVisible = true">Invite </div>
          <div v-else class="Team flexCenter" @click="goPath('/Team')">Team </div>
        </div>
      </div>
      <div class="balance">
        <div class="balanceRow">
          <div class="balanceNum">
            <img src="../assets/Home/tokenIcon.png" alt="">
            <span class="tokenName">Arbitrum </span>
            <span class="tokenNum">{{ amount ? amount : 0 }}</span>
          </div>
          <div class="Withdraw flexCenter" @click="WithdrawVisible =true">
            Withdraw
          </div>
        </div>
        <div class="history">
          <div class="historyItem">
            <span class="Label">Reward Total</span>
            <span class="number">{{ rewardTotalAmount }}</span>
          </div>
          <div class="historyItem">
            <span class="Label">Stake Total</span>
            <span class="number">{{ stakeTotalAmount }}</span>
          </div>
        </div>
      </div>
    </div>
    <template v-if="tabVal === 'Reward'">
      <div class="LabelRow">
        <span class="labelName">Arbitrum Reward</span>
        <span class="more" @click="goPath('/Reward?type=Arbitrum')">more></span>
      </div>
      <div class="RewardBox">
        <template v-if="AIncome.length !==0">
          <div class="RewardRow" v-for="item in AIncome">
            <span class="num">+{{ item.rewardArb }}</span>
            <span class="time">{{ dateFormat('YYYY/mm/dd HH:MM:SS',new Date(item.createTime)) }}</span>
          </div>
        </template>
        <el-empty v-else description="description" />
      </div>
      <div class="LabelRow">
        <span class="labelName">SVIP Reward</span>
        <span class="more" @click="goPath('/Reward?type=SVIP')">more></span>
      </div>
      <div class="RewardBox">
        <template v-if="SCVIPIncome.length !==0">
          <div class="RewardRow" v-for="item in SCVIPIncome">
            <span class="num">+{{ item.rewardArb }}</span>
            <span class="time">{{ dateFormat('YYYY/mm/dd HH:MM:SS',new Date(item.createTime)) }}</span>
          </div>
        </template>
        <el-empty v-else description="description" />
      </div>
    </template>
    <template v-else>
      <div class="LabelRow">
        <span class="labelName">Withdrawal records</span>
        <span class="more" @click="goPath('/Record')">more></span>
      </div>
      <div class="RewardBox">
        <div class="total">
          <div class="label">Accumulated withdrawal</div>
          <div class="totalNum">{{ WithdrawalTotal }}</div>
        </div>
        <template v-if="Withdrawallist.length !==0">
          <div class="RewardRow" v-for="item in Withdrawallist">
            <span class="address">{{ AddrHandle(item.userAddress,6,6) }}</span>
            <div class="timeAndNum">
              <span class="RecordNum">{{ item.drawAmount }}</span>
              <span class="RecordTime">{{ dateFormat('YYYY/mm/dd HH:MM:SS',new Date(item.createTime)) }}</span>
            </div>
          </div>
        </template>
        <el-empty v-else description="description" />
      </div>
      <div class="LabelRow">
        <span class="labelName">Invitation Record</span>
        <span class="more" @click="goPath('/Team')">more></span>
      </div>
      <div class="RewardBox">
        <template v-if="invitelist.length !==0">
          <div class="RewardRow" v-for="item in invitelist">
            <span class="address">{{ AddrHandle(item.userAddress,6,6) }}</span>
            <div class="timeAndNum">
              <span class="RecordTime">{{ dateFormat('YYYY/mm/dd HH:MM:SS',new Date(item.createTime)) }}</span>
            </div>
          </div>
        </template>
        <el-empty v-else description="description" />
      </div>
    </template>
    <el-dialog v-model="centerDialogVisible" title="Invitation binding" :width="dialogWidth" center :close-on-press-escape="false">
      <input class="InvitationInput" placeholder="Please enter the bound link" v-model="InvitationLink" type="text">
      <div class="enter" @click="bind">Confirm</div>
    </el-dialog>
    <el-dialog v-model="WithdrawVisible" title="Invitation binding" :width="dialogWidth" center :close-on-press-escape="false">
        <div class="balanceLabel">Balance：{{ amount }}</div>
        <div class="InvitationInput">
            <input placeholder="Please enter the withdrawal quantity" @input="changeNumPut" v-model="WithdrawAmount" type="text">
            <span @click="WithdrawAmount = amount">MAX</span>
        </div>
        <div class="prompt">The minimum withdrawal amount is greater than or equal to 30 Arb</div>
      <div class="enter" @click="Withdraw">
        <svg viewBox="25 25 50 50" v-if="inWithdraw">
            <circle cx="50" cy="50" r="20"></circle>
        </svg>
        Confirm</div>
    </el-dialog>
  </div>
</template>
<style scoped lang="scss">
.balanceLabel{
    color: #1D1D1D;
    font-size: 12px;
    margin-bottom: 12px;
}
.InvitationInput{
    width: 100%;
    height: 46px;
    background: #F5FBFF;
    border-radius: 14px;
    border: none;
    outline: none;
    padding: 0 25px;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    span{
        color: #1D1D1D;
    }
    input{
        flex: 1;
        border: none;
        outline: none;
        height: 100%;
        background: none;
    }
}
.prompt{
    font-size: 12px;
}
.enter{
  width: 100%;
  height: 46px;
  background: linear-gradient(360deg, #299FEF 0%, #69C0FA 100%);
  border-radius: 12px;
  margin-top: 30px;
  color: #FFFFFF;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
svg {
  width: 1.5em;
  transform-origin: center;
  animation: rotate 2s linear infinite;
  margin-right: 10px;
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