

window.onload = function()
{
    const initPerson = personGenerator.getPerson();
    document.getElementById('firstNameOutput').innerText = initPerson.firstName;
    document.getElementById('surnameOutput').innerText = initPerson.surname;
    document.getElementById('genderOutput').innerText = initPerson.gender;
    document.getElementById('birthYearOutput').innerText = initPerson.birthYear;
    document.getElementById('professionOutput').innerText = initPerson.profession;
    document.getElementById('patronymicOutput').innerText = initPerson.patronymic;
    document.getElementById('birthMonthOutput').innerText = initPerson.month;
    document.getElementById('birthDayOutput').innerText = initPerson.day; 
}