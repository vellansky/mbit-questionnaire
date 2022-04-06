<template>
  <section class="px-36 my-10">
    <div class="space-y-10 text-gray-600" :class="{ 'opacity-70': status }">
    <div class="w-full border-b border-b-gray-400 font-medium pb-1">
      <h3>{{Questionnaire.title}}</h3>
    </div>
    <div class="flex flex-wrap font-medium space-x-6">
      <div class="w-72 text-right">
        <h4>{{Questionnaire.two.question}}</h4>
      </div>
      <div class="space-x-2">
        <input @click="Questionnaire.two.value = true" :disabled="status ? true : false" type="radio" id="enter" value="Поступить" v-model="Questionnaire.two.answer">
        <label class="font-normal" for="enter">Поступить</label>
      </div>
      <div class="space-x-2">
        <input @click="Questionnaire.two.value = false" :disabled="status ? true : false" type="radio" id="trancfer" value="Перевестись" v-model="Questionnaire.two.answer">
        <label class="font-normal" for="trancfer">Перевестись</label>
      </div>
      </div>

<div class="space-y-10" v-if="Questionnaire.two.value == false">
    <div class="flex flex-wrap font-medium space-x-6">
      <div class="w-72 text-right">
        <h4>{{Questionnaire.three.question}}</h4>
      </div>
      <div class="space-x-2">
      <input @click="Questionnaire.three.value = true" :disabled="status ? true : false" type="radio" id="threeAnswerYes" value="Да" v-model="Questionnaire.three.answer">
      <label class="font-normal" for="threeAnswerYes">Да</label>
      </div>
      <div class="space-x-2">
      <input @click="Questionnaire.three.value = false, status = true" :disabled="status ? true : false" type="radio" id="threeAnswerNo" value="Нет" v-model="Questionnaire.three.answer">
      <label class="font-normal" for="threeAnswerNo">Нет</label>
      </div>
    </div>

    <div v-if="Questionnaire.three.value" class="flex flex-wrap font-medium space-x-6">
      <div class="w-72 text-right">
        <h4>{{Questionnaire.four.question}}</h4>
      </div>
      <div class="space-x-2">
      <input @click="Questionnaire.four.value = true" :disabled="status ? true : false" type="radio" id="fourAnswerYes" value="Да" v-model="Questionnaire.four.answer">
      <label class="font-normal" for="fourAnswerYes">Да</label>
      </div>
      <div class="space-x-2">
      <input @click="Questionnaire.four.value = false, status = true" :disabled="status ? true : false" type="radio" id="fourAnswerNo" value="Нет" v-model="Questionnaire.four.answer">
      <label class="font-normal" for="fourAnswerNo">Нет</label>
      </div>
    </div>
</div>
    <div v-if="Questionnaire.two.value || Questionnaire.four.value" class="space-y-10">
      <div class="flex flex-nowrap space-x-6">
        <div class="w-72 text-right font-medium ">
          <h4>{{Questionnaire.five.question}}</h4>
        </div>
        <div >
          <input :disabled="status ? true : false"  class="w-72 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 py-1 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" v-model="Questionnaire.five.answer" placeholder="Фамилия">
        </div>
      </div>

      <div class="flex flex-nowrap space-x-6">
        <div class="w-72 text-right font-medium ">
          <h4>{{Questionnaire.six.question}}</h4>
        </div>
        <div >
          <input :disabled="status ? true : false" class="w-72 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 py-1 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" v-model="Questionnaire.six.answer" placeholder="Имя">
        </div>
      </div>

      <div class="flex flex-nowrap space-x-6 font-medium">
        <div class="w-72 text-right">
          <h4>{{Questionnaire.seven.question}}</h4>
        </div>
        <div>
          <input :disabled="(status, Questionnaire.seven.thirdТame) ? true : false" class="disabled:opacity-70 w-72 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 py-1 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" v-model="Questionnaire.seven.answer" placeholder="Отчество">
        <div class="flex flex-nowrap items-center space-x-2 mt-2">
          <input :disabled="status ? true : false" type="checkbox" id="checkbox" v-model="Questionnaire.seven.thirdТame">
          <p class="text-sm">Нет отчества</p>
        </div>
        </div>
      </div>

      <div class="flex flex-wrap font-medium space-x-6">
        <div class="w-72 text-right">
          <h4>{{Questionnaire.eight.question}}</h4>
        </div>
        <div class="space-x-2">
        <input :disabled="status ? true : false" type="radio" id="eightAnswerMan" value="Мужчина" v-model="Questionnaire.eight.answer">
        <label class="font-normal" for="eightAnswerYes">Мужчина</label>
        </div>
        <div class="space-x-2">
        <input :disabled="status ? true : false" type="radio" id="eightAnswerWoman" value="Женщина" v-model="Questionnaire.eight.answer">
        <label class="font-normal" for="eightAnswerNo">Женщина</label>
        </div>
      </div>

      <div class="flex flex-wrap font-medium space-x-6">
        <div class="w-72 text-right">
          <h4>{{Questionnaire.nine.question}}</h4>
        </div>
        <div class="flex flex-nowrap space-x-2">
          <div>
          <input :disabled="status ? true : false" 
              class="w-16 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 py-1 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              v-model="Questionnaire.nine.day" placeholder="День">
        </div>
        <div>
          <input :disabled="status ? true : false" 
              class="w-20 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 py-1 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              v-model="Questionnaire.nine.month" placeholder="Месяц">
        </div>
        <div>
          <input :disabled="status ? true : false" 
              class="w-20 placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 py-1 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
              v-model="Questionnaire.nine.year" placeholder="Год">
        </div>
        </div>
      </div>

      <div class="flex flex-wrap font-medium space-x-6">
        <div class="w-72 text-right">
          <h4>{{Questionnaire.ten.question}}</h4>
        </div>
        <div>
          <select :disabled="status ? true : false" v-model="Questionnaire.ten.answer" class="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 py-1 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm">
            <option disabled value="">Укажите ваше гражданство</option>
            <option>РФ</option>
            <option>Любое не РФ</option>
          </select>
        </div>
      </div>

      <div class="flex flex-wrap font-medium space-x-6">
        <div class="w-72 text-right">
          <h4>{{Questionnaire.eleven.question}}</h4>
        </div>
        <div class="space-x-2">
        <input @click="Questionnaire.eleven.value = true" :disabled="status ? true : false" type="radio" id="elevenAnswerYes" value="Да" v-model="Questionnaire.eleven.answer">
        <label class="font-normal" for="elevenAnswerYes">Да</label>
        </div>
        <div class="space-x-2">
        <input @click="Questionnaire.eleven.value = false" :disabled="status ? true : false" type="radio" id="elevenAnswerNo" value="Нет" v-model="Questionnaire.eleven.answer">
        <label class="font-normal" for="elevenAnswerNo">Нет</label>
        </div>
      </div>

