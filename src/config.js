import Token from './ABI/ERC20Token.json';
import Dao from './ABI/Dao.json';
export const contractAddress = {
    //正式
    "USDT": "0x62731B555E6233090533fD74ca28F3579C71320e",
    "Dao": "0xD616BBA7e550809dC213Aba80A1c5485D79441eA",
}
export const ABI  = {
    "USDT": Token,
    "Dao": Dao,
}
export const TokenConfig = {
    USDT:{
        decimals:6
    }
}