<template>
  <div class="address">
    <button @click="jumpAdd">新增收货地址</button>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  methods: {
    ...mapActions({
      getAddressList: "address/getAddressList"
    }),
    jumpAdd() {
      wx.navigateTo({
        url: "/pages/addAddress/main"
      });
    }
  },
  onShow() {
    this.getAddressList();
  }
};
</script>
<style lang="scss" scope>
.address {
  width: 100%;
  height: 100%;
  background: #f3f7f7;
  border: 2rpx solid transparent;
  box-sizing: border-box;
  overflow-y: scroll;
  button {
    margin: 0 auto;
    border: none;
    margin-top: 120rpx;
    margin-bottom: 120rpx;
    background: #33d6c5;
    color: #fff;
    font-size: 36rpx;
    width: 702rpx;
    border-radius: 14rpx;
    height: 100rpx;
  }
}
</style>
