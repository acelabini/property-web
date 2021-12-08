<template>
  <div class="for-sale-sign-container">
    <div class="box">
      <div class="box-top">
        <div class="position-absolute mx-sm-2"><img src="@/assets/icon/public-auction-icon.svg"></div>
        <div class="display-inline-block"><span>Public Auction</span></div>
      </div>
      <div class="box-sign">
        <div class="py-sm-4">Market Value {{ value }}</div>
        <div>{{ title }}</div>
        <div class="sub-text pb-sm-3">{{ address }}</div>
        <div class="sub-text pb-sm-3">Reserve Bid {{ bid }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['value', 'title', 'address', 'bid']
}
</script>

<style>
.for-sale-sign-container {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  top: 25vh;
  bottom: 0;
  left: 0;
  right: 0;
}
.box {
  height: 369px;
  width: 382px;
  position:relative;
  border-left: 8px solid #052DEA;
}
.box::after {
  position:absolute;
  top: 35px;
  left: -35px;
  background:#052DEA;
  width: 382px;
  height: 8px;
  content:"";
}
.box .box-sign {
  height: auto;
  background: rgba(255, 255, 255, 0.86);
  width: calc(100% - 28px);
  border: 5px solid #052DEA;
  border-radius: 17px;
  margin-top: 15px;
  margin-left: 5px;
}
.for-sale-sign-container .box .box-top {
  width: calc(100% - 28px);
  height: 35px;
  background-color: rgba(255, 255, 255, 0.66);;
}
.for-sale-sign-container .box {
  font-size: 1.6em;
}
</style>
