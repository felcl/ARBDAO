<script setup></script>

<template>
  <div class="bgColor">
    <div class="Home">
      <div class="firstScreen">
        <div class="title">Liquidity for staked tokens</div>
        <div class="subTitle">
          Simplified and secure participation in staking
        </div>
        <div class="StakeBtn flexCenter">Stake now</div>
        <div class="totalRow">
          <div class="TotalItem">
            <div class="totalLabel">Total staked tokens</div>
            <div class="totalValue">$11,983,033,282</div>
          </div>
          <div class="TotalItem">
            <div class="totalLabel">Total rewards paid</div>
            <div class="totalValue">$572,854,126</div>
          </div>
          <div class="TotalItem">
            <div class="totalLabel">Stakers</div>
            <div class="totalValue">11,983,033,282</div>
          </div>
        </div>
        <!-- <div class="FriendlyLinks">
                  <a href="">
                      <img src="../assets/Home/InsIcon.png" alt="">
                  </a>
                  <a href="">
                      <img src="../assets/Home/facebookIcon.png" alt="">
                  </a>
                  <a href="">
                      <img src="../assets/Home/TwitterIcon.png" alt="">
                  </a>
                  <a href="">
                      <img src="../assets/Home/youtubeIcon.png" alt="">
                  </a>
              </div> -->
      </div>
      <div class="CenterTitle">Subscribe</div>
      <div class="CenterSubTitle">
        Lido lets you stake tokens from many networks. Choose a network below to
        get started.
      </div>
      <div class="publicize">
        <div class="publicizeMain">
          <div class="Icon">
            <div class="iconBox"></div>
            <span>Polygon</span>
          </div>
          <div class="Info">
            <div class="text">
              Stake MATIC tokens to support network decentralisation and watch
              your stMATIC value grow. Staking does not mean locking anymore.
            </div>
            <div class="data">
              <div class="APR">
                <div class="APRValue">4.3%</div>
                <span>APR</span>
              </div>
              <div class="separate"></div>
              <div class="staked">
                <div class="stakedValue">$104,337,536</div>
                <span>Staked</span>
              </div>
            </div>
          </div>
        </div>
        <div class="StakeNow flexCenter">Stake now</div>
      </div>
      <div class="CenterTitle">Subscribe</div>
      <div class="CenterSubTitle">
        Lido lets you stake tokens from many networks. Choose a network below to
        get started.
      </div>
      <div class="publicize">
        <div class="publicizeMain">
          <div class="Icon">
            <div class="iconBox"></div>
            <span>Polygon</span>
          </div>
          <div class="Info">
            <div class="text">
              Stake MATIC tokens to support network decentralisation and watch
              your stMATIC value grow. Staking does not mean locking anymore.
            </div>
            <div class="data">
              <div class="APR">
                <div class="APRValue">4.3%</div>
                <span>APR</span>
              </div>
              <div class="separate"></div>
              <div class="staked">
                <div class="stakedValue">$104,337,536</div>
                <span>Staked</span>
              </div>
            </div>
          </div>
        </div>
        <div class="StakeNow flexCenter">Stake now</div>
      </div>
      <div class="join">
        <div class="CenterTitle">Subscribe</div>
        <div class="CenterSubTitle">
          Lido lets you stake tokens from many networks. Choose a network below
          to get started.
        </div>
        <div class="joinBanner"></div>
        <div class="contactRow">
            <div class="contactItem">
                <div class="icon">
                    <img src="../assets/Home/Telegram.png" alt="" />
                </div>
                <div class="Title">
                    <div class="mainTitle">Telegram</div>
                    <div class="subTitle">Join chat</div>
                </div>
            </div>
            <div class="separate"></div>
            <div class="contactItem">
                <div class="icon">
                    <img src="../assets/Home/Twitter.png" alt="" />
                </div>
                <div class="Title">
                    <div class="mainTitle">Twitter</div>
                    <div class="subTitle">Follow @XXXXXX</div>
                </div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bgColor {
  background: #0066ff;
}
.Home {
  background: url("../assets/Home/bg.png") 0 0 / 100% no-repeat;
  min-height: 100vh;
  padding-top: 12.7rem;
  overflow: hidden;
  .firstScreen {
    margin: 0 5rem;
    overflow: hidden;
    .title {
      font-size: 3.7rem;
      line-height: 1;
      color: #ffffff;
      @media (max-width: 425px) {
        font-size: 5rem;
      }
    }
    .subTitle {
      font-size: 1.2rem;
      line-height: 1;
      color: #ffffff;
      margin-top: 2.8rem;
      @media (max-width: 1440px) {
        font-size: 2rem;
      }
      @media (max-width: 768px) {
        font-size: 3rem;
      }
      @media (max-width: 425px) {
        margin-top: 4rem;
        font-size: 4rem;
      }
    }
    .StakeBtn {
      width: 10.7rem;
      height: 3rem;
      background: #ffffff;
      border-radius: 11px;
      margin-top: 2.5rem;
      font-weight: 500;
      color: #00a0e9;
      font-size: 18px;
    }
    .totalRow {
      display: flex;
      margin: 9rem 0 6.5rem;
      justify-content: space-around;
      .TotalItem {
        .totalLabel {
          color: #ffffff;
          font-size: 14px;
        }
        .totalValue {
          font-weight: 500;
          color: #ffffff;
          font-size: 30px;
        }
      }
    }
  }
  .CenterTitle {
    margin-top: 3.5rem;
    font-size: 1.8rem;
    line-height: 1;
    color: #ffffff;
    text-align: center;
  }
  .CenterSubTitle {
    margin-top: 12px;
    font-size: 14px;
    line-height: 1;
    text-transform: uppercase;
    color: #ffffff;
    text-align: center;
  }
  .publicize {
    width: 43.9rem;
    min-height: 433px;
    background: #ffffff;
    border-radius: 1.4rem;
    margin: 50px auto 0;
    .publicizeMain {
      display: flex;
      align-items: center;
      padding: 95px 187px 70px 145px;
      .Icon {
        margin-right: 145px;
        .iconBox {
          width: 64px;
          height: 64px;
          border-radius: 50%;
          background: #eff2f6;
        }
        span {
          font-weight: 500;
          color: #283852;
          font-size: 18px;
        }
      }
      .Info {
        .text {
          color: #808080;
          font-weight: 500;
          font-size: 14px;
          text-align: center;
        }
        .data {
          display: flex;
          justify-content: space-between;
          margin-top: 50px;
          .APR {
            display: flex;
            flex-direction: column;
            align-items: center;
            .APRValue {
              font-weight: 500;
              color: #1fb51a;
              font-size: 20px;
            }
            span {
              color: #808080;
              font-size: 14px;
            }
          }
          .separate {
            height: 50px;
            border-left: 2px solid #979797;
          }
          .staked {
            display: flex;
            flex-direction: column;
            align-items: center;
            .stakedValue {
              font-weight: 600;
              color: #2c2c2c;
              font-size: 20px;
            }
            span {
              font-weight: 400;
              color: #808080;
              font-size: 14px;
            }
          }
        }
      }
    }
    .StakeNow {
      width: 200px;
      height: 56px;
      background: #00a0e9;
      border-radius: 11px;
      margin: auto;
      font-weight: 500;
      color: #ffffff;
    }
  }
  .join {
    background: #F5FBFF;
    padding: 58px 0 130px;
    margin-top: 150px;
    .CenterTitle{
        color: #00A0E9;
    }
    .CenterSubTitle{
        color: #3E3E3E;
    }
    .joinBanner{
        width: 53.75rem;
        height: 11.2rem;
        background: url('../assets/Home/joinBanner.png') no-repeat 0 0 / 100% 100%;
        margin:55px auto 35px;
    }
    .contactRow{
        width: 53.75rem;
        display: flex;
        justify-content: space-between;
        margin: auto;
        .contactItem{
            height: 7.1rem;
            flex: 1;
            box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.15);
            border-radius: 28px;
            background: #FFFFFF;
            padding: 39px 39px 49px;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            .icon{
                width: 2.7rem;
                height: 2.7rem;
                margin-right: 30px;
            }
            .Title{
                .mainTitle{
                    font-size: 20px;
                    font-weight: 500;
                    color: #393939;
                }
                .subTitle{
                    font-weight: 400;
                    color: #858585;
                    font-size: 14px;
                }
            }
        }
        .separate{
            width: 2rem;
        }
    }
  }
}
</style>
