<script setup>
import { onMounted , watch, computed , ref} from 'vue'
import { useStore } from 'vuex'
import Axios from './axios'
import {init,changeNetwork} from './web3'
import Layout from './Layout/Layout.vue'
import {chainConfig} from './config'
const store = useStore()
const address = computed(() => {
  return store.state.address;
});
watch(
  address,
  (address) => {
    if (address) {
      Axios.post('/uUser/auth',{
        userAddress:address,
        refereeAddress:"",
        chainType:1
      }).then(res=>{
        if(res.data.code === 200){
          store.commit('SETTOKEN',res.data.data)
        }
        console.log(res,"用户登录")
      })
    }
  },
  {
    immediate: true,
  }
);
onMounted(async ()=>{
  document.body.style.setProperty('--el-border-radius-small', '20px')
    if(window.ethereum){
      let chainId = await window.ethereum.request({ method: "eth_chainId" });
      if(chainId !== chainConfig.chainId){
        changeNetwork(()=>{
          init(address=>{
            if(address)
            store.commit('SETADDRESS',address)
            console.log(address)
          })
        })
      }else{
        //用户账号初始化合约
        init(address=>{
          if(address)
          store.commit('SETADDRESS',address)
          console.log(address)
        })
      }
      window.ethereum.on('connect', connectInfo=>{
        console.log("链接",connectInfo)
      });
      //链改变事件
      window.ethereum.on('chainChanged', info=>{
        // this.chainId = info
      });
      window.ethereum.on('disconnect', async res=>{
        console.log("链接已断开",res)
        let chainId = await window.ethereum.request({ method: "eth_chainId" });
        if(chainId !== chainConfig.chainId){
          store.commit('SETADDRESS','')
        }
      });
      window.ethereum.on('accountsChanged', accounts=>{
        if(accounts[0]){
            store.commit('SETADDRESS',accounts[0])
        }else{
            store.commit('SETADDRESS','')
        }
        console.log("切换账号",accounts)
      });
    }else{
      console.log("未安装钱包")
    }
})

</script>

<template>
    <Layout></Layout>

</template>

<style lang="scss" scoped></style>
