var allkeys = document.getElementsByTagName("td");
var keys = [];
var metkeys = [];
var keysdown = [];
var loaded = false;
var squares = document.getElementsByClassName("squares");
var game = true;
var screenWidth = screen.width;
var gameScore = 0;

for(var x=0; x<allkeys.length; x++){
	m = allkeys[x].getAttribute("met");
	if(m != "1"){
		keys.push(allkeys[x]);
	}
	else
	{
		metkeys.push(allkeys[x]);
	}
}

for(var x=0; x<metkeys.length; x++){
	if(metkeys[x].className == "tempo" || metkeys[x].className == "metvolume" || metkeys[x].className == "play" || metkeys[x].className == "tap"){
		metkeys[x].addEventListener("mousedown",metpress);
		metkeys[x].addEventListener("mouseup",metunpress);
	}
}

var about = document.getElementById("about");
about.addEventListener("mouseup",infoShow);
var info = document.getElementById("infoContainer");
var infoStatus = false;

var helpButton = document.getElementById("help");
helpButton.addEventListener("mouseup",helpShow);
var help = document.getElementById("helpContainer");
var helpStatus = false;

var changekey = document.getElementsByClassName("changekey");
var altkey = document.getElementsByClassName("altkey");
var keyboard = document.getElementsByClassName("keyboard");
var numpad = document.getElementsByClassName("numpad");
var bottomrow = document.getElementById("bottomrow");
var volumebar = document.getElementById("volumebar");
var buttons = document.getElementsByClassName("buttons");
var box = document.getElementsByClassName("box");

document.onkeydown = keypress
document.onkeyup = keyrelease

var currentTonality = document.getElementById("major");
var currentKey = document.getElementById("C");
var currentInstrument = document.getElementById("piano");
var newInstrument = true;
var currentVolume = 0.5;
var currentTempo = 90;
var met = null;
var met_status = "off";
var met_volume = 1;
var Bt1 = 0;
var Bt2 = 0;
var Bt3 = 0;
var Bt4 = 0;

var volumeDown = null;
var volumeUp = null;

var pitch_change = 0;
var pedal = "up";
var pedalAge = "old";

C3 = new Audio(currentInstrument.id+"\\C3.mp3");
Db3 = new Audio(currentInstrument.id+"\\Db3.mp3");
D3 = new Audio(currentInstrument.id+"\\D3.mp3");
Eb3 = new Audio(currentInstrument.id+"\\Eb3.mp3");
E3 = new Audio(currentInstrument.id+"\\E3.mp3");
F3 = new Audio(currentInstrument.id+"\\F3.mp3");
Gb3 = new Audio(currentInstrument.id+"\\Gb3.mp3");
G3 = new Audio(currentInstrument.id+"\\G3.mp3");
Ab3 = new Audio(currentInstrument.id+"\\Ab3.mp3");
A3 = new Audio(currentInstrument.id+"\\A3.mp3");
Bb3 = new Audio(currentInstrument.id+"\\Bb3.mp3");
B3 = new Audio(currentInstrument.id+"\\B3.mp3");

C4 = new Audio(currentInstrument.id+"\\C4.mp3");
Db4 = new Audio(currentInstrument.id+"\\Db4.mp3");
D4 = new Audio(currentInstrument.id+"\\D4.mp3");
Eb4 = new Audio(currentInstrument.id+"\\Eb4.mp3");
E4 = new Audio(currentInstrument.id+"\\E4.mp3");
F4 = new Audio(currentInstrument.id+"\\F4.mp3");
Gb4 = new Audio(currentInstrument.id+"\\Gb4.mp3");
G4 = new Audio(currentInstrument.id+"\\G4.mp3");
Ab4 = new Audio(currentInstrument.id+"\\Ab4.mp3");
A4 = new Audio(currentInstrument.id+"\\A4.mp3");
Bb4 = new Audio(currentInstrument.id+"\\Bb4.mp3");
B4 = new Audio(currentInstrument.id+"\\B4.mp3");

C5 = new Audio(currentInstrument.id+"\\C5.mp3");
Db5 = new Audio(currentInstrument.id+"\\Db5.mp3");
D5 = new Audio(currentInstrument.id+"\\D5.mp3");
Eb5 = new Audio(currentInstrument.id+"\\Eb5.mp3");
E5 = new Audio(currentInstrument.id+"\\E5.mp3");
F5 = new Audio(currentInstrument.id+"\\F5.mp3");
Gb5 = new Audio(currentInstrument.id+"\\Gb5.mp3");
G5 = new Audio(currentInstrument.id+"\\G5.mp3");
Ab5 = new Audio(currentInstrument.id+"\\Ab5.mp3");
A5 = new Audio(currentInstrument.id+"\\A5.mp3");
Bb5 = new Audio(currentInstrument.id+"\\Bb5.mp3");
B5 = new Audio(currentInstrument.id+"\\B5.mp3");

C6 = new Audio(currentInstrument.id+"\\C6.mp3");
Db6 = new Audio(currentInstrument.id+"\\Db6.mp3");
D6 = new Audio(currentInstrument.id+"\\D6.mp3");
Eb6 = new Audio(currentInstrument.id+"\\Eb6.mp3");
E6 = new Audio(currentInstrument.id+"\\E6.mp3");
F6 = new Audio(currentInstrument.id+"\\F6.mp3");
Gb6 = new Audio(currentInstrument.id+"\\Gb6.mp3");
G6 = new Audio(currentInstrument.id+"\\G6.mp3");
Ab6 = new Audio(currentInstrument.id+"\\Ab6.mp3");
A6 = new Audio(currentInstrument.id+"\\A6.mp3");
Bb6 = new Audio(currentInstrument.id+"\\Bb6.mp3");
B6 = new Audio(currentInstrument.id+"\\B6.mp3");

C7 = new Audio(currentInstrument.id+"\\C7.mp3");

hi_met = new Audio("hi_click.wav");
low_met = new Audio("low_click.wav");

//DEFINE TUPLES FOR EACH KEY
spaceKey = [32, "SPACE", null];
leftcontrolKey = [17, "LCTRL", null];

zKey = [90,"Z",0, 0];
xKey = [88,"X",2, 2];
cKey = [67,"C",4, 3];
vKey = [86,"V",5, 5];
bKey = [66,"B",7, 7];
nKey = [78,"N",9, 9];
mKey = [77,"M",10, 10];
commaKey = [188,",",12, 12];
periodKey = [190,".",14, 14];
forwardKey = [191,"/",15, 15];

