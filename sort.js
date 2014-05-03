var VERSION_NUM = 'v2.4';					//	版本号

//	單行本默認選擇最近的版本
var curVolumnNum = CUR_VOLUMNNUM;
var curVolumnNum_Achiga = CUR_VOLUMNNUM_ACHIGA;
var curVolumnNum_Shinohayu = CUR_VOLUMNNUM_SHINOHAYU;

//	頭像圖片類型
var imageType = 1;							//	默認顯示漫畫圖片

//	測試範圍標記
var inMangaFlag = false;
var inAnimateFlag = false;
var inVolumnFlag = false;
var inAchigaFlag = false;
var inAchigaAnimateFlag = false;
var inAchigaVolumnFlag = false;
var inSNHYFlag = false;

//	數據存放

var curRoles = new Array();
var curRanking = new Array();
var curSchoolData = new Array();

//	比較用變量
var lstMember;
var parent = new Array();
var equal = new Array();
var rec = new Array();
var cmp1,cmp2;
var head1,head2;
var nrec;
var numQuestion;
var totalSize;
var finishSize;
var finishFlag;

//変数の初期化+++++++++++++++++++++++++++++++++++++++++++++
function initList(){
	clearResult();
	
	var n = 0;
	var mid;
	var i;


	curRoles = new Array();
	

	//	導入數據
	
for(i in roles) {

		if (roles[i].flag){
			curRoles.push(roles[i]);

		}
	}

	//	进行两次亂序排列

	curRoles.sort(function(){return Math.random()>0.5?-1:1;});
	curRoles.sort(function(){return Math.random()>0.5?-1:1;});
	curRoles.sort(function(){return Math.random()>0.5?-1:1;}); 
	//	展示角色人數
	document.getElementById("allNum").innerHTML = roles.length;

	document.getElementById("curNum").innerHTML = curRoles.length;

	if (curRoles.length < 2) { showEmpty(); return; }

	//ソートすべき配列
	lstMember = new Array();
	lstMember[n] = new Array();
	for (i=0; i<curRoles.length; i++) {
		lstMember[n][i] = i;
	}
	parent[n] = -1;
	totalSize = 0;
	n++;

	for (i=0; i<lstMember.length; i++) {
		//要素数が２以上なら２分割し、
		//分割された配列をlstMemberの最後に加える
		if(lstMember[i].length>=2) {
			mid = Math.ceil(lstMember[i].length/2);
			lstMember[n] = new Array();
			lstMember[n] = lstMember[i].slice(0,mid);
			totalSize += lstMember[n].length;
			parent[n] = i;
			n++;
			lstMember[n] = new Array();
			lstMember[n] = lstMember[i].slice(mid,lstMember[i].length);
			totalSize += lstMember[n].length;
			parent[n] = i;
			n++;
		}
	}

	//保存用配列
	for (i=0; i<curRoles.length; i++) {
		rec[i] = 0;
	}
	nrec = 0;

	//引き分けの結果を保存するリスト
	//キー：リンク始点の値
	// 値 ：リンク終点の値
	for (i=0; i<=curRoles.length; i++) {
		equal[i] = -1;
	}

	cmp1 = lstMember.length-2;
	cmp2 = lstMember.length-1;
	head1 = 0;
	head2 = 0;
	numQuestion = 1;
	finishSize = 0;
	finishFlag = 0;
	
	updateSettingField();
	showImage();
}

