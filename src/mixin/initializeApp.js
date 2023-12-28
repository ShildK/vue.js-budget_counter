import { mapActions, mapGetters } from "vuex";

export default {
   computed: {
      ...mapGetters({}),
   },
   methods: {
      ...mapActions({
         GET_RECORDS: "Records/GET_RECORDS_FROM_LS",
         GET_CATEGORIES: "Categories/GET_CATEGORIES_FROM_LS",
         GET_BALANCE: "Balance/GET_BALANSE_FROM_LS",
         SET_MAX_VALUE: "Records/SET_MAX_VALUE",
      }),
      initApp() {
         this.GET_CATEGORIES();
         this.GET_RECORDS();
         this.GET_BALANCE();
         this.SET_MAX_VALUE()
      },
   },
};