aKey = [65,"A",6, 5];
sKey = [83,"S",7, 7];
dKey = [68,"D",9, 8];
fKey = [70,"F",11, 10];
gKey = [71,"G",12, 12];
hKey = [72,"H",14, 14];
jKey = [74,"J",16, 15];
kKey = [75,"K",17, 17];
lKey = [76,"L",19, 19];
semicolonKey = [186,";",21, 21];
quoteKey = [222,"'",22, 22];

QKey = [81,"Q",11, 10];
WKey = [87,"W",13, 12];
EKey = [69,"E",14, 13];
RKey = [82,"R",16, 15];
TKey = [84,"T",18, 17];
YKey = [89,"Y",19, 19];
UKey = [85,"U",21, 20];
IKey = [73,"I",23, 22];
OKey = [79,"O",24, 24];
PKey = [80,"P",26, 26];
openbracketKey = [219,"[",28, 27];
closebracketKey = [221,"]",29, 29];

backquoteKey = [192,"`",15, 13];
oneKey = [49,"1",16, 15];
twoKey = [50,"2",18, 17];
threeKey = [51,"3",20, 18];
fourKey = [52,"4",21, 20];
fiveKey = [53,"5",23, 22];
sixKey = [54,"6",25, 24];
sevenKey = [55,"7",26, 25];
eightKey = [56,"8",28, 27];
nineKey = [57,"9",30, 29];
zeroKey = [48,"0",31, 31];
dashKey = [189,"-",33, 32];
equalsKey = [187,"=",35, 34];
backspaceKey = [8,"BACK",36, 36];

piano = ["piano", 149];
guitar = ["guitar",148, 48];
violin = ["violin",142, 0,1,2,3,4,5,6];
cello = ["cello",149];
marimba = ["marimba",149];
flute = ["flute",137, 37,38,39,40,41,42,43,44,45,46,47,48];
clarinet = ["clarinet",149];
trumpet = ["trumpet",138, 0,1,2,3,42,43,44,45,46,47,48];

var instruments = [piano, guitar, violin, cello, marimba, flute, clarinet, trumpet];

var gameSong = [90,100,90,100,83,100,83,100,68,100,68,100,83,200,86,100,86,100,67,100,67,100,88,100,88,100,90,200,];

var pitchList = [C3,Db3,D3,Eb3,E3,F3,Gb3,G3,Ab3,A3,Bb3,B3,C4,Db4,D4,Eb4,E4,F4,Gb4,G4,Ab4,A4,Bb4,B4,C5,Db5,D5,Eb5,E5,F5,Gb5,G5,Ab5,A5,Bb5,B5,C6,Db6,D6,Eb6,E6,F6,Gb6,G6,Ab6,A6,Bb6,B6,C7];
var pitchListC = ['C3','C#3','D3','Eb3','E3','F3','F#3','G3','Ab3','A3','Bb3','B3','C4','C#4','D4','Eb4','E4','F4','F#4','G4','Ab4','A4','Bb4','B4','C5','C#5','D5','Eb5','E5','F5','F#5','G5','Ab5','A5','Bb5','B5','C6','C#6','D6','Eb6','E6','F6','F#6','G6','Ab6','A6','Bb6','B6','C7']
var pitchListFlats = ['C3','Db3','D3','Eb3','E3','F3','Gb3','G3','Ab3','A3','Bb3','B3','C4','Db4','D4','Eb4','E4','F4','Gb4','G4','Ab4','A4','Bb4','B4','C5','Db5','D5','Eb5','E5','F5','Gb5','G5','Ab5','A5','Bb5','B5','C6','Db6','D6','Eb6','E6','F6','Gb6','G6','Ab6','A6','Bb6','B6','C7']
var pitchListSharps = ['C3','C#3','D3','D#3','E3','F3','F#3','G3','G#3','A3','A#3','B3','C4','C#4','D4','D#4','E4','F4','F#4','G4','G#4','A4','A#4','B4','C5','C#5','D5','D#5','E5','F5','F#5','G5','G#5','A5','A#5','B5','C6','C#6','D6','D#6','E6','F6','F#6','G6','G#6','A6','A#6','B6','C7']
var pitchListFlatsMin = ['C3','Db3','D3','Eb3','Fb3','F3','Gb3','G3','Ab3','A3','Bb3','Cb3','C4','Db4','D4','Eb4','Fb4','F4','Gb4','G4','Ab4','A4','Bb4','Cb4','C5','Db5','D5','Eb5','Fb5','F5','Gb5','G5','Ab5','A5','Bb5','Cb5','C6','Db6','D6','Eb6','Fb6','F6','Gb6','G6','Ab6','A6','Bb6','Cb6','C7']
var keyDict = [backquoteKey,oneKey,twoKey,threeKey,fourKey,fiveKey,sixKey,sevenKey,eightKey,nineKey,zeroKey,dashKey,equalsKey,backspaceKey,QKey,WKey,EKey,RKey,TKey,YKey,UKey,IKey,OKey,PKey,openbracketKey,closebracketKey,aKey,sKey,dKey,fKey,gKey,hKey,jKey,kKey,lKey,semicolonKey,quoteKey,zKey,xKey,cKey,vKey,bKey,nKey,mKey,commaKey,periodKey,forwardKey]
var pitchChangeList = ['C','Db','D','Eb','E','F','Gb','G','Ab','A','Bb','B'];

var pitchListCFlute = ['C4','C#4','D4','Eb4','E4','F4','F#4','G4','Ab4','A4','Bb4','B4','C5','C#5','D5','Eb5','E5','F5','F#5','G5','Ab5','A5','Bb5','B5','C6','C#6','D6','Eb6','E6','F6','F#6','G6','Ab6','A6','Bb6','B6','C7','C#7','D7','Eb7','E7','F7','F#7','G7','Ab7','A7','Bb7','B7','C8']
var pitchListFlatsFlute = ['C4','Db4','D4','Eb4','E4','F4','Gb4','G4','Ab4','A4','Bb4','B4','C5','Db5','D5','Eb5','E5','F5','Gb5','G5','Ab5','A5','Bb5','B5','C6','Db6','D6','Eb6','E6','F6','Gb6','G6','Ab6','A6','Bb6','B6','C7','Db7','D7','Eb7','E7','F7','Gb7','G7','Ab7','A7','Bb7','B7','C8']
var pitchListSharpsFlute = ['C4','C#4','D4','D#4','E4','F4','F#4','G4','G#4','A4','A#4','B4','C5','C#5','D5','D#5','E5','F5','F#5','G5','G#5','A5','A#5','B5','C6','C#6','D6','D#6','E6','F6','F#6','G6','G#6','A6','A#6','B6','C7','C#7','D7','D#7','E7','F7','F#7','G7','G#7','A7','A#7','B7','C8']
var pitchListFlatsMinFlute = ['C4','Db4','D4','Eb4','Fb4','F4','Gb4','G4','Ab4','A4','Bb4','Cb4','C5','Db5','D5','Eb5','Fb5','F5','Gb5','G5','Ab5','A5','Bb5','Cb5','C6','Db6','D6','Eb6','Fb6','F6','Gb6','G6','Ab6','A6','Bb6','Cb6','C7','Db7','D7','Eb7','Fb7','F7','Gb7','G7','Ab7','A7','Bb7','Cb7','C8']