//リストのソート+++++++++++++++++++++++++++++++++++++++++++
//flag：比較結果
//  -1：左を選択
//   0：引き分け
//   1：右を選択
function sortList(flag){
	var i;
	var str;

	//recに保存
	if (flag<0) {
		rec[nrec] = lstMember[cmp1][head1];
		head1++;
		nrec++;
		finishSize++;
		while (equal[rec[nrec-1]]!=-1) {
			rec[nrec] = lstMember[cmp1][head1];
			head1++;
			nrec++;
			finishSize++;
		}
	}
	else if (flag>0) {
		rec[nrec] = lstMember[cmp2][head2];
		head2++;
		nrec++;
		finishSize++;
		while (equal[rec[nrec-1]]!=-1) {
			rec[nrec] = lstMember[cmp2][head2];
			head2++;
			nrec++;
			finishSize++;
		}
	}
	else {
		rec[nrec] = lstMember[cmp1][head1];
		head1++;
		nrec++;
		finishSize++;
		while (equal[rec[nrec-1]]!=-1) {
			rec[nrec] = lstMember[cmp1][head1];
			head1++;
			nrec++;
			finishSize++;
		}
		equal[rec[nrec-1]] = lstMember[cmp2][head2];
		rec[nrec] = lstMember[cmp2][head2];
		head2++;
		nrec++;
		finishSize++;
		while (equal[rec[nrec-1]]!=-1) {
			rec[nrec] = lstMember[cmp2][head2];
			head2++;
			nrec++;
			finishSize++;
		}
	}

	//片方のリストを走査し終えた後の処理
	if (head1<lstMember[cmp1].length && head2==lstMember[cmp2].length) {
		//リストcmp2が走査済 - リストcmp1の残りをコピー
		while (head1<lstMember[cmp1].length){
			rec[nrec] = lstMember[cmp1][head1];
			head1++;
			nrec++;
			finishSize++;
		}
	}
	else if (head1==lstMember[cmp1].length && head2<lstMember[cmp2].length) {
		//リストcmp1が走査済 - リストcmp2の残りをコピー
		while (head2<lstMember[cmp2].length){
			rec[nrec] = lstMember[cmp2][head2];
			head2++;
			nrec++;
			finishSize++;
		}
	}

	//両方のリストの最後に到達した場合は
	//親リストを更新する
	if (head1==lstMember[cmp1].length && head2==lstMember[cmp2].length) {
		for (i=0; i<lstMember[cmp1].length+lstMember[cmp2].length; i++) {
			lstMember[parent[cmp1]][i] = rec[i];
		}
		lstMember.pop();
		lstMember.pop();
		cmp1 = cmp1-2;
		cmp2 = cmp2-2;
		head1 = 0;
		head2 = 0;

		//新しい比較を行う前にrecを初期化
		if (head1==0 && head2==0) {
			for (i=0; i<curRoles.length; i++) {
				rec[i] = 0;
			}
			nrec = 0;
		}
	}

	if (cmp1<0) {
		str = "Battle No."+(numQuestion-1)+"<br>"+Math.floor(finishSize*100/totalSize)+"% sorted.";
		document.getElementById("battleNumber").innerHTML = str;

		showResult();
		showSchoolResult();
		finishFlag = 1;
	}
	else {
		showImage();
	}
}

function clearResult() {
	document.getElementById("resultField").innerHTML = '';
	document.getElementById("resultField").style.display = 'none';
	document.getElementById("schoolResultField").innerHTML = '';
	document.getElementById("schoolResultField").style.display = 'none';
	document.getElementById("roleResultField").style.display = 'none';
	document.getElementById("roleResultField").innerHTML = '';
}

//結果の表示+++++++++++++++++++++++++++++++++++++++++++++++
function showResult() {
	var ranking = 1;
	var sameRank = 1;
	var str = "";
	var i;

	str += "<table id=\"resultTable\">";
	str += "<tr><th>順位<\/th><th>名前<\/th><\/tr>";

	curRanking = new Array();
	for (i=0; i<curRoles.length; i++) {
		str += "<tr><td>"+ranking+"<\/td><td>"+curRoles[lstMember[0][i]].name+"<\/td><\/tr>";
		curRanking[lstMember[0][i]] = ranking;
		if (i<curRoles.length-1) {
			if (equal[lstMember[0][i]]==lstMember[0][i+1]) {
				sameRank++;
			} else {
				ranking += sameRank;
				sameRank = 1;
			}
		}
	}
	str += "<\/table>";

	var str2 = "<input type='button' onclick='initList()' value='重新測試' />";
	document.getElementById("resultField").style.display = 'block';
	document.getElementById("resultField").innerHTML = str2;
	document.getElementById("roleResultField").style.display = 'block';
	document.getElementById("roleResultField").innerHTML = str;
	document.getElementById("mainTable").style.display = 'none';
}

