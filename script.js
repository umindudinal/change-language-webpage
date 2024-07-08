const langEl = document.querySelector('.lang_wrap');
const link = document.querySelectorAll('a');
const titleEl = document.querySelector('.title');
const descrEl = document.querySelector('.description');

link.forEach(el => {
   el.addEventListener('click', () => {
      langEl.querySelector('.active').classList.remove('active');
      el.classList.add('active');

      const attr = el.getAttribute('language');

      titleEl.textContent = data[attr].title;
      descrEl.textContent = data[attr].description;
   });
});

var data = {
   "english": {
      "title": "Sinharaja Forest",
      "description":
      "Sinharaja Forest Reserve is a 11250 hectare national park located in the southwestern part of the Rakwana Range in the central highlands of Sri Lanka at an altitude of 300-1170 meters and it borders Galle district. It has received international attention and has been designated a Biosphere Reserve and World Heritage Site by UNESCO. Part of Sri Lanka's Lowland Rainforest Ecoregion, this virgin montane rainforest has been protected from commercialization due to access difficulties. The fact that this was named as a biosphere reserve in 1607 and as a world heritage site in 1988 was another reason for that. The name of the reserve 'Sinharajaya' means 'Sinharajadahana'. The distance from east to west of the reserve is km. 81 and the maximum distance from North to South is KM. Although 7, it is a safe sanctuary for plant species as well as endemic species including insects, amphibians, reptiles, birds and mammals. Due to the dense vegetation, wild animals are not easily seen here like in dry zone parks like Yala. Here you can see the last three elephants of the wet zone and leopards are rarely seen. Recently a rare black leopard (tiger) died and the largest mammal that can be seen is the Sri Lankan gray monkey. One inspiring phenomenon is the tendency of birds to behave in collective flocks, often in search of food. Such a flock often consists of the great cauda and the red tamilcha. The Maha Kauda, which takes the lead in such a flock, is known as a violent bird and the Red Tamiliccha is known as a noisy bird. Various birds can be seen here."
   },
   "sinhala": {
      "title": "සිංහරාජ වනාන්තරය",
      "description":
      "සිංහරාජ වන රක්ෂිතය ශ්‍රී ලංකාවෙහි මධ්‍යම කදුකරයේ නිරිත දිගින් පිහිටි රක්වාන කදුවැටියේ උස මීටර 300-1170 සීමාවේ, හේක්ටයාර 11250 ක පැතිර පවතින ජාතික වනෝද්‍යානයකි එය ගාල්ල දිස්ත්‍රික්ක්කකට මායිම්වේ. එය අන්තර්ජාතික අවධානයට ලක් වී ඇති අතර යුනෙස්කෝව විසින් ජෛවගෝල රක්ෂිතයක් සහ ලෝක උරුම අඩවියක් ‍ලෙසට නම් කොට ඇත. ශ්‍රී ලංකාවෙහි පහතරට වැසි වනාන්තර පරිසර කලාප‌‍යේ ‌‍කොටසක් වන ‌‍මෙම ‍නොඉඳුල් කඳුකර වැසි වනාන්තරය, පිවිසු‌ම් අපහසුතාව හේතුවෙන් වාණිජකරණයට ලක් වී‍මෙන් ආරක්ෂා විය. මෙය 1607වසරේ දී ‍ජෛවගෝල රක්ෂිතයක් ‌‍ලෙස ද, 1988 වස‌‍රේ දී ‍ලෝක උරුමයක් ‍ලෙස ද නම්‍‍‍ කොට තිබීම ඒ සඳහා තවත් හේතුවක් විය. ‌රක්ෂිත‌‍යේ  'සිංහරාජය' යන නාමය 'සිංහරජදහන' අරුත් ‍දේ. රක්ෂිතයේ නැගෙනහිර දෙස සි‍ට බටහිර දෙසට දුර කි.මි. 81ක් සහ උතුරු දෙස සිට දකුණු දෙසට උපරිම දුර කි.මි. 7ක් වුව ද ඵය ශාක විශේෂ මෙන් ම කෘමීන්, උභයජීවීන්, උරඟයින්, පක්ෂීන් සහ ක්ෂීරපායීන් ඇතුළු ආවේණික ජීවී විශේෂ සඳහා සුරක්ෂිත අභය භූමියකි. ඝන ශාක වැස්ම හේතුවෙන් යාල වැනි වියලි කලාපීය වනෝද්‍යාන මෙන් වන සතුන් මෙහි දී පහසුවෙන් දැක ගත හැකි නොව්. මෙහි දී අවසන් තෙත් කලාපීය අලි තිදෙනා දැකගත හැකි අතර දිවියන් ද දක්නට ලැබෙනුයේ දුලබ වශයනි.මෑතකදී දුර්ලබ කලු දිවියෙකුගේ (කොටියකුගේ) මරනයක් වර්තා වූ අතර බහුලව ම දැකිය හැකි විශාල ම ක්ෂීරපායි ජීවියා වනුයේ, ශ්‍රී ලංකා අළු වඳුරා යි. එක් ආශ්වාදජනක සංසිද්ධියක් වනු‌‌‍යේ පක්ෂීන් ‌‍බොහෝ විට ආහාර ‍‍සොයා යාම සඳහා සාමූහික රංචු වශ‌‍යෙන් හැසිරීමට ප්‍රවණතාවයක් දැක්වීම යි. මෙවැනි ‍රංචුවක් ‍‍බොහෝ විට මහ කවුඩා සහ රතු දෙමළිච්චා යන පක්ෂී විශේෂ වලින් සමන්විත වේ. මෙවැනි ‍රංචුවක පෙරමුණ ගන්නා මහ කවුඩා ප්‍රචණ්ඩකාරී පක්ෂියෙකු ලෙස ද රතු දෙමළිච්චා ඝෝෂාකාරී පක්ෂියෙකු ලෙසද ප්‍රචලිත ය.මෙහි විවිධ පක්ශීන් දැක ගත හැකිය."
   },
   "tamil": {
      "title":"சிங்கராஜா காடு",
      "description":
      "சிங்கராஜா வனக் காப்பகம் என்பது 11250 ஹெக்டேர் தேசியப் பூங்காவாகும். இது இலங்கையின் மத்திய மலைநாட்டில் ரக்வானா மலைத்தொடரின் தென்மேற்குப் பகுதியில் 300-1170 மீட்டர் உயரத்தில் காலி மாவட்டத்தின் எல்லையில் அமைந்துள்ளது. இது சர்வதேச கவனத்தைப் பெற்றது மற்றும் யுனெஸ்கோவால் உயிர்க்கோளக் காப்பகம் மற்றும் உலக பாரம்பரிய தளமாக நியமிக்கப்பட்டுள்ளது. இலங்கையின் தாழ்நில மழைக்காடு சுற்றுச்சூழலின் ஒரு பகுதியான இந்த கன்னி மலை மழைக்காடுகள் அணுகல் சிரமங்கள் காரணமாக வணிகமயமாக்கலில் இருந்து பாதுகாக்கப்பட்டுள்ளது. 1607ல் உயிர்க்கோள காப்பகமாகவும், 1988ல் உலக பாரம்பரிய சின்னமாகவும் பெயரிடப்பட்டதும் அதற்கு மற்றொரு காரணம். இருப்புப் பகுதியின் 'சிங்கராஜய' என்ற பெயருக்கு 'சிங்கராஜதஹன' என்று பொருள். காப்பகத்தின் கிழக்கிலிருந்து மேற்காக உள்ள தூரம் கி.மீ. 81 மற்றும் வடக்கிலிருந்து தெற்குக்கான அதிகபட்ச தூரம் KM ஆகும். 7 என்றாலும், இது தாவர இனங்கள் மற்றும் பூச்சிகள், நீர்வீழ்ச்சிகள், ஊர்வன, பறவைகள் மற்றும் பாலூட்டிகள் உள்ளிட்ட உள்ளூர் இனங்களுக்கு பாதுகாப்பான சரணாலயமாகும். அடர்ந்த தாவரங்கள் காரணமாக யால போன்ற உலர் வலயப் பூங்காக்களைப் போன்று இங்கு வன விலங்குகளை எளிதில் காண முடியாது. இங்கு ஈர வலயத்தின் கடைசி மூன்று யானைகள் மற்றும் சிறுத்தைகள் அரிதாகவே காணப்படுவதைக் காணலாம், சமீபத்தில் ஒரு அரிய கருஞ்சிறுப்பு (புலி) இறந்தது மற்றும் பார்க்கக்கூடிய மிகப்பெரிய பாலூட்டி இலங்கை சாம்பல் குரங்கு. ஒரு எழுச்சியூட்டும் நிகழ்வு, பறவைகள் கூட்டுக் கூட்டங்களில் நடந்துகொள்ளும் போக்கு, பெரும்பாலும் உணவைத் தேடி. அத்தகைய மந்தை பெரும்பாலும் பெரிய காடா மற்றும் சிவப்பு தமிழ்ச்சாவைக் கொண்டுள்ளது. இத்தகைய மந்தைகளில் முன்னணி வகிக்கும் மஹா கவுடா, வன்முறைப் பறவை என்றும், சிவப்பு தமிழிச்சை சத்தம் எழுப்பும் பறவை என்றும் அழைக்கப்படுகிறது."
   }
}