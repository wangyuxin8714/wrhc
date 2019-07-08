<template>
  <scroll-view class="ul">
    <div>
      <p class="active">今日推荐</p>
      <p>今日推荐</p>
      <p>今日推荐</p>
      <p>今日推荐</p>
      <p>今日推荐</p>
      <p>今日推荐</p>
      <p>今日推荐</p>
      <p>今日推荐</p>
      <p>今日推荐</p>
      <p>今日推荐</p>
      <p>今日推荐</p>
    </div>
  </scroll-view>
</template>
<script>
export default {
  props: {},
  components: {},
  data() {
    return {};
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {}
};
</script>
<style scoped lang="scss">
.ul {
  width: 100%;
  display: flex;
  white-space: nowrap;
  height: 50px;
  background: #fff;
  div {
    overflow-x: scroll;
  }
  p {
    font-size: 16px;
    display: inline-block;
    height: 50px;
    text-align: center;
    box-sizing: border-box;
    margin: 0 10px;
    line-height: 50px;
    &.active {
      border-bottom: 6rpx solid #56d2bf;
      font-weight: 500;
      color: #56d2bf;
    }
  }
}
</style>