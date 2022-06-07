const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    }
};

function showExperience(plan) {
    let {skills: {exp: experience}} = plan;
    console.log(`${experience}`);
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = ``;
    let {skills: {programmingLangs}} = plan;
    if (Object.entries(programmingLangs)) {
        for (let lang in programmingLangs) {
            str += `Язык ${lang} изучен на ${programmingLangs[lang]}\n`
        }
    }
    console.log(str);
}

showProgrammingLangs(personalPlanPeter);

personalPlanPeter.showAgeAndLangs = function(obj) {
    let {age} = obj;
    let {skills: {languages}} = obj;
    let str = `Мне ${age} и я владею языками: `;
    if (Object.entries(languages)) {
        for (let lang in languages) {
            str += `${languages[lang].toUpperCase()} `;
        }
    }
    console.log(str);
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);