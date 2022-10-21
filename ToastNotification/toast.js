const btn = document.getElementById('btn');
const container = document.getElementById('container');
const watch = document.getElementById('cons');

btn.addEventListener('click', ()=> {
    createNotification();
});

function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');

    notif.innerText = 'This challenge is crazy';
    watch.classList.add('show');
    container.appendChild(notif);

    setTimeout(()=> {
        notif.remove()
        watch.className=watch.className.replace("show","");
    },3000);
}