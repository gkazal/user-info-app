var data = [
    {
        'id': 1,
        'name': 'Mr.A',
        'email': 'mra@gmail.com',
        'phone': '000111',
        'income': 50,
        'ProfileImage': 'https://i.ibb.co/DMPvMVq/smiling-blond-man-with-beer-smartphone-bar-1262-3624.jpg></a>'
    },
    {
        'id': 2,
        'name': 'Mr.B',
        'email': 'mrb@gmail.com',
        'phone': '000112',
        'income': 40,
        'ProfileImage': 'https://i.ibb.co/346mM82/40865892-closeup-of-a-mature-man-smiling-at-home.jpg'
    },
    {
        'id': 3,
        'name': 'Mr.C',
        'email': 'mrc@gmail.com',
        'phone': '000113',
        'income': 65,
        'ProfileImage': 'https://i.ibb.co/mqh6v9q/81468002c6fc9f2595b87cde8af1d272-male-portraits-portrait-ideas.jpg'
    },
    {
        'id': 4,
        'name': 'Mr.D',
        'email': 'mrd@gmail.com',
        'phone': '000114',
        'income': 70,
        'ProfileImage': 'https://i.ibb.co/mh9JVDL/83142123-handsome-young-man-posing-on-grey-background-portrait-of-satisfied-businessman-against-grey.jpg'

    },
    {
        'id': 5,
        'name': 'Mr.E',
        'email': 'mre@gmail.com',
        'phone': '000115',
        'income': 66,
        'ProfileImage': 'https://img.techpowerup.org/200826/a60d685194a7fd984d08a595a0a99ae7.jpg'
    },
    {
        'id': 6,
        'name': 'Mr.F',
        'email': 'mrf@gmail.com',
        'phone': '000116',
        'income': 44,
        'ProfileImage': 'https://img.techpowerup.org/200826/cameron-white.jpg'
    },
    {
        'id': 7,
        'name': 'Mr.G',
        'email': 'mrg@gmail.com',
        'phone': '000117',
        'income': 54,
        'ProfileImage': 'https://img.techpowerup.org/200826/cisc7g4v50042gzgzfe1a15j9-charles-white1-100-0-399-399-full.jpg'
    },
    {
        'id': 8,
        'name': 'Mr.H',
        'email': 'mrh@gmail.com',
        'phone': '000118',
        'income': 55,
        'ProfileImage': 'https://img.techpowerup.org/200826/Y2ZmNWZkNGM1MTQx.jpg'
    },
    {
        'id': 9,
        'name': 'Mr.I',
        'email': 'mri@gmail.com',
        'phone': '000119',
        'income': 84,
        'ProfileImage': 'https://img.techpowerup.org/200826/download.jpg'
    },
    {
        'id': 10,
        'name': 'Mr.J',
        'email': 'mrj@gmail.com',
        'phone': '0001110',
        'income': 89,
        'ProfileImage': 'https://img.techpowerup.org/200826/dustywhiteresized.jpg'
    },
    {
        'id': 11,
        'name': 'Mr.K',
        'email': 'mrk@gmail.com',
        'phone': '0001111',
        'income': 90,
        'ProfileImage': 'https://img.techpowerup.org/200826/free-profile-photo-whatsapp-3.png'
    },
    {
        'id': 12,
        'name': 'Mr.L',
        'email': 'mrl@gmail.com',
        'phone': '0001112',
        'income': 100,
        'ProfileImage': 'https://img.techpowerup.org/200826/images-1.jpg'
    },
    {
        'id': 13,
        'name': 'Mr.M',
        'email': 'mrm@gmail.com',
        'phone': '0001113',
        'income': 94,
        'ProfileImage': 'https://img.techpowerup.org/200826/images.jpg'
    },
    {
        'id': 14,
        'name': 'Mr.N',
        'email': 'mrn@gmail.com',
        'phone': '0001114',
        'income': 86,
        'ProfileImage': 'https://img.techpowerup.org/200826/linkedin-profile-picture.jpg'
    },
    {
        'id': 15,
        'name': 'Mr.O',
        'email': 'mro@gmail.com',
        'phone': '0001115',
        'income': 98,
        'ProfileImage': 'https://img.techpowerup.org/200826/pexels-photo-220453.jpg'
    }
]

let shuffle = a => {
    for (let i = a.length; i; i--) {
        let j = Math.floor(Math.random() * i);
        [a[i - 1], a[j]] = [a[j], a[i - 1]];
    }
}

const fakeData = [...data]

shuffle(fakeData);


export default fakeData