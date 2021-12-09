<template>
  <div class="row for-sale">
    <div class="col-sm-5 neighbor">
      Neighbor?
    </div>
    <div class="col-sm-7 sign-container">
      <div class="box">
        <div class="box-top">
          <div class="position-absolute mx-sm-2"><img src="@/assets/icon/public-auction-icon.svg"></div>
          <div class="display-inline-block"><span>Public Auction</span></div>
        </div>
        <div class="box-sign">
          <div class="py-sm-3">Market Value {{ value }}</div>
          <div class="pt-9">{{ title }}</div>
          <div class="sub-text pb-sm-3">{{ address }}</div>
          <div class="sub-text pb-sm-4" style="">Reserve Bid {{ bid }}</div>
        </div>
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
.for-sale .sign-container {
  text-align: center;
  display: flex;
  position: relative;
  top: 23.8vh;
  bottom: 0;
  left: 1.7rem;
  right: 0;
}
.for-sale .neighbor {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
  top: 23.7vh;
  bottom: 0;
  left: 10px;
  right: 0;
  font-size: 18px;
  padding-right: 5rem;
  letter-spacing: 2px;
  color: #6AC1FF;
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
  width: calc(100% - 35px);
  border: 5px solid #052DEA;
  border-radius: 17px;
  margin-top: 15px;
  margin-left: 10px;
}
#app .box .box-sign .sub-text {
  font-size: 1rem;
  line-height: 15px;
}
.for-sale .sign-container .box .box-top {
  width: calc(100% - 28px);
  height: 35px;
  background-color: rgba(255, 255, 255, 0.66);;
}
.for-sale .sign-container .box {
  font-size: 1.6em;
}
</style>
