<script setup>
import { onMounted , watch, computed , ref} from 'vue'
import { useStore } from 'vuex'
import Axios from './axios'
import {init} from './web3'
import Layout from './Layout/Layout.vue'
const store = useStore()
const address = computed(() => {
  return store.state.address;
});
const centerDialogVisible = ref(false)
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
onMounted(()=>{
    if(window.ethereum){
      //用户账号初始化合约
      init(address=>{
        if(address)
        store.commit('SETADDRESS',address)
        console.log(address)
      })
      window.ethereum.on('connect', connectInfo=>{
        console.log("链接",connectInfo)
      });
      //链改变事件
      window.ethereum.on('chainChanged', info=>{
        // this.chainId = info
      });
      window.ethereum.on('disconnect', res=>{
        console.log("链接已断开",res)
        store.commit('SETADDRESS','')
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
    <el-dialog v-model="centerDialogVisible" title="Invitation binding" width="30%" center :close-on-click-modal="false" :close-on-press-escape="false" :show-close="false">
    <input class="InvitationInput" placeholder="Please enter the bound link" v-model="InvitationLink" type="text">
    <div class="enter">Confirm</div>
  </el-dialog>
</template>

<style lang="scss" scoped>
.InvitationInput{
width: 100%;
height: 46px;
background: #F5FBFF;
border-radius: 14px;
border: none;
outline: none;
padding: 0 25px;
box-sizing: border-box;
}
.enter{
  width: 100%;
  height: 46px;
  background: linear-gradient(360deg, #299FEF 0%, #69C0FA 100%);
  border-radius: 12px;
  margin-top: 30px;
  color: #FFFFFF;
  font-size: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
