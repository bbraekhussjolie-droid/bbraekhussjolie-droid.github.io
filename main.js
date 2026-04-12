/*function add (first, second){
    return first + second;
}

alert(add(1,2));

function go(name, age){
    if (name=='Cameron'){
        name = 'Jerk'
    }
    if (age<20){
        return name+"!";
    }else{
        return name;
    }
}
respons=go('Nuwanda', 17);
alert(respons);
alert(go('Cameron', 17));

var deadPoets= ['Cameron','Charlie', 'Neil', 'Knox']
alert(deadPoets);
deadPoets.push('Todd')
alert(deadPoets)
var dust = deadPoets.shift()
alert(dust+' er en dust')
alert(deadPoets)
removeItem='Neil'
alert('bare '+ deadPoets+ ' nå...')*/

var YAWP = ["I", "sound", "my", "barbaric", "YAWP", "over", "the", "rooftops", "of", "the", "world!", "-W.W"/*, "opsie"*/];
var ganger = 0;
while (ganger<YAWP.length/*-1*/){   //spør først, gjør etterpå
    console.log(YAWP[ganger]);
    ganger++;
}
/*//*/ganger = 0
console.log("")
do{                                 //gjør først, spør etterpå
    console.log(YAWP[ganger]);
    ganger++;
} while(ganger<YAWP.length/*-1*/)
console.log("")

for (i=0; i<YAWP.length; i++){     //rar versjon av for i in range():... syntax: for(setup; comparison; event){}
    console.log(YAWP[i]);
}