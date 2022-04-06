const state = {
        status : false,
        title : 'Информация о вас',
        two : {
          question: 'Вы хотите поступить в наш университет или перевестись из другого вуза?',
          value: null,
          answer: null
        },
        three : { 
          question : 'Аккредитован ли ваш ВУЗ / направление?',
          value: null,
          answer: null
        },
        four : { 
          question : 'Являетесь ли вы в настоящий момент официально числящимся студентом?',
          value: null,
          answer: null
          },
        five : { 
          question : 'Фамилия',
          value: null,
          answer: null
          },
        six : { 
          question : 'Имя',
          value: null,
          answer: null
          },
        seven : { 
          question : 'Отчество',
          value: null,
          answer: null,
          thirdТame: false
          },
        sevenPointOne : { 
          question : 'Нет отчества',
          value: null,
          answer: null
          },
        eight : { 
          question : 'Пол',
          value: null,
          answer: null
          },
        nine : { 
          question : 'Дата рождения',
          value: null,
          day: null,
          month: null,
          year: null,
          answer: null
          },
        ten : { 
          question : 'Укажите ваше гражданство',
          value: null,
          answer: null
          },
        eleven : { 
          question : 'Были ли изменения в ФИО?',
          value: null,
          answer: null
          },
        elevenPointOne : { 
          question : 'Документ(ы), подтверждающий(ие) изменения в ФИО продублирован(ы) на русском языке?',
          value: null,
          answer: null
          },
        elevenPointTwo : { 
          question : 'Свидетельства / справки о перемене ФИО',
          value: null,
          document: [
            {name: 'Свидетельство о заключении брака (либо справка о браке из ЗАГСа)'},
            {name: 'Свидетельство о растожении брака'},
            {name: 'Свидетельство о перемене имени'}
          ],
          answer: null
          },
        elevenPointThree : { 
          question : 'Свидетельства / справки о перемене ФИО',
          value: null,
          answer: null,
          file: null,
          },
        elevenPointFour : { 
          question : 'Перевод документа, подтверждающего измения в ФИО',
          value: null,
          answer: null
          }
    
  }

  const mutations = {
    updateStatus (state, status) {
        state.status = status
      },
      updateQ2(state, value, answer){
          console.log(value)
        state.two.value = value,
        state.two.answer = answer
    }
  }

  const getters = {
    getdata(state){
        return state.Questionnaire
    }
  }


  const actions = {
}

export default {
    state,
    mutations,
    getters,
    actions
  }
