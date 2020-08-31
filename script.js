const projectImages = {
    betplus1: {
        currentIndex: 0,
        imgs: [
            'img/projects/betplus1/admin.365_coupons.png',
            'img/projects/betplus1/admin.365_results.png',
            'img/projects/betplus1/365.ovh_admin_coupons_edit.png',
            'img/projects/betplus1/betplus_admin_users.png',
            'img/projects/betplus1/betplusv1_login.png',
        ]
    },
    betplus2:{ 
        currentIndex: 0,
        imgs: [
            'img/projects/betplus2/betplus.in_.png',
            'img/projects/betplus2/betplus.in_ login.png',
            'img/projects/betplus2/mobile.betplus.in_coupon.png',
            'img/projects/betplus2/mobile.betplus.in_event.png',
            'img/projects/betplus2/mobile.betplus.in_slogin.png',
            'img/projects/betplus2/mobile.betplus.in_sportall.png'
        ]
    },
    staf: {
        currentIndex: 0,
        imgs: [
            'img/projects/staf/127.0.0.1_4200_projects.png',
            'img/projects/staf/127.0.0.1_4200_editor.png',
            'img/projects/staf/127.0.0.1_4200_login.png',
            'img/projects/staf/127.0.0.1_4200_logs.png',
            'img/projects/staf/127.0.0.1_4200_settings.png',
            'img/projects/staf/127.0.0.1_4200_test.png'
        ]
    }
};
let currentProject;

document.addEventListener('keydown', e => {
    if (e.keyCode == 27) { // ESC
        closeImage();
    }
});

function showProjectImages(project) {
    currentProject = projectImages[project];
    currentProject.currentIndex = 0;
    document.querySelector('#overlay').style.display = 'block';
    document.querySelector('.container').style.display = 'flex';
    showImage();
}

function showImage() {
    document.querySelector("#expandedImg").src = currentProject.imgs[currentProject.currentIndex];
}

function closeImage() {
    document.querySelector('.closebtn').parentElement.style.display='none';
    document.querySelector('#overlay').style.display = 'none';
}

function nextImage() {
    if (currentProject.currentIndex < currentProject.imgs.length - 1) {
        currentProject.currentIndex++;
    } else {
        currentProject.currentIndex = 0;
    }
    showImage();
}

function previousImage() {
    if (currentProject.currentIndex > 0) {
        currentProject.currentIndex--
    } else {
        currentProject.currentIndex = currentProject.imgs.length - 1;
    }
    showImage();
}