/*function xe (e){
	var $x = $('#'+e+' option');
	var n = $x.length;
	var objq = {};
	for(var i=1;i<n;i++){
		objq[$x.eq(i).text()]=i;
	}
	return JSON.stringify(objq);
}*/
// Create Base64 Object
var Base64 = {

// private property
_keyStr : "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",

// public method for encoding
encode : function (input) {
    var output = "";
    var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
    var i = 0;

    input = Base64._utf8_encode(input);

    while (i < input.length) {

        chr1 = input.charCodeAt(i++);
        chr2 = input.charCodeAt(i++);
        chr3 = input.charCodeAt(i++);

        enc1 = chr1 >> 2;
        enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
        enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
        enc4 = chr3 & 63;

        if (isNaN(chr2)) {
            enc3 = enc4 = 64;
        } else if (isNaN(chr3)) {
            enc4 = 64;
        }

        output = output +
        this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) +
        this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);

    }

    return output;
},

// public method for decoding
decode : function (input) {
    var output = "";
    var chr1, chr2, chr3;
    var enc1, enc2, enc3, enc4;
    var i = 0;

    input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

    while (i < input.length) {

        enc1 = this._keyStr.indexOf(input.charAt(i++));
        enc2 = this._keyStr.indexOf(input.charAt(i++));
        enc3 = this._keyStr.indexOf(input.charAt(i++));
        enc4 = this._keyStr.indexOf(input.charAt(i++));

        chr1 = (enc1 << 2) | (enc2 >> 4);
        chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
        chr3 = ((enc3 & 3) << 6) | enc4;

        output = output + String.fromCharCode(chr1);

        if (enc3 != 64) {
            output = output + String.fromCharCode(chr2);
        }
        if (enc4 != 64) {
            output = output + String.fromCharCode(chr3);
        }

    }

    output = Base64._utf8_decode(output);

    return output;

},

// private method for UTF-8 encoding
_utf8_encode : function (string) {
    string = string.replace(/\r\n/g,"\n");
    var utftext = "";

    for (var n = 0; n < string.length; n++) {

        var c = string.charCodeAt(n);

        if (c < 128) {
            utftext += String.fromCharCode(c);
        }
        else if((c > 127) && (c < 2048)) {
            utftext += String.fromCharCode((c >> 6) | 192);
            utftext += String.fromCharCode((c & 63) | 128);
        }
        else {
            utftext += String.fromCharCode((c >> 12) | 224);
            utftext += String.fromCharCode(((c >> 6) & 63) | 128);
            utftext += String.fromCharCode((c & 63) | 128);
        }

    }

    return utftext;
},

