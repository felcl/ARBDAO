<template>
  <div class="Stake">
    <div class="StakeTitle">DAO</div>
    <div class="StakeSubTitle">Stake USDT and receive A while staking.</div>
    <div class="StakeItem">
      <div class="totalNetwork">
        <div class="totalItem">
          <div class="label">全网收益总量</div>
          <div class="number">12100200002</div>
        </div>
        <div class="separate"></div>
        <div class="totalItem">
          <div class="label">DAO 国库</div>
          <div class="number">12100200002</div>
        </div>
      </div>
      <div class="Increase">
        <div class="Left">
            <div class="Icon">
                <img src="" alt="">
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
      <div class=""></div>
      <div class="StakeInfo subscribe">
        <div class="InfoRow">
          <span>Stake Date</span>
          <span>2023-04-22 00:17</span>
        </div>
        <div class="InfoRow">
          <span>Value Date</span>
          <span>2023-04-22 08:00</span>
        </div>
        <div class="InfoRow">
          <span>Interest Period</span>
          <span>6 Days</span>
        </div>
        <div class="InfoRow">
          <span>Est. APR</span>
          <span>2.7%</span>
        </div>
        <div class="InfoRow">
          <span>Estimated Interests</span>
          <span>- -</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup></script>

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
    background: url('../assets/Home/DaoBg.png') no-repeat center 0 / 100%;
    .totalNetwork {
      display: flex;
      justify-content: space-between;
      margin: 80px 67px 70px;
      align-items: center;
      .totalItem {
        .label {
          font-weight: 400;
          color: #e0f1ff;
          font-size: 20px;
          margin-bottom: 36px;
        }
        .number{
            font-size: 40px;
            font-weight: 600;
            color: #FFFFFF;
        }
      }
      .separate {
        border-left: 1px solid #fff;
        height: 66px;
      }
    }
    display: flex;
    flex-direction: column;
    width: 37.5rem;
    // background: #00b3ff;
    border-radius: 2.5rem;
    margin: 20px auto 0;
    @media (max-width: 768px) {
      width: 45rem;
    }
    @media (max-width: 425px) {
      width: 65rem;
    }
    @media (max-width: 375px) {
      width: 80rem;
    }
    .Increase{
        margin: 0 67px 124px;
        display: flex;
        justify-content:space-between;
        .Left{
            display: flex;
            .name{
                font-weight: 600;
                color: #FFFFFF;
                font-size: 20px;
            }
            .price{
                font-weight: 400;
                color: #FFFFFF;
                font-size: 20px;
            }
            .pro{
                color: #49DE3D;
                font-weight: 600;
                font-size: 20px;
                margin-left: 25px;
            }
        }
        .Right{
            font-weight: 600;
            color: #FFFFFF;
            font-size: 20px;
            display: flex;
            flex-direction: column;
        }
        .Icon{
            width: 52px;
            height: 52px;
            margin-right: 28px;
            border-radius:50%;
            background: #FF0000;
        }
    }
    .subscribe {
      width: 100%;
        background: #FFFFFF;
      border-radius: 2.5rem;
      padding: 1.9rem 4rem;
      box-sizing: border-box;
      .InfoRow {
        display: flex;
        justify-content: space-between;
        margin-bottom: 0.6rem;
        span {
          color: rgba(255, 255, 255, 0.617691);
          font-size: 0.7rem;
        }
      }
    }
  }
}
</style>
