var INFO_MANGA = "126";				//	Chapter of Saki
var INFO_MANGA_SNHY = "8";				//	Chapter of Shinohayu
var CUR_VOLUMNNUM = 12;						//	Volumes of Saki
var CUR_VOLUMNNUM_ACHIGA = 6;				//	Volumes of Achiga
var CUR_VOLUMNNUM_SHINOHAYU = 1;			//	Volumes of Shinohayu

var UPDATE_DATE = '2014-05-25';				//	Last updated

/***************************************************
 * School object
 ***************************************************/
function School(id, name, area, options) {
	this.id = id;		//	school number
	this.name = name;	//	school name
	this.area = area;	//	school location
	
	if (options.KV != undefined) this.KV = options.KV;	// Saki volumes
	if (options.AV != undefined) this.AV = options.AV;	// Achiga volumes
	if (options.SV != undefined) this.SV = options.SV;	// Shinohayu volumes
	if (options.KA != undefined) this.KA = options.KA;	// Saki anime
	if (options.AA != undefined) this.AA = options.AA;	// Achiga anime
	if (options.ZA != undefined) this.ZA = options.ZA;	// Zenkoku anime

	if (options.flag != undefined) this.flag = options.flag; // Selected by default
}

/***************************************************
 * Character object
 ***************************************************/
function Role(name, img, school, options) {
	this.name = name;		//	name
	this.img = img;			//	image filename
	this.school = school;	//	school number
	
	if (options.intro != undefined) this.intro = options.intro;	//	introduction
	if (options.memo != undefined) this.memo = options.memo;	//	another introduction?
	
	if (options.KV != undefined) this.KV = options.KV;	// Saki volumes
	if (options.AV != undefined) this.AV = options.AV;	// Achiga volumes
	if (options.SV != undefined) this.SV = options.SV;	// Shinohayu volumes
	if (options.KA != undefined) this.KA = options.KA;	// Saki anime
	if (options.AA != undefined) this.AA = options.AA;	// Achiga anime
	if (options.ZA != undefined) this.ZA = options.ZA;	// Zenkoku anime
	
	if (options.flag != undefined) this.flag = options.flag; // Selected by default
}

//	show school
function displaySchool(id) {
	if (id == 0) return "";
	if (id == 1) return "Pro";
	if (id == 2) return "Commentator";
	if (id == 3) return "Family";
	if (id == 90) return "Achiga Children's Mahjong Club";
	var i;
	for(i in schools) {
		if(schools[i].id == id) {
			return schools[i].name + " (" + schools[i].area + ")";
		}
	}
	return "";
}

