import{a as d,i as o}from"./assets/vendor-db25513e.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const a of r.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();d.defaults.baseURL="https://api.openweathermap.org";const f="117bcd5592950f9f701a11f5ab982de0";async function p(t){return(await d.get("/data/2.5/weather",{params:{q:t,appid:f,units:"metric",lang:"ua"}})).data}function u(t){const s=t.weather[0].description,i=t.weather[0].icon,n=Math.round(t.main.temp),e=Math.round(t.main.feels_like),r=Math.round(t.wind.speed*1e3/3600),a=t.name,m=t.main.humidity;return`<div>
              <img src="https://openweathermap.org/img/wn/${i}@2x.png" alt="weather" class="weather" />
              <p class="description">${s}</p>
            </div>
            <div class="temperature">
              <h2>${n}°с</h2>
              <div class="feels-like">
                <p class="feels-like-value">${e}°с</p>
                <p>Відчувається як</p>
              </div>
            </div>
            <h1>${a}</h1>
            <div>
              <ul class="params-weather">
                <li class="params-weather-item">
                  <img :src="/img/humidity.png" alt="humidity" />
                  <div class="params-weather-value">
                    <p class="humidity">${m}%</p>
                    <p>Вологість</p>
                  </div>
                </li>
                <li class="params-weather-item">
                  <img :src="/img/wind.png" alt="wind" />
                  <div class="params-weather-value">
                    <p class="wind">${r} м/с</p>
                    <p>Швидкість вітру</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>`}const h=document.querySelector("form"),l=document.querySelector(".marcup-container");let c=null;h.addEventListener("submit",g);async function g(t){if(t.preventDefault(),l.innerHTML="",c=t.target.elements.search.value.trim(),c===""){o.warning({message:"Пошуковий запит не може бути порожнім",transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#FF8C00",progressBar:!1,position:"topRight",maxWidth:410});return}try{const s=await p(c),i=u(s);l.insertAdjacentHTML("beforeend",i)}catch(s){if(s.response.data.message){o.error({message:"На жаль, немає міст, які відповідають вашому пошуковому запиту. Будь ласка спробуйте ще раз!",transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#ef4040",progressBar:!1,position:"topRight",maxWidth:410});return}o.error({message:`${s}`,transitionIn:"bounceInDown",theme:"dark",messageColor:"#ffffff",messageSize:16,messageLineHeight:24,color:"#ef4040",progressBar:!1,position:"topRight",maxWidth:410})}finally{t.target.reset()}}
//# sourceMappingURL=commonHelpers.js.map
