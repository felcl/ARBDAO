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
                <img @click="copyFun(address)" src="../assets/Home/copy.png" alt="">
            </div>
            <div class="link"> <span>http://sadfs.dadsf.com/sdadsf <img src="../assets/Home/copy.png"  @click="copyFun(InviteUrl)" alt=""></span> <div class="Team flexCenter" @click="goPath('/Team')">Team</div></div>
        </div>
        <div class="balance">
            <div class="balanceItem">
                <div class="label">CRB</div>
                <div class="Num">2000</div>
            </div>
            <div class="balanceItem">
                <div class="label">CZZ</div>
                <div class="Num">2000</div>
            </div>
            <div class="Withdraw flexCenter">Withdraw</div>
        </div>
        <div class="HistoryLabel">
            <div class="topbar">
                <span class="label">History</span>
                <span class="more">more></span>
            </div>
        </div>
        <div class="recordItem">
            <div>
                <div>STAKE</div>
                <div>CRB</div>
            </div>
            <div class="textRight">
                <div>+1221 CRB</div>
                <div>2023.02.22 12:11:11</div>
            </div>
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