// private method for UTF-8 decoding
_utf8_decode : function (utftext) {
    var string = "";
    var i = 0;
    var c = 0; var c1 = 0;var c2 = 0;

    while ( i < utftext.length ) {

        c = utftext.charCodeAt(i);

        if (c < 128) {
            string += String.fromCharCode(c);
            i++;
        }
        else if((c > 191) && (c < 224)) {
            c2 = utftext.charCodeAt(i+1);
            string += String.fromCharCode(((c & 31) << 6) | (c2 & 63));
            i += 2;
        }
        else {
            c2 = utftext.charCodeAt(i+1);
            c3 = utftext.charCodeAt(i+2);
            string += String.fromCharCode(((c & 15) << 12) | ((c2 & 63) << 6) | (c3 & 63));
            i += 3;
        }

    }

    return string;
}

};
var type_kuzov ={"1":"Седан","2":"Хетчбэк","3":"Универсал","4":"Внедорожник","5":"Кабриолет","6":"Кроссовер","7":"Купе","8":"Лимузин","9":"Минивэн","10":"Пикап","11":"Фургон","12":"Микроавтобус"};
var countrys = {"count":234,"items":[{"id":19,"title":"Австралия"},{"id":20,"title":"Австрия"},{"id":5,"title":"Азербайджан"},{"id":21,"title":"Албания"},{"id":22,"title":"Алжир"},{"id":23,"title":"Американское Самоа"},{"id":24,"title":"Ангилья"},{"id":25,"title":"Ангола"},{"id":26,"title":"Андорра"},{"id":27,"title":"Антигуа и Барбуда"},{"id":28,"title":"Аргентина"},{"id":6,"title":"Армения"},{"id":29,"title":"Аруба"},{"id":30,"title":"Афганистан"},{"id":31,"title":"Багамы"},{"id":32,"title":"Бангладеш"},{"id":33,"title":"Барбадос"},{"id":34,"title":"Бахрейн"},{"id":3,"title":"Беларусь"},{"id":35,"title":"Белиз"},{"id":36,"title":"Бельгия"},{"id":37,"title":"Бенин"},{"id":38,"title":"Бермуды"},{"id":39,"title":"Болгария"},{"id":40,"title":"Боливия"},{"id":235,"title":"Бонайре, Синт-Эстатиус и Саба"},{"id":41,"title":"Босния и Герцеговина"},{"id":42,"title":"Ботсвана"},{"id":43,"title":"Бразилия"},{"id":44,"title":"Бруней-Даруссалам"},{"id":45,"title":"Буркина-Фасо"},{"id":46,"title":"Бурунди"},{"id":47,"title":"Бутан"},{"id":48,"title":"Вануату"},{"id":233,"title":"Ватикан"},{"id":49,"title":"Великобритания"},{"id":50,"title":"Венгрия"},{"id":51,"title":"Венесуэла"},{"id":52,"title":"Виргинские острова, Британские"},{"id":53,"title":"Виргинские острова, США"},{"id":54,"title":"Восточный Тимор"},{"id":55,"title":"Вьетнам"},{"id":56,"title":"Габон"},{"id":57,"title":"Гаити"},{"id":58,"title":"Гайана"},{"id":59,"title":"Гамбия"},{"id":60,"title":"Гана"},{"id":61,"title":"Гваделупа"},{"id":62,"title":"Гватемала"},{"id":63,"title":"Гвинея"},{"id":64,"title":"Гвинея-Бисау"},{"id":65,"title":"Германия"},{"id":66,"title":"Гибралтар"},{"id":67,"title":"Гондурас"},{"id":68,"title":"Гонконг"},{"id":69,"title":"Гренада"},{"id":70,"title":"Гренландия"},{"id":71,"title":"Греция"},{"id":7,"title":"Грузия"},{"id":72,"title":"Гуам"},{"id":73,"title":"Дания"},{"id":231,"title":"Джибути"},{"id":74,"title":"Доминика"},{"id":75,"title":"Доминиканская Республика"},{"id":76,"title":"Египет"},{"id":77,"title":"Замбия"},{"id":78,"title":"Западная Сахара"},{"id":79,"title":"Зимбабве"},{"id":8,"title":"Израиль"},{"id":80,"title":"Индия"},{"id":81,"title":"Индонезия"},{"id":82,"title":"Иордания"},{"id":83,"title":"Ирак"},{"id":84,"title":"Иран"},{"id":85,"title":"Ирландия"},{"id":86,"title":"Исландия"},{"id":87,"title":"Испания"},{"id":88,"title":"Италия"},{"id":89,"title":"Йемен"},{"id":90,"title":"Кабо-Верде"},{"id":4,"title":"Казахстан"},{"id":91,"title":"Камбоджа"},{"id":92,"title":"Камерун"},{"id":10,"title":"Канада"},{"id":93,"title":"Катар"},{"id":94,"title":"Кения"},{"id":95,"title":"Кипр"},{"id":96,"title":"Кирибати"},{"id":97,"title":"Китай"},{"id":98,"title":"Колумбия"},{"id":99,"title":"Коморы"},{"id":100,"title":"Конго"},{"id":101,"title":"Конго, демократическая республика"},{"id":102,"title":"Коста-Рика"},{"id":103,"title":"Кот д`Ивуар"},{"id":104,"title":"Куба"},{"id":105,"title":"Кувейт"},{"id":11,"title":"Кыргызстан"},{"id":138,"title":"Кюрасао"},{"id":106,"title":"Лаос"},{"id":12,"title":"Латвия"},{"id":107,"title":"Лесото"},{"id":108,"title":"Либерия"},{"id":109,"title":"Ливан"},{"id":110,"title":"Ливия"},{"id":13,"title":"Литва"},{"id":111,"title":"Лихтенштейн"},{"id":112,"title":"Люксембург"},{"id":113,"title":"Маврикий"},{"id":114,"title":"Мавритания"},{"id":115,"title":"Мадагаскар"},{"id":116,"title":"Макао"},{"id":117,"title":"Македония"},{"id":118,"title":"Малави"},{"id":119,"title":"Малайзия"},{"id":120,"title":"Мали"},{"id":121,"title":"Мальдивы"},{"id":122,"title":"Мальта"},{"id":123,"title":"Марокко"},{"id":124,"title":"Мартиника"},{"id":125,"title":"Маршалловы Острова"},{"id":126,"title":"Мексика"},{"id":127,"title":"Микронезия, федеративные штаты"},{"id":128,"title":"Мозамбик"},{"id":15,"title":"Молдова"},{"id":129,"title":"Монако"},{"id":130,"title":"Монголия"},{"id":131,"title":"Монтсеррат"},{"id":132,"title":"Мьянма"},{"id":133,"title":"Намибия"},{"id":134,"title":"Науру"},{"id":135,"title":"Непал"},{"id":136,"title":"Нигер"},{"id":137,"title":"Нигерия"},{"id":139,"title":"Нидерланды"},{"id":140,"title":"Никарагуа"},{"id":141,"title":"Ниуэ"},{"id":142,"title":"Новая Зеландия"},{"id":143,"title":"Новая Каледония"},{"id":144,"title":"Норвегия"},{"id":145,"title":"Объединенные Арабские Эмираты"},{"id":146,"title":"Оман"},{"id":147,"title":"Остров Мэн"},{"id":148,"title":"Остров Норфолк"},{"id":149,"title":"Острова Кайман"},{"id":150,"title":"Острова Кука"},{"id":151,"title":"Острова Теркс и Кайкос"},{"id":152,"title":"Пакистан"},{"id":153,"title":"Палау"},{"id":154,"title":"Палестинская автономия"},{"id":155,"title":"Панама"},{"id":156,"title":"Папуа - Новая Гвинея"},{"id":157,"title":"Парагвай"},{"id":158,"title":"Перу"},{"id":159,"title":"Питкерн"},{"id":160,"title":"Польша"},{"id":161,"title":"Португалия"},{"id":162,"title":"Пуэрто-Рико"},{"id":163,"title":"Реюньон"},{"id":1,"title":"Россия"},{"id":164,"title":"Руанда"},{"id":165,"title":"Румыния"},{"id":9,"title":"США"},{"id":166,"title":"Сальвадор"},{"id":167,"title":"Самоа"},{"id":168,"title":"Сан-Марино"},{"id":169,"title":"Сан-Томе и Принсипи"},{"id":170,"title":"Саудовская Аравия"},{"id":171,"title":"Свазиленд"},{"id":172,"title":"Святая Елена"},{"id":173,"title":"Северная Корея"},{"id":174,"title":"Северные Марианские острова"},{"id":175,"title":"Сейшелы"},{"id":176,"title":"Сенегал"},{"id":177,"title":"Сент-Винсент"},{"id":178,"title":"Сент-Китс и Невис"},{"id":179,"title":"Сент-Люсия"},{"id":180,"title":"Сент-Пьер и Микелон"},{"id":181,"title":"Сербия"},{"id":182,"title":"Сингапур"},{"id":234,"title":"Синт-Мартен"},{"id":183,"title":"Сирийская Арабская Республика"},{"id":184,"title":"Словакия"},{"id":185,"title":"Словения"},{"id":186,"title":"Соломоновы Острова"},{"id":187,"title":"Сомали"},{"id":188,"title":"Судан"},{"id":189,"title":"Суринам"},{"id":190,"title":"Сьерра-Леоне"},{"id":16,"title":"Таджикистан"},{"id":191,"title":"Таиланд"},{"id":192,"title":"Тайвань"},{"id":193,"title":"Танзания"},{"id":194,"title":"Того"},{"id":195,"title":"Токелау"},{"id":196,"title":"Тонга"},{"id":197,"title":"Тринидад и Тобаго"},{"id":198,"title":"Тувалу"},{"id":199,"title":"Тунис"},{"id":17,"title":"Туркменистан"},{"id":200,"title":"Турция"},{"id":201,"title":"Уганда"},{"id":18,"title":"Узбекистан"},{"id":2,"title":"Украина"},{"id":202,"title":"Уоллис и Футуна"},{"id":203,"title":"Уругвай"},{"id":204,"title":"Фарерские острова"},{"id":205,"title":"Фиджи"},{"id":206,"title":"Филиппины"},{"id":207,"title":"Финляндия"},{"id":208,"title":"Фолклендские острова"},{"id":209,"title":"Франция"},{"id":210,"title":"Французская Гвиана"},{"id":211,"title":"Французская Полинезия"},{"id":212,"title":"Хорватия"},{"id":213,"title":"Центрально-Африканская Республика"},{"id":214,"title":"Чад"},{"id":230,"title":"Черногория"},{"id":215,"title":"Чехия"},{"id":216,"title":"Чили"},{"id":217,"title":"Швейцария"},{"id":218,"title":"Швеция"},{"id":219,"title":"Шпицберген и Ян Майен"},{"id":220,"title":"Шри-Ланка"},{"id":221,"title":"Эквадор"},{"id":222,"title":"Экваториальная Гвинея"},{"id":223,"title":"Эритрея"},{"id":14,"title":"Эстония"},{"id":224,"title":"Эфиопия"},{"id":226,"title":"Южная Корея"},{"id":227,"title":"Южно-Африканская Республика"},{"id":232,"title":"Южный Судан"},{"id":228,"title":"Ямайка"},{"id":229,"title":"Япония"}]};
var markaAvto = {
"AC":{"Ace":1,"Aceca":2,"Cobra":3,"Другая":4},
"Acura":{"CL":1,"CSX":2,"EL":3,"Integra":4,"MDX":5,"NSX":6,"RDX":7,"RL":8,"RSX":9,"SLX":10,"TL":11,"TLX":12,"TSX":13,"ZDX":14,"Другая":15},
"Alfa Romeo":{"33":9,"75":11,"90":13,"145":1,"146":2,"147":3,"155":4,"156":5,"159":6,"164":7,"166":8,"4C":10,"8C":12,"Arna":14,"Brera":15,"Giulietta":16,"GT":17,"GTV":18,"MiTo":19,"RZ":20,"Spider":21,"SZ":22,"Другая":23},
"Alpina":{"A1":1,"A2":2,"A4":3,"B10":4,"B11":5,"B12":6,"B3":7,"B5":8,"B6":9,"B7":10,"B8":11,"B9":12,"C1":13,"C2":14,"D10":15,"D3":16,"D5":17,"XD3":18,"Другая":19},
"Aro":{"10":1,"24":2,"Spartana":3,"Другая":4},
"Asia":{"Hi-topic":1,"Retona":2,"Rocstra":3,"Другая":4},
"Aston Martin":{"Cygnet":1,"DB7":2,"DB9":3,"DBS":4,"Lagonda":5,"One-77":6,"Rapide":7,"Rapide S":8,"V12 Vantage":9,"V12 Vantage S":10,"V8 Vantage":11,"V8 Vantage S":12,"Vanquish":13,"Virage":14,"Другая":15},
"Audi":{"50":3,"60":4,"80":5,"90":6,"100":1,"200":2,"A1":7,"A2":8,"A3":9,"A4":10,"A5":11,"A6":12,"A7":13,"A8":14,"Allroad":15,"Cabriolet":16,"Coupe":17,"Q3":18,"Q5":19,"Q7":20,"Quattro":21,"R8":22,"RS1":23,"RS2":24,"RS3":25,"RS4":26,"RS5":27,"RS6":28,"RS7":29,"RS8":30,"RS Q3":31,"S1":32,"S2":33,"S3":34,"S4":35,"S5":36,"S6":37,"S7":38,"S8":39,"SQ5":40,"TT":41,"TT RS":42,"TTS":43,"V8":44,"Другая":45},
"BAW":{"Fenix":1,"Tonik":2,"Другая":3},
"Bentley":{"Arnage":1,"Azure":2,"Brooklands":3,"Continental":4,"Continental Flying Spur":5,"Continental GT":6,"Continental GTC":7,"Continental Supersports":8,"Mulsanne":9,"Turbo R":10,"Другая":11},
"BMW":{"1 серия":1,"2 серия":2,"3 серия":3,"3 серия GT":4,"4 серия":5,"5 серия":6,"5 серия GT":7,"6 серия":8,"7 серия":9,"8 серия":10,"ActiveHybrid 7":11,"i3":12,"i8":13,"M3":14,"M5":15,"M6":16,"X1":17,"X3":18,"X4":19,"X5":20,"X5 M":21,"X6":22,"X6 M":23,"Z1":24,"Z3":25,"Z3 M":26,"Z4":27,"Z4 M":28,"Z8":29,"Другая":30},
"Brilliance":{"A1":1,"BS2":2,"BS4":3,"BS6":4,"H530":5,"M1":6,"M2":7,"M3":8,"V5":9,"Другая":10},
"Bufori":{"La Joya":1,"Другая":2},
"Bugatti":{"EB":1,"Galibier":2,"Veyron":3,"Другая":4},
"Buick":{"Allure":1,"Century":2,"Electra":3,"Enclave":4,"Excelle":5,"GL8":6,"HRV":7,"LaCrosse":8,"LeSabre":9,"Lucerne":10,"Park Avenue":11,"Rainer":12,"Reatta":13,"Regal":14,"Rendezvous":15,"Riviera":16,"Roadmaster":17,"Royaum":18,"Sedan":19,"Skylark":20,"Terraza":21,"Другая":22},
"BYD":{"ET":1,"F0":2,"F2":3,"F3":4,"F6":5,"Flyer":6,"S8":7,"Другая":8},
"Cadillac":{"Allante":1,"ATS":2,"BLS":3,"Brougham":4,"Catera":5,"CTS":6,"CTS-V":7,"DE Ville":8,"DTS":9,"Eldorado":10,"Escalade":11,"Evoq":12,"Fleetwood":13,"LSE":14,"Seville":15,"SRX":16,"STS":17,"Victoria":18,"XLR":19,"Другая":20},
"Caterham":{"Academy":1,"Classic":2,"Roadsport":3,"Superlight":4,"Другая":5},
"Changan":{"CS35":1,"Eado":2,"Raeton":3,"SM-8":4,"Z-Chine":5,"Другая":6},
"ChangFeng":{"Flying PickUp":1,"Flying SUV":2,"Другая":3},
"Chery":{"A3":1,"A5":2,"Amulet":3,"Arizzo 3":4,"Arizzo 7":5,"Bonus":6,"Bonus 3":7,"CrossEastar":8,"Fora":9,"Indis":10,"Kimo":11,"M11":12,"Oriental Son":13,"QQ":14,"QQ6":15,"Tiggo":16,"Tiggo 5":17,"Very":18,"Другая":19},
"Chevrolet":{"Alero":1,"Astra":2,"Astro":3,"Avalanche":4,"Aveo":5,"Bel Air":6,"Beretta":7,"Blazer":8,"C10":9,"Camaro":10,"Caprice":11,"Captiva":12,"Cavalier":13,"Celebrity":14,"Celta":15,"Chevette":16,"Classic":17,"Cobalt":18,"Colorado":19,"Corsa":20,"Corsica":21,"Corvette":22,"Cruze":23,"Epica":24,"Equinox":25,"Evanda":26,"Express":27,"Geo Storm":28,"HHR":29,"Impala":30,"Lacetti":31,"Lanos":32,"Lumina":33,"LUV D-MAX":34,"Malibu":35,"Metro":36,"Monte Carlo":37,"Monza":38,"MW":39,"Niva":40,"Nubira":41,"Omega":42,"Orlando":43,"Prizm":44,"Rezzo":45,"S10":46,"Sail":47,"Silverado":48,"Sonic":49,"Spark":50,"SSR":51,"Starcraft":52,"Suburban":53,"Tahoe":54,"Tavera":55,"Tracker":56,"TrailBlazer":57,"Trans Sport":58,"Traverse":59,"Uplander":60,"Van":61,"Vectra":62,"Venture":63,"Viva":64,"Volt":65,"Zafira":66,"Другая":67},
"Chrysler":{"200":1,"300C":2,"300M":3,"Aspen":4,"Cirrus":5,"Concorde":6,"Crossfire":7,"Daytona Shelby":8,"Dynasty":9,"Fifth Avenue":10,"Grand Voyager":11,"Imperial":12,"Intrepid":13,"LeBaron":14,"LHS":15,"Nassau":16,"Neon":17,"New Yorker":18,"Pacifica":19,"Prowler":20,"PT Cruiser":21,"Saratoga":22,"Sebring":23,"Stratus":24,"Town & Country":25,"Viper":26,"Vision":27,"Voyager":28,"Другая":29},
"Citroen":{"2 CV":1,"Acadiane":2,"Ami":3,"AX":4,"Berlingo":5,"BX":6,"C1":7,"C15":8,"C2":9,"C25":10,"C3":11,"C35":12,"C3 Picasso":13,"C4":14,"C4 Aircross":15,"C4 Picasso":16,"C5":17,"C6":18,"C8":19,"C-Crosser":20,"C-Elysee":21,"CX":22,"C-Zero":23,"DS2":24,"DS3":25,"DS4":26,"DS5":27,"DS9":28,"Dyane":29,"Evasion":30,"Express":31,"FAF":32,"Grand C4 Picasso":33,"GS":34,"GSA":35,"GT":36,"Jumper":37,"Jumpy":38,"LN":39,"LNA":40,"Mehari":41,"Nemo":42,"Saxo":43,"Synergie":44,"Visa":45,"Xantia":46,"XM":47,"Xsara":48,"Xsara Picasso":49,"ZX":50,"Другая":51},
"Dacia":25,
"Dadi":26,
"Daewoo":27,
"Daihatsu":28,
"Daimler":29,
"Datsun":30,
"Derways":31,
"Dodge":32,
"Dong Feng":33,
"Doninvest":34,
"Eagle":35,
"Ecomotors":36,
"FAW":37,
"Ferrari":38,
"FIAT":39,
"Ford":40,
"Geely":41,
"Geo":42,
"GMC":43,
"Great Wall":44,
"Hafei":45,
"Haima":46,
"Haval":47,
"Hawtai":48,
"Honda":49,
"Huanghai":50,
"Hummer":51,
"Hurtan":52,
"Hyundai":53,
"Infiniti":54,
"Iran Khodro":55,
"Isuzu":56,
"Iveco":57,
"JAC":58,
"Jaguar":59,
"Jeep":60,
"Jinbei":61,
"JMC":62,
"KIA":63,
"Lamborghini":64,
"Lancia":65,
"Land Rover":66,
"Landwind":67,
"LDV":68,
"Lexus":69,
"LIFAN":70,
"Lincoln":71,
"Lotus":72,
"Luxgen":73,
"Mahindra":74,
"Marussia":75,
"Maserati":76,
"Maybach":77,
"Mazda":78,
"Mercedes-Benz":79,
"Mercury":80,
"Metrocab":81,
"MG":82,
"MINI":83,
"Mitsubishi":84,
"Mitsuoka":85,
"Morgan":86,
"Morris":87,
"Nissan":88,
"Noble":89,
"Oldsmobile":90,
"Opel":91,
"Pagani":92,
"Peugeot":93,
"Plymouth":94,
"Pontiac":95,
"Porsche":96,
"Proton":97,
"Renault":98,
"Rolls-Royce":99,
"Ronart":100,
"Rover":101,
"Saab":102,
"Saleen":103,
"Saturn":104,
"Scion":105,
"SEAT":106,
"Shuanghuan":107,
"Skoda":108,
"SMA":109,
"Smart":110,
"Spyker":111,
"SsangYong":112,
"Subaru":113,
"Suzuki":114,
"Talbot":115,
"Tata":116,
"Tesla":117,
"Tianma":118,
"Tianye":119,
"Toyota":120,
"Trabant":121,
"Volkswagen":122,
"Volvo":123,
"Vortex":124,
"Wartburg":125,
"Wiesmann":126,
"Xin Kai":127,
"ZX":128,
"ВАЗ (LADA)":129,
"ВИС":130,
"ГАЗ":131,
"Другая":132,
"ЗАЗ":133,
"ЗИЛ":134,
"ИЖ":135,
"ЛуАЗ":136,
"Москвич":137,
"РАФ":138,
"ТагАЗ":139,
"УАЗ":140};