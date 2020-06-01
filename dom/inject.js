/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html
*/

let center = document.createElement('center'); 
center.innerHTML = '<h1><i>HTML Practice Exercise TEKcamp.</i></h1><h2><a href="">TEKsystems "TEKcamp"</a></h2>'; 
document.querySelector('#inject').append(center); 
let hr = document.createElement('hr'); 
document.querySelector('#inject').append(hr); 
let p = document.createElement('p'); 
p.innerHTML = "I love <i>HTML</i> for the following reasons:"
document.querySelector('#inject').append(p); 
let ol = document.createElement('ol'); 
ol.innerHTML = " <li>I learned it quickly.</li><li>I can make web pages using code=<li> It's fun.</li>"; 
document.querySelector('#inject').append(ol); 
let hr1 = document.createElement('hr'); 
document.querySelector('#inject').append(hr1); 
let p1 = document.createElement('p'); 
p1.innerHTML = `My instructor's email address is: <a href="mailto:ayunas@teksystems.com">ayunas@teksystems.com</a>.`; 
document.querySelector('#inject').append(p1); 
let p2 = document.createElement('p'); 
p2.innerHTML = '<h1>Have a great day!</h1>  I really look forward to learning how to code!  Have a great day. -[Team "Git\'er Done"]'; 
document.querySelector('#inject').append(p2); 
