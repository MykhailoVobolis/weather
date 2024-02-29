import{a as l}from"./assets/vendor-0cb09735.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function a(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=a(e);fetch(e.href,r)}})();l.defaults.baseURL="https://api.openweathermap.org";const u="117bcd5592950f9f701a11f5ab982de0";async function d(t){return(await l.get("/data/2.5/weather",{params:{q:t,appid:u,units:"metric",lang:"ua"}})).data}function p(t){let i=t.weather[0].description,a=Math.round(t.main.temp),n=Math.round(t.main.feels_like),e=Math.round(t.wind.speed*1e3/3600),r=t.name,s=t.main.humidity;return`<div>
              <img src="src/img/clouds.png" alt="weather" class="weather" />
              <p class="description">${i}</p>
            </div>
            <div class="temperature">
              <h2>${a}°c</h2>
              <div class="feels-like">
                <p class="feels-like-value">${n}°c</p>
                <p>Відчувається як</p>
              </div>
            </div>
            <h1>${r}</h1>
            <div>
              <ul class="params-weather">
                <li class="params-weather-item">
                  <img src="./img/humidity.png" alt="humidity" />
                  <div class="params-weather-value">
                    <p class="humidity">${s}%</p>
                    <p>Вологість</p>
                  </div>
                </li>
                <li class="params-weather-item">
                  <img src="./img/wind.png" alt="wind" />
                  <div class="params-weather-value">
                    <p class="wind">${e} m/s</p>
                    <p>Швидкість вітру</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>`}const m=document.querySelector("form"),c=document.querySelector(".marcup-container");let o=null;m.addEventListener("submit",f);async function f(t){if(t.preventDefault(),c.innerHTML="",o=t.target.elements.search.value.trim(),o===""){console.log("The search query cannot be empty");return}try{const i=await d(o);if(!i.name.length){console.log("Sorry, there are no city matching your search query. Please try again!");return}const a=p(i);c.insertAdjacentHTML("beforeend",a)}catch(i){console.log(i)}finally{t.target.reset()}}
//# sourceMappingURL=commonHelpers.js.map
