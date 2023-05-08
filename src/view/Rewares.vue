<template>
  <div class="Rewares">
    <div class="StakeTitle">REWARDS</div>
    <div class="StakeSubTitle">Track your MATIC staking rewards with ARB</div>
    <div class="RewaresInfo">
        <div class="InfoRow">
            <div class="address">
                <div class="headImg">
                    <img src="" alt="">
                </div>
                <span>0x958825f16227a1ff652Dc6AC147071EA7024E424</span>
                <img @click="copyFun(address)" class="copy" src="../assets/Home/copy.png" alt="">
                <img src="../assets/Home/SVIP.png" class="svip" alt="">
            </div>
            <div class="link"> <span>http://sadfs.dadsf.com/sdadsf <img src="../assets/Home/copy.png"  @click="copyFun(InviteUrl)" alt=""></span> <div class="Team flexCenter" @click="goPath('/Team')">Team</div></div>
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
  </div>
</template>

<script setup>
import '../assets/style/Rewares.scss'
import { AddrHandle } from '../utils/tool'
</script>

<style lang="scss" scoped>
</style>