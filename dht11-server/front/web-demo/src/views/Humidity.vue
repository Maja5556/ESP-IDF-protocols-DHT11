<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img :src="require('../assets/humidity.png')" contain height="200"></v-img>
          <v-card-title primary-title>
            <div class="ma-auto">
              <span class="black--text">Humidity: {{humidity}} %</span>
            </div>
          </v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      temperature: null,
      humidity: null
    }
  },
  mounted () {
    this.$ajax
      .get('/api/v1/humidity/raw')
      .then((data) => {
        this.humidity = data.data.humidity
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
