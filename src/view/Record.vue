<template>
    <div class="Record">
        <div class="RecordHeader">
            <img src="../assets/Home/back.png" alt="">
            <div>提现记录</div>
            <div></div>
        </div>
        <div class="subTitle">Track your MATIC staking rewards with ARB</div>
        <div class="RecordList">
            <div class="RecordItem">
                <div class="address">dadsda*****dadsdd</div>
                <div class="numTime">
                    <div class="num">122</div>
                    <div class="time">2022/02/22 12:22:33</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.Record{
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
    .RecordHeader{
        width: 750px;
        display: flex;
        justify-content: space-between;
        font-size: 30px;
        color: #262626;
        align-items: center;
        img{
            height: 20px;
        }
    }
    .subTitle{
        color: #262626;
        font-size: 14px;text-align: center;
    }
    .RecordList{
        border-radius: 50px;
        padding: 38px 30px;
        box-sizing: border-box;
        height: 808px;
        box-shadow: 0px 3px 20px 0px rgba(0,0,0,0.1);
        background: #FFFFFF;
        width: 750px;
        margin-top: 20px;
        .RecordItem{
            display: flex;
            align-items: center;
            justify-content:space-between;
            .address{
                font-weight: 400;
                color: #424242;
                font-size: 16px;
            }
            .numTime{
                text-align: right;
                .num{
                    font-size: 14px;
                    color: #424242;
                }
                .time{
                    font-size: 14px;
                    color: #262626;
                }
            }
        }
    }
}
</style>