var schools = new Array();
//////////////////////////////////////////////////////////////////////
// Nagano
schools.push(new School(10, "Kiyosumi", "Nagano", {KV:1, KA:true, AA:true, ZA:true, AV:1, flag:true}));
schools.push(new School(11, "Ryuumonbuchi", "Nagano", {KV:1, KA:true, AA:true, ZA:true, AV:1, flag:true}));
schools.push(new School(12, "Kazekoshi", "Nagano", {KV:1, KA:true, AA:true, ZA:true, AV:3, flag:true}));
schools.push(new School(13, "Tsuruga", "Nagano", {KV:1, KA:true, AA:true, ZA:true, AV:3, flag:true}));
schools.push(new School(14, "Takatoobara", "Nagano", {KV:1, KA:true, ZA:true}));
schools.push(new School(15, "Imamiya", "Nagano", {KV:1, KA:true}));
schools.push(new School(16, "East Chikuma", "Nagano", {KV:1, KA:true}));
schools.push(new School(17, "Toufukuji", "Nagano", {KV:1, KA:true}));
schools.push(new School(18, "Hirataki", "Nagano", {KV:7, KA:true}));
//////////////////////////////////////////////////////////////////////
// Nara
schools.push(new School(20, "Achiga", "Nara", {KV:11, AA:true, ZA:true, AV:1, SV:1, flag:true}));
schools.push(new School(21, "Bansei", "Nara", 0, {AA:true, AV:1}));
//////////////////////////////////////////////////////////////////////
// Shimane
schools.push(new School(70, "Yumachi", "Shimane", {SV:1}));
//////////////////////////////////////////////////////////////////////
// National seed schools
schools.push(new School(30, "Shiraitodai", "West Tokyo", {KV:7, KA:true, AA:true, ZA:true, AV:2, flag:true}));
schools.push(new School(31, "Rinkai", "East Tokyo", {KV:7, KA:true, AA:true, ZA:true, flag:true}));
schools.push(new School(32, "Senriyama", "North Osaka", {AA:true, AV:1, ZA:true, flag:true}));
schools.push(new School(33, "Eisui", "Kagoshima", {KV:7, KA:true, AA:true, ZA:true, flag:true}));
//////////////////////////////////////////////////////////////////////
// Other national schools (side B)
schools.push(new School(41, "Himematsu", "South Osaka", {KV:8, AA:true, ZA:true, flag:true}));
schools.push(new School(42, "Miyamori", "Iwate", {KV:8, AA:true, ZA:true, flag:true}));
schools.push(new School(43, "Karouto", "Hiroshima", {KV:8, ZA:true}));
schools.push(new School(44, "Hida", "Gifu", {KV:8, ZA:true}));
schools.push(new School(45, "Kuratsuki", "Ishikawa", {KV:8, ZA:true}));
schools.push(new School(46, "Usuzan", "South Hokkaido", {KV:11, AA:true, ZA:true, flag:true}));
//////////////////////////////////////////////////////////////////////
// Other national schools (side A)
schools.push(new School(51, "Sanomo", "Okayama", {AA:true, AV:2}));
schools.push(new School(52, "Urabandai", "Fukushima", {AA:true, AV:2}));
schools.push(new School(53, "Imizu", "Toyama", {AA:true, AV:2}));
schools.push(new School(54, "Kentani", "Hyougo", {KV:12, AA:true, AV:2}));
schools.push(new School(55, "Koshigaya", "Saitama", {KV:12, AA:true, AV:2}));
schools.push(new School(56, "Shindouji", "Fukuoka", {AA:true, AV:3, ZA:true, flag:true}));
//////////////////////////////////////////////////////////////////////
// School from individuals
schools.push(new School(61, "Sangamaki", "North Osaka", {AA:true, AV:1}));
schools.push(new School(62, "Kyushu Sekizan", "Kagoshima", {KV:7, AA:true, AV:3}));
schools.push(new School(63, "Kakuouzan", "West Aichi", {AA:true, AV:3}));
schools.push(new School(64, "Koudo", "Shizuoka", {AA:true, AV:3}));
schools.push(new School(65, "Suwada", "Chiba", {AA:true, AV:3}));
schools.push(new School(66, "Shoan", "West Tokyo", {KV:7, KA:true, AA:true, AV:6}));
//////////////////////////////////////////////////////////////////////
// Other
schools.push(new School(1, "Pro", "", {KV:1, KA:true, AA:true, ZA:true, AV:1, SV:1, flag:true}));
schools.push(new School(2, "Commentator", "", {KV:1, KA:true, AA:true, ZA:true, AV:2, flag:true}));
schools.push(new School(3, "Family", "", {KV:1, KA:true, AA:true, AV:1}));
schools.push(new School(90, "Achiga Children's Mahjong Club", "", {KV:11, AA:true, AV:1}));
schools.push(new School(0, "Other", "",  {KV:1, KA:true, ZA:true}));
//////////////////////////////////////////////////////////////////////

