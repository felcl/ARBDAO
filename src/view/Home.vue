<script setup>
import Axios from '../axios'
import {onMounted,ref} from 'vue'
const Info = ref(null)
onMounted(()=>{
  Axios.get('/home/data').then(res=>{
    if(res.data.code === 200){
      Info.value = res.data.data
    }
    console.log(res,"首页数据")
  })
})
</script>

<template>
  <div class="bgColor">
    <div class="Home">
      <div class="firstScreen">
        <div class="title">Arbitrum Foundation For Staked Tokens</div>
        <div class="subTitle">
          Simplified and secure participation in staking
        </div>
        <span class="StakeBtn flexCenter">Stake now</span>
        <div class="totalRow">
          <div class="TotalItem">
            <div class="totalLabel">Total staked tokens</div>
            <div class="totalValue" v-if="Info">${{ Info.totalPledgeAmount }}</div>
          </div>
          <div class="TotalItem">
            <div class="totalLabel">Total rewards paid</div>
            <div class="totalValue" v-if="Info">${{ Info.totalReward }}</div>
          </div>
          <!-- <div class="TotalItem dn425">
            <div class="totalLabel">Stakers</div>
            <div class="totalValue" v-if="Info">{{ Info.userCount }}</div>
          </div> -->
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
        ArbDao lets you stake tokens from many networks. Choose a network below to get started.
      </div>
      <div class="publicize">
        <div class="publicizeMain">
          <div class="Icon">
            <!-- <div class="iconBox">
              
            </div> -->
            <img src="../assets/Home/MenuIcon.png" alt="">
            <span>Arbitrum</span>
          </div>
          <div class="Info">
            <div class="text">
              Stake Arbitrum tokens to support network decentralisation and watch your Arbitrum value grow.
            </div>
            <div class="data">
              <div class="APR">
                <div class="APRValue" v-if="Info">{{Info.arbApr}}%</div>
                <span>APR</span>
              </div>
              <div class="separate"></div>
              <div class="staked">
                <div class="stakedValue" v-if="Info">${{Info.arbStaked}}</div>
                <span>Staked</span>
              </div>
            </div>
          </div>
        </div>
        <div class="StakeNow flexCenter">Stake now</div>
      </div>
      <div class="CenterTitle">SVIP</div>
      <div class="CenterSubTitle">
        ArbDao lets you stake tokens from many networks. Choose a network below to get started.
      </div>
      <div class="publicize">
        <div class="publicizeMain">
          <div class="Icon">
            <img src="../assets/Home/MenuIcon.png" alt="">
            <span>Arbitrum</span>
          </div>
          <div class="Info">
            <div class="text">
              Stake Arbitrum tokens to support network decentralisation and watch your Arbitrum value grow.
            </div>
            <div class="data">
              <div class="APR">
                <div class="APRValue" v-if="Info">{{Info.svipApr}}%</div>
                <span>APR</span>
              </div>
              <div class="separate"></div>
              <div class="staked">
                <div class="stakedValue" v-if="Info">${{Info.svipStaked}}</div>
                <span>Staked</span>
              </div>
            </div>
          </div>
        </div>
        <div class="StakeNow flexCenter">Stake now</div>
      </div>
      <div class="join">
        <div class="CenterTitle">Join our community</div>
        <div class="CenterSubTitle">
          Learn more about ArbDao, chat with us and have your say in the future of the ArbDao ecosystem
        </div>
        <div class="joinBanner">
          <img src="../assets/Home/book.png" alt="">
            <div>
              <div class="bannerMain">ABR in Discord</div>
              <div class="bannerSub">Join the community and ask questions</div>
            </div>
        </div>
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
  @media (max-width:500px) {
    padding-top: 25rem;
  }
  .firstScreen {
    margin: 0 auto;
    overflow: hidden;
    max-width: 1400px;
    .title {
      font-size: 3.7rem;
      line-height: 1;
      color: #ffffff;
      font-weight: bold;
      font-family: bitte;
      @media (max-width: 1400px) {
        text-align: center;
      }
      @media (max-width: 500px) {
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
      @media (max-width: 1400px) {
        text-align: center;
      }
      @media (max-width: 768px) {
        font-size: 3rem;
      }
      @media (max-width: 500px) {
        margin-top: 8rem;
        text-align: center;
        // font-size: 4rem;
      }
    }
    .StakeBtn {
      width: max-content;
      padding: 0.9rem 3.1rem;
      background: #ffffff;
      border-radius: 0.5rem;
      margin-top: 2.5rem;
      font-weight: 500;
      color: #00a0e9;
      font-size: 18px;
      @media (max-width: 1400px) {
        margin:2.5rem auto 0;
      }
      @media (max-width: 500px) {
        margin: 8rem 20px 0;
        width: auto;
        height: 38px;
      }
    }
    .totalRow {
      display: flex;
      margin: 9rem 0 6.5rem;
      justify-content: space-around;
      @media (max-width:500px) {
        // flex-direction:column;
      }
      .dn425{
        @media (max-width:500px) {
          display: none;
        }
      }
      .TotalItem {
        text-align: center;
        @media (max-width:500px) {
          margin-bottom: 16px;
        }
        .totalLabel {
          color: #ffffff;
          font-size: 14px;
          @media (max-width:560px) {
            font-size: 12px;
          }
        }
        .totalValue {
          font-weight: 500;
          color: #ffffff;
          font-size: 30px;
          @media (max-width:768px) {
            font-size: 22px;
          }
          @media (max-width:560px) {
            font-size: 16px;
          }
        }
      }
    }
  }
  .CenterTitle {
    margin-top: 3.5rem;
    font-size: 1.8rem;
    line-height: 1;
    font-family: bitte;
    color: #ffffff;
    text-align: center;
    @media (max-width:1024px) {
      font-size: 2.8rem;
    }
    @media (max-width:768px) {
      font-size: 3.5rem;
    }
    @media (max-width:500px) {
      font-size: 5rem;
    }
    @media (max-width:375px) {
      font-size: 6rem;
    }
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
    // min-height: 21.65rem;
    background: #FFFFFF;
    border-radius: 1.4rem;
    margin: 50px auto 0;
    overflow: hidden;
    @media (max-width:1136px) {
      width: 50rem;
    }
    @media (max-width:868px) {
      width: 60rem;
    }
    @media (max-width:588px) {
      width: 70rem;
    }
    @media (max-width:488px) {
      padding-bottom: 20px;
      width: 75rem;
    }
    @media (max-width:388px) {
      width: 85rem;
    }
    .publicizeMain {
      display: flex;
      align-items: center;
      padding: 4.75rem 7rem 3.5rem;
      @media (max-width:500px) {
        flex-direction: column;
        padding: 4.75rem 6rem 3.5rem;
      }
      .Icon {
        margin-right: 7.25rem;
        text-align: center;
        @media (max-width:500px) {
            margin-right: 0;
            text-align: center;
        }
        .iconBox {
          text-align: center;
          width: 64px;
          margin-bottom: 18px;
          img{
            width: 100%;
          }
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
          margin-top: 2.5rem;
          @media (max-width:500px) {
            justify-content: center;
          }
          .APR {
            display: flex;
            flex-direction: column;
            align-items: center;
            @media (max-width:500px) {
              flex: 1;
            }
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
            border-left: 1px solid #979797;
          }
          .staked {
            display: flex;
            flex-direction: column;
            align-items: center;
            @media (max-width:500px) {
              flex: 1;
            }
            .stakedValue {
              font-weight: 600;
              color: #2C2C2C;
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
      // width: 200px;
      // height: 56px;
      width: max-content;
      padding: 0.75rem 2.75rem;
      background: #00A0E9;
      border-radius: 0.5rem;
      margin:0 auto 2.7rem;
      font-weight: 500;
      color: #ffffff;
      @media (max-width:500px) {
        font-size: 18px;
        width: auto;
        margin: 0 6rem;
        height: 38px;
      }
    }
  }
  .join {
    background: #F5FBFF;
    padding: 58px 0 130px;
    margin-top: 2.5rem;
    .CenterTitle{
        color: #00A0E9;
    }
    .CenterSubTitle{
        color: #3E3E3E;
        max-width: 53.75rem;
        margin:12px auto 0;
    }
    .joinBanner{
        width: 53.75rem;
        height: 11.2rem;
        background: url('../assets/Home/joinBanner.png') no-repeat 0 0 / 100% 100%;
        margin:55px auto 35px;
        display: flex;
        align-items: center;
        padding-left: 7rem;
        box-sizing: border-box;
        color: #fff;
        @media (max-width:768px) {
          width: 65rem;
          height: 14rem;
        }
        @media (max-width:500px) {
          width: 75rem;
          height: 20rem;
        }
        @media (max-width:375px) {
          width: 80rem;
          height: 23rem;
        }
        img{
          margin-right: 20px;
          @media (max-width:768px) {
            width: 38px;
          }
        }
        .bannerMain{
          font-size: 36px;
          font-family: bitte;
          @media (max-width:1024px) {
            font-size: 26px;
          }
          @media (max-width:768px) {
            font-size: 18px;
          }
        }
        .bannerSub{
          font-size: 14px;
          @media (max-width:768px) {
            font-size: 12px;
          }
        }
    }
    .contactRow{
        width: 53.75rem;
        display: flex;
        justify-content: space-between;
        margin: auto;
        @media (max-width:768px) {
          width: 65rem;
          flex-direction: column;
        }
        @media (max-width:500px) {
          width: 75rem;
        }
        @media (max-width:375px) {
          width: 80rem;
        }
        .contactItem{
            height: 8rem;
            flex: 1;
            box-shadow: 0px 4px 10px 0px rgba(0,0,0,0.15);
            border-radius: 1.4rem;
            background: #FFFFFF;
            padding: 2.5rem 2rem 2.5rem;
            box-sizing: border-box;
            display: flex;
            align-items: center;
            @media (max-width:768px) {
                margin-bottom: 20px;
                padding: 3rem 2rem 3rem;
            }
            .icon{
              width: 2.7rem;
              height: 2.7rem;
              @media (max-width:768px) {
                width: 27px;
                height: 27px;
              }
              img{
                  width: 100%;
                }
                margin-right: 1.5rem;
            }
            .Title{
                .mainTitle{
                    font-size: 20px;
                    font-weight: 500;
                    color: #393939;
                    @media (max-width:500px) {
                      font-size: 16px;
                    }
                }
                .subTitle{
                    font-weight: 400;
                    color: #858585;
                    font-size: 14px;
                    @media (max-width:500px) {
                      font-size: 12px;
                    }
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
