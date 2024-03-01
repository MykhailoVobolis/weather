import{a as l}from"./assets/vendor-0cb09735.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();l.defaults.baseURL="https://api.openweathermap.org";const d="117bcd5592950f9f701a11f5ab982de0";async function p(t){return(await l.get("/data/2.5/weather",{params:{q:t,appid:d,units:"metric",lang:"ua"}})).data}function m(t){const i=t.weather[0].description,s=t.weather[0].icon,n=Math.round(t.main.temp),e=Math.round(t.main.feels_like),r=Math.round(t.wind.speed*1e3/3600),a=t.name,u=t.main.humidity;return`<div>
              <img src="https://openweathermap.org/img/wn/${s}@2x.png" alt="weather" class="weather" />
              <p class="description">${i}</p>
            </div>
            <div class="temperature">
              <h2>${n}°c</h2>
              <div class="feels-like">
                <p class="feels-like-value">${e}°c</p>
                <p>Відчувається як</p>
              </div>
            </div>
            <h1>${a}</h1>
            <div>
              <ul class="params-weather">
                <li class="params-weather-item">
                  <img src="../img/humidity.png" alt="humidity" />
                  <div class="params-weather-value">
                    <p class="humidity">${u}%</p>
                    <p>Вологість</p>
                  </div>
                </li>
                <li class="params-weather-item">
                  <img src="../img/wind.png" alt="wind" />
                  <div class="params-weather-value">
                    <p class="wind">${r} m/s</p>
                    <p>Швидкість вітру</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>`}const h=document.querySelector("form"),c=document.querySelector(".marcup-container");let o=null;h.addEventListener("submit",f);async function f(t){if(t.preventDefault(),c.innerHTML="",o=t.target.elements.search.value.trim(),o===""){console.log("The search query cannot be empty");return}try{const i=await p(o);if(!i.name.length){console.log("Sorry, there are no city matching your search query. Please try again!");return}const s=m(i);c.insertAdjacentHTML("beforeend",s)}catch(i){console.log(i)}finally{t.target.reset()}}
//# sourceMappingURL=commonHelpers.js.map
