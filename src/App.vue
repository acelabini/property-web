<template>
  <div id="app" v-bind:style="{ backgroundImage: 'url(' + require('@/assets/background/'+property.image) + ')' }">
    <top-nav
      :value="property.market_value"
      :title="property.title"
      :address="property.address_line2"
      :bid="property.latestBid.amount_formatted"
    ></top-nav>
    <ticker-nav></ticker-nav>
    <for-sale-sign
      :value="property.market_value"
      :title="property.title"
      :address="property.address_line2"
      :bid="property.latestBid.amount_formatted"
    ></for-sale-sign>
  </div>
</template>

<script>
import TopNav from './components/TopNav'
import NavTicker from './components/TickerNav'
import ForSaleSign from './components/ForSaleSign'
import axios from 'axios'

export default {
  components: {
    'top-nav': TopNav,
    'ticker-nav': NavTicker,
    'for-sale-sign': ForSaleSign
  },
  data () {
    return {
      property: {
        latestBid: {
          amount_formatted: 0
        },
        image: '14-flood-st.svg'
      },
      errors: []
    }
  },

  created () {
    this.getProperty()
  },

  watch: {
    $route (to, from) {
      this.getProperty()
    }
  },

  methods: {
    getProperty () {
      if (this.$route.params.slug !== undefined) {
        axios.get(`${this.$apiUrl}/properties/${this.$route.params.slug}`, {
          params: {
            bidStatus: true,
            latestBid: true
          }
        })
          .then(response => {
            this.property = response.data.data
          })
          .catch(e => {
            this.errors.push(e)
          })
      }
    }
  }
}
</script>

<style>
@import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
@import "https://fonts.googleapis.com/css?family=Poppins";

#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-image: url('~@/assets/background/14-flood-st.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 100vh;
  color: #171518;
}

#app .sub-text {
  font-style: normal;
  font-weight: 200;
  font-size: 1.2rem;
  color: #484848;
  letter-spacing: 2px;
  line-height: 27px;
}

#app .title-text {
  font-size: 3rem;
  letter-spacing: 2px;
  line-height: 69px;
}

* {
  box-sizing:border-box;
  margin:0;
  font-family: Poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
