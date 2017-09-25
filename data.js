var INFO_MANGA = "第126局「威風」";			//	本篇連載數據說明
var INFO_MANGA_SNHY = "第8局";				//	シノハユ连载数据说明
var CUR_VOLUMNNUM = 12;						//	本篇單行本冊數
var CUR_VOLUMNNUM_ACHIGA = 6;				//	阿知賀篇單行本冊數
var CUR_VOLUMNNUM_SHINOHAYU = 1;			//	シノハユ單行本冊數

var UPDATE_DATE = '2014-05-25';				//	上次更新时间

/***************************************************
 * 學校對象設計
 ***************************************************/
function School(id, name, area, options) {
	this.id = id;		//	學校編號
	this.name = name;	//	學校名稱
	this.area = area;	//	所屬賽區
	
	if (options.KV != undefined) this.KV = options.KV;	// 清澄篇單行本出現冊數
	if (options.AV != undefined) this.AV = options.AV;	// 阿知賀篇單行本出現冊數
	if (options.SV != undefined) this.SV = options.SV;	// シノハユ單行本出現冊數
	if (options.KA != undefined) this.KA = options.KA;	// 是否在動畫出現
	if (options.AA != undefined) this.AA = options.AA;	// 是否在阿知賀篇動畫出現
	if (options.ZA != undefined) this.ZA = options.ZA;	// 是否在全国篇動畫出現

	if (options.flag != undefined) this.flag = options.flag; // 默认是否选中
}

/***************************************************
 * 角色對象設計
 ***************************************************/
function Role(name, img, school, options)
{
	this.name = name;		//	姓名
	this.img = img;			//	圖像檔案名稱
	this.school = school;	//	學校編號
	
	if (options.intro != undefined) this.intro = options.intro;	//	簡介
	if (options.memo != undefined) this.memo = options.memo;	//	裏簡介
	
	if (options.KV != undefined) this.KV = options.KV;	// 清澄篇單行本出現冊數
	if (options.AV != undefined) this.AV = options.AV;	// 阿知賀篇單行本出現冊數
	if (options.SV != undefined) this.SV = options.SV;	// シノハユ單行本出現冊數
	if (options.KA != undefined) this.KA = options.KA;	// 是否在動畫出現
	if (options.AA != undefined) this.AA = options.AA;	// 是否在阿知賀篇動畫出現
	if (options.ZA != undefined) this.ZA = options.ZA;	// 是否在全国篇動畫出現
	
	if (options.flag != undefined) this.flag = options.flag; // 默认是否选中
}