<div v-if="Questionnaire.ten.answer == 'Любое не РФ' && Questionnaire.eleven.value" class="flex flex-wrap font-medium space-x-6">
        <div class="w-72 text-right">
          <h4>{{Questionnaire.elevenPointOne.question}}</h4>
        </div>
        <div class="space-x-2">
        <input @click="Questionnaire.elevenPointOne.value = true" :disabled="status ? true : false" type="radio" id="elevenPointOneAnswerYes" value="Да" v-model="Questionnaire.elevenPointOne.answer">
        <label class="font-normal" for="elevenPointOneAnswerYes">Да</label>
        </div>
        <div class="space-x-2">
        <input @click="Questionnaire.elevenPointOne.value = false" :disabled="status ? true : false" type="radio" id="elevenPointOneAnswerNo" value="Нет" v-model="Questionnaire.elevenPointOne.answer">
        <label class="font-normal" for="elevenPointOneAnswerNo">Нет</label>
        </div>
      </div>
<div v-if="(Questionnaire.elevenPointOne.value && Questionnaire.eleven.value) || (Questionnaire.ten.answer == 'РФ' && Questionnaire.eleven.value)" class="space-y-10">
      <div class="flex flex-wrap font-medium space-x-6">
        <div class="w-72 text-right">
          <h4>{{Questionnaire.elevenPointTwo.question}}</h4>
        </div>
        <div>
        <select :disabled="status ? true : false" 
            class="placeholder:italic placeholder:text-slate-400 block bg-white border border-slate-300 py-1 pl-2 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm"
            v-model="Questionnaire.elevenPointTwo.answer">
          <option v-for="(document, index) in Questionnaire.elevenPointTwo.document" :key="index">{{document.name}}</option>
        </select>
        </div>
      </div>

      <div v-if="Questionnaire.elevenPointTwo.answer" class="flex flex-wrap font-medium space-x-6">
        <div class="w-72 text-right">
          <h4>{{Questionnaire.elevenPointTwo.answer}}</h4>
        </div>
          <input :disabled="status ? true : false" class="hidden" type="file" id="nameChangeCertificateUpload" ref="nameChangeCertificateUpload" v-on:change="nameChangeCertificateUpload()" />
          <div>
            <button @click="clickNameChangeCertificateUpload()" class="px-2 py-1 text-blue-700 underline text-sm">Загрузить файл</button>
          </div>
          <p>...</p>
      </div>
</div>
      <div v-if="Questionnaire.ten.answer == 'Любое не РФ' && Questionnaire.eleven.value && Questionnaire.elevenPointOne.value == false" class="flex flex-wrap font-medium space-x-6">
        <div class="w-72 text-right">
          <h4>{{Questionnaire.elevenPointFour.question}}</h4>
        </div>
          <input :disabled="status ? true : false" class="hidden" type="file" id="translationNameChangeCertificateUpload" ref="translationNameChangeCertificateUpload" v-on:change="translationNameChangeCertificateUpload()" />
          <div>
            <button @click="clicktranslationNameChangeCertificateUpload()" class="px-2 py-1 text-blue-700 underline text-sm">Загрузить файл</button>
          </div>
          <p>...</p>
      </div>
      </div>
    </div>
    <div v-if="Questionnaire.ten.answer == 'Любое не РФ'" class="fixed bottom-10 right-5 w-36 bg-gray-50 rounded-xl p-3 text-sm">
      <p>Вам доступно поступление на основании внутренних вступительных испытаний университета. Результаты ЕГЭ не требуются</p>
    </div>
    <div v-if="status" class="fixed inset-x-0 bottom-0 w-full bg-gray-50 rounded-xl p-20">
        <p class="text-center">Продолжение анкеты невозможно, пожалуйста, свяжитесь с вашим менеджером</p>
    </div>
  </section>
</template>
<script>
import {mapGetters} from "vuex";
export default {
data() {
    return {
      Questionnaire:{
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
            },
      }
    };
  },
  methods:{
    clickNameChangeCertificateUpload() {
      document.getElementById("nameChangeCertificateUpload").click();
    },
    clicktranslationNameChangeCertificateUpload() {
      document.getElementById("translationNameChangeCertificateUpload").click();
    }
  },
  computed: {
    infoQuestionnaire(){
      return this.$store.state.Questionnaire
    },
  status: {
    get () {
      return this.$store.state.Questionnaire.status
    },
    set (value) {
      this.$store.commit('updateStatus', value)
    }
  },

    
    }
}
</script>
