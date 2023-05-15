<script setup>
import "../assets/style/Rewares.scss";
import { AddrHandle , GetQueryString} from "../utils/tool";
import {useRouter,useRoute} from 'vue-router'
import { ElNotification } from 'element-plus'
import { useStore } from "vuex";
import Axios from '../axios'
import copy from "copy-to-clipboard";
import { ref , computed , watch} from "vue";
const router = useRouter()
const store = useStore();
const tabVal = ref("Reward");
const centerDialogVisible = ref(false)
const InviteUrl = ref("");
const InvitationLink = ref("");
const rewardTotalAmount = ref(0);
const stakeTotalAmount = ref(0);
const amount = ref(0);
const goPath=(path)=>{
  router.push(path)
}
const address = computed(() => {
  return store.state.address;
});
const token = computed(() => {
  return store.state.token;
});
watch(address,(address)=>{
 if(address){
  InviteUrl.value = window.location.origin+window.location.pathname+'#/?address=' + address
 }
},{
  immediate:true
})
watch(token,(token)=>{
 if(token){
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
    }
    console.log(res,"用户A币收益列表")
  })
  Axios.get('/dao/rewardDetail/2').then(res=>{
    if(res.data.code === 200){
    }
    console.log(res,"用户SVIP收益列表")
  })
  Axios.get('/dao/drawDetail').then(res=>{
    if(res.data.code === 200){
    }
    console.log(res,"用户提现记录")
  })
  Axios.get('/dao/userReferee').then(res=>{
    if(res.data.code === 200){
    }
    console.log(res,"用户邀请记录")
  })
  Axios.get('/uUser/checkBind').then(res=>{
    if(res.data.code === 200){
    }
    console.log(res,"检测是否绑定上级地址")
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
</script>

<template>
  <div class="Rewares">
    <div class="StakeTitle">REWARDS</div>
    <div class="StakeSubTitle">Track your MATIC staking rewards with ARB</div>
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
          <img src="../assets/Home/SVIP.png" class="svip" alt="" />
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
          <div v-if="tabVal === 'Reward'" class="Team flexCenter" @click="centerDialogVisible = true">邀请绑定 </div>
          <div v-else class="Team flexCenter" @click="goPath('/Team')">团队 </div>
        </div>
      </div>
      <div class="balance">
        <div class="balanceRow">
          <div class="balanceNum">
            <span class="tokenName">A币</span>
            <span class="tokenNum">{{ amount ? amount : 0 }}</span>
          </div>
          <div class="Withdraw flexCenter">Withdraw</div>
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
        <span class="labelName">A币 Reward</span>
        <span class="more">more></span>
      </div>
      <div class="RewardBox">
        <div class="RewardRow">
          <span class="num">+122</span>
          <span class="time">2022/02/22 12:22:33</span>
        </div>
        <div class="RewardRow">
          <span class="num">+122</span>
          <span class="time">2022/02/22 12:22:33</span>
        </div>
        <div class="RewardRow">
          <span class="num">+122</span>
          <span class="time">2022/02/22 12:22:33</span>
        </div>
      </div>
      <div class="LabelRow">
        <span class="labelName">SVIP Reward</span>
        <span class="more">more></span>
      </div>
      <div class="RewardBox">
        <div class="RewardRow">
          <span class="num">+122</span>
          <span class="time">2022/02/22 12:22:33</span>
        </div>
        <div class="RewardRow">
          <span class="num">+122</span>
          <span class="time">2022/02/22 12:22:33</span>
        </div>
        <div class="RewardRow">
          <span class="num">+122</span>
          <span class="time">2022/02/22 12:22:33</span>
        </div>
      </div>
    </template>
    <template v-else>
      <div class="LabelRow">
        <span class="labelName">提现记录</span>
        <span class="more">more></span>
      </div>
      <div class="RewardBox">
        <div class="total">
          <div class="label">累计提现</div>
          <div class="totalNum">2912.212</div>
        </div>
        <div class="RewardRow">
          <span class="address">dadsda*****dadsdd</span>
          <div class="timeAndNum">
            <span class="RecordNum">122</span>
            <span class="RecordTime">2022/02/22 12:22:33</span>
          </div>
        </div>
        <div class="RewardRow">
          <span class="address">dadsda*****dadsdd</span>
          <div class="timeAndNum">
            <span class="RecordNum">122</span>
            <span class="RecordTime">2022/02/22 12:22:33</span>
          </div>
        </div>
        <div class="RewardRow">
          <span class="address">dadsda*****dadsdd</span>
          <div class="timeAndNum">
            <span class="RecordNum">122</span>
            <span class="RecordTime">2022/02/22 12:22:33</span>
          </div>
        </div>
      </div>
      <div class="LabelRow">
        <span class="labelName">邀请记录</span>
        <span class="more">more></span>
      </div>
      <div class="RewardBox">
        <div class="RewardRow">
          <span class="address">dadsda*****dadsdd</span>
          <div class="timeAndNum">
            <span class="RecordTime">2022/02/22 12:22:33</span>
          </div>
        </div>
        <div class="RewardRow">
          <span class="address">dadsda*****dadsdd</span>
          <div class="timeAndNum">
            <span class="RecordTime">2022/02/22 12:22:33</span>
          </div>
        </div>
        <div class="RewardRow">
          <span class="address">dadsda*****dadsdd</span>
          <div class="timeAndNum">
            <span class="RecordTime">2022/02/22 12:22:33</span>
          </div>
        </div>
      </div>
    </template>
    <el-dialog v-model="centerDialogVisible" title="Invitation binding" width="30%" center :close-on-press-escape="false">
      <input class="InvitationInput" placeholder="Please enter the bound link" v-model="InvitationLink" type="text">
      <div class="enter" @click="bind">Confirm</div>
    </el-dialog>
  </div>
</template>
<style scoped lang="scss">
.InvitationInput{
width: 100%;
height: 46px;
background: #F5FBFF;
border-radius: 14px;
border: none;
outline: none;
padding: 0 25px;
box-sizing: border-box;
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
</style>