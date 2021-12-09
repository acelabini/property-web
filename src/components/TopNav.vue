<template>
  <div class="container-fluid">
    <div class="row top-nav">
      <div class="col-sm-4">
        <div class="row h-100">
          <div class="col-sm-5 m-auto text-end">
            <img src="@/assets/icon/list-view-icon.svg" class="pe-4">
          </div>
          <div class="col-sm m-auto text-center pt-4">
            <div class="sub-text">Own</div>
            <div class="title-text">{{ title }}</div>
            <div class="sub-text">{{ address }}</div>
            <div>
              <img src="@/assets/icon/property-bundle-icon.svg" class="pt-1">
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="row">
          <div class="col-sm m-auto text-start">
            <img src="@/assets/icon/location-icon.svg" style="padding-top: 1.5rem;padding-left: 2.5rem;">
          </div>
          <div class="col-sm m-auto text-center pt-4">
            <div class="sub-text">To</div>
            <div class="title-text">Start</div>
            <div class="sub-text">Place Deposit</div>
          </div>
          <div class="col-sm m-auto text-end">
            <img src="@/assets/icon/wishlist-icon.svg" style="padding-right: 2.5rem; padding-top: 1.5rem;">
          </div>
        </div>
      </div>
      <div class="col-sm-4">
        <div class="row h-100">
          <div class="col-sm m-auto text-center pt-2" style="padding-left: 5rem">
            <div class="sub-text">Market Value {{ value }}</div>
            <div class="title-text">{{ bid }}</div>
            <div class="sub-text">Reserve Price</div>
          </div>
          <div class="col-sm m-auto text-center" style="padding-right: 5.8rem;">
            <img src="@/assets/icon/sort-icon.svg">
          </div>
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
.top-nav {
  background: rgba(255, 255, 255, 0.85);
  padding-top: 2.5rem;
  padding-bottom: 2.7rem;
}
</style>
