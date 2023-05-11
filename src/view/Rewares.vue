<script setup>
import "../assets/style/Rewares.scss";
import { AddrHandle } from "../utils/tool";
import {useRouter,useRoute} from 'vue-router'
import { ref } from "vue";
const tabVal = ref("Reward");
const router = useRouter()
const goPath=(path)=>{
  router.push(path)
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
          <span>{{ AddrHandle('0x958825f16227a1ff652Dc6AC147071EA7024E424',7,7) }}</span>
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
            {{ AddrHandle('http://sadfs.dadsf.com/sdadsf',11,11) }}
            <img
              src="../assets/Home/copy.png"
              @click="copyFun(InviteUrl)"
              alt=""
          /></span>
          <div v-if="tabVal === 'Reward'" class="Team flexCenter" @click="goPath('/Team')">邀请绑定 </div>
          <div v-else class="Team flexCenter" @click="goPath('/Team')">团队 </div>
        </div>
      </div>
      <div class="balance">
        <div class="balanceRow">
          <div class="balanceNum">
            <span class="tokenName">A币</span>
            <span class="tokenNum">200000</span>
          </div>
          <div class="Withdraw flexCenter">Withdraw</div>
        </div>
        <div class="history">
          <div class="historyItem">
            <span class="Label">Reward Total</span>
            <span class="number">22222222</span>
          </div>
          <div class="historyItem">
            <span class="Label">Stake Total</span>
            <span class="number">22222222</span>
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
  </div>
</template>
