import Vuex from 'vuex';
import Questionnaire from './modules/Questionnaire/Questionnaire';


import createPersistedState from "vuex-persistedstate";


const dataState = createPersistedState()

export default new Vuex.Store({
    modules: {
        Questionnaire
    },
    plugins: [dataState]
  });
