<template>
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12 sm6 offset-sm3>
        <v-card>
          <v-img :src="require('../assets/temperature.png')" contain height="200"></v-img>
          <v-card-title primary-title>
            <div class="ma-auto">
              <span class="black--text">Temperature: {{temperature}} °C</span>
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
      moisture: null
    }
  },
  mounted () {
    this.$ajax
      .get('/api/v1/temp/raw')
      .then((data) => {
        this.temperature = data.data.temperature
      })
      .catch((error) => {
        console.log(error)
      })
  }
}
</script>