// 展示學校排名
function showSchoolResult() {
	var str = "";
	
	// 計算學校平均順位
	sortSchools();

	if (curSchoolData.length == 0)return;
	
	str += "<table id=\"resultSchoolTable\">";
	str += "<tr><th>順位<\/th><th>學校<\/th><th>人數<\/th><th>平均順位<\/th><\/tr>";

	var ranking = 1;
	var sameRank = 1;
	var j;
	for (i=0; i<curSchoolData.length; i++) {
		str += "<tr><td>"+ranking+"<\/td><td>"+displaySchool(curSchoolData[i].id)+"<\/td><td>"+curSchoolData[i].num+"<\/td><td >"+curSchoolData[i].rank.toFixed(2)+"<\/td><\/tr>";
		str += "<tr><td colspan=\"4\" style=\"text-align:left; color: gray;\">";
		for(j in curSchoolData[i].member) {
			if (j > 0) str += "、";
			str += curRoles[curSchoolData[i].member[j]].name + "（" + curRanking[curSchoolData[i].member[j]] + "位）";
		}
		str += "<\/td><\/tr>";
		if (i<curSchoolData.length-1) {
			if (curSchoolData[i].rank==curSchoolData[i+1].rank) {
				sameRank++;
			} else {
				ranking += sameRank;
				sameRank = 1;
			}
		}
	}
	str += "<\/table>";
		
	// 展示排名結果	
	document.getElementById("schoolResultField").style.display = 'block';
	document.getElementById("schoolResultField").innerHTML = str;
}

function SchoolData(id, sum, num) {
	this.id = id;
	this.sum = sum; 
	this.num = num;
	this.rank = 0;
	this.member = new Array();
}

function sortSchools() {
	var i, j = 0;
	curSchoolData = new Array();
	var flag;
	for (i in curRoles) {
		var id = curRoles[i].school;
		if (id < 10) continue;	//	非學校的組織不計算
		flag = false;
		for (j in curSchoolData) {
			if (curSchoolData[j].id == id) {
				curSchoolData[j].sum += curRanking[i];
				curSchoolData[j].num ++;
				curSchoolData[j].member.push(i);
				flag = true;
				break;
			}
		}
		if (!flag) {
			curSchoolData.push(new SchoolData(id, curRanking[i], 1));
			curSchoolData[curSchoolData.length - 1].member.push(i);
		}
	}
	for (i in curSchoolData) {
		curSchoolData[i].rank = curSchoolData[i].sum / curSchoolData[i].num;
	}
	curSchoolData.sort(function(a, b) { return a.rank - b.rank; });
}

function showEmpty() {
	var str = "当前只选择了<font color='red'>" + curRoles.length + "</font>位角色，无法进行排序。"
	str += "<br>请在下方設定中添加更多角色，或<a onclick='window.location.reload();'><u>刷新頁面</u></a>初始化列表。";
	document.getElementById("resultField").style.display = 'block';
	document.getElementById("resultField").innerHTML = str;
	document.getElementById("mainTable").style.display = 'none';
	updateSettingField();
	document.getElementById("settingField").style.display = 'block';
}

//比較する２つ要素の表示+++++++++++++++++++++++++++++++++++
function showImage() {
	document.getElementById("mainTable").style.display = 'block';
	var str0 = "Battle No."+numQuestion+"<br>"+Math.floor(finishSize*100/totalSize)+"% sorted.";
	var str1 = ""+toNameFace(lstMember[cmp1][head1]);
	var str2 = ""+toNameFace(lstMember[cmp2][head2]);
	document.getElementById("battleNumber").innerHTML = str0;
	document.getElementById("leftField").innerHTML = str1;
	document.getElementById("rightField").innerHTML = str2;
	numQuestion++;
}

