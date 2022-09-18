<template>
  <div>
    <b-table striped hover :items="serviceInfo"></b-table>
  </div>
</template>

<script>
import apiEnterprise from '@/api/enterprise';
export default {
  data() {
    return {
      serviceInfo: [],
    };
  },
  mounted() {
    apiEnterprise
      .getServiceList()
      .then((resp) => {
        console.log(resp.data);
        this.serviceInfo = resp.data.serviceInfo;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
