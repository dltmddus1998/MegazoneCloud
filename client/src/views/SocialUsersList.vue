<template>
  <div>
    <b-table striped hover :items="userInfo" :fields="fields"></b-table>
  </div>
</template>

<script>
import apiUser from '@/api/user';
export default {
  data() {
    return {
      fields: ['email', 'name', 'photo', 'joinPath', 'joinDate', 'quitDate'],
      userInfo: [],
    };
  },
  mounted() {
    apiUser
      .getSocialUsersList()
      .then((resp) => {
        this.userInfo = resp.data.userInfo;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
