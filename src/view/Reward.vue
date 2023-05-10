<script setup>
</script>

<template>
  <div class="Reward">
    <div class="RewardHead">
        <img src="" alt="">
        <div>
            <div class="StakeTitle">SVIP Reward</div>
            <div class="StakeSubTitle">Track your MATIC staking rewards with ARB</div>
        </div>
        <div>
        </div>
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
        <div class="RewardRow">
            <span class="num">+122</span>
            <span class="time">2022/02/22 12:22:33</span>
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
    // align-items: center;
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
            font-size: 4rem;
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
        width: 37.5rem;
        margin: auto;
        background: #FFFFFF;
        height: 808px;
        box-shadow: 0px 3px 20px 0px rgba(0,0,0,0.1);
        border-radius: 50px;
        padding: 50px;
        box-sizing: border-box;
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