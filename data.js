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
roles.push(new Role("Miyanaga Saki", "saki", 10, {KV:1, KA:true, AA:true, ZA:true, AV:1, flag:true}));
roles.push(new Role("Haramura Nodoka", "nodoka", 10, {KV:1, KA:true, AA:true, ZA:true, AV:1, flag:true}));
roles.push(new Role("Kataoka Yuuki", "yuki", 10, {KV:1, KA:true, AA:true, ZA:true, AV:4, flag:true}));
roles.push(new Role("Takei Hisa", "hisa", 10, {KV:1, KA:true, AA:true, ZA:true, AV:6, flag:true}));
roles.push(new Role("Someya Mako", "mako", 10, {KV:1, KA:true, AA:true, ZA:true, AV:6, flag:true}));
roles.push(new Role("Suga Kyoutarou", "kyoutarou", 10, {KV:1, KA:true, AA:true, ZA:true}));
roles.push(new Role("Etopen", "aitepan", 0, {KV:1, KA:true, AA:true, ZA:true, AV:1}));
// Ryuumonbuchi
roles.push(new Role("Amae Koromo", "kuromo", 11, {KV:1, KA:true, AA:true, ZA:true, AV:1, flag:true}));
roles.push(new Role("Ryuumonbuchi Touka", "touka", 11, {KV:2, KA:true, AA:true, ZA:true, AV:1, flag:true}));
roles.push(new Role("Kunihiro Hajime", "hajime", 11, { KV:2, KA:true, AA:true, ZA:true, AV:1, flag:true}));
roles.push(new Role("Sawamura Tomoki", "tomoki", 11, {KV:2, KA:true, AA:true, ZA:true, AV:1, flag:true}));
roles.push(new Role("Inoue Jun", "jun", 11, {KV:2, KA:true, AA:true, ZA:true, AV:1, flag:true}));
roles.push(new Role("Hagiyoshi", "hagiyoshi", 0, {KV:2, KA:true, AA:true, AV:1}));
roles.push(new Role("Sugino Ayumu", "ayumu", 11, {KV:2, KA:true, AA:true, AV:1}));
// Kazekoshi
roles.push(new Role("Fukuji Mihoko", "mihoko", 12, {KV:2, KA:true, ZA:true, AA:true, AV:3, flag:true}));
roles.push(new Role("Ikeda Kana", "kana", 12, {KV:2, KA:true, AA:true, ZA:true, AV:3, flag:true}));
roles.push(new Role("Yoshitome Miharu", "miharu", 12, {KV:2, KA:true, AA:true, ZA:true, AV:3, flag:true}));
roles.push(new Role("Bundou Seika", "seika", 12, {KV:2, KA:true, ZA:true}));
roles.push(new Role("Fukabori Sumiyo", "sumiyo", 12, {KV:2, KA:true, ZA:true}));
roles.push(new Role("Kubo Takako", "takako", 12, {KV:2, KA:true, ZA:true}));
// Tsuruga
roles.push(new Role("Kajiki Yumi", "yumi", 13, {KV:3, KA:true, AA:true, ZA:true, AV:3, flag:true}));
roles.push(new Role("Touyoko Momoko", "momoko", 13, {KV:3, KA:true, AA:true, ZA:true, AV:2, flag:true}));
roles.push(new Role("Kanbara Satomi", "satomi", 13, {KV:3, KA:true, AA:true, ZA:true, AV:2, flag:true}));
roles.push(new Role("Tsuyama Mutsuki", "mutsuki", 13, {KV:2, KA:true, AA:true, ZA:true, AV:3, flag:true}));
roles.push(new Role("Senoo Kaori", "kaori", 13, {KV:3, KA:true, AA:true, ZA:true, AV:3, flag:true}));
// Shiraitodai
roles.push(new Role("Miyanaga Teru", "teru", 30, {KV:1, KA:true, AA:true, ZA:true, AV:2, flag:true}));
roles.push(new Role("Hirose Sumire", "sumire", 30, {KV:7, KA:true, AA:true, ZA:true, AV:2, flag:true}));
roles.push(new Role("Oohoshi Awai", "awashi", 30, {KV:7, KA:true, AA:true, ZA:true, AV:2, flag:true}));
roles.push(new Role("Shibuya Takami", "takami", 30, {KV:7, KA:true, AA:true, ZA:true, AV:2, flag:true}));
roles.push(new Role("Matano Seiko", "seiko", 30, {KV:7, KA:true, AA:true, ZA:true, AV:2, flag:true}));
// Eisui
roles.push(new Role("Jindai Komaki", "komaki", 33, {KV:7, KA:true, AA:true, ZA:true, flag:true}));
roles.push(new Role("Iwato Kasumi", "kasumi", 33, {KV:7, KA:true, AA:true, ZA:true, flag:true}));
roles.push(new Role("Usuzumi Hatsumi", "hatsumi", 33, {KV:7, KA:true, AA:true, ZA:true, flag:true}));
roles.push(new Role("Takimi Haru", "haru", 33, {KV:7, KA:true, AA:true, ZA:true, flag:true}));
roles.push(new Role("Karijuku Tomoe", "tomoe", 33, {KV:7, KA:true, AA:true, ZA:true, flag:true}));
roles.push(new Role("Iwato Akise", "akise", 33, {KV:11}));
roles.push(new Role("Jisso Yuu", "jisso", 33, {KV:11}));
// Rinkai
roles.push(new Role("Nelly Virsaladze", "nelly", 31, {KV:7, KA:true, ZA:true, flag:true}));
roles.push(new Role("Choe Myeonghwa", "chei", 31, {KV:7, KA:true, AA:true, ZA:true, flag:true}));
roles.push(new Role("Tsujigaito Satoha", "satoha", 31, {KV:7, KA:true, AA:true, ZA:true, flag:true}));
roles.push(new Role("Megan Davin", "megan", 31, {KV:7, KA:true, AA:true, ZA:true, flag:true}));
roles.push(new Role("Hao Huiyu", "hao", 31, {KV:7, KA:true, ZA:true, flag:true}));
roles.push(new Role("Alexandra Windheim", "rinkai", 31, {KV:11}));
// Himematsu
roles.push(new Role("Atago Hiroe", "hiroe", 41, {KV:8, AA:true, ZA:true, AV:3, flag:true}));
roles.push(new Role("Suehara Kyouko", "kyouko", 41, {KV:8, AA:true, ZA:true, flag:true}));
roles.push(new Role("Atago Kinue", "kinue", 41, {KV:8, AA:true, ZA:true, flag:true}));
roles.push(new Role("Mase Yuuko", "yuiko", 41, {KV:8, AA:true, ZA:true, flag:true}));
roles.push(new Role("Ueshige Suzu", "suzu", 41, {KV:8, AA:true, ZA:true, flag:true}));
roles.push(new Role("Akasaka Ikuno", "ikuno", 41, {KV:8, AA:true, ZA:true}));
roles.push(new Role("Zenno Kazumi", "zenno", 41, {KV:11, ZA:true}));
// Miyamori
roles.push(new Role("Anetai Toyone", "toyone", 42, {KV:8, AA:true, ZA:true, flag:true}));
roles.push(new Role("Kakura Kurumi", "kurumi", 42, {KV:8, ZA:true, flag:true}));
roles.push(new Role("Usuzawa Sae", "sae", 42, {KV:8, ZA:true, AA:true, flag:true}));
roles.push(new Role("Aislinn Wishart", "aislinn", 42, {KV:8, ZA:true, flag:true}));
roles.push(new Role("Kosegawa Shiromi", "shiromi", 42, {KV:8, AA:true, ZA:true, flag:true}));
roles.push(new Role("Kumakura Toshi", "toshi", 42, {KV:8, AA:true, ZA:true, AV:1}));
roles.push(new Role("Ubukata Aoi", "aoi", 42, {KV:8, ZA:true}));
// Usuzan
roles.push(new Role("Motouchi Naruka", "naruka", 46, {KV:11, AA:true, flag:true, ZA:true}));
roles.push(new Role("Himori Chikako", "chikako", 46, {KV:11, AA:true, flag:true}));
roles.push(new Role("Shishihara Sawaya", "sawaya", 46, {KV:11, AA:true, ZA:true, flag:true}));
roles.push(new Role("Iwadate Yuan", "yuan", 46, {KV:11, AA:true, ZA:true, flag:true}));
roles.push(new Role("Maya Yukiko", "yukiko", 46,{KV:11, AA:true, ZA:true, flag:true}));
// Achiga
roles.push(new Role("Takakumo Shizuno", "shizuno", 20, {KV:11, AA:true, ZA:true, AV:1, SV:0, flag:true}));
roles.push(new Role("Atarashi Ako", "ako", 20, {KV:11, AA:true, ZA:true, AV:1, SV:0, flag:true}));
roles.push(new Role("Matsumi Kuro", "kuro", 20, {KV:11, AA:true, ZA:true, AV:1, SV:0, flag:true}));
roles.push(new Role("Matsumi Yuu", "yuu", 20, {KV:11, AA:true, ZA:true, AV:1, SV:0, flag:true}));
roles.push(new Role("Sagimori Arata", "arata", 20, {KV:11, AA:true, ZA:true, AV:1, SV:0, flag:true}));
roles.push(new Role("Akado Harue", "harue", 20, {KV:9, AA:true, AV:1, SV:0, flag:true}));
// Yumachi
roles.push(new Role("Shiratsuki Shino", "shino", 70, {SV:1}));
roles.push(new Role("Ishitobi Kanna", "kanna", 70, {SV:1}));
roles.push(new Role("Inamura Kyouka", "kyouka", 70, {SV:1}));
roles.push(new Role("Mototsune Rena", "rena", 70, {SV:1}));
roles.push(new Role("Kanazawa Himari", "himari", 70, {SV:1}));
// Bansei
roles.push(new Role("Kobashiri Yae", "yae", 21, {AA:true, AV:1, flag:true}));
roles.push(new Role("Maruse Noriko", "noriko", 21, {AA:true, AV:1}));
roles.push(new Role("Kimura Hina", "hina", 21, {AA:true, AV:1}));
roles.push(new Role("Ueda Ryouko", "ryouko", 21, {AA:true, AV:1}));
roles.push(new Role("Tatsumi Yuka", "yuka", 21, {AA:true, AV:1}));
roles.push(new Role("Okahashi Hatsuse", "hatsuse", 21, {AA:true, AV:1, flag:true}));
// Senriyama
roles.push(new Role("Onjouji Toki", "toki", 32, {AA:true, AV:4, ZA:true, flag:true}));
roles.push(new Role("Shimizudani Ryuuka", "ryuuka", 32, {AA:true, ZA:true, AV:4, flag:true}));
roles.push(new Role("Eguchi Sera", "seira", 32, {KV:12, AA:true, ZA:true, AV:4, flag:true}));
roles.push(new Role("Funakubo Hiroko", "hiroko", 32, {KV:12, AA:true, ZA:true, AV:4, flag:true}));
roles.push(new Role("Nijou Izumi", "izumi", 32, {KV:12, AA:true, ZA:true, AV:1, flag:true}));
roles.push(new Role("Atago Masae", "masae", 32, {AA:true, AV:4}));
// Shindouji
roles.push(new Role("Hanada Kirame", "kirame", 56, {KV:9, AA:true, ZA:true, AV:3, flag:true}));
roles.push(new Role("Yasukouchi Yoshiko", "yoshiko2", 56, {AA:true, ZA:true, AV:3, flag:true}));
roles.push(new Role("Ezaki Hitomi", "hitomi", 56,{AA:true, ZA:true, AV:3, flag:true}));
roles.push(new Role("Shirouzu Mairu", "mairu", 56, {AA:true, ZA:true, AV:3, flag:true}));
roles.push(new Role("Tsuruta Himeko", "himeko", 56, {AA:true, ZA:true, AV:3, flag:true}));
// Kentani 
roles.push(new Role("Tsubakino Miyuki", "miyuki", 54, {KV:12, AA:true, AV:2}));
roles.push(new Role("Yorifuji Sumiko", "sumiko", 54, {AA:true, AV:2}));
roles.push(new Role("Furuzaka Kozue", "kozue", 54, {AA:true, AV:2}));
roles.push(new Role("Morigaki Yuuka", "yuuka", 54, {KV:12, AA:true, AV:2}));
roles.push(new Role("Yasufuku Riko", "riko", 54, {KV:12, AA:true, AV:2}));
// Koshigaya
roles.push(new Role("Arai Sophia", "sofia", 55, {KV:12, AA:true, AV:2}));
roles.push(new Role("Asami Hanako", "hanako", 55, {KV:12, AA:true, AV:2}));
roles.push(new Role("Mizumura Shiori", "shiori", 55, {KV:12, AA:true, AV:2}));
roles.push(new Role("Utsugi Tamago", "tamago", 55, {KV:12, AA:true, AV:2}));
roles.push(new Role("Yagihara Keiko", "keiko", 55, {AA:true, AV:2}));
// Sanomo
roles.push(new Role("Shinmen Nagi", "nagi", 51, {AA:true, AV:2}));
// Urabandai
roles.push(new Role("Moriai Manami", "manami", 52, {AA:true, ZA:true, AV:2}));
// Imizu
roles.push(new Role("Terasaki Yuzuki", "yudumi", 53, {AA:true, ZA:true, AV:2}));
// Karouto
roles.push(new Role("Sasano Ichigo", "ichigo", 43, {KV:8, ZA:true, AA:true, AV:4}));
// Hida
roles.push(new Role("Fushiya Natsu", "natsu", 44, {KV:8}));
// Kuratsuki
roles.push(new Role("Noguchi Ayaka", "ayaka", 45, {KV:8}));
// Individuals
roles.push(new Role("Arakawa Kei", "kei", 61, {KV:11, KA:true, AA:true, AV:1, flag:true}));
roles.push(new Role("Fujiwara Rise", "rise", 62, {AA:true, AV:3}));
roles.push(new Role("Tsuiki Moko", "moko", 63, {AA:true, AV:3}));
roles.push(new Role("Nakiri Ranko", "ranko", 64, {AA:true, AV:3}));
roles.push(new Role("Shimozuki Ito", "ito", 65, {AA:true, AV:3}));
roles.push(new Role("Nanpo Kazue", "sue", 18, {KV:7, KA:true, flag:true}));
roles.push(new Role("Tajihi Mayuko", "mayuko", 66, {KV:7, KA:true, AA:true, AV:6}));
// Takatoobara
roles.push(new Role("Yumeno Maho", "maho", 14,{KV:2, KA:true, ZA:true}));
roles.push(new Role("Murohashi Hiroko", "hiroko2", 14,{KV:2, KA:true, ZA:true}));
// Imamiya
roles.push(new Role("Kadomatsu Youko", "youko", 15,{KV:2, KA:true}));
roles.push(new Role("Douyama Yukari", "yukari", 15,{KV:2, KA:true}));
roles.push(new Role("Tanaka Mai", "mai", 15, {KV:2, KA:true}));
// East Chikuma
roles.push(new Role("Kamigaki Megumi", "agumi", 16, {KV:2, KA:true}));
roles.push(new Role("Tsuchiya Yuri", "yuri", 16,{KV:2, KA:true}));
roles.push(new Role("Ogawa Serika", "serika", 16,{KV:2, KA:true}));
// Toufukuji
roles.push(new Role("Nagamori Kazuko", "kazuko", 17, {KV:2, KA:true}));
roles.push(new Role("Mise Akiko", "akiko", 17, {KV:2, KA:true}));
roles.push(new Role("Kawachi Chisemi", "chisemi", 17, {KV:2, KA:true}));
// Commentators
roles.push(new Role("Fujita Yasuko", "yasuko", 1, {KV:1, ZA:true, flag:true}));
roles.push(new Role("Kokaji Sukoya", "sukoya", 1, {KV:7, ZA:true, AA:true, AV:1, SV:0, flag:true}));
roles.push(new Role("Fukuyo Kouko", "kouko", 2, {KV:7, AA:true, AV:3, ZA:true, flag:true}));
roles.push(new Role("Mihirogi Uta", "uta", 1, {KV:11, AA:true, AV:2, flag:true}));
roles.push(new Role("Hariu Eri", "eri", 2, {KV:11, AA:true, AV:2, flag:true}));
roles.push(new Role("Oonuma Shuuichirou", "numa", 1, {KV:7}));
roles.push(new Role("Kainou Yoshiko", "yoshiko3", 1, {KV:11, SV:0, ZA:true}));
roles.push(new Role("Satou Yuuko", "yuuko", 2, {ZA:true}));
roles.push(new Role("Mizuhara Hayari", "hayari", 1, {KV:11, SV:1}));
roles.push(new Role("Noyori Risa", "risa", 1, {KV:11, SV:0, ZA:true}));
roles.push(new Role("Murayoshi Misaki", "misaki", 2, {KV:11}));
roles.push(new Role("Kasugai Mafuka", "mafuka", 1, {SV:3}));
roles.push(new Role("Mishina Kenta", "man1", 2, {KV:2, KA:true}));
// Media
roles.push(new Role("Nishida Junko", "zyunko", 0, {KV:1, KA:true, AA:true, ZA:true, AV:6}));
roles.push(new Role("Yamaguchi Daisuke", "man2", 0, {KV:1, KA:true}));
roles.push(new Role("Hanibuchi Kumiko", "kumiko", 0, {KV:11, AA:true, ZA:true, AV:6}));
// Family
roles.push(new Role("Miyanaga Kai", "sakipapa", 3,{KV:1, KA:true}));
roles.push(new Role("Haramura Kei", "nodokapapa", 3, {KV:1, KA:true}));
roles.push(new Role("Nanpo Satoru", "minamiura", 1,{KA:true} ));
roles.push(new Role("Atarashi Nozomi", "nozomi", 3, {AA:true, AV:1}));
roles.push(new Role("Iwato Grandmother", "iwato", 3, {KV:11}));
roles.push(new Role("Sagimori Kimiko", "sagimori", 3, {AA:true, AV:5}));
roles.push(new Role("Matsumi Tsuyuko", "matsumi", 3, {AA:true, AV:4}));
roles.push(new Role("Ikeda Hina", "ikedahina", 3, {KV:6, KA:true}));
roles.push(new Role("Ikeda Nazuna", "ikedanazuna", 3, {KV:6, KA:true}));
roles.push(new Role("Ikdea Shirona", "ikedashirona", 3, {KV:6, KA:true}));
roles.push(new Role("Shiratsuki Nana", "nana", 3, {SV:1}));
roles.push(new Role("Shiratsuki Kousuke", "kosuke", 3, {SV:1}));
// Achiga Children's Mahjong Club
roles.push(new Role("Gibbard Sakurako", "sakurako", 90, {KV:11, AA:true, AV:1, flag:true}));
roles.push(new Role("Yamatani Hina", "hina2",90, {KV:11, AA:true, AV:1}));
roles.push(new Role("Shizaki Aya", "aya", 90, {KV:11, AA:true, AV:1}));
roles.push(new Role("Kirita Rin", "rin", 90, {AA:true, AV:1}));
roles.push(new Role("Tatsumi Haruna", "haruna", 90, {AA:true, AV:1}));
roles.push(new Role("Yoneda Mirai", "mirai",90, {AA:true, AV:1}));
roles.push(new Role("Sasaoka Yoshiko", "yoshiko", 90, {AA:true, AV:1}));
// Other
roles.push(new Role("Naiki Ichita", "ichita", 0, {ZA:true, KV:1}));
roles.push(new Role("Shishiba Natsuki", "natsuki", 0, {ZA:true, KV:8}));
roles.push(new Role("Teradaira Ayano", "ayano", 0, {ZA:true, KV:8}));
roles.push(new Role("？", "shoujo", 0, {ZA:true, KV:11}));
roles.push(new Role("Sakimura Yuuichi", "yuuichi", 0, {SV:1}));
roles.push(new Role("Sudou Shunto", "sudou", 0, {SV:1}));