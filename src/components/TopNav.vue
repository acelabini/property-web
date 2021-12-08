<template>
  <div class="container-fluid">
    <div class="row top-nav">
      <div class="col-sm m-auto text-center">
        <img src="@/assets/icon/list-view-icon.svg">
      </div>
      <div class="col-sm m-auto text-center">
        <div class="sub-text">Own</div>
        <div class="title-text">{{ title }}</div>
        <div class="sub-text">{{ address }}</div>
        <div>
          <img src="@/assets/icon/property-bundle-icon.svg">
        </div>
      </div>
      <div class="col-sm m-auto text-center">
        <img src="@/assets/icon/location-icon.svg">
      </div>
      <div class="col-sm m-auto text-center">
        <div class="sub-text">To</div>
        <div class="title-text">Start</div>
        <div class="sub-text">Place Deposit</div>
      </div>
      <div class="col-sm m-auto text-center">
        <img src="@/assets/icon/wishlist-icon.svg">
      </div>
      <div class="col-sm m-auto text-center">
        <div class="sub-text">Market {{ value }}</div>
        <div class="title-text">{{ bid }}</div>
        <div class="sub-text">Reserve Price</div>
      </div>
      <div class="col-sm m-auto text-center">
        <img src="@/assets/icon/sort-icon.svg">
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
.top-nav {
  background: rgba(255, 255, 255, 0.85);
}
</style>
