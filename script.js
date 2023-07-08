const services = [{
  header: 'Muscles',
  text:'muscle tissue that is used to contract and relax the body',
  imageFileName:'./images/r1.jpg'
},
{
  header: 'Muscles',
  text:'muscle tissue that is used to contract and relax the body',
  imageFileName:'./images/r2.jpg'
},
{
  header: 'Muscles',
  text:'muscle tissue that is used to contract and relax the body',
  imageFileName:'./images/r3.jpg'
},
{
  header: 'Muscles',
  text:'muscle tissue that is used to contract and relax the body',
  imageFileName:'./images/r4.jpg'
},
{
  header: 'Muscles',
  text:'muscle tissue that is used to contract and relax the body',
  imageFileName:'./images/r5.jpg'
}];

let servicesLine='';
services.forEach(element => {
  servicesLine += `<div class="service">
  <img src="${element.imageFileName}">
  <div>
    <h4>${element.header}</h4>
    <p>${element.text}</p>
    <button>Consult</button>
  </div>
</div>`;
console.log(servicesLine);
});

const servicesgrid = document.getElementById('servicesgrid');
servicesgrid.innerHTML = servicesLine;




const testimonials = [{
  name:"John Doe",
  quote:"I am impressed with your team's work on our website redesign project!",
  imageFileName: "./images/s1.png"
},
{
  name:"John Doe",
  quote:"I am impressed with your team's work on our website redesign project!",
  imageFileName: "./images/s1.png"
},
{
  name:"John Doe",
  quote:"I am impressed with your team's work on our website redesign project!",
  imageFileName: "./images/s1.png"
},
{
  name:"John Doe",
  quote:"I am impressed with your team's work on our website redesign project!",
  imageFileName: "./images/s1.png"
},
{
  name:"John Doe",
  quote:"I am impressed with your team's work on our website redesign project!",
  imageFileName: "./images/s1.png"
}];

let testimonialsLine='';
testimonials.forEach(element => {
  testimonialsLine += `<div class="testimonial">
  <p>${element.quote}</p>
  <div>
    <img src="${element.imageFileName}">
    <div class="testimonial-div">
      <h2>${element.name}</h2>
    </div>
  </div>
</div>`;
console.log(testimonialsLine);
});

const testimonialsGrid = document.querySelector('.testimonialsgrid');
testimonialsGrid.innerHTML = testimonialsLine;