//数値を名前（顔文字）に変換+++++++++++++++++++++++++++++++
function toNameFace(n){
	var str = "";
	
	// 頭像加入
	if (imageType > 0)
	{
		str += "<div";
		if (curRoles[n].memo != undefined) str += " title='" + curRoles[n].memo + "'";
		str += "><img src='images" + imageType + "/" + curRoles[n].img + ".jpg' border = 0 style='border:1px solid #000000;margin-bottom:5px'><br>";
	}
	
	// 角色姓名
	str += curRoles[n].name;

	// 介紹文字
	str += "<br>";
	switch(n) {
		//case -1 はサンプルなので削除すること
		case -1: str+="（ ′口｀）";break;
		default: str+="<font size='2'>";
		str+=displaySchool(curRoles[n].school);

		if (curRoles[n].intro != undefined && curRoles[n].school > 0 && curRoles[n].intro.length > 0) str+="<br>";
		
if (curRoles[n].intro != undefined) str+=curRoles[n].intro;
		
str+="</font>";
	}
	
	str += "</div>";
	return str;
}



function setRoles() {

	if (document.getElementById("settingField").style.display == 'none') {

		document.getElementById("settingField").style.display = 'block';

	}

	else {
	
		document.getElementById("settingField").style.display = 'none';
	
		}

	}


function updateSettingField() {
	
	document.getElementById("settingField").innerHTML = getImageSetting();
	document.getElementById("settingField").innerHTML += getRangeList();

	document.getElementById("settingField").innerHTML += getSchoolList();
	
	document.getElementById("settingField").innerHTML += getRoleList();

	var info = "<div style='border:1px dashed #cccccc;margin:5px;padding:5px;'>";
	info += "<b>範圍說明：</b><ul>";
	info += "<li>連載：在本篇漫畫連載中出場過的角色（截止至" + INFO_MANGA + "，含番外）</li>";
	info += "<li>單行本：在本篇單行本中出場過的角色（截止至選擇的冊數）</li>";
	info += "<li>動畫：在本篇動畫中出場過的角色（BD版本，含25ED）</li>";
	info += "<li>連載(A)：在阿知賀篇漫畫連載中出場過的角色</li>";
	info += "<li>動畫(A)：在阿知賀篇動畫中出場過的角色（TV版本，含OPED）</li>";
	info += "<li>單行本(A)：在阿知賀篇單行本中出場過的角色（截止至選擇的冊數）</li>";
	info += "<li>連載(S)：在シノハユ漫畫連載中出場過的角色（截止至" + INFO_MANGA_SNHY + "）</li>";
	info += "</ul></div>";
	document.getElementById("settingField").innerHTML += info;

}

function getImageSetting() {
	var str = "<div style='border:1px dashed #cccccc;margin:5px;padding:5px;'>";
	str+= "<b>頭像顯示：</b>";
	str += "<input type='radio' " + (imageType == 0 ? "checked" : "") + " name='imageType' value='0' onchange='switchImage()' />不顯示";
	str += "<input type='radio' " + (imageType == 1 ? "checked" : "") + " name='imageType' value='1' onchange='switchImage()' />漫畫(+A)";
	str += "<input type='radio' " + (imageType == 2 ? "checked" : "") + " name='imageType' value='2' onchange='switchImage()'/>動畫";
	str += "<input type='radio' " + (imageType == 3 ? "checked" : "") + " name='imageType' value='3' onchange='switchImage()' />動畫(A)";
	//str += "<input type='radio' " + (imageType == 4 ? "checked" : "") + " name='imageType' value='4' onchange='switchImage()' />咲日和";
	str += "（無圖則使用動畫/漫畫替換，下次選擇生效）</div>";
	return str;
}

