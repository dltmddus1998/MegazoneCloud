<template>
  <div>
    <b-table striped hover :items="userServiceInfo"></b-table>
  </div>
</template>

<script>
import apiEnterprise from '@/api/enterprise';
export default {
  data() {
    return {
      userServiceInfo: [],
    };
  },
  mounted() {
    apiEnterprise
      .getUsersServiceList()
      .then((resp) => {
        this.userServiceInfo = resp.data.userServiceInfo;
        console.log(this.userServiceInfo);
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
