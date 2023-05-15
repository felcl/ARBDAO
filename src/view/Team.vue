<template>
    <div class="Team">
        <div class="TeamHeader">
            <img src="../assets/Home/back.png" alt="">
            <div>团队</div>
            <div></div>
        </div>
        <div class="TeamInfo">
            <div class="totalLabel">总人数</div>
            <div class="totalNum">7</div>
            <div class="InviteUrl">http://sadfs.dadsf.com/sdadsf <img src="../assets/Home/copy.png" alt=""></div>
            <div class="recordList">
                <div class="recordLabel">邀请记录</div>
                <div class="recordItem"><span class="address">dadsda*****dadsdd</span> <span>2022/02/22 12:22:33</span></div>
            </div>
        </div>
    </div>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.Team{
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
    .TeamHeader{
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
    .TeamInfo{
        width: 750px;
        overflow: hidden;
        margin-top: 50px;
        border-radius: 50px;
        background: url(../assets/Home/DaoBg.png) no-repeat center 0 / 100%;
        text-align: center;
        .totalLabel{
            font-size: 14px;
            color: #FFFFFF;
            margin-top: 25px;
        }
        .totalNum{
            font-size: 40px;
            font-weight: 500;
            color: #FFFFFF;
            margin-top: 7px;
        }
        .InviteUrl{
            font-weight: 500;
            color: #FFFFFF;
            font-size: 18px;
            margin-top: 8px;
            display: flex;
            align-items: center;
            justify-content: center;
            img{
                width: 20px;
                margin-left: 20px;
            }
        }
        .recordList{
            width: 100%;
            height: 500px;
            border-radius: 50px;
            background: #FFFFFF;
            padding: 35px 30px;
            box-sizing: border-box;
            .recordLabel{
                font-weight: 400;
                color: #3D3D3D;
                font-size: 14px;
                text-align: left;
            }
            .recordItem{
                display: flex;
                justify-content:space-between;
                margin-top: 18px;
                span{
                    font-weight: 400;
                    color: #262626;
                    font-size: 14px;
                }
                .address{
                    color: #424242;
                    font-size: 16px;
                }
            }
        }
    }
}
</style>