function switchImage() {
	var imageTypes = document.getElementsByName("imageType");
	for (i = 0; i < imageTypes.length; ++i) {
		if (imageTypes[i].checked) {
			imageType = imageTypes[i].value; 
			break;
		}
	}
}



function getRangeList() {
	
	var str = "<div style='border:1px dashed #cccccc;margin:5px;padding:5px;'>";
	
	str+= "<b>測試范围：</b>";
	str += "<input type='checkbox' " + (curRoles.length == roles.length ? "checked" : "") + " id='rangeflag' onclick='setRange(-1);' />全選/反選";
	
str += "<input type='checkbox' " + (inMangaFlag ? "checked" : "") + " id='rangeflag_0' onclick='setRange(0);' />連載";
	str += "<input type='checkbox' " + (inVolumnFlag ? "checked" : "") + " id='rangeflag_1' onclick='setRange(1);' />單行本";
	str += "<select id='volumnNum' onchange='setVolumn();' style='margin:1px; padding:0px;'>";
	for (i = CUR_VOLUMNNUM; i > 0 ; i-- )
	{
		str += "<option value=" + i + " ";
		if (i == curVolumnNum) str += " selected";
		str += " >卷" + i + "</option>"; 
	}
	str += "</select>";

	str += "<input type='checkbox' " + (inAnimateFlag ? "checked" : "") + " id='rangeflag_2' onclick='setRange(2);' />動畫";
	//str += "<input type='checkbox' " + (inAnimateFlag ? "checked" : "") + " id='rangeflag_7' onclick='setRange(7);' disabled/>動畫(全国篇)";
	str += "　　　　　　　　<br>　　　　　 ";

	str += "<input type='checkbox' " + (inAchigaFlag ? "checked" : "") + " id='rangeflag_3' onclick='setRange(3);' />連載(A)";
	str += "<input type='checkbox' " + (inAchigaAnimateFlag ? "checked" : "") + " id='rangeflag_4' onclick='setRange(4);' />動畫(A)";
	str += "<input type='checkbox' " + (inAchigaVolumnFlag ? "checked" : "") + " id='rangeflag_5' onclick='setRange(5);' />單行本(A)";
	str += "<select id='volumnNum_Achiga' onchange='setVolumnAchiga();' style='margin:1px; padding:0px;'>";
	for (i = CUR_VOLUMNNUM_ACHIGA; i > 0 ; i-- )
	{
		str += "<option value=" + i + " ";
		if (i == curVolumnNum_Achiga) str += " selected";
		str += " >卷" + i + "</option>"; 
	}
	str += "</select>";
	str += "<input type='checkbox' " + (inSNHYFlag ? "checked" : "") + " id='rangeflag_6' onclick='setRange(6);' />連載(シノハユ)";

	str += "</div>";
	return str;

}



function getSchoolList() {
	
	var str = "<div style='border:1px dashed #cccccc;margin:5px;padding:5px;'>";
	
	str+= "<b>測試学校：</b>";
	
	var i;

	
for (i in schools) {
		
		str += "<input type='checkbox' " + (schools[i].flag ? "checked" : "");
		
		str += " id='scflag_" + i + "' onclick='setSchool(" + i + ");' />";
		
		str += schools[i].name; 
	
	}
	
	
	str += "</div>";	
	
	return str;

}


	
function getRoleList() {
	
	var str = "<div style='border:1px dashed #cccccc;margin:5px;padding:5px;'>";
	
	str+= "<b>測試角色：</b>";
	
	var i;
	
	
	for (i in roles) {
		
		str += "<input type='checkbox' " + (roles[i].flag ? "checked" : "");
		
		str += " id='roleflag_" + i + "' onclick='setRole(" + i + ");' />";
		
		str += roles[i].name; 
	
	}
	
	
	str += "</div>";	
	
	return str;

}

function setVolumn() {
	document.getElementById("rangeflag_1").checked = true;
	setRange(1);
}

