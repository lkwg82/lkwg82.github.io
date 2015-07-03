var template ={
  'en' :{
    'Arbeiten':'studies',
    'master_t1':'thesis',
    'master_t2':'analysis and concept - improving static error localisation',
    'research_t1':'seminar paper',
    'research_t2':'quality management with continuous integration - a practical feasibility study',
    'diploma_t1':'diploma thesis',
    'diploma_t2':'SOA for multi messaging - an integration concept with Skype',
    'semesterAbroad_t1':'Semester abroad',
    'semesterAbroad_t2':'Indonesia - far east',
    'work_exp' : 'work experiences',
        'work_is24' : 'Java EE developer',
            'work_is24_2' : 'DevOps with CLD, SELinux',
            'work_is24_3' : 'agile change management (adjust processes continuously)',
            'work_is24_4' : 'agile culture enthusiast',
            'work_is24_5' : 'product centric software development',
            'work_is24_6' : 'a driver for internal community work',
            'work_is24_7' : 'founder of internal community for webperformance enthusiasts',
        'work_lpi' : 'freelance trainer for linux (LPI)',
            'work_lpi2' : 'workshops and courses for basics and advanced topics on systemadministration',
            'work_lpi3' : 'scaling and performance tuning',
            'work_lpi4' : 'didactics and knowledge management',
        'work_sprd':'QA Engineer',
            'work_sprd2':'quality assurence of a ecommerce platform',
            'work_sprd3':'concept &amp; migration from procedural selenium tests to page objects',
        'work_mediber':'freelance C&sharp; software developer/architect',
            'work_mediber2':'embedded A/V communication based on DirectShow',
        'work_identigo':'freelance JEE software developer/architect',
            'work_identigo2':'design and implementation of services in a SOA context',
            'work_identigo3':'spinoff of Cidas&sup2;',
        'work_fhb':'academic staff at the University of Applied Sciences Brandenburg',
            'work_fhb_t1':'developement of an online portal',
            'work_fhb_t2':'SOA authentification framework with',
            'work_fhb_t3':'administration of the frontend and backend systems',
        'semester_abroad':'semester abroad in Jakarta/Indonesia at the ',
            'semester_abroad_t1':'autonomous training on securing a web application',
            'semester_abroad_t2':'feasibility of video conference in the area of high latency and small bandwidth',
            'semester_abroad_t3':'English and Indonesian in daily life',
        'muellerberg':'carer in the shelter for handicapped people',
            'muellerberg_description':'autonoumous caring of 16 mental ill inhabitants',
        'zivi_pflege':'community service and male nurse in a nursing home',
        'army':'basic military service in Torgelow',
    'skills' : 'capabilities',
        'languages':'language skills',
            'lang_en':'English',
            'lang_id':'Indonesian',
            'lang_fr':'French',
            'lang_es':'Spanish',

    'education' :'education',
        'Informatikstudent_fhb2':'computer sciences at the University of Applied Sciences in Brandenburg (master - grade A<sup>-</sup>)',
        'master_topic':'thesis: analysis and concept - improving static error localisation',
        'research_topic':'seminar paper: quality management with continuous integration - a practical feasibility study',
        'Informatikstudent_fhb' : 'computer sciences at the University of Applied Sciences in Brandenburg (diploma - grade A)',
        'stay_abroad':'semester abroad - jakarta/indonesia',
        'diplom_topic':'thesis: SOA for multi messaging - an integration concept with Skype',
        'Informatikstudent' : 'computer sciences at the BTU in Cottbus',
        'Abitur' : 'higher school graduation',
    'Impressum': 'imprint',
  }
};

var language = (navigator.language || navigator.browserLanguage).split('-')[0];
console.info("language:" + language);
var languageKey = 'en';//language === 'de' ? 'de' : 'en';

if ( languageKey === 'de' ){
    // leave it as it is
}
else{
    var dictionary = template[languageKey];
    $('.i18n').each( function(){
          var i18nKey = $(this).attr('i18n-key');
          var key = typeof i18nKey === 'undefined' ? this.innerText : i18nKey;
//          console.debug("i18n: " + key + " -> " + dictionary[key]);

          if ( typeof dictionary[key] === 'undefined' || dictionary[key].length == 0){
            console.warn('missing key:' + key);
          }else{
            $(this).html(dictionary[key]);
          }
    });
    $('html').attr('lang',languageKey);
}
