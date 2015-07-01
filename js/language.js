var template ={
  'en' :{
        'muellerberg':'carer in the shelter for handicapped people',
            'muellerberg_description':'autonoumous caring of 16 mental ill inhabitants',
        'zivi_pflege':'community service and male nurse in a nursing home',
        'army':'basic military service in Torgelow',
    'skills' : 'capabilities',
        'languages':'language skills',
            'lang_en':'english',
            'lang_id':'bahasa indonesia',
            'lang_fr':'french',
            'lang_es':'spanish',

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
var languageKey = language === 'de' ? 'de' : 'en';

if ( languageKey === 'de' ){
    // leave it as it is
}
else{
    var dictionary = template[languageKey];
    $('.i18n').each( function(){
          var i18nKey = $(this).attr('i18n-key');
          var key = typeof i18nKey === 'undefined' ? this.innerText : i18nKey;
          console.debug("i18n: " + key + " -> " + dictionary[key]);

          if ( typeof dictionary[key] === 'undefined' || dictionary[key].length == 0){
            console.warn('missing key:' + key);
          }else{
            $(this).html(dictionary[key]);
          }
    });
    $('html').attr('lang',languageKey);
}
