<template>
  <div>
    <b-card no-body>
      <b-tabs card>
        <b-tab title="Social Login" active>
          <b-card-text>
            <b-table striped hover :items="userAccessRecord"></b-table>
          </b-card-text>
        </b-tab>
        <b-tab title="Concole">
          <b-card-text>
            <div>
              <b-table striped hover :items="enterpriseAccessRecord"></b-table>
            </div>
          </b-card-text>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import apiEnterprise from '@/api/enterprise';
export default {
  data() {
    return {
      userAccessRecord: [],
      enterpriseAccessRecord: [],
    };
  },
  mounted() {
    apiEnterprise
      .getUsersAccessHistory()
      .then((resp) => {
        this.userAccessRecord = resp.data.userAccessRecord;
      })
      .catch((err) => {
        console.log(err);
      });

    apiEnterprise
      .getEnterpriseAccessHistory()
      .then((resp) => {
        this.enterpriseAccessRecord = resp.data.enterpriseAccessRecord;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
