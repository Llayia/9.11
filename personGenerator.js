const personGenerator = { 
    surnameJson: `{   
        "count": 15,
        "list": {
            "id_1": "Иванов",
            "id_2": "Смирнов",
            "id_3": "Кузнецов",
            "id_4": "Васильев",
            "id_5": "Петров",
            "id_6": "Михайлов",
            "id_7": "Новиков",
            "id_8": "Федоров",
            "id_9": "Кравцов",
            "id_10": "Николаев",
            "id_11": "Семёнов",
            "id_12": "Славин",
            "id_13": "Степанов",
            "id_14": "Павлов",
            "id_15": "Александров",
            "id_16": "Морозов"
        }
    }`,
    firstNameMaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александр", 
            "id_2": "Максим",
            "id_3": "Иван",
            "id_4": "Артем",
            "id_5": "Дмитрий",
            "id_6": "Никита",
            "id_7": "Михаил",
            "id_8": "Даниил",
            "id_9": "Егор",
            "id_10": "Андрей"
        }
    }`,
    firstNameFemaleJson: `{
        "count": 10,
        "list": {     
            "id_1": "Александра", 
            "id_2": "Мария",
            "id_3": "Светлана",
            "id_4": "Арина",
            "id_5": "Дарья",
            "id_6": "Наталья",
            "id_7": "Ирина",
            "id_8": "Марина",
            "id_9": "Елена",
            "id_10": "Анна"
        }
    }`, 
    professionMaleJson: `{
        "count": 5,
        "list": {     
            "id_1": "Слесарь",
            "id_2": "Актер",
            "id_3": "Продавец",
            "id_4": "Уборщик",
            "id_5": "Учитель"
        }
    }`,
    professionFemalaJson: `{
        "count": 5,
        "list": {     
            "id_1": "Переводчица",
            "id_2": "Актриса",
            "id_3": "Продавщица",
            "id_4": "Уборщица",
            "id_5": "Учительница"
        }
    }`,
    patronymicJson: `{
        "count": 5,
        "list": {     
            "id_1": "Семен",  
            "id_2": "Александр",
            "id_3": "Иван",
            "id_4": "Петр",
            "id_5": "Максим"
        }
    }`,
    monthJson: `{
        "count": 12,
        "list": {     
            "id_1": "Января",  
            "id_2": "Февраля",
            "id_3": "Марта",
            "id_4": "Апреля",
            "id_5": "Мая",
            "id_6": "Июня",
            "id_7": "Июля",
            "id_8": "Августа",
            "id_9": "Сентября",
            "id_10": "Октября",
            "id_11": "Ноября",
            "id_12": "Декабря"          
        }
    }`,


    

    GENDER_MALE: 'Мужчина',
    GENDER_FEMALE: 'Женщина',
  


    randomIntNumber: (max = 1, min = 0) => Math.floor(Math.random() * (max - min + 1) + min),

    randomValue: function (json) {
        const obj = JSON.parse(json);
        const prop = `id_${this.randomIntNumber(obj.count, 1)}`;  // this = personGenerator
        return obj.list[prop];
    },

  

    randomFirstName: function() {
        if (this.person.gender === this.GENDER_MALE) {
        return this.randomValue(this.firstNameMaleJson);
      } else 
      return this.randomValue(this.firstNameFemaleJson);
    },


     randomSurname: function() {

        if (this.person.gender === this.GENDER_MALE) {
            return this.randomValue(this.surnameJson);
        } else 
        return this.randomValue(this.surnameJson) + 'a';

    },


    randomProfession: function() {

        if (this.person.gender === this.GENDER_MALE) {
           return this.randomValue(this.professionMaleJson);
        } else 
      return this.randomValue(this.professionFemalaJson);

    },


    randomPatronymic: function() {

        if (this.person.gender === this.GENDER_MALE) {
           return this.randomValue(this.patronymicJson) + 'ович';
        } else 
      return this.randomValue(this.patronymicJson) + 'овна';

    },

    randomDay: function() {
    switch (this.person.month) {
      case 'Февраля':
        return this.randomIntNumber(1,28); 
        break;
      case 'Апреля': 
      case 'Июня':  
      case 'Сентября': 
      case 'Ноября': 
        return this.randomIntNumber(1,30);  
        break;
      default:
        return this.randomIntNumber(1,31);
    }
},




    getPerson: function () {
        this.person = {};
        this.person.gender = this.randomIntNumber() === 1 ? this.GENDER_MALE : this.GENDER_FEMALE;
        this.person.firstName = this.randomFirstName();
        this.person.surname = this.randomSurname();
        this.person.profession = this.randomProfession();
        this.person.birthYear = this.randomIntNumber(1940, 2010);
        this.person.patronymic = this.randomPatronymic();
        this.person.month = this.randomValue(this.monthJson);
        this.person.day = this.randomDay();
        return this.person;
    }


};



document.getElementById('buttonClear').addEventListener('click', function() {
    document.getElementById('firstNameOutput').innerText = '';
    document.getElementById('surnameOutput').innerText = '';
    document.getElementById('genderOutput').innerText = '';
    document.getElementById('birthYearOutput').innerText = '';
    document.getElementById('professionOutput').innerText = '';
    document.getElementById('patronymicOutput').innerText = '';
    document.getElementById('birthMonthOutput').innerText = '';
    document.getElementById('birthDayOutput').innerText = ''; 
}
)





document.getElementById('buttonGenerate').addEventListener('click', function() {
    const generate = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = generate.firstName;
    document.getElementById('surnameOutput').innerText = generate.surname;
    document.getElementById('genderOutput').innerText = generate.gender;
    document.getElementById('birthYearOutput').innerText = generate.birthYear;
    document.getElementById('professionOutput').innerText = generate.profession;
    document.getElementById('patronymicOutput').innerText = generate.patronymic;
    document.getElementById('birthMonthOutput').innerText = generate.month;
    document.getElementById('birthDayOutput').innerText = generate.day; 
}
)




