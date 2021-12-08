<template>
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-2 bg-white">
        <div class="row">
          <div class="col-sm">
            <div class="label">Outbid</div>
            <div class="value outbid">{{ bidBreakdown.outbid.count }}</div>
          </div>
          <div class="col-sm">
            <div class="label">Active</div>
            <div class="value active">{{ bidBreakdown.active.count }}</div>
          </div>
          <div class="col-sm">
            <div class="label">Winning</div>
            <div class="value winning">{{ bidBreakdown.winning.count }}</div>
          </div>
        </div>
      </div>
      <div class="col-sm-8 ticker">
        <div class="row px-sm-5" v-if="properties && properties.length">
          <div class="col-sm" role="button" v-for="property in properties" :key="property.id" @click="getProperty(property.slug)">
            <div class="label">
              <span class="caret" :class="property.bidStatus.status"></span>
              <span>{{ property.title }}</span>
            </div>
            <span class="value" :class="property.bidStatus.status" v-if="property.bidStatus.amount > 0">
              {{ property.bidStatus.status === "winning" ? "+" : "-" }}
              {{ property.bidStatus.amount_formatted }}
            </span>
            <span class="sub-text px-sm-4">{{ property.latestBid.amount_formatted }}</span>
          </div>
        </div>
      </div>
      <div class="col-sm-2 bg-white">
        <div class="row">
          <div class="col-sm">
            <div class="label">Winning</div>
            <div class="value winning">{{ bidBreakdown.winning.amount_formatted }}</div>
          </div>
          <div class="col-sm">
            <div class="label">Active</div>
            <div class="value active">{{ bidBreakdown.active.amount_formatted }}</div>
          </div>
          <div class="col-sm">
            <div class="label">Outbid</div>
            <div class="value outbid">{{ bidBreakdown.outbid.amount_formatted }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default{
  data () {
    return {
      properties: [],
      bidBreakdown: {
        winning: {count: 0, amount_formatted: ''},
        active: {count: 0, amount_formatted: ''},
        outbid: {count: 0, amount_formatted: ''}
      },
      errors: []
    }
  },

  async created () {
    await axios.get(`${this.$apiUrl}/properties`, {
      params: {
        bidStatus: true,
        latestBid: true
      }
    })
      .then(response => {
        this.properties = response.data.data.properties
      })
      .catch(e => {
        this.errors.push(e)
      })

    await axios.get(`${this.$apiUrl}/user/bids/breakdown`)
      .then(response => {
        this.bidBreakdown = response.data.data
      })
      .catch(e => {
        this.errors.push(e)
      })
  },

  methods: {
    getProperty (slug) {
      if (this.$route.params.slug !== slug) {
        this.$router.push({name: 'Property', params: {slug: slug}})
      }
    }
  }
}
</script>

<style>
.ticker {
  background: rgba(255, 255, 255, 0.5);
  font-size: 1.15rem;
}
.ticker .caret {
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
  border-left-color: #767676;
  display: inline-block;
  border-width: 7px;
  border-style: solid;
}
.ticker .caret.winning {
  border-top-color: #00EB3E;
  border-right-color: #00EB3E;
  border-bottom-color: transparent;
  border-left-color: transparent;
}
.ticker .caret.outbid {
  border-top-color: transparent;
  border-right-color: #E91C1C;
  border-bottom-color: #E91C1C;
  border-left-color: transparent;
}
.label {
  margin-top: 10px;
  margin-left: 10px;
  font-weight: bold;
  line-height: 19px;
}
.value {
  margin-bottom: 10px;
  margin-left: 10px;
  font-weight: bold;
  line-height: 19px;
}
.value.outbid {
  color: #E91C1C;
}
.value.active {
  color: #8F8F8F;
}
.value.winning {
  color: #00EB3E;
}
</style>
