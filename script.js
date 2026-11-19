// ✏️ EDIT THIS SECTION: make it about her
var CFG={
  name:"Kosh",
  from:"Your lovelyy boy haveennnnn",
  reasons:[
    "Your laugh is my favourite sound in the whole world 💕",
    "You’re kind to everyone, even when no one is watching.",
    "You turn ordinary days into tiny adventures.",
    "You notice the little things, and it makes me feel so loved.",
    "You’re braver and stronger than you ever give yourself credit for.",
    "Your smile is the best view I know, even through a screen.",
    "You make me want to be a better person every single day.",
    "Being with you feels like home, wherever we are."
  ],
  pairs:["💖","🎂","🌹","🎁","✈️","📱"],
  coupons:["A video call Shower","25 Virutal Kisses","Late Night Games","A movie night, you pick the film","A voice note every morning for a week","The first hug when we meet, extra long"],
  wish:"Your wish is on its way, however many miles it has to travel.",
  letter:"<p>I just want you to know how incredibly special you are to me. You bring so much happiness into my life, even without realising it. Your smile, your little talks, your cute moments and even your silly things make me fall for you over and over again.</p><p>I wish I could be right beside you, hold your hands, give you the biggest hug and remind you how much you mean to me. No matter how far the distance is, you'll always have the closest place in my heart. I hope you never forget how precious, beautiful and loved you are.</p><p>Thank you for being my little happiness, my favourite person and my sweetest blessing. I love you more than words can explain, bbyy. Here's to many more beautiful memories together.</p><p class=\"sig\">Forever my favourite girl. 💗<br>"
};
var $=function(i){return document.getElementById(i)};
document.title="Happy Birthday, "+CFG.name+"!";
$("title").textContent="Happy Birthday, "+CFG.name+"!";
$("letter").innerHTML=CFG.letter+CFG.from;
$("go").onclick=function(){$("story").scrollIntoView()};
for(var bgPhoto=1;bgPhoto<=18;bgPhoto++){
  var bgImage=document.createElement("img");
  bgImage.src="image"+bgPhoto+".jpeg";
  bgImage.alt="";
  bgImage.className="bg-photo bg-photo-"+bgPhoto;
  $("photoBg").appendChild(bgImage);
}
var stickers=["💗","🎀","✨","🌸","💌","🧸","💕","🌷","💋","⭐","💞","🎂"];
stickers.forEach(function(sticker,i){
  var stickerEl=document.createElement("span");
  stickerEl.className="bg-sticker sticker-"+(i+1);
  stickerEl.textContent=sticker;
  stickerEl.style.animationDelay=(i*-1.1)+"s";
  $("stickerBg").appendChild(stickerEl);
});
for(var h=0;h<14;h++){var hs=document.createElement("span");hs.className="fh";hs.textContent=["💗","💖","🌸","💕"][h%4];hs.style.left=(h*7+Math.random()*5)+"%";hs.style.animationDelay=(Math.random()*-14)+"s";hs.style.fontSize=(16+Math.random()*18)+"px";$("hl").appendChild(hs)}

function confetti(n){
  if(matchMedia("(prefers-reduced-motion:reduce)").matches)return;
  var e=["🎉","🎈","💖","✨","🎂","🌸"];
  for(var i=0;i<n;i++){var s=document.createElement("span");s.className="conf";s.textContent=e[i%e.length];
    s.style.left=Math.random()*100+"vw";s.style.animationDelay=Math.random()*.8+"s";document.body.appendChild(s);
    setTimeout(function(x){x.remove()},3800,s);}
}

// Balloons
var cols=["#ff4d8d","#ff8a3d","#ff7aa8","#ffa94d","#ff6b6b","#ff9ec0","#ff7a45","#ff5c9f"],popped=0;
CFG.reasons.forEach(function(r,i){
  var b=document.createElement("button");b.className="b";b.style.background=cols[i%cols.length];b.setAttribute("aria-label","Balloon "+(i+1));
  b.onclick=function(){b.classList.add("pop");popped++;$("cnt").textContent=popped;$("msg").textContent=r;
    if(popped===CFG.reasons.length){$("msg").textContent=r+" That’s all of them, and there are many more.";confetti(24)}};
  $("bal").appendChild(b);
});

// Memory game
var deck=CFG.pairs.concat(CFG.pairs).sort(function(){return Math.random()-.5}),first=null,lock=false,moves=0,found=0;
deck.forEach(function(e){
  var c=document.createElement("button");c.className="mc";c.setAttribute("aria-label","Hidden card");
  c.onclick=function(){
    if(lock||c.classList.contains("up")||c.classList.contains("done"))return;
    c.classList.add("up");c.textContent=e;
    if(!first){first=c;return}
    moves++;$("mv").textContent=moves;
    if(first.textContent===e){first.classList.add("done");c.classList.add("done");found++;first=null;
      $("mres").textContent=found===CFG.pairs.length?"You found them all in "+moves+" moves. Just like us, a perfect match.":"A match! Keep going.";
      if(found===CFG.pairs.length)confetti(30)}
    else{lock=true;$("mres").textContent="Not a match, try again.";var a=first;first=null;
      setTimeout(function(){a.classList.remove("up");c.classList.remove("up");a.textContent="";c.textContent="";lock=false},800)}
  };
  $("mem").appendChild(c);
});

// Coupons
CFG.coupons.forEach(function(t){
  var c=document.createElement("button");c.className="cp";c.innerHTML='<span class="f">Tap to open</span>';
  c.onclick=function(){c.classList.add("open");c.innerHTML='<span class="f"></span>';c.firstChild.textContent=t};
  $("cps").appendChild(c);
});

// Wish
$("blow").onclick=function(){
  $("cake").classList.add("out");$("wm").textContent=CFG.wish;$("blow").disabled=true;confetti(36);
};