var pitchListCBass = ['C2','C#2','D2','Eb2','E2','F2','F#2','G2','Ab2','A2','Bb2','B2','C3','C#3','D3','Eb3','E3','F3','F#3','G3','Ab3','A3','Bb3','B3','C4','C#4','D4','Eb4','E4','F4','F#4','G4','Ab4','A4','Bb4','B4','C5','C#5','D5','Eb5','E5','F5','F#5','G5','Ab5','A5','Bb5','B5','C6']
var pitchListFlatsBass = ['C2','Db2','D2','Eb2','E2','F2','Gb2','G2','Ab2','A2','Bb2','B2','C3','Db3','D3','Eb3','E3','F3','Gb3','G3','Ab3','A3','Bb3','B3','C4','Db4','D4','Eb4','E4','F4','Gb4','G4','Ab4','A4','Bb4','B4','C5','Db5','D5','Eb5','E5','F5','Gb5','G5','Ab5','A5','Bb5','B5','C6']
var pitchListSharpsBass = ['C2','C#2','D2','D#2','E2','F2','F#2','G2','G#2','A2','A#2','B2','C3','C#3','D3','D#3','E3','F3','F#3','G3','G#3','A3','A#3','B3','C4','C#4','D4','D#4','E4','F4','F#4','G4','G#4','A4','A#4','B4','C5','C#5','D5','D#5','E5','F5','F#5','G5','G#5','A5','A#5','B5','C6']
var pitchListFlatsMinBass = ['C2','Db2','D2','Eb2','Fb2','F2','Gb2','G2','Ab2','A2','Bb2','Cb2','C3','Db3','D3','Eb3','Fb3','F3','Gb3','G3','Ab3','A3','Bb3','Cb3','C4','Db4','D4','Eb4','Fb4','F4','Gb4','G4','Ab4','A4','Bb4','Cb4','C5','Db5','D5','Eb5','Fb5','F5','Gb5','G5','Ab5','A5','Bb5','Cb5','C6']

function releaseMemory(){
	for(var x=0; x<pitchList.length; x++){
		pitchList[x].removeAttribute('src');
		if(x==pitchList.length-1){
			window.pitchList = [];
			definePitches();
		}
	}
}

function definePitches(){
	C3 = new Audio(currentInstrument.id+"\\C3.mp3");
	Db3 = new Audio(currentInstrument.id+"\\Db3.mp3");
	D3 = new Audio(currentInstrument.id+"\\D3.mp3");
	Eb3 = new Audio(currentInstrument.id+"\\Eb3.mp3");
	E3 = new Audio(currentInstrument.id+"\\E3.mp3");
	F3 = new Audio(currentInstrument.id+"\\F3.mp3");
	Gb3 = new Audio(currentInstrument.id+"\\Gb3.mp3");
	G3 = new Audio(currentInstrument.id+"\\G3.mp3");
	Ab3 = new Audio(currentInstrument.id+"\\Ab3.mp3");
	A3 = new Audio(currentInstrument.id+"\\A3.mp3");
	Bb3 = new Audio(currentInstrument.id+"\\Bb3.mp3");
	B3 = new Audio(currentInstrument.id+"\\B3.mp3");

	C4 = new Audio(currentInstrument.id+"\\C4.mp3");
	Db4 = new Audio(currentInstrument.id+"\\Db4.mp3");
	D4 = new Audio(currentInstrument.id+"\\D4.mp3");
	Eb4 = new Audio(currentInstrument.id+"\\Eb4.mp3");
	E4 = new Audio(currentInstrument.id+"\\E4.mp3");
	F4 = new Audio(currentInstrument.id+"\\F4.mp3");
	Gb4 = new Audio(currentInstrument.id+"\\Gb4.mp3");
	G4 = new Audio(currentInstrument.id+"\\G4.mp3");
	Ab4 = new Audio(currentInstrument.id+"\\Ab4.mp3");
	A4 = new Audio(currentInstrument.id+"\\A4.mp3");
	Bb4 = new Audio(currentInstrument.id+"\\Bb4.mp3");
	B4 = new Audio(currentInstrument.id+"\\B4.mp3");

	C5 = new Audio(currentInstrument.id+"\\C5.mp3");
	Db5 = new Audio(currentInstrument.id+"\\Db5.mp3");
	D5 = new Audio(currentInstrument.id+"\\D5.mp3");
	Eb5 = new Audio(currentInstrument.id+"\\Eb5.mp3");
	E5 = new Audio(currentInstrument.id+"\\E5.mp3");
	F5 = new Audio(currentInstrument.id+"\\F5.mp3");
	Gb5 = new Audio(currentInstrument.id+"\\Gb5.mp3");
	G5 = new Audio(currentInstrument.id+"\\G5.mp3");
	Ab5 = new Audio(currentInstrument.id+"\\Ab5.mp3");
	A5 = new Audio(currentInstrument.id+"\\A5.mp3");
	Bb5 = new Audio(currentInstrument.id+"\\Bb5.mp3");
	B5 = new Audio(currentInstrument.id+"\\B5.mp3");

	C6 = new Audio(currentInstrument.id+"\\C6.mp3");
	Db6 = new Audio(currentInstrument.id+"\\Db6.mp3");
	D6 = new Audio(currentInstrument.id+"\\D6.mp3");
	Eb6 = new Audio(currentInstrument.id+"\\Eb6.mp3");
	E6 = new Audio(currentInstrument.id+"\\E6.mp3");
	F6 = new Audio(currentInstrument.id+"\\F6.mp3");
	Gb6 = new Audio(currentInstrument.id+"\\Gb6.mp3");
	G6 = new Audio(currentInstrument.id+"\\G6.mp3");
	Ab6 = new Audio(currentInstrument.id+"\\Ab6.mp3");
	A6 = new Audio(currentInstrument.id+"\\A6.mp3");
	Bb6 = new Audio(currentInstrument.id+"\\Bb6.mp3");
	B6 = new Audio(currentInstrument.id+"\\B6.mp3");

	C7 = new Audio(currentInstrument.id+"\\C7.mp3");
	
	window.pitchList = [C3,Db3,D3,Eb3,E3,F3,Gb3,G3,Ab3,A3,Bb3,B3,C4,Db4,D4,Eb4,E4,F4,Gb4,G4,Ab4,A4,Bb4,B4,C5,Db5,D5,Eb5,E5,F5,Gb5,G5,Ab5,A5,Bb5,B5,C6,Db6,D6,Eb6,E6,F6,Gb6,G6,Ab6,A6,Bb6,B6,C7];
}

