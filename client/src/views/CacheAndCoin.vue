<template>
  <div>
    <b-table striped hover :items="coinAndCacheInfo"></b-table>
  </div>
</template>

<script>
import apiEnterprise from '@/api/enterprise';
export default {
  data() {
    return {
      coinAndCacheInfo: [],
    };
  },
  mounted() {
    apiEnterprise
      .getCacheAndCoinList()
      .then((resp) => {
        this.coinAndCacheInfo = resp.data.coinAndCacheInfo;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
