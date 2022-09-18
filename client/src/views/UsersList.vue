<template>
  <div>
    <b-table striped hover :items="enterpriseInfo"></b-table>
  </div>
</template>

<script>
import apiEnterprise from '@/api/enterprise';
export default {
  data() {
    return {
      enterpriseInfo: [],
    };
  },
  mounted() {
    apiEnterprise
      .getSocialUsersList()
      .then((resp) => {
        this.enterpriseInfo = resp.data.enterpriseInfoList;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