//	學校展示
function displaySchool(id) {
	if (id == 0) return "";
	if (id == 1) return "職業雀士";
	if (id == 2) return "實況播音員";
	if (id == 3) return "家屬";
	if (id == 90) return "阿知賀兒童麻將Club";
	var i;
	for(i in schools) {
		if(schools[i].id == id) {
			return schools[i].name + "(" + schools[i].area + ")";
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
// 全國其他學校（本篇）
schools.push(new School(41, "姫松", "南大阪", {KV:8, AA:true, ZA:true, flag:true}));
schools.push(new School(42, "宮守女子", "岩手", {KV:8, AA:true, ZA:true, flag:true}));
schools.push(new School(43, "鹿老渡", "廣島", {KV:8, ZA:true}));
schools.push(new School(44, "斐太商業", "岐阜", {KV:8, ZA:true}));
schools.push(new School(45, "鞍月", "石川", {KV:8, ZA:true}));
schools.push(new School(46, "有珠山", "南北海道", {KV:11, AA:true, ZA:true, flag:true}));
//////////////////////////////////////////////////////////////////////
// 全國其他學校（阿知賀篇）
schools.push(new School(51, "讃甘", "岡山", {AA:true, AV:2}));
schools.push(new School(52, "裏盤梯", "福井", {AA:true, AV:2}));
schools.push(new School(53, "射水綜合", "富山", {AA:true, AV:2}));
schools.push(new School(54, "劒谷", "兵庫", {KV:12, AA:true, AV:2}));
schools.push(new School(55, "越古女子", "埼玉", {KV:12, AA:true, AV:2}));
schools.push(new School(56, "新道寺女子", "福岡", {AA:true, AV:3, ZA:true, flag:true}));
//////////////////////////////////////////////////////////////////////
// 全國個人賽學校
schools.push(new School(61, "三箇牧", "北大阪", {AA:true, AV:1}));
schools.push(new School(62, "九州赤山", "鹿兒島", {KV:7, AA:true, AV:3}));
schools.push(new School(63, "覺王山", "西愛知", {AA:true, AV:3}));
schools.push(new School(64, "後土學園", "靜岡", {AA:true, AV:3}));
schools.push(new School(65, "須和田", "千葉", {AA:true, AV:3}));
schools.push(new School(66, "松庵女学院", "西東京", {KV:7, KA:true, AA:true, AV:6}));
//////////////////////////////////////////////////////////////////////
// 其他
schools.push(new School(1, "職業雀士", "", {KV:1, KA:true, AA:true, ZA:true, AV:1, SV:1, flag:true}));
schools.push(new School(2, "實況播音員", "", {KV:1, KA:true, AA:true, ZA:true, AV:2, flag:true}));
schools.push(new School(3, "家属", "", {KV:1, KA:true, AA:true, AV:1}));
schools.push(new School(90, "阿知賀兒童麻將Club", "", {KV:11, AA:true, AV:1}));
schools.push(new School(0, "其他", "",  {KV:1, KA:true, ZA:true}));
//////////////////////////////////////////////////////////////////////

var roles = new Array();
//////////////////////////////////////////////////////////////////////
// Kiyosumi
roles.push(new Role("宮永咲", "saki", 10, {intro:"嶺上使", KV:1, KA:true, AA:true, ZA:true, AV:1, flag:true, memo:"打麻將真開心啊\r\n巨乳控"}));
roles.push(new Role("原村和", "nodoka", 10, {intro:"小和和", KV:1, KA:true, AA:true, ZA:true, AV:1, flag:true, memo:"技術宅·歐派星人"}));
roles.push(new Role("片岡優希", "yuki", 10, {KV:1, KA:true, AA:true, ZA:true, AV:4, flag:true, memo:"Tacos星人"}));
roles.push(new Role("竹井久", "hisa", 10, {KV:1, KA:true, AA:true, ZA:true, AV:6, flag:true, memo:"博學的Surprise部長"}));
roles.push(new Role("染谷真子", "mako", 10, {KV:1, KA:true, AA:true, ZA:true, AV:6, flag:true, memo:"眼鏡·海帶"}));
roles.push(new Role("須賀京太郎", "kyoutarou", 10, {KV:1, KA:true, AA:true, ZA:true, memo:"犬"}));
roles.push(new Role("埃特潘", "aitepan", 0, {intro:"原村和的企鵝玩偶", KV:1, KA:true, AA:true, ZA:true, AV:1, memo:"吉祥物"}));
// Ryuumonbuchi
roles.push(new Role("天江衣", "kuromo", 11, {intro:"龍門渕家的大小姐", KV:1, KA:true, AA:true, ZA:true, AV:1, flag:true, memo:"衣不是小孩子！"}));
roles.push(new Role("Ryuumonbuchi透華", "touka", 11, {intro:"龍門渕家的大小姐", KV:2, KA:true, AA:true, ZA:true, AV:1, flag:true, memo:"傲嬌·暗戀小和和中"}));
roles.push(new Role("国広一", "hajime", 11, { KV:2, KA:true, AA:true, ZA:true, AV:1, flag:true, memo:"暗戀透華中"}));
roles.push(new Role("沢村智紀", "tomoki", 11, {KV:2, KA:true, AA:true, ZA:true, AV:1, flag:true}));
roles.push(new Role("井上純", "jun", 11, {KV:2, KA:true, AA:true, ZA:true, AV:1, flag:true, memo:"老子是女的！"}));
roles.push(new Role("荻良", "hagiyoshi", 0, {intro:"龍門渕家的管家", KV:2, KA:true, AA:true, AV:1, memo:"萬能"}));
roles.push(new Role("杉乃歩", "ayumu", 11, {intro:"龍門渕家的女僕", KV:2, KA:true, AA:true, AV:1}));
// Kazekoshi
roles.push(new Role("福路美穂子", "mihoko", 12, {intro:"機械白癡的Captain", KV:2, KA:true, ZA:true, AA:true, AV:3, flag:true, memo:"每天都思念著上埜同學"}));
roles.push(new Role("池田華菜", "kana", 12, {KV:2, KA:true, AA:true, ZA:true, AV:3, flag:true, memo:"暗戀隊長中"}));
roles.push(new Role("吉留未春", "miharu", 12, {KV:2, KA:true, AA:true, ZA:true, AV:3, flag:true,memo:"暗戀華菜中"}));
roles.push(new Role("文堂星夏", "seika", 12, {KV:2, KA:true, ZA:true, memo: "在收集雀士卡片"}));
roles.push(new Role("深堀純代", "sumiyo", 12, {KV:2, KA:true, ZA:true, memo:"比福與小姐更加豐滿"}));
roles.push(new Role("久保貴子", "takako", 12, {intro:"監督", KV:2, KA:true, ZA:true, memo:"池田アアア!!!"}));
// Tsuruga
roles.push(new Role("加治木由美", "yumi", 13, {intro:"鶴賀的偽部長", KV:3, KA:true, AA:true, ZA:true, AV:3, flag:true}));
roles.push(new Role("東横桃子", "momoko", 13, {intro:"隱形小桃", KV:3, KA:true, AA:true, ZA:true, AV:2, flag:true, memo:"最喜歡前輩"}));
roles.push(new Role("蒲原智美", "satomi", 13, {intro:"鶴賀的部長<br>哇哈哈", KV:3, KA:true, AA:true, ZA:true, AV:2, flag:true, memo:"哇哈哈"}));
roles.push(new Role("津山睦月", "mutsuki", 13, {intro:"鶴賀的新部長", KV:2, KA:true, AA:true, ZA:true, AV:3, flag:true, memo:"在收集雀士卡片"}));
roles.push(new Role("妹尾佳織", "kaori", 13, {intro:"蒲原的幼馴染", KV:3, KA:true, AA:true, ZA:true, AV:3, flag:true, memo:"初心"}));
// Shiraitodai
roles.push(new Role("宮永照", "teru", 30, {intro:"冠軍☆", KV:1, KA:true, AA:true, ZA:true, AV:2, flag:true, memo:"電光毒龍鉆\r\n吃貨"}));
roles.push(new Role("弘世菫", "sumire", 30, {intro:"sharp☆shooter", KV:7, KA:true, AA:true, ZA:true, AV:2, flag:true, memo:"吐槽役"}));
roles.push(new Role("大星淡", "awashi", 30, {intro:"超新星☆<br>高校100年生", KV:7, KA:true, AA:true, ZA:true, AV:2, flag:true, memo:"100執念笨淡組組長"}));
roles.push(new Role("渋谷尭深", "takami", 30, {KV:7, KA:true, AA:true, ZA:true, AV:2, flag:true, memo:"茶子"}));
roles.push(new Role("亦野誠子", "seiko", 30, {intro:"白糸台☆fisher", KV:7, KA:true, AA:true, ZA:true, AV:2, flag:true, memo:"釣魚"}));
// Eisui
roles.push(new Role("神代小蒔", "komaki", 33, {intro:"霧島神宮的公主", KV:7, KA:true, AA:true, ZA:true, flag:true, memo:"吃貨·瞌睡蟲"}));
roles.push(new Role("石戸霞", "kasumi", 33, {intro:"巫女·六女仙之一", KV:7, KA:true, AA:true, ZA:true, flag:true, memo:"黑黑霞"}));
roles.push(new Role("薄墨初美", "hatsumi", 33, {intro:"巫女·六女仙之一", KV:7, KA:true, AA:true, ZA:true, flag:true, memo:"雖然特意叮囑了但還是被塞(ry"}));
roles.push(new Role("滝見春", "haru", 33, {intro:"巫女·六女仙之一<br>無口·愛吃黑糖", KV:7, KA:true, AA:true, ZA:true, flag:true, memo:"黑糖"}));
roles.push(new Role("狩宿巴", "tomoe", 33, {intro:"巫女·六女仙之一", KV:7, KA:true, AA:true, ZA:true, flag:true, memo:"受"}));
roles.push(new Role("石戸明星", "akise", 33, {intro:"巫女·六女仙之一<br>中等部的學員", KV:11}));
roles.push(new Role("十曾湧", "jisso", 33, {intro:"中等部的學員", KV:11}));
// Rinkai
roles.push(new Role("Nelly Virsaladze", "nelly", 31, {intro:"", KV:7, KA:true, ZA:true, flag:true, memo:"小紅帽"}));
roles.push(new Role("雀明華", "chei", 31, {intro:"風神", KV:7, KA:true, AA:true, ZA:true, flag:true}));
roles.push(new Role("辻垣内智葉", "satoha", 31, {intro:"去年個人戰第三名", KV:7, KA:true, AA:true, ZA:true, flag:true, memo:"極道大小姐"}));
roles.push(new Role("Megan Davin", "megan", 31, {intro:"愛吃拉麵", KV:7, KA:true, AA:true, ZA:true, flag:true, memo:"拉麵小王子"}));
roles.push(new Role("郝慧宇", "hao", 31, {intro:"來自香港", KV:7, KA:true, ZA:true, flag:true, memo:"港妹"}));
roles.push(new Role("Alexandra Windheim", "rinkai", 31, {intro:"貪婪的監督", KV:11, memo:"胸部和臀部都不豐滿"}));
// 姬松
roles.push(new Role("愛宕洋榎", "hiroe", 41, {intro:"姬松的主將", KV:8, AA:true, ZA:true, AV:3, flag:true, memo:"雖然是笨蛋但是很厲害\r\n章魚"}));
roles.push(new Role("末原恭子", "kyouko", 41, {intro:"姬松的軍師", KV:8, AA:true, ZA:true, flag:true, memo:"暗戀善野监督中·悲劇"}));
roles.push(new Role("愛宕絹恵", "kinue", 41, {intro:"愛宕洋榎的妹妹", KV:8, AA:true, ZA:true, flag:true, memo:"暗戀姐姐中\r\n花枝"}));
roles.push(new Role("真瀬由子", "yuiko", 41, {KV:8, AA:true, ZA:true, flag:true, memo:"篤見老師的天使"}));
roles.push(new Role("上重漫", "suzu", 41, {intro:"炸彈", KV:8, AA:true, ZA:true, flag:true}));
roles.push(new Role("赤阪郁乃", "ikuno", 41, {intro:"代理監督", KV:8, AA:true, ZA:true, memo:"喜歡調戲小末原\r\n秘技·人心掌控"}));
roles.push(new Role("善野一美", "zenno", 41, {intro:"監督", KV:11, ZA:true, memo:"小末原朝思暮想中"}));
// 宮守
roles.push(new Role("姉帯豊音", "toyone", 42, {KV:8, AA:true, ZA:true, flag:true}));
roles.push(new Role("鹿倉胡桃", "kurumi", 42, {KV:8, ZA:true, flag:true, memo:"吐槽起來超強力的噢"}));
roles.push(new Role("臼沢塞", "sae", 42, {KV:8, ZA:true, AA:true, flag:true, memo:"敢淘氣的話就把你塞住"}));
roles.push(new Role("Aislinn Wishart", "aislinn", 42, {intro:"新西蘭留學生", KV:8, ZA:true, flag:true, memo:"偽阿美"}));
roles.push(new Role("小瀬川白望", "shiromi", 42, {KV:8, AA:true, ZA:true, flag:true, memo:"超級大懶蟲"}));
roles.push(new Role("熊倉敏", "toshi", 42, {intro:"監督",KV:8, AA:true, ZA:true, AV:1}));
roles.push(new Role("宇夫方葵", "aoi", 42, {intro:"白望的同班同學",KV:8, ZA:true}));
// 有珠山
roles.push(new Role("本內成香", "naruka", 46, {intro:"有珠山的先锋", KV:11, AA:true, flag:true, ZA:true}));
roles.push(new Role("桧森誓子", "chikako", 46, {intro:"有珠山的次鋒", KV:11, AA:true, flag:true}));
roles.push(new Role("獅子原爽", "sawaya", 46, {intro:"", KV:11, AA:true, ZA:true, flag:true, memo:"巧克力"}));
roles.push(new Role("岩館搖杏", "yuan", 46, {intro:"", KV:11, AA:true, ZA:true, flag:true}));
roles.push(new Role("真屋由暉子‎", "yukiko", 46,{intro:"", KV:11, AA:true, ZA:true, flag:true, memo:"打倒はやりん!"}));
// Achiga
roles.push(new Role("高鴨穏乃", "shizuno", 20, {intro:"", KV:11, AA:true, ZA:true, AV:1, SV:0, flag:true, memo:"100執念笨蛋組成員"}));
roles.push(new Role("新子憧", "ako", 20, {intro:"", KV:11, AA:true, ZA:true, AV:1, SV:0, flag:true, memo:"好像是暗戀穩乃中"}));
roles.push(new Role("松実玄", "kuro", 20, {intro:"“Dragon Lord”<br>收集寶牌", KV:11, AA:true, ZA:true, AV:1, SV:0, flag:true, memo:"天然"}));
roles.push(new Role("松実宥", "yuu", 20, {intro:"松実玄的姐姐<br>收集溫暖的牌", KV:11, AA:true, ZA:true, AV:1, SV:0, flag:true, memo:"姐姐"}));
roles.push(new Role("鷺森灼", "arata", 20, {intro:"長得很像小林立<br>戴著保齡球手套", KV:11, AA:true, ZA:true, AV:1, SV:0, flag:true, memo:"暗戀教練中"}));
roles.push(new Role("赤土晴絵", "harue", 20, {intro:"監督<br>“阿知賀的傳奇”", KV:9, AA:true, AV:1, SV:0, flag:true, memo:"苦戀著小鍛治健夜"}));
// 朝酌女子
roles.push(new Role("白筑慕", "shino", 70, {intro:"打麻將好快樂", SV:1, memo:"跑步速度約12Km/h"}));
roles.push(new Role("石飛閑無", "kanna", 70, {intro:"我根本不喜歡麻將", SV:1, memo:"傲嬌"}));
roles.push(new Role("稻村杏果", "kyouka", 70, {intro:"", SV:1, memo:""}));
roles.push(new Role("本常玲奈", "rena", 70, {intro:"", SV:1, memo:""}));
roles.push(new Role("金泽阳葵", "himari", 70, {intro:"", SV:1, memo:""}));
// Bansei
roles.push(new Role("小走八重", "yae", 21, {intro:"讓你們看看<br>王者的打法!!", AA:true, AV:1, flag:true}));
roles.push(new Role("丸瀬紀子", "noriko", 21, {AA:true, AV:1}));
roles.push(new Role("木村日菜", "hina", 21, {AA:true, AV:1}));
roles.push(new Role("上田良子", "ryouko", 21, {AA:true, AV:1}));
roles.push(new Role("巽由華", "yuka", 21, {AA:true, AV:1}));
roles.push(new Role("岡橋初瀬", "hatsuse", 21, {intro:"啦啦隊", AA:true, AV:1, flag:true, memo:"暗戀著憧???"}));
// Senriyama
roles.push(new Role("園城寺怜", "toki", 32, {intro:"病弱的先知<br>枕神小怜", AA:true, AV:4, ZA:true, flag:true, memo:"竜華的大腿…"}));
roles.push(new Role("清水谷竜華", "ryuuka", 32, {intro:"千里山的部長<br>一直照顧著怜", AA:true, ZA:true, AV:4, flag:true}));
roles.push(new Role("江口夕", "seira", 32, {intro:"千里山的前ACE<br>不喜歡穿裙子", KV:12, AA:true, ZA:true, AV:4, flag:true}));
roles.push(new Role("船久保浩子", "hiroko", 32, {intro:"船Q<br>擅長分析數據", KV:12, AA:true, ZA:true, AV:4, flag:true}));
roles.push(new Role("二条泉", "izumi", 32, {intro:"目標是高一最強", KV:12, AA:true, ZA:true, AV:1, flag:true}));
roles.push(new Role("愛宕雅枝", "masae", 32, {intro:"千里山的監督", AA:true, AV:4, memo:"愛宕姉妹之母?"}));
// 新道寺
roles.push(new Role("花田煌", "kirame", 56, {intro:"好棒！", KV:9, AA:true, ZA:true, AV:3, flag:true, memo:"すばらっ！"}));
roles.push(new Role("安河內美子", "yoshiko2", 56, {intro:"新道寺的次鋒", AA:true, ZA:true, AV:3, flag:true}));
roles.push(new Role("江崎仁美", "hitomi", 56,{intro:"都是政治的錯", AA:true, ZA:true, AV:3, flag:true, memo:"吸～"}));
roles.push(new Role("白水哩", "mairu", 56, {intro:"新道寺的部長<br>ACE中的ACE", AA:true, ZA:true, AV:3, flag:true, memo:"愉♀悅"}));
roles.push(new Role("鶴田姫子", "himeko", 56, {intro:"新道寺的雙ACE之一", AA:true, ZA:true, AV:3, flag:true, memo:"和哩不管是私生活還是比賽都是搭檔☆"}));
// 劒谷 
roles.push(new Role("椿野美幸", "miyuki", 54, {intro:"阿知賀二回戰對手<br>真是的～", KV:12, AA:true, AV:2,memo:"も—"}));
roles.push(new Role("依藤澄子", "sumiko", 54, {intro:"阿知賀二回戰對手", AA:true, AV:2}));
roles.push(new Role("古冢梢", "kozue", 54, {intro:"阿知賀二回戰對手<br>劒谷的部長", AA:true, AV:2}));
roles.push(new Role("森垣友香", "yuuka", 54, {intro:"阿知賀二回戰對手<br>歸國子女", KV:12, AA:true, AV:2,memo:"で—"}));
roles.push(new Role("安福莉子", "riko", 54, {intro:"阿知賀二回戰對手", KV:12, AA:true, AV:2}));
// 越谷女子
roles.push(new Role("新井索菲亞", "sofia", 55, {intro:"阿知賀二回戰對手", KV:12, AA:true, AV:2}));
roles.push(new Role("浅見花子", "hanako", 55, {intro:"阿知賀二回戰對手", KV:12, AA:true, AV:2}));
roles.push(new Role("水村史織", "shiori", 55, {intro:"阿知賀二回戰對手", KV:12, AA:true, AV:2}));
roles.push(new Role("宇津木玉子", "tamago", 55, {intro:"阿知賀二回戰對手", KV:12, AA:true, AV:2}));
roles.push(new Role("八木原景子", "keiko", 55, {intro:"阿知賀二回戰對手", AA:true, AV:2}));
// 讃甘
roles.push(new Role("新免那岐", "nagi", 51, {intro:"阿知賀一回戰對手", AA:true, AV:2, memo:"女武藏"}));
// 裏盤梯
roles.push(new Role("森合愛美", "manami", 52, {intro:"阿知賀一回戰對手", AA:true, ZA:true, AV:2}));
// 射水綜合
roles.push(new Role("寺崎游月", "yudumi", 53, {intro:"阿知賀一回戰對手", AA:true, ZA:true, AV:2}));
// 鹿老渡
roles.push(new Role("佐佐野莓", "ichigo", 43, {intro:"姬松一回戰對手<br>偶像", KV:8, ZA:true, AA:true, AV:4}));
// 斐太商業
roles.push(new Role("伏屋那都", "natsu", 44, {intro:"姬松一回戰對手", KV:8}));
// 鞍月
roles.push(new Role("能口彩花", "ayaka", 45, {intro:"姬松一回戰對手", KV:8}));
// 個人賽
roles.push(new Role("荒川憩", "kei", 61, {intro:"去年全國個人賽第二", KV:11, KA:true, AA:true, AV:1, flag:true, memo:"護士"}));
roles.push(new Role("藤原利仙", "rise", 62, {intro:"鹿兒島個人賽代表",  AA:true, AV:3, memo:"仙女"}));
roles.push(new Role("対木茂子", "moko", 63, {intro:"東海王者",  AA:true, AV:3}));
roles.push(new Role("百鬼藍子", "ranko", 64, {intro:"靜岡個人賽第一",  AA:true, AV:3}));
roles.push(new Role("霜崎弦", "ito", 65, {intro:"千葉MVP", AA:true, AV:3}));
roles.push(new Role("南浦数絵", "sue", 18, {intro:"在長野個人賽中<br>表現優異", KV:7, KA:true, flag:true}));
roles.push(new Role("多治比真佑子", "mayuko", 66, {intro:"西東京決賽大將", KV:7, KA:true, AA:true, AV:6}));
// Takatoobara
roles.push(new Role("夢乃真帆", "maho", 14,{intro:"原村和的學妹", KV:2, KA:true, ZA:true}));
roles.push(new Role("室橋裕子", "hiroko2", 14,{intro:"原村和的學妹", KV:2, KA:true, ZA:true}));
// Imamiya
roles.push(new Role("門松葉子", "youko", 15,{intro:"清澄縣預賽一回戰對手", KV:2, KA:true}));
roles.push(new Role("堂山由香里", "yukari", 15,{intro:"清澄縣預賽一回戰對手", KV:2, KA:true}));
roles.push(new Role("田中舞", "mai", 15, {intro:"清澄縣預賽一回戰對手", KV:2, KA:true}));
// East Chikuma
roles.push(new Role("上柿恵", "agumi", 16, {intro:"清澄縣預賽一回戰對手", KV:2, KA:true}));
roles.push(new Role("土屋由理", "yuri", 16,{intro:"清澄縣預賽一回戰對手", KV:2, KA:true}));
roles.push(new Role("小川芹香", "serika", 16,{intro:"清澄縣預賽一回戰對手", KV:2, KA:true}));
// Toufukuji
roles.push(new Role("永森和子", "kazuko", 17, {intro:"清澄縣預賽一回戰對手", KV:2, KA:true}));
roles.push(new Role("三瀨晶子", "akiko", 17, {intro:"清澄縣預賽一回戰對手", KV:2, KA:true}));
roles.push(new Role("河內智世美", "chisemi", 17, {intro:"清澄縣預賽一回戰對手", KV:2, KA:true}));
// 播報員
roles.push(new Role("藤田靖子", "yasuko", 1, {intro:"長野縣預選解說", KV:1, ZA:true, flag:true, memo:"加量豬扒飯"}));
roles.push(new Role("小鍛治健夜", "sukoya", 1, {intro:"全國大賽解說", KV:7, ZA:true, AA:true, AV:1, SV:0, flag:true, memo:"不像名字般健壯"}));
roles.push(new Role("福与恒子", "kouko", 2, {intro:"", KV:7, AA:true, AV:3, ZA:true, flag:true, memo:"不像名字般豐滿"}));
roles.push(new Role("三尋木咏", "uta", 1, {intro:"全國大賽解說", KV:11, AA:true, AV:2, flag:true, memo:"不知道~"}));
roles.push(new Role("針生繪里", "eri", 2, {intro:"", KV:11, AA:true, AV:2, flag:true}));
roles.push(new Role("大沼秋一郎", "numa", 1, {intro:"鹿兒島預選解說", KV:7, memo:"特立獨行"}));
roles.push(new Role("戒能良子", "yoshiko3", 1, {intro:"", KV:11, SV:0, ZA:true}));
roles.push(new Role("佐藤裕子", "yuuko", 2, {intro:"", ZA:true}));
roles.push(new Role("瑞原早璃", "hayari", 1, {intro:"牌的姐姐<br>偶像雀士(28歲)", KV:11, SV:1}));
roles.push(new Role("野依理沙", "risa", 1, {intro:"總是撅著嘴", KV:11, SV:0, ZA:true}));
roles.push(new Role("村吉未咲", "misaki", 2, {intro:"", KV:11}));
roles.push(new Role("春日野真深", "mafuka", 1, {intro:"牌的姐姐", SV:3, memo:""}));
roles.push(new Role("長野縣預選實況直播員", "man1", 2, {KV:2, KA:true}));
// 媒體
roles.push(new Role("西田順子", "zyunko", 0, {intro:"雜誌《週刊麻將TODAY》記者", KV:1, KA:true, AA:true, ZA:true, AV:6}));
roles.push(new Role("山口大介", "man2", 0, {intro:"雜誌《週刊麻將TODAY》攝影師", KV:1, KA:true}));
roles.push(new Role("埴渕久美子", "kumiko", 0, {intro:"雜誌《週刊麻將TODAY》記者", KV:11, AA:true, ZA:true, AV:6}));
// 家屬
roles.push(new Role("宮永界", "sakipapa", 3,{intro:"宮永家的爸爸", KV:1, KA:true}));
roles.push(new Role("原村恵", "nodokapapa", 3, {intro:"原村和的父親", KV:1, KA:true}));
roles.push(new Role("南浦聡", "minamiura", 1,{intro:"南浦數繪的祖父<br>職業雀士", KA:true} ));
roles.push(new Role("新子望", "nozomi", 3, {intro:"新子憧的姐姐<br>前阿知賀麻將部成員", AA:true, AV:1}));
roles.push(new Role("石戸の祖母", "iwato", 3, {intro:"石戸霞的祖母", KV:11}));
roles.push(new Role("鷺森公子", "sagimori", 3, {intro:"鷺森灼的祖母<br>經營著保齡球館", AA:true, AV:5}));
roles.push(new Role("松実露子", "matsumi", 3, {intro:"松実宥、玄的母親<br>很早就過世了", AA:true, AV:4}));
roles.push(new Role("池田緋菜", "ikedahina", 3, {intro:"池田華菜的三胞胎妹妹之①", KV:6, KA:true}));
roles.push(new Role("池田菜沙", "ikedanazuna", 3, {intro:"池田華菜的三胞胎妹妹之②", KV:6, KA:true}));
roles.push(new Role("池田城菜", "ikedashirona", 3, {intro:"池田華菜的三胞胎妹妹之③", KV:6, KA:true}));
roles.push(new Role("白筑奈奈", "nana", 3, {intro:"白筑慕的母親<br>現在失蹤中", SV:1, memo:""}));
roles.push(new Role("白筑耕介", "kosuke", 3, {intro:"白筑慕的舅舅", SV:1, memo:""}));
// 兒童麻將Club
roles.push(new Role("義鳩桜子", "sakurako", 90, {KV:11, AA:true, AV:1, flag:true, memo:"熊孩子"}));
roles.push(new Role("山谷雛", "hina2",90, {intro:"兒童麻將Club中<br>最小的2人之一", KV:11, AA:true, AV:1, memo:"但是說話方式卻很獨特"}));
roles.push(new Role("志崎綾", "aya", 90, {intro:"經常被桜子跟雛<br>耍得團團轉..", KV:11, AA:true, AV:1}));
roles.push(new Role("桐田凜", "rin", 90, {intro:"經常用前髪遮住右眼", AA:true, AV:1}));
roles.push(new Role("辰巳春菜", "haruna", 90, {intro:"帽子是標誌", AA:true, AV:1, memo:"就是說本體是帽子"}));
roles.push(new Role("米田未来", "mirai",90, {intro:"糰子髮型很可愛", AA:true, AV:1, memo:"就是說本體是糰子"}));
roles.push(new Role("佐佐岡良子", "yoshiko", 90, {intro:"很適合髪帶", AA:true, AV:1, memo:"就是說本體是髪帶"}));
// 其他
roles.push(new Role("内木一太", "ichita", 0, {intro:"清澄高校學生議事會副會長", ZA:true, KV:1, memo:"據說是蘿莉控"}));
roles.push(new Role("紫芝菜月", "natsuki", 0, {intro:"清澄高校學生議事會書記", ZA:true, KV:8}));
roles.push(new Role("寺平彩乃", "ayano", 0, {intro:"清澄高校學生議事會會計", ZA:true, KV:8}));
roles.push(new Role("？", "shoujo", 0, {intro:"宮永咲回憶中的少女", ZA:true, KV:11}));
roles.push(new Role("向村雄一", "yuuichi", 0, {intro:"松江兒童麻將大賽<br>決賽中唯一的男生", SV:1, memo:""}));
roles.push(new Role("周藤瞬斗", "sudou", 0, {intro:"當鋪老闆", SV:1, memo:""}));