function setVolumnAchiga() {
	document.getElementById("rangeflag_5").checked = true;
	setRange(5);
}


	
function setRange(n) {
	
	var i;
	for(i in schools) schools[i].flag = false;
	for(i in roles) roles[i].flag = false;
	var isAll = false;

	switch (n) {
		case -1:
			isAll = document.getElementById("rangeflag").checked;
			inVolumnFlag = document.getElementById("rangeflag_1").checked = isAll;
			inAnimateFlag = document.getElementById("rangeflag_2").checked = isAll;
			inAchigaFlag = document.getElementById("rangeflag_3").checked = isAll;
			inAchigaAnimateFlag = document.getElementById("rangeflag_4").checked = isAll;
			inAchigaVolumnFlag = document.getElementById("rangeflag_5").checked = isAll;
			inSNHYFlag = document.getElementById("rangeflag_6").checked = isAll;
			inMangaFlag = document.getElementById("rangeflag_0").checked = isAll;
			break;

		case 1:	// 單行本
			inVolumnFlag = document.getElementById("rangeflag_1").checked;
			break;
		case 2: // 動畫

			inAnimateFlag = document.getElementById("rangeflag_2").checked;

			break;

		case 3:	// 阿知賀篇
			inAchigaFlag = document.getElementById("rangeflag_3").checked;

			break;
		case 4:	// 阿知賀篇動畫
			inAchigaAnimateFlag = document.getElementById("rangeflag_4").checked;
			break;
		case 5:	// 阿知賀篇單行本
			inAchigaVolumnFlag = document.getElementById("rangeflag_5").checked;
			break;
		case 6:	// シノハユ
			inSNHYFlag = document.getElementById("rangeflag_6").checked;
			break;

		case 0:	// 漫畫連載
	
	default:
			inMangaFlag = document.getElementById("rangeflag_0").checked;

			break;
	
}
	curVolumnNum = document.getElementById("volumnNum").value;
	curVolumnNum_Achiga = document.getElementById("volumnNum_Achiga").value;
	
	for(i in schools) {
		if(isAll) schools[i].flag = true;
		if(inVolumnFlag && schools[i].KV > 0 && schools[i].KV <= curVolumnNum) schools[i].flag = true;
		if(inAnimateFlag && schools[i].KA) schools[i].flag = true;
		if(inAchigaFlag && schools[i].AV > 0) schools[i].flag = true;
		if(inAchigaAnimateFlag && schools[i].AA) schools[i].flag = true;
		if(inAchigaVolumnFlag && schools[i].AV > 0 && schools[i].AV <= curVolumnNum_Achiga) schools[i].flag = true;
		if(inSNHYFlag && schools[i].SV > 0) schools[i].flag = true;
		if(inMangaFlag && schools[i].KV > 0) schools[i].flag = true;
	}
	for(i in roles) {
		if(isAll) roles[i].flag = true;
		if(inVolumnFlag && roles[i].KV > 0 && roles[i].KV <= curVolumnNum) roles[i].flag = true;
		if(inAnimateFlag && roles[i].KA) roles[i].flag = true;
		if(inAchigaFlag && roles[i].AV > 0) roles[i].flag = true;
		if(inAchigaAnimateFlag && roles[i].AA) roles[i].flag = true;
		if(inAchigaVolumnFlag && roles[i].AV > 0 && roles[i].AV <= curVolumnNum_Achiga) roles[i].flag = true;
		if(inSNHYFlag && roles[i].SV > 0) roles[i].flag = true;
		if(inMangaFlag && roles[i].KV > 0) roles[i].flag = true;
	}
	
	initList();

}
	


function setRole(n) {

	var flag = document.getElementById("roleflag_" + n).checked;
	
roles[n].flag = flag;
	initList();

}



function setSchool(n) {

	var flag = document.getElementById("scflag_" + n).checked;
	
	schools[n].flag = flag;

	var i;
	
	for(i in roles) {
		
		if(roles[i].school == schools[n].id) {

			roles[i].flag = schools[n].flag;

		}

	}

	initList();
}