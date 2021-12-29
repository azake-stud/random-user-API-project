const button  = document.querySelector('button');
const profileImg = document.querySelector('.profile-img');
const p = document.querySelector('p');
const header = document.querySelector('h3');
const iconsWrapper = document.querySelector('.icons-wrapper')
button.addEventListener('click', () => {
    fetch('https://randomuser.me/api/?gender=female')
        .then(res => res.json())
        .then(data => {
            const user = data.results[0];
            profileImg.src = user.picture.large;
            header.innerText = user.name.first
            const content =  `<div class="icon" data-title='Hi, my name is' data-content=${user.name.first}>
            <img src="https://img.icons8.com/ios/50/000000/user--v1.png" alt="">
        </div>
        <div class="icon" data-title='Hi, my email is' data-content=${user.email}>
            <img src="https://img.icons8.com/ios/50/000000/email-open.png" alt="">
        </div>
        <div class="icon" data-title='Hi, my date of birth is' data-content=${user.dob.date}>
            <img src="https://img.icons8.com/ios/50/000000/calendar--v1.png
            " alt="">
        </div>
        <div class="icon" data-title='Hi, my location is' data-content=${user.location.city}>
            <img src="https://img.icons8.com/ios/50/000000/map-marker--v1.png
            " alt="">
        </div>
        <div class="icon" data-title='Hi, my phone num is' data-content=${user.phone}>
            <img src="https://img.icons8.com/ios/50/000000/phone.png
            " alt="">
        </div>
        <div class="icon" data-title='Hi, my password is' data-content=${user.login.password}>
            <img src="https://img.icons8.com/ios/50/000000/password-window.png
            " alt="">
        </div>`
        iconsWrapper.innerHTML = content;
        const allIcons = document.querySelectorAll('.icon');
        console.log(allIcons)
        allIcons.forEach((icon) => {
            icon.addEventListener('click', (e) => {
                const title = e.target.parentElement.getAttribute('data-title');
                p.innerText = title;
                const content = e.target.parentElement.getAttribute('data-content');
                header.innerText = content;
            })
        })
        })

})



