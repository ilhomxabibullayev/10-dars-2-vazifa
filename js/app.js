// 1. single threading va multi threading deganda nimani tushunasiz ?

/* single threading oddiy, ammo sekin va cheklangan ishlash imkoniyatini beradi,
multi threading esa ko'plab vazifalarni paralel ravishda bajarishga imkon berib, samaradorlikni oshiradi, ammo murakkablikni keltiradi. */

// 2. synxron va asynxron dasturlash deganda nimani tushunasiz va ularni farqi nimada ?

/* synxron dasturlash oddiy va tushunarli bo'sada, faqat bir vazifa bajarilgandan keyin boshqa vazifa bajarilishi mumkin.
u ko'proq oddiy dasturlar yoki uzoq vaqt talab qiladigan operatsiyalarni kutmaslik kerak bo'lgan hollarda ishlatiladi.
asynxron dasturlash ko'plab vazifalarni paralel ravishda bajarish imkonini beradi, bu katta va murakkab tizimlarda samaradorlikni oshiradi.
ammo bu dastur yozishni murakkablashtirishi mumkin va ba'zi holatlarda kodni tushunishni qiyinlashtiradi. */

// 3. javascriptda event loop nima ?

/* event loop javaScriptning single threaded tabiatini samarali boshqaradi va asinxron operatsiyalarni tartibga soladi.
javascript kodlari call stackda bajariladi.
ssinxron operatsiyalar web APIs tomonidan bajariladi va callback funksiyalari callback queuega yuboriladi.
event loop har doim call stackni tekshiradi va u bo'sh bo'lganda callback queuedan birinchi funktsiyani call stackga yuboradi. bu tarzda javascript bloklanmasdan asinxron vazifalarni bajaradi. */

// 4. microtask queue va task queue ni farqi nimada ?

/* task queue va microtask queue javascriptda asinxron operatsiyalarni bajarish tartibini boshqaradi.
microtasks (promises) yuqori prioritetga ega va ular task queuedan oldin bajariladi.
task queue esa ko'proq umumiy va kattaroq vazifalar uchun mo'ljallangan.
event loop har doim microtask queueni tekshiradi va undan keyin task queueni bajaradi. */

// 5. kod qaysi ketma ketligda ishlaydi va nega ?

console.log('1');

setTimeout(function t2() {
    console.log('2');
}, 100);

setTimeout(function t2() {
    console.log('0');
}, 0);

Promise.resolve().then(function t3() {
    console.log('3');
});

fetch('https://google.com').then(() => {
    console.log('google');
});

console.log('4');


/* synchronous (sinxron) kodlar call stackda birma-bir bajariladi (console.log('1') va console.log('4')).
asynchronous (asinxron) kodlar (masalan, setTimeout, Promise, fetch) web APIlarga yuboriladi va callbacklari task queue yoki microtask queueda kutadi.
promiselar microtask queuega qo'shiladi va ular task queuedan oldin bajariladi.
setTimeout(callback, 0) 0 millisekunddan keyin bajarilishi kerak bo'sada, event loop microtask queuedagi vazifalarni bajarib bo'lgandan so'ng bajariladi. */

// 6. web api nima ?

/* web APIlar javascriptga qo'shimcha imkoniyatlar taqdim etadi va ular asosan brauzer yoki server tomonidan taqdim etiladi. 
ular asinxron ishlaydi va foydalanuvchi bilan interaktivlikni ta'minlaydi, masalan, tarmoq so'rovlari yuborish, DOM bilan ishlash, foydalanuvchi joylashuvini aniqlash va boshqalar. 
bu APIlar javascriptning quvvatli xususiyatlaridan biri bo'lib, web ilovalarni rivojlantirishda juda muhim rol o'ynaydi. */