var target = "";
var targetRect = "";

function drawKeyboard(){
	target = document.body.getElementsByClassName("gameTarget");
	targetRect = target[0].getBoundingClientRect();
	if(currentTonality.id == "major"){
		for(var x=0; x<keys.length; x++){
			keys[x].addEventListener("mousedown",press);
			keys[x].addEventListener("mouseup",unpress);
			if(keys[x].className != "spacer" && keys[x].className != "altkey" && keys[x].className != "instrument" && keys[x].className != "tonality"){
				keys[x].style.backgroundColor = "FFFFFF";
			}
			var n = keys[x].getAttribute("name");
			for(var k=0; k<keyDict.length; k++){
				if(n==keyDict[k][0]){
					if(currentInstrument.id == "flute"){
						if(flute.includes(keyDict[k][2]+pitch_change)){
							keys[x].style.backgroundColor = "#FF6666";
						}
						if(pitch_change == 0){
							keys[x].innerHTML = "<b>"+pitchListCFlute[keyDict[k][2]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
						else if(pitch_change == 1 || pitch_change == 3 || pitch_change == 5 || pitch_change == 8 || pitch_change == 10){
							keys[x].innerHTML = "<b>"+pitchListFlatsFlute[keyDict[k][2]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
						else{
							keys[x].innerHTML = "<b>"+pitchListSharpsFlute[keyDict[k][2]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
					}
					else if(currentInstrument.id == "cello" || currentInstrument.id == "guitar"){
						if(currentInstrument.id == "guitar" && guitar.includes(keyDict[k][2]+pitch_change)){
							keys[x].style.backgroundColor = "#FF6666";
						}
						if(pitch_change == 0){
							keys[x].innerHTML = "<b>"+pitchListCBass[keyDict[k][2]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
						else if(pitch_change == 1 || pitch_change == 3 || pitch_change == 5 || pitch_change == 8 || pitch_change == 10){
							keys[x].innerHTML = "<b>"+pitchListFlatsBass[keyDict[k][2]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
						else{
							keys[x].innerHTML = "<b>"+pitchListSharpsBass[keyDict[k][2]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
					}
					else{
						if(currentInstrument.id == "violin" && violin.includes(keyDict[k][2]+pitch_change)){
							keys[x].style.backgroundColor = "#FF6666";
						}
						else if(currentInstrument.id == "trumpet" && trumpet.includes(keyDict[k][2]+pitch_change)){
							keys[x].style.backgroundColor = "#FF6666";
						}
						if(pitch_change == 0){
							keys[x].innerHTML = "<b>"+pitchListC[keyDict[k][2]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
						else if(pitch_change == 1 || pitch_change == 3 || pitch_change == 5 || pitch_change == 8 || pitch_change == 10){
							keys[x].innerHTML = "<b>"+pitchListFlats[keyDict[k][2]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
						else{
							keys[x].innerHTML = "<b>"+pitchListSharps[keyDict[k][2]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
					}
				}
			}
		}
	}
	else{
		for(var x=0; x<keys.length; x++){
			keys[x].addEventListener("mousedown",press);
			keys[x].addEventListener("mouseup",unpress);
			if(keys[x].className != "spacer" && keys[x].className != "altkey" && keys[x].className != "instrument" && keys[x].className != "tonality"){
				keys[x].style.backgroundColor = "FFFFFF";
			}
			var n = keys[x].getAttribute("name");
			for(var k=0; k<keyDict.length; k++){
				if(n==keyDict[k][0]){
					if(currentInstrument.id == "flute"){
						if(flute.includes(keyDict[k][3]+pitch_change)){
							keys[x].style.backgroundColor = "#FF6666";
						}
						if(pitch_change == 0){
							keys[x].innerHTML = "<b>"+pitchListCFlute[keyDict[k][3]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
						else if(pitch_change == 1 || pitch_change == 2 || pitch_change == 5 || pitch_change == 7 || pitch_change == 9 || pitch_change == 10){
							keys[x].innerHTML = "<b>"+pitchListFlatsFlute[keyDict[k][3]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
						else if(pitch_change == 3 || pitch_change == 8){
							keys[x].innerHTML = "<b>"+pitchListFlatsMinFlute[keyDict[k][3]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
						else{
							keys[x].innerHTML = "<b>"+pitchListSharpsFlute[keyDict[k][3]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
					}
					else if(currentInstrument.id == "cello" || currentInstrument.id == "guitar"){
						if(currentInstrument.id == "guitar" && guitar.includes(keyDict[k][3]+pitch_change)){
							keys[x].style.backgroundColor = "#FF6666";
						}
						if(pitch_change == 0){
							keys[x].innerHTML = "<b>"+pitchListCBass[keyDict[k][3]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
						else if(pitch_change == 1 || pitch_change == 2 || pitch_change == 5 || pitch_change == 7 || pitch_change == 9 || pitch_change == 10){
							keys[x].innerHTML = "<b>"+pitchListFlatsBass[keyDict[k][3]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
						else if(pitch_change == 3 || pitch_change == 8){
							keys[x].innerHTML = "<b>"+pitchListFlatsMinBass[keyDict[k][3]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
						else{
							keys[x].innerHTML = "<b>"+pitchListSharpsBass[keyDict[k][3]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
					}
					else{
						if(currentInstrument.id == "violin" && violin .includes(keyDict[k][3]+pitch_change)){
							keys[x].style.backgroundColor = "#FF6666";
						}
						else if(currentInstrument.id == "trumpet" && trumpet.includes(keyDict[k][3]+pitch_change)){
							keys[x].style.backgroundColor = "#FF6666";
						}
						if(pitch_change == 0){
							keys[x].innerHTML = "<b>"+pitchListC[keyDict[k][3]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
						else if(pitch_change == 1 || pitch_change == 2 || pitch_change == 5 || pitch_change == 7 || pitch_change == 9 || pitch_change == 10){
							keys[x].innerHTML = "<b>"+pitchListFlats[keyDict[k][3]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
						else if(pitch_change == 3 || pitch_change == 8){
							keys[x].innerHTML = "<b>"+pitchListFlatsMin[keyDict[k][3]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
						else{
							keys[x].innerHTML = "<b>"+pitchListSharps[keyDict[k][3]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
						}
					}
				}
			}
		}
	}
	var count = 1;
	var maxcount = 49;
	for(var i=0; i<instruments.length; i++){
		if(instruments[i][0]==currentInstrument.id){
			maxcount = instruments[i][1]-100;
		}
	}
	if(newInstrument==true){
		for(var a=0; a<pitchList.length; a++){
			pitchList[a].load();
			pitchList[a].oncanplay = function(){
				if(count==maxcount){
					loadingScreenOff();
				}
				count++;
			}
		}
		newInstrument = false;
	}
}

function keypress(event) {
	//Define the target note (nearest note)
	var difference = 10000000;
	var nextKeyPos = "";
	var nextKey = "";
	for(var x=0; x<gameKeys.length; x++){
		var rect = gameKeys[x].getBoundingClientRect();
		if(targetRect.left-50 <= rect.left && rect.left <= targetRect.left){
			if(targetRect.left - rect.left < difference){
				difference = targetRect.left - rect.left;
				nextKey = gameKeys[x];
			}
		}
		else if(rect.left <= targetRect.left+50 && targetRect.left <= rect.left){
			if(rect.left - targetRect.left < difference){
				difference = rect.left - targetRect.left;
				nextKey = gameKeys[x];
			}
		}
	}
	//
		
	//Calculate rhythmic accuracy
	var cushion = 20;
	if(event.repeat != true){
		var e = event.which || event.keyCode;
		if(difference<=5 && e==nextKey.keycode){
			gameComment.style.opacity = "1";
			gameComment.style.color = "#0000FF";
			gameComment.innerHTML = "PERFECT!";
			gameScore+=500;
			console.log(gameScore);
			nextKey.style.opacity = 0;
			setTimeout(function(){gameComment.style.opacity = "0";},250);
		}
		else if(difference>5 && difference <=10 && e==nextKey.keycode){
			gameComment.style.opacity = "1";
			gameComment.style.color = "#0000FF";
			gameComment.innerHTML = "GREAT!";
			gameScore+=400;
			console.log(gameScore);
			nextKey.style.opacity = 0;
			setTimeout(function(){gameComment.style.opacity = "0";},250);
		}
		else if(difference>10 && difference <=15 && e==nextKey.keycode){
			gameComment.style.opacity = "1";
			gameComment.style.color = "#0000FF";
			gameComment.innerHTML = "GOOD";
			gameScore+=250;
			console.log(gameScore);
			nextKey.style.opacity = 0;
			setTimeout(function(){gameComment.style.opacity = "0";},250);
		}
		else if(difference>15 && difference <=20 && e==nextKey.keycode){
			gameComment.style.opacity = "1";
			gameComment.style.color = "#0000FF";
			gameComment.innerHTML = "OKAY.";
			gameScore+=100;
			console.log(gameScore);
			nextKey.style.opacity = 0;
			setTimeout(function(){gameComment.style.opacity = "0";},250);
		}
		else if(difference<20 && e!=nextKey.keycode){
			gameComment.style.opacity = "1";
			gameComment.style.color = "#FF0000";
			gameComment.innerHTML = "WRONG KEY!";
			gameScore-=100;
			console.log(gameScore);
			gameTarget.style.borderColor = "#FF0000";
			setTimeout(function(){gameTarget.style.borderColor = "#0000FF";},250);
			setTimeout(function(){gameComment.style.opacity = "0";},250);
		}
		else{
			gameComment.style.opacity = "1";
			gameComment.style.color = "#FF0000";
			gameComment.innerHTML = "MISSED";
			gameScore-=50;
			console.log(gameScore);
			gameTarget.style.borderColor = "#FF0000";
			setTimeout(function(){gameTarget.style.borderColor = "#0000FF";},250);
			setTimeout(function(){gameComment.style.opacity = "0";},250);
		}
	}
	//
	
	if(event.repeat != true){
		var e = event.which || event.keyCode;
		for(var x=0; x<keys.length; x++){
			var n = keys[x].getAttribute("name");
			var s = keys[x].getAttribute("side");
			var l = event.location;
			if(n==e){
				if(l == 1 && s == "left"){
					press.call(keys[x],"key");
					if(n == "18"){
						event.preventDefault();
						window.pitch_change -= 1;
						if(window.pitch_change<-1){
							window.pitch_change = 10;
						}
						drawKeyboard();
					}
				}
				else if(l == 2 && s == "right"){
					press.call(keys[x],"key");
					if(n == "18"){
						event.preventDefault();
						window.pitch_change += 1;
						drawKeyboard();
					}
				}
				else if(n == "9"){
					setVolume(1.0,0);
					press.call(keys[x]);
					event.preventDefault();
				}
				else if(n=="32" && pedal == "up"){
					window.pedal = "down";
					window.pedalAge = "new";
					press.call(keys[x]);
				}
				else if(n=="16"){
					window.currentVolume -= 0.1;
					setVolume(window.currentVolume,0.0);
					window.volumeDown = setInterval(function(){ setVolume(currentVolume,-0.05)},250);
				}
				else if(n=="13" && l!=3 && keys[x].id!="minor"){
					press.call(keys[x],"key");
					window.currentVolume += 0.1;
					setVolume(window.currentVolume,0.0);
					window.volumeUp = setInterval(function(){ setVolume(currentVolume,0.05)},250);
				}
				else if(n=="20"){
					press.call(keys[x],"key");
					window.currentVolume += 0.1;
					setVolume(window.currentVolume,0.0);
					window.volumeUp = setInterval(function(){ setVolume(currentVolume,0.05)},250);
				}
				else if(n=="13" && l==3 && keys[x].id=="minor"){
					press.call(keys[x],"key");
				}
				else if(l != 1 && l != 2 && n != "32" && n!="13"){
					press.call(keys[x]);
				}
			}
		}
	}
}

function keyrelease(event) {
	var e = event.which || event.keyCode;
	for(var x=0; x<keys.length; x++){
		var n = keys[x].getAttribute("name");
		var s = keys[x].getAttribute("side");
		var l = event.location;
			if(n==e){
				if(l == 1 && s == "left"){
					unpress.call(keys[x],"key");
					if(n == "18"){
						event.preventDefault();
						window.pitch_change += 1;
						if(window.pitch_change>11){
							window.pitch_change = 0;
						}
						drawKeyboard();
					}
				}
				else if(l == 2 && s == "right"){
					unpress.call(keys[x],"key");
					if(n == "18"){
						event.preventDefault();
						window.pitch_change -= 1;
						if(window.pitch_change<0){
							window.pitch_change = 11;
						}
						drawKeyboard();
					}
				}
				else if(n == "13" && l==3 && keys[x].id=="minor"){
					unpress.call(keys[x],l);
				}
				else if(n==13 && l!=3 && keys[x].id!="minor"){
					clearInterval(volumeUp);
					unpress.call(keys[x],"key");
				}
				else if(n == "32" && pedal == "down"){
					if(window.pedalAge == "old"){
						unpress.call(keys[x]);
						window.pedal = "up";
						stopAll();
					}
					else{
						window.pedalAge = "old";
					}
				}
				else if(n=="16"){
					clearInterval(volumeDown);
				}
				else if(l != 1 && l != 2 && n != "32" && l!=3 && keys[x].id!="minor"){
					unpress.call(keys[x]);
				}
				else if(l==3 && n!="13"){
					unpress.call(keys[x]);
				}
			}
		}
	}

function press(clickOrKey) {

	
	pos = this.getAttribute("side");
	
	e = Number(this.getAttribute("name"));
	
	errKey = this
	
	errStatus = false;
	
	if(keysdown.includes(e) != true){
		keysdown.push(e);
		if(currentTonality.id == "major"){
			for(var k=0; k<keyDict.length; k++){
				if(e==keyDict[k][0]){
					if(currentInstrument.id == "guitar" && guitar.includes(keyDict[k][2]+pitch_change)){
						errStatus = true;
					}
					else if(currentInstrument.id == "flute" && flute.includes(keyDict[k][2]+pitch_change)){
						errStatus = true;
					}
					else if(currentInstrument.id == "violin" && violin.includes(keyDict[k][2]+pitch_change)){
						errStatus = true;
					}
					else if(currentInstrument.id == "trumpet" && trumpet.includes(keyDict[k][2]+pitch_change)){
						errStatus = true;
					}
				}
				if(e==keyDict[k][0]){
					pitchList[keyDict[k][2]+pitch_change].currentTime = 0.0;
					pitchList[keyDict[k][2]+pitch_change].play().catch(function(error){
					})
				}
			}
		}
		else{
			for(var k=0; k<keyDict.length; k++){
				if(e==keyDict[k][0]){
					if(currentInstrument.id == "guitar" && guitar.includes(keyDict[k][3]+pitch_change)){
						errStatus = true;
					}
					else if(currentInstrument.id == "flute" && flute.includes(keyDict[k][3]+pitch_change)){
						errStatus = true;
					}
					else if(currentInstrument.id == "violin" && violin.includes(keyDict[k][3]+pitch_change)){
						errStatus = true;
					}
					else if(currentInstrument.id == "trumpet" && trumpet.includes(keyDict[k][3]+pitch_change)){
						errStatus = true;
					}
				}
				if(e==keyDict[k][0]){
					pitchList[keyDict[k][3]+pitch_change].currentTime = 0.0;
					pitchList[keyDict[k][3]+pitch_change].play().catch(function(error){
					})
				}
			}
		}
		for(var x=0; x<keys.length; x++){
			var n = keys[x].getAttribute("name");
			var s = keys[x].getAttribute("side");
			if(n==e){
				if(clickOrKey!="key"){
					if(n=="16" && pos=="left" && s=="left"){
						window.currentVolume -= 0.1;
						setVolume(window.currentVolume,0.0);
						window.volumeDown = setInterval(function(){ setVolume(currentVolume,-0.05)},250);
					}
					else if(n=="16" && pos=="right" && s=="right"){
						window.currentVolume -= 0.1;
						setVolume(window.currentVolume,0.0);
						window.volumeDown = setInterval(function(){ setVolume(currentVolume,-0.05)},250);
					}
					else if(n=="20"){
						window.currentVolume += 0.1;
						setVolume(window.currentVolume,0.0);
						window.volumeUp = setInterval(function(){ setVolume(currentVolume,0.05)},250);
					}
					else if(n=="13" && keys[x].id!="minor" && pos!="numpad"){
						window.currentVolume += 0.1;
						setVolume(window.currentVolume,0.0);
						window.volumeUp = setInterval(function(){ setVolume(currentVolume,0.05)},250);
					}
					else if(n == "18" && pos=="left" && s=="left"){
						window.pitch_change -= 1;
						if(window.pitch_change<0){
							window.pitch_change = 11;
						}
						drawKeyboard();
					}
					else if(n == "18" && pos=="right" && s=="right"){
						window.pitch_change += 1;
						if(window.pitch_change>11){
							window.pitch_change = 0;
						}
						drawKeyboard();
					}
				}
				if(n=="32" && pedal == "up"){
					window.pedal = "down";
					window.pedalAge = "new";
				}
				else if(n == "9"){
						setVolume(1.0,0);
				}
				else if(n=="17"){
					setVolume(0.0,0);
				}
				else if(n==220){
					setVolume(1.0,0);
				}
			}
		}
	}
	
	if(this.className!="spacer" && errStatus!=true){
		moveDown(this);
	}
	if(this.className!="spacer" && errStatus==true){
		moveDownError(this);
	}
	
	if(this.id == "minor2"){
		min = document.getElementById("minor");
		moveDown(min);
	}
}


function unpress(clickOrKey) {
	pos = this.getAttribute("side");
	var c = this.className;
	e = Number(this.getAttribute("name"));
	position = keysdown.indexOf(e);
	keysdown.splice(position, 1);
	errStatus = false;
	
	if(currentTonality.id == "major"){
		for(var k=0; k<keyDict.length; k++){
			if(e==keyDict[k][0]){
				if(currentInstrument.id == "guitar" && guitar.includes(keyDict[k][2]+pitch_change)){
					errStatus = true;
				}
				else if(currentInstrument.id == "flute" && flute.includes(keyDict[k][2]+pitch_change)){
					errStatus = true;
				}
				else if(currentInstrument.id == "violin" && violin.includes(keyDict[k][2]+pitch_change)){
					errStatus = true;
				}
				else if(currentInstrument.id == "trumpet" && trumpet.includes(keyDict[k][2]+pitch_change)){
					errStatus = true;
				}
			}
			if(pedal == "up"){
				if(e==keyDict[k][0]){
					pitchList[keyDict[k][2]+pitch_change].pause();
					pitchList[keyDict[k][2]+pitch_change].currentTime = 0.0;
				}
			}
		}
	}
	else{
		for(var k=0; k<keyDict.length; k++){
			if(e==keyDict[k][0]){
				if(currentInstrument.id == "guitar" && guitar.includes(keyDict[k][3]+pitch_change)){
					errStatus = true;
				}
				else if(currentInstrument.id == "flute" && flute.includes(keyDict[k][3]+pitch_change)){
					errStatus = true;
				}
				else if(currentInstrument.id == "violin" && violin.includes(keyDict[k][3]+pitch_change)){
					errStatus = true;
				}
				else if(currentInstrument.id == "trumpet" && trumpet.includes(keyDict[k][3]+pitch_change)){
					errStatus = true;
				}
			}
			if(pedal == "up"){
				if(e==keyDict[k][0]){
					pitchList[keyDict[k][3]+pitch_change].pause();
					pitchList[keyDict[k][3]+pitch_change].currentTime = 0.0;
				}
			}
		}
	}
	
	for(var x=0; x<keys.length; x++){
		var n = keys[x].getAttribute("name");
		var s = keys[x].getAttribute("side");
		if(n==e){
			if(clickOrKey!="key"){
				if(n=="16" && pos=="left" && s=="left"){
					clearInterval(volumeDown);
				}
				else if(n=="16" && pos=="right" && s=="right"){
					clearInterval(volumeDown);
				}
				if(n=="20"){
					clearInterval(volumeUp);
				}
				else if(n=="13" && keys[x].id!="minor"){
					clearInterval(volumeUp);
				}
				else if(n == "18" && pos=="left" && s=="left"){
					window.pitch_change += 1;
					if(window.pitch_change>11){
						window.pitch_change = 0;
					}
					drawKeyboard();
				}
				else if(n == "18" && pos=="right" && s=="right"){
					window.pitch_change -= 1;
					if(window.pitch_change<0){
						window.pitch_change = 11;
					}
					drawKeyboard();
				}
			}
			if(n == "32" && pedal == "down"){
				if(window.pedalAge == "old"){
					moveUp(keys[x]);
					window.pedal = "up";
					stopAll();
				}
				else{
					window.pedalAge = "old";
				}
			}
			else if(n==20){
				clearInterval(volumeUp);
			}
		}
	}
	if(c=="altkey"){
		if(this != currentKey){
			moveUp(currentKey);
			keychange(this);
		}
	}
	else if(c=="instrument"){
		if(this != currentInstrument){
			moveUp(currentInstrument);
			changeInstrument(this);
		}
	}
	else if(c=="tonality"){
		if(this != currentTonality){
			if(this.id != "minor2"){
				moveUp(currentTonality);
				changeTonality(this);
			}
			else if(currentTonality.id == "major"){
				moveUp(currentTonality);
				min = document.getElementById("minor");
				changeTonality(min);
			}
		}
	}
	else{
		if(this.className!="spacer" && this.className!="spacebar" && errStatus != true){
		moveUp(this);
		}
		else if(this.className!="spacer" && this.className!="spacebar" && errStatus == true){
		moveUpError(this);
		}
	}
}

function metpress(){
	var bottomShadow = -2;
	var topShadow = 0;
	var sides = 1;
	var inc = 1;

	this.style.backgroundColor = "#FFFFFF";
	bottomShadow += inc;
	topShadow += inc;
	this.style.boxShadow = "inset "+sides+"px "+bottomShadow+"px #888888, inset -"+sides+"px "+bottomShadow+"px #888888, inset "+sides+"px "+topShadow+"px #888888, inset -"+sides+"px "+topShadow+"px #888888";

	if(this.className == "tempo"){
		r = currentTempo % 5;
		if(r != 0){
			if(r<=2.5){
				currentTempo -= r;
			}
			else{
				currentTempo += (5-r);
			}
		}
		if(this.id == "tempoup"){
			changeTempo(5);
		}
		else{
			changeTempo(-5);
		}
	}
	
	if(this.className == "play"){
		if(met_status == "off"){
			bpm = (60/currentTempo)*1000
			window.met = setInterval(metplay, bpm, bpm);
			met_status = "on";
		}
		else{
			clearInterval(met);
			met_status = "off";
		}
	}
	else if(this.className == "tap"){
		mettap();
	}
	else if(this.className == "metvolume"){
		if(this.id == "volumeup"){
			if(met_volume<0.9){
				met_volume += 0.2;
				hi_met.volume = met_volume;
			}
			else{
				met_volume = 1.0;
			}
		}
		else{
			if(met_volume>0.1){
				met_volume -= 0.2;
				hi_met.volume = met_volume;
			}
			else{
				met_volume = 0;
			}
		}
	}
}

function infoShow(){
	if(infoStatus == false){
		info.style.transform = "translate(225px, 0px)";
		infoStatus = true;
	}
	else if(infoStatus == true){
		info.style.transform = "translate(-225px, 0px)";
		infoStatus = false;
	}
}

function helpShow(){
	if(helpStatus == false){
		help.style.transform = "translate(-235px, 0px)";
		helpStatus = true;
	}
	else if(helpStatus == true){
		help.style.transform = "translate(235px, 0px)";
		helpStatus = false;
	}
}

function mettap(){
	window.Bt1 = Bt2;
	window.Bt2 = Bt3;
	window.Bt3 = Bt4;
	window.Bt4 = new Date();
	if(Bt1 != 0){
		tempo1 = Bt2 - Bt1;
		tempo2 = Bt3 - Bt2;
		tempo3 = Bt4 - Bt3;
		avg = (tempo1 + tempo2 + tempo3)/3;
		currentTempo = Math.round((1000/avg)*60);
		changeTempo(0);
	}
}

function metplay(bpm){
	hi_met.play();
	setTimeout(function(){hi_met.pause();hi_met.currentTime = 0.0;}, bpm-50);
}

function changeTempo(x){
	metScreen = document.getElementById("screen");
	currentTempo += x;
	if(currentTempo<25){
		currentTempo = 25;
	}
	else if(currentTempo>250){
		currentTempo = 250;
	}
	metScreen.innerHTML = "<b>"+currentTempo + " BPM"+"</b>";
	if(met_status == "on"){
		clearInterval(met);
		bpm = (60/currentTempo)*1000
		window.met = setInterval(metplay, bpm, bpm);
	}
}

function metunpress(){
	var bottomShadow = -1;
	var topShadow = 1;
	var sides = 1;
	var inc = 1;

	this.style.backgroundColor = "#FFFFFF";
	bottomShadow -= inc;
	topShadow -= inc;
	this.style.boxShadow = "inset "+sides+"px "+bottomShadow+"px #888888, inset -"+sides+"px "+bottomShadow+"px #888888, inset "+sides+"px "+topShadow+"px #888888, inset -"+sides+"px "+topShadow+"px #888888";
}

function changeInstrument(newinst){
	currentInstrument = newinst;
	newInstrument = true;
	loadingScreenOn();
	releaseMemory();
	setTimeout(drawKeyboard,1000);
}

function loadingScreenOn(){
	window.loaded = false;
	for(x=0;x<box.length;x++){
		box[x].style.opacity = 0;
	}
	squaresOn();
}

function squaresOn(){
	setTimeout(function(){squares[0].style.opacity=1},250);
	setTimeout(function(){squares[1].style.opacity=1},500);
	setTimeout(function(){squares[2].style.opacity=1},750);
	setTimeout(squaresOff,750);
}

function squaresOff(){
	setTimeout(function(){squares[0].style.opacity=0},250);
	setTimeout(function(){squares[1].style.opacity=0},500);
	setTimeout(function(){squares[2].style.opacity=0},750);
	if(loaded == false){
		setTimeout(squaresOn,750);
	}
}

function loadingScreenOff(){
	window.loaded = true;
	for(x=0;x<box.length;x++){
		box[x].style.opacity = 1;
	}
}

function keychange(newkey){
	currentKey = newkey;
	k = newkey.getAttribute("pitchchange");
	window.pitch_change = Number(k);
	/*for(x=0;x<keyboard.length;x++){
		keyboard[x].style.opacity = 0;
	}
	/*for(x=0;x<numpad.length;x++){
		numpad[x].style.opacity = 0;
	}
	bottomrow.style.opacity = 0;*/
	drawKeyboard();
	//setTimeout(keyboardShow,1000);
}

function changeTonality(newTonality){
	window.currentTonality = newTonality;
	/*for(x=0;x<keyboard.length;x++){
		keyboard[x].style.opacity = 0;
	}*/
	drawKeyboard();
	//setTimeout(keyboardShow,1000);
}

function keyboardShow(){
	for(x=0;x<keyboard.length;x++){
		keyboard[x].style.opacity = 1;
	}
}

function moveDown(x) {
	var bottomShadow = -7.5;
	var topShadow = 0;
	var sides = 5;
	var inc = 3.75;

	x.style.backgroundColor = "#DDDDDD";
	bottomShadow += inc;
	topShadow += inc;
	x.style.boxShadow = "inset "+sides+"px "+bottomShadow+"px #888888, inset -"+sides+"px "+bottomShadow+"px #888888, inset "+sides+"px "+topShadow+"px #888888, inset -"+sides+"px "+topShadow+"px #888888";
}

function moveDownError(x) {
	var bottomShadow = -7.5;
	var topShadow = 0;
	var sides = 5;
	var inc = 3.75;

	x.style.backgroundColor = "#FF2222";
	bottomShadow += inc;
	topShadow += inc;
	x.style.boxShadow = "inset "+sides+"px "+bottomShadow+"px #888888, inset -"+sides+"px "+bottomShadow+"px #888888, inset "+sides+"px "+topShadow+"px #888888, inset -"+sides+"px "+topShadow+"px #888888";
}

function moveUp(x) {
	var bottomShadow = -3.75;
	var topShadow = 3.75;
	var sides = 5;
	var inc = 3.75;
	
	x.style.backgroundColor = "#FFFFFF";
	bottomShadow -= inc;
	topShadow -= inc;
	x.style.boxShadow = "inset "+sides+"px "+bottomShadow+"px #888888, inset -"+sides+"px "+bottomShadow+"px #888888, inset "+sides+"px "+topShadow+"px #888888, inset -"+sides+"px "+topShadow+"px #888888";
}

function moveUpError(x) {
	var bottomShadow = -3.75;
	var topShadow = 3.75;
	var sides = 5;
	var inc = 3.75;

	x.style.backgroundColor = "#FF6666";
	bottomShadow -= inc;
	topShadow -= inc;
	x.style.boxShadow = "inset "+sides+"px "+bottomShadow+"px #888888, inset -"+sides+"px "+bottomShadow+"px #888888, inset "+sides+"px "+topShadow+"px #888888, inset -"+sides+"px "+topShadow+"px #888888";
}

function stopAll(){
	for(x=0;x<pitchList.length;x++){
		pitchList[x].pause();
		pitchList[x].currentTime = 0.0;
	}
}

function setVolume(currentVol,interval){
	window.currentVolume = currentVol += interval;
	if(currentVolume>1.0){
		window.currentVolume = 1.0;
	}
	else if(currentVolume<0.0){
		window.currentVolume = 0.0;
	}
	for(x=0;x<pitchList.length;x++){
		pitchList[x].volume = currentVolume;
	}
	volumeMeter();
}

function volumeMeter(){
	if(currentVolume<0.04){
		volumebar.style.opacity = 0;
	}
	else{
		volumebar.style.opacity = 1;
	}
	if(currentVolume>0.96){
		volumebar.style.backgroundColor = "#FF0000";
	}
	else{
		volumebar.style.backgroundColor = "#0000FF";
	}
	volumebar.style.width = currentVolume*400+"px";
}

function expandMinorKey(){
	var m = document.getElementById("minor2");
	m.style.opacity = 0;
}

function moveGame(){
	for(x=0;x<gameKeys.length;x++){
		gameKeys[x].style.transform = "translate(-"+(screenWidth+50)+"px, 0px)";
	}
}

if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)){
	 console.log("mobile user");
	 window.location.href = "\\mobile.html";
}
else{
	var gameKeys = [];
	var keyCount = 0;
	for(x=0;x<gameSong.length;x++){
		if(x==0 || x%2 == 0){
			gameKeys[keyCount] = document.createElement("TD");
			gameKeys[keyCount].className = "gameKey";
			gameKeys[keyCount].id = "gameKey"+keyCount;
			gameKeys[keyCount].keycode = gameSong[x];
			for(k=0;k<keyDict.length;k++){
				if(keyDict[k][0]==gameSong[x]){
					gameKeys[keyCount].innerHTML = "<b>"+pitchListC[keyDict[k][2]+pitch_change]+"</b>"+"<br>"+keyDict[k][1];
				}
			}
			gameKeys[keyCount].style.left = screenWidth+"px";
			screenWidth+=gameSong[x+1];
			document.body.appendChild(gameKeys[keyCount]);
			keyCount+=1;
		}
	}
	
	gameTarget = document.createElement("TD");
	gameTarget.className = "gameTarget";
	document.body.appendChild(gameTarget);
	
	gameLine = document.createElement("HR");
	gameLine.className = "gameLine";
	document.body.appendChild(gameLine);
	
	gameComment = document.createElement("TD");
	gameComment.className = "gameComment";
	document.body.appendChild(gameComment);
	
	setTimeout(moveGame,2000);
	loadingScreenOn();
	drawKeyboard();
	moveDown(currentKey);
	moveDown(currentInstrument);
	moveDown(currentTonality);
	setVolume(0.5,0.0);
	expandMinorKey();
	document.body.style.cursor = "default";
}