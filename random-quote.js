   document.addEventListener('DOMContentLoaded',function(){
    var colors = ['#16a085', '#27ae60', '#2c3e50', '#f39c12', '#e74c3c', '#9b59b6', '#FB6964', '#342224', "#472E32", "#BDBB99", "#77B1A9", "#73A857"];
    changecolor();
    var json = {};
    getFirstQuote();
    
    //var object;
    

    function getFirstQuote()
    {
      req=new XMLHttpRequest();
      req.open("GET",'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json',true);
      req.send();
      //var json={};
      req.onload=function(){
        json=JSON.parse(req.responseText);
        printRandomQuote(json)
        //object = json;
        
            
      };
      // console.log("this :"+ json);
      
    }
       function printRandomQuote(object)
    {
        
        var length = object.quotes.length;
        var random = Math.floor((Math.random() * length) + 0);
       // console.log(random);
        //console.log(json.quotes[0].quote)
        document.getElementsByClassName('message')[0].textContent=object.quotes[random].quote;
        document.getElementsByClassName('author')[0].textContent='- '+object.quotes[random].author;
      
    }
    function changecolor(){
    	let len = colors.length;
    	let random = Math.floor(Math.random() * len);
    	let new_color = colors[random];
    	document.querySelector('.body1').style.color= new_color;
    	document.querySelector('.body1').style.background= new_color;
    	document.querySelector('.button').style.background= new_color;
    	
	}

    document.getElementById('getMessage').onclick=function(){
        //console.log(object);
        changecolor();
        printRandomQuote(json);
        
        
    };

    document.querySelector('.twitter-icon-box').addEventListener('click',function(){

    	var url='', text='';
		text = document.querySelector('.message').innerText+' -'+ document.querySelector('.author').innerText;
		window.open('http://twitter.com/share?url='+encodeURIComponent(url)+'&text='+encodeURIComponent(text), '', 'left=0,top=0,width=550,height=450,personalbar=0,toolbar=0,scrollbars=0,resizable=0');
    });
  
  });