var roles = new Array();
//////////////////////////////////////////////////////////////////////
// Kiyosumi
roles.push(new Role("Miyanaga Saki", "saki", 10, {intro:"嶺上使", KV:1, KA:true, AA:true, ZA:true, AV:1, flag:true, memo:"打麻將真開心啊\r\n巨乳控"}));
roles.push(new Role("Haramura Nodoka", "nodoka", 10, {intro:"小和和", KV:1, KA:true, AA:true, ZA:true, AV:1, flag:true, memo:"技術宅·歐派星人"}));
roles.push(new Role("Kataoka Yuuki", "yuki", 10, {KV:1, KA:true, AA:true, ZA:true, AV:4, flag:true, memo:"Tacos星人"}));
roles.push(new Role("Takei Hisa", "hisa", 10, {KV:1, KA:true, AA:true, ZA:true, AV:6, flag:true, memo:"博學的Surprise部長"}));
roles.push(new Role("Someya Mako", "mako", 10, {KV:1, KA:true, AA:true, ZA:true, AV:6, flag:true, memo:"眼鏡·海帶"}));
roles.push(new Role("Suga Kyoutarou", "kyoutarou", 10, {KV:1, KA:true, AA:true, ZA:true, memo:"犬"}));
roles.push(new Role("Etopen", "aitepan", 0, {intro:"原村和的企鵝玩偶", KV:1, KA:true, AA:true, ZA:true, AV:1, memo:"吉祥物"}));
// Ryuumonbuchi
roles.push(new Role("Amae Koromo", "kuromo", 11, {intro:"龍門渕家的大小姐", KV:1, KA:true, AA:true, ZA:true, AV:1, flag:true, memo:"衣不是小孩子！"}));
roles.push(new Role("Ryuumonbuchi Touka", "touka", 11, {intro:"龍門渕家的大小姐", KV:2, KA:true, AA:true, ZA:true, AV:1, flag:true, memo:"傲嬌·暗戀小和和中"}));
roles.push(new Role("Kunihiro Hajime", "hajime", 11, { KV:2, KA:true, AA:true, ZA:true, AV:1, flag:true, memo:"暗戀透華中"}));
roles.push(new Role("Sawamura Tomoki", "tomoki", 11, {KV:2, KA:true, AA:true, ZA:true, AV:1, flag:true}));
roles.push(new Role("Inoue Jun", "jun", 11, {KV:2, KA:true, AA:true, ZA:true, AV:1, flag:true, memo:"老子是女的！"}));
roles.push(new Role("Hagiyoshi", "hagiyoshi", 0, {intro:"龍門渕家的管家", KV:2, KA:true, AA:true, AV:1, memo:"萬能"}));
roles.push(new Role("Sugino Ayumu", "ayumu", 11, {intro:"龍門渕家的女僕", KV:2, KA:true, AA:true, AV:1}));
// Kazekoshi
roles.push(new Role("Fukuji Mihoko", "mihoko", 12, {intro:"機械白癡的Captain", KV:2, KA:true, ZA:true, AA:true, AV:3, flag:true, memo:"每天都思念著上埜同學"}));
roles.push(new Role("Ikeda Kana", "kana", 12, {KV:2, KA:true, AA:true, ZA:true, AV:3, flag:true, memo:"暗戀隊長中"}));
roles.push(new Role("Yoshitome Miharu", "miharu", 12, {KV:2, KA:true, AA:true, ZA:true, AV:3, flag:true,memo:"暗戀華菜中"}));
roles.push(new Role("Bundou Seika", "seika", 12, {KV:2, KA:true, ZA:true, memo: "在收集雀士卡片"}));
roles.push(new Role("Fukabori Sumiyo", "sumiyo", 12, {KV:2, KA:true, ZA:true, memo:"比福與小姐更加豐滿"}));
roles.push(new Role("Kubo Takako", "takako", 12, {intro:"監督", KV:2, KA:true, ZA:true, memo:"池田アアア!!!"}));
// Tsuruga
roles.push(new Role("Kajiki Yumi", "yumi", 13, {intro:"鶴賀的偽部長", KV:3, KA:true, AA:true, ZA:true, AV:3, flag:true}));
roles.push(new Role("Touyoko Momoko", "momoko", 13, {intro:"隱形小桃", KV:3, KA:true, AA:true, ZA:true, AV:2, flag:true, memo:"最喜歡前輩"}));
roles.push(new Role("Kanbara Satomi", "satomi", 13, {intro:"鶴賀的部長<br>哇哈哈", KV:3, KA:true, AA:true, ZA:true, AV:2, flag:true, memo:"哇哈哈"}));
roles.push(new Role("Tsuyama Mutsuki", "mutsuki", 13, {intro:"鶴賀的新部長", KV:2, KA:true, AA:true, ZA:true, AV:3, flag:true, memo:"在收集雀士卡片"}));
roles.push(new Role("Senoo Kaori", "kaori", 13, {intro:"蒲原的幼馴染", KV:3, KA:true, AA:true, ZA:true, AV:3, flag:true, memo:"初心"}));
// Shiraitodai
roles.push(new Role("Miyanaga Teru", "teru", 30, {intro:"冠軍☆", KV:1, KA:true, AA:true, ZA:true, AV:2, flag:true, memo:"電光毒龍鉆\r\n吃貨"}));
roles.push(new Role("Hirose Sumire", "sumire", 30, {intro:"sharp☆shooter", KV:7, KA:true, AA:true, ZA:true, AV:2, flag:true, memo:"吐槽役"}));
roles.push(new Role("Oohoshi Awai", "awashi", 30, {intro:"超新星☆<br>高校100年生", KV:7, KA:true, AA:true, ZA:true, AV:2, flag:true, memo:"100執念笨淡組組長"}));
roles.push(new Role("Shibuya Takami", "takami", 30, {KV:7, KA:true, AA:true, ZA:true, AV:2, flag:true, memo:"茶子"}));
roles.push(new Role("Matano Seiko", "seiko", 30, {intro:"白糸台☆fisher", KV:7, KA:true, AA:true, ZA:true, AV:2, flag:true, memo:"釣魚"}));
// Eisui
roles.push(new Role("Jindai Komaki", "komaki", 33, {intro:"霧島神宮的公主", KV:7, KA:true, AA:true, ZA:true, flag:true, memo:"吃貨·瞌睡蟲"}));
roles.push(new Role("Iwato Kasumi", "kasumi", 33, {intro:"巫女·六女仙之一", KV:7, KA:true, AA:true, ZA:true, flag:true, memo:"黑黑霞"}));
roles.push(new Role("Usuzumi Hatsumi", "hatsumi", 33, {intro:"巫女·六女仙之一", KV:7, KA:true, AA:true, ZA:true, flag:true, memo:"雖然特意叮囑了但還是被塞(ry"}));
roles.push(new Role("Takimi Haru", "haru", 33, {intro:"巫女·六女仙之一<br>無口·愛吃黑糖", KV:7, KA:true, AA:true, ZA:true, flag:true, memo:"黑糖"}));
roles.push(new Role("Karijuku Tomoe", "tomoe", 33, {intro:"巫女·六女仙之一", KV:7, KA:true, AA:true, ZA:true, flag:true, memo:"受"}));
roles.push(new Role("Iwato Akise", "akise", 33, {intro:"巫女·六女仙之一<br>中等部的學員", KV:11}));
roles.push(new Role("Jisso Yuu", "jisso", 33, {intro:"中等部的學員", KV:11}));
// Rinkai
roles.push(new Role("Nelly Virsaladze", "nelly", 31, {intro:"", KV:7, KA:true, ZA:true, flag:true, memo:"小紅帽"}));
roles.push(new Role("Choe Myeonghwa", "chei", 31, {intro:"風神", KV:7, KA:true, AA:true, ZA:true, flag:true}));
roles.push(new Role("Tsujigaito Satoha", "satoha", 31, {intro:"去年個人戰第三名", KV:7, KA:true, AA:true, ZA:true, flag:true, memo:"極道大小姐"}));
roles.push(new Role("Megan Davin", "megan", 31, {intro:"愛吃拉麵", KV:7, KA:true, AA:true, ZA:true, flag:true, memo:"拉麵小王子"}));
roles.push(new Role("Hao Huiyu", "hao", 31, {intro:"來自香港", KV:7, KA:true, ZA:true, flag:true, memo:"港妹"}));
roles.push(new Role("Alexandra Windheim", "rinkai", 31, {intro:"貪婪的監督", KV:11, memo:"胸部和臀部都不豐滿"}));
// Himematsu
roles.push(new Role("Atago Hiroe", "hiroe", 41, {intro:"姬松的主將", KV:8, AA:true, ZA:true, AV:3, flag:true, memo:"雖然是笨蛋但是很厲害\r\n章魚"}));
roles.push(new Role("Suehara Kyouko", "kyouko", 41, {intro:"姬松的軍師", KV:8, AA:true, ZA:true, flag:true, memo:"暗戀善野监督中·悲劇"}));
roles.push(new Role("Atago Kinue", "kinue", 41, {intro:"愛宕洋榎的妹妹", KV:8, AA:true, ZA:true, flag:true, memo:"暗戀姐姐中\r\n花枝"}));
roles.push(new Role("Mase Yuuko", "yuiko", 41, {KV:8, AA:true, ZA:true, flag:true, memo:"篤見老師的天使"}));
roles.push(new Role("Ueshige Suzu", "suzu", 41, {intro:"炸彈", KV:8, AA:true, ZA:true, flag:true}));
roles.push(new Role("Akasaka Ikuno", "ikuno", 41, {intro:"代理監督", KV:8, AA:true, ZA:true, memo:"喜歡調戲小末原\r\n秘技·人心掌控"}));
roles.push(new Role("Zenno Kazumi", "zenno", 41, {intro:"監督", KV:11, ZA:true, memo:"小末原朝思暮想中"}));
// Miyamori
roles.push(new Role("Anetai Toyone", "toyone", 42, {KV:8, AA:true, ZA:true, flag:true}));
roles.push(new Role("Kakura Kurumi", "kurumi", 42, {KV:8, ZA:true, flag:true, memo:"吐槽起來超強力的噢"}));
roles.push(new Role("Usuzawa Sae", "sae", 42, {KV:8, ZA:true, AA:true, flag:true, memo:"敢淘氣的話就把你塞住"}));
roles.push(new Role("Aislinn Wishart", "aislinn", 42, {intro:"新西蘭留學生", KV:8, ZA:true, flag:true, memo:"偽阿美"}));
roles.push(new Role("Kosegawa Shiromi", "shiromi", 42, {KV:8, AA:true, ZA:true, flag:true, memo:"超級大懶蟲"}));
roles.push(new Role("Kumakura Toshi", "toshi", 42, {intro:"監督",KV:8, AA:true, ZA:true, AV:1}));
roles.push(new Role("Ubukata Aoi", "aoi", 42, {intro:"白望的同班同學",KV:8, ZA:true}));
// Usuzan
roles.push(new Role("Motouchi Naruka", "naruka", 46, {intro:"有珠山的先锋", KV:11, AA:true, flag:true, ZA:true}));
roles.push(new Role("Himori Chikako", "chikako", 46, {intro:"有珠山的次鋒", KV:11, AA:true, flag:true}));
roles.push(new Role("Shishihara Sawaya", "sawaya", 46, {intro:"", KV:11, AA:true, ZA:true, flag:true, memo:"巧克力"}));
roles.push(new Role("Iwadate Yuan", "yuan", 46, {intro:"", KV:11, AA:true, ZA:true, flag:true}));
roles.push(new Role("Maya Yukiko", "yukiko", 46,{intro:"", KV:11, AA:true, ZA:true, flag:true, memo:"打倒はやりん!"}));
// Achiga
roles.push(new Role("Takakumo Shizuno", "shizuno", 20, {intro:"", KV:11, AA:true, ZA:true, AV:1, SV:0, flag:true, memo:"100執念笨蛋組成員"}));
roles.push(new Role("Atarashi Ako", "ako", 20, {intro:"", KV:11, AA:true, ZA:true, AV:1, SV:0, flag:true, memo:"好像是暗戀穩乃中"}));
roles.push(new Role("Matsumi Kuro", "kuro", 20, {intro:"“Dragon Lord”<br>收集寶牌", KV:11, AA:true, ZA:true, AV:1, SV:0, flag:true, memo:"天然"}));
roles.push(new Role("Matsumi Yuu", "yuu", 20, {intro:"松実玄的姐姐<br>收集溫暖的牌", KV:11, AA:true, ZA:true, AV:1, SV:0, flag:true, memo:"姐姐"}));
roles.push(new Role("Sagimori Arata", "arata", 20, {intro:"長得很像小林立<br>戴著保齡球手套", KV:11, AA:true, ZA:true, AV:1, SV:0, flag:true, memo:"暗戀教練中"}));
roles.push(new Role("Akado Harue", "harue", 20, {intro:"監督<br>“阿知賀的傳奇”", KV:9, AA:true, AV:1, SV:0, flag:true, memo:"苦戀著小鍛治健夜"}));
// Yumachi
roles.push(new Role("Shiratsuki Shino", "shino", 70, {intro:"打麻將好快樂", SV:1, memo:"跑步速度約12Km/h"}));
roles.push(new Role("Ishitobi Kanna", "kanna", 70, {intro:"我根本不喜歡麻將", SV:1, memo:"傲嬌"}));
roles.push(new Role("Inamura Kyouka", "kyouka", 70, {intro:"", SV:1, memo:""}));
roles.push(new Role("Mototsune Rena", "rena", 70, {intro:"", SV:1, memo:""}));
roles.push(new Role("Kanazawa Himari", "himari", 70, {intro:"", SV:1, memo:""}));
// Bansei
roles.push(new Role("Kobashiri Yae", "yae", 21, {intro:"讓你們看看<br>王者的打法!!", AA:true, AV:1, flag:true}));
roles.push(new Role("Maruse Noriko", "noriko", 21, {AA:true, AV:1}));
roles.push(new Role("Kimura Hina", "hina", 21, {AA:true, AV:1}));
roles.push(new Role("Ueda Ryouko", "ryouko", 21, {AA:true, AV:1}));
roles.push(new Role("Tatsumi Yuka", "yuka", 21, {AA:true, AV:1}));
roles.push(new Role("Okahashi Hatsuse", "hatsuse", 21, {intro:"啦啦隊", AA:true, AV:1, flag:true, memo:"暗戀著憧???"}));
// Senriyama
roles.push(new Role("Onjouji Toki", "toki", 32, {intro:"病弱的先知<br>枕神小怜", AA:true, AV:4, ZA:true, flag:true, memo:"竜華的大腿…"}));
roles.push(new Role("Shimizudani Ryuuka", "ryuuka", 32, {intro:"千里山的部長<br>一直照顧著怜", AA:true, ZA:true, AV:4, flag:true}));
roles.push(new Role("Eguchi Sera", "seira", 32, {intro:"千里山的前ACE<br>不喜歡穿裙子", KV:12, AA:true, ZA:true, AV:4, flag:true}));
roles.push(new Role("Funakubo Hiroko", "hiroko", 32, {intro:"船Q<br>擅長分析數據", KV:12, AA:true, ZA:true, AV:4, flag:true}));
roles.push(new Role("Nijou Izumi", "izumi", 32, {intro:"目標是高一最強", KV:12, AA:true, ZA:true, AV:1, flag:true}));
roles.push(new Role("Atago Masae", "masae", 32, {intro:"千里山的監督", AA:true, AV:4, memo:"愛宕姉妹之母?"}));
// Shindouji
roles.push(new Role("Hanada Kirame", "kirame", 56, {intro:"好棒！", KV:9, AA:true, ZA:true, AV:3, flag:true, memo:"すばらっ！"}));
roles.push(new Role("Yasukouchi Yoshiko", "yoshiko2", 56, {intro:"新道寺的次鋒", AA:true, ZA:true, AV:3, flag:true}));
roles.push(new Role("Ezaki Hitomi", "hitomi", 56,{intro:"都是政治的錯", AA:true, ZA:true, AV:3, flag:true, memo:"吸～"}));
roles.push(new Role("Shirouzu Mairu", "mairu", 56, {intro:"新道寺的部長<br>ACE中的ACE", AA:true, ZA:true, AV:3, flag:true, memo:"愉♀悅"}));
roles.push(new Role("Tsuruta Himeko", "himeko", 56, {intro:"新道寺的雙ACE之一", AA:true, ZA:true, AV:3, flag:true, memo:"和哩不管是私生活還是比賽都是搭檔☆"}));
// Kentani 
roles.push(new Role("Tsubakino Miyuki", "miyuki", 54, {intro:"阿知賀二回戰對手<br>真是的～", KV:12, AA:true, AV:2,memo:"も—"}));
roles.push(new Role("Yorifuji Sumiko", "sumiko", 54, {intro:"阿知賀二回戰對手", AA:true, AV:2}));
roles.push(new Role("Furuzaka Kozue", "kozue", 54, {intro:"阿知賀二回戰對手<br>劒谷的部長", AA:true, AV:2}));
roles.push(new Role("Morigaki Yuuka", "yuuka", 54, {intro:"阿知賀二回戰對手<br>歸國子女", KV:12, AA:true, AV:2,memo:"で—"}));
roles.push(new Role("Yasufuku Riko", "riko", 54, {intro:"阿知賀二回戰對手", KV:12, AA:true, AV:2}));
// Koshigaya
roles.push(new Role("Arai Sophia", "sofia", 55, {intro:"阿知賀二回戰對手", KV:12, AA:true, AV:2}));
roles.push(new Role("Asami Hanako", "hanako", 55, {intro:"阿知賀二回戰對手", KV:12, AA:true, AV:2}));
roles.push(new Role("Mizumura Shiori", "shiori", 55, {intro:"阿知賀二回戰對手", KV:12, AA:true, AV:2}));
roles.push(new Role("Utsugi Tamago", "tamago", 55, {intro:"阿知賀二回戰對手", KV:12, AA:true, AV:2}));
roles.push(new Role("Yagihara Keiko", "keiko", 55, {intro:"阿知賀二回戰對手", AA:true, AV:2}));
// Sanomo
roles.push(new Role("Shinmen Nagi", "nagi", 51, {intro:"阿知賀一回戰對手", AA:true, AV:2, memo:"女武藏"}));
// Urabandai
roles.push(new Role("Moriai Manami", "manami", 52, {intro:"阿知賀一回戰對手", AA:true, ZA:true, AV:2}));
// Imizu
roles.push(new Role("Terasaki Yuzuki", "yudumi", 53, {intro:"阿知賀一回戰對手", AA:true, ZA:true, AV:2}));
// Karouto
roles.push(new Role("Sasano Ichigo", "ichigo", 43, {intro:"姬松一回戰對手<br>偶像", KV:8, ZA:true, AA:true, AV:4}));
// Hida
roles.push(new Role("Fushiya Natsu", "natsu", 44, {intro:"姬松一回戰對手", KV:8}));
// Kuratsuki
roles.push(new Role("Noguchi Ayaka", "ayaka", 45, {intro:"姬松一回戰對手", KV:8}));
// Individuals
roles.push(new Role("Arakawa Kei", "kei", 61, {intro:"去年全國個人賽第二", KV:11, KA:true, AA:true, AV:1, flag:true, memo:"護士"}));
roles.push(new Role("Fujiwara Rise", "rise", 62, {intro:"鹿兒島個人賽代表",  AA:true, AV:3, memo:"仙女"}));
roles.push(new Role("Tsuiki Moko", "moko", 63, {intro:"東海王者",  AA:true, AV:3}));
roles.push(new Role("Nakiri Ranko", "ranko", 64, {intro:"靜岡個人賽第一",  AA:true, AV:3}));
roles.push(new Role("Shimozuki Ito", "ito", 65, {intro:"千葉MVP", AA:true, AV:3}));
roles.push(new Role("Nanpo Kazue", "sue", 18, {intro:"在長野個人賽中<br>表現優異", KV:7, KA:true, flag:true}));
roles.push(new Role("Tajihi Mayuko", "mayuko", 66, {intro:"西東京決賽大將", KV:7, KA:true, AA:true, AV:6}));
// Takatoobara
roles.push(new Role("Yumeno Maho", "maho", 14,{intro:"原村和的學妹", KV:2, KA:true, ZA:true}));
roles.push(new Role("Murohashi Hiroko", "hiroko2", 14,{intro:"原村和的學妹", KV:2, KA:true, ZA:true}));
// Imamiya
roles.push(new Role("Kadomatsu Youko", "youko", 15,{intro:"清澄縣預賽一回戰對手", KV:2, KA:true}));
roles.push(new Role("Douyama Yukari", "yukari", 15,{intro:"清澄縣預賽一回戰對手", KV:2, KA:true}));
roles.push(new Role("Tanaka Mai", "mai", 15, {intro:"清澄縣預賽一回戰對手", KV:2, KA:true}));
// East Chikuma
roles.push(new Role("Kamigaki Megumi", "agumi", 16, {intro:"清澄縣預賽一回戰對手", KV:2, KA:true}));
roles.push(new Role("Tsuchiya Yuri", "yuri", 16,{intro:"清澄縣預賽一回戰對手", KV:2, KA:true}));
roles.push(new Role("Ogawa Serika", "serika", 16,{intro:"清澄縣預賽一回戰對手", KV:2, KA:true}));
// Toufukuji
roles.push(new Role("Nagamori Kazuko", "kazuko", 17, {intro:"清澄縣預賽一回戰對手", KV:2, KA:true}));
roles.push(new Role("Mise Akiko", "akiko", 17, {intro:"清澄縣預賽一回戰對手", KV:2, KA:true}));
roles.push(new Role("Kawachi Chisemi", "chisemi", 17, {intro:"清澄縣預賽一回戰對手", KV:2, KA:true}));
// Commentators
roles.push(new Role("Fujita Yasuko", "yasuko", 1, {intro:"長野縣預選解說", KV:1, ZA:true, flag:true, memo:"加量豬扒飯"}));
roles.push(new Role("Kokaji Sukoya", "sukoya", 1, {intro:"全國大賽解說", KV:7, ZA:true, AA:true, AV:1, SV:0, flag:true, memo:"不像名字般健壯"}));
roles.push(new Role("Fukuyo Kouko", "kouko", 2, {intro:"", KV:7, AA:true, AV:3, ZA:true, flag:true, memo:"不像名字般豐滿"}));
roles.push(new Role("Mihirogi Uta", "uta", 1, {intro:"全國大賽解說", KV:11, AA:true, AV:2, flag:true, memo:"不知道~"}));
roles.push(new Role("Hariu Eri", "eri", 2, {intro:"", KV:11, AA:true, AV:2, flag:true}));
roles.push(new Role("Oonuma Shuuichirou", "numa", 1, {intro:"鹿兒島預選解說", KV:7, memo:"特立獨行"}));
roles.push(new Role("Kainou Yoshiko", "yoshiko3", 1, {intro:"", KV:11, SV:0, ZA:true}));
roles.push(new Role("Satou Yuuko", "yuuko", 2, {intro:"", ZA:true}));
roles.push(new Role("Mizuhara Hayari", "hayari", 1, {intro:"牌的姐姐<br>偶像雀士(28歲)", KV:11, SV:1}));
roles.push(new Role("Noyori Risa", "risa", 1, {intro:"總是撅著嘴", KV:11, SV:0, ZA:true}));
roles.push(new Role("Murayoshi Misaki", "misaki", 2, {intro:"", KV:11}));
roles.push(new Role("Kasugai Mafuka", "mafuka", 1, {intro:"牌的姐姐", SV:3, memo:""}));
roles.push(new Role("Mishina Kenta", "man1", 2, {KV:2, KA:true}));
// Media
roles.push(new Role("Nishida Junko", "zyunko", 0, {intro:"雜誌《週刊麻將TODAY》記者", KV:1, KA:true, AA:true, ZA:true, AV:6}));
roles.push(new Role("Yamaguchi Daisuke", "man2", 0, {intro:"雜誌《週刊麻將TODAY》攝影師", KV:1, KA:true}));
roles.push(new Role("Hanibuchi Kumiko", "kumiko", 0, {intro:"雜誌《週刊麻將TODAY》記者", KV:11, AA:true, ZA:true, AV:6}));
// Family
roles.push(new Role("Miyanaga Kai", "sakipapa", 3,{intro:"宮永家的爸爸", KV:1, KA:true}));
roles.push(new Role("Haramura Kei", "nodokapapa", 3, {intro:"原村和的父親", KV:1, KA:true}));
roles.push(new Role("Nanpo Satoru", "minamiura", 1,{intro:"南浦數繪的祖父<br>職業雀士", KA:true} ));
roles.push(new Role("Atarashi Nozomi", "nozomi", 3, {intro:"新子憧的姐姐<br>前阿知賀麻將部成員", AA:true, AV:1}));
roles.push(new Role("Iwato Grandmother", "iwato", 3, {intro:"石戸霞的祖母", KV:11}));
roles.push(new Role("Sagimori Kimiko", "sagimori", 3, {intro:"鷺森灼的祖母<br>經營著保齡球館", AA:true, AV:5}));
roles.push(new Role("Matsumi Tsuyuko", "matsumi", 3, {intro:"松実宥、玄的母親<br>很早就過世了", AA:true, AV:4}));
roles.push(new Role("Ikeda Hina", "ikedahina", 3, {intro:"池田華菜的三胞胎妹妹之①", KV:6, KA:true}));
roles.push(new Role("Ikeda Nazuna", "ikedanazuna", 3, {intro:"池田華菜的三胞胎妹妹之②", KV:6, KA:true}));
roles.push(new Role("Ikdea Shirona", "ikedashirona", 3, {intro:"池田華菜的三胞胎妹妹之③", KV:6, KA:true}));
roles.push(new Role("Shiratsuki Nana", "nana", 3, {intro:"白筑慕的母親<br>現在失蹤中", SV:1, memo:""}));
roles.push(new Role("Shiratsuki Kousuke", "kosuke", 3, {intro:"白筑慕的舅舅", SV:1, memo:""}));
// Achiga Children's Mahjong Club
roles.push(new Role("Gibbard Sakurako", "sakurako", 90, {KV:11, AA:true, AV:1, flag:true, memo:"熊孩子"}));
roles.push(new Role("Yamatani Hina", "hina2",90, {intro:"兒童麻將Club中<br>最小的2人之一", KV:11, AA:true, AV:1, memo:"但是說話方式卻很獨特"}));
roles.push(new Role("Shizaki Aya", "aya", 90, {intro:"經常被桜子跟雛<br>耍得團團轉..", KV:11, AA:true, AV:1}));
roles.push(new Role("Kirita Rin", "rin", 90, {intro:"經常用前髪遮住右眼", AA:true, AV:1}));
roles.push(new Role("Tatsumi Haruna", "haruna", 90, {intro:"帽子是標誌", AA:true, AV:1, memo:"就是說本體是帽子"}));
roles.push(new Role("Yoneda Mirai", "mirai",90, {intro:"糰子髮型很可愛", AA:true, AV:1, memo:"就是說本體是糰子"}));
roles.push(new Role("Sasaoka Yoshiko", "yoshiko", 90, {intro:"很適合髪帶", AA:true, AV:1, memo:"就是說本體是髪帶"}));
// Other
roles.push(new Role("Naiki Ichita", "ichita", 0, {intro:"清澄高校學生議事會副會長", ZA:true, KV:1, memo:"據說是蘿莉控"}));
roles.push(new Role("Shishiba Natsuki", "natsuki", 0, {intro:"清澄高校學生議事會書記", ZA:true, KV:8}));
roles.push(new Role("Teradaira Ayano", "ayano", 0, {intro:"清澄高校學生議事會會計", ZA:true, KV:8}));
roles.push(new Role("？", "shoujo", 0, {intro:"宮永咲回憶中的少女", ZA:true, KV:11}));
roles.push(new Role("Sakimura Yuuichi", "yuuichi", 0, {intro:"松江兒童麻將大賽<br>決賽中唯一的男生", SV:1, memo:""}));
roles.push(new Role("Sudou Shunto", "sudou", 0, {intro:"當鋪老闆", SV:1, memo:""}));