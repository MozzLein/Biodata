const bodyParser = require('body-parser')
const urlencodedParser = bodyParser.urlencoded({
    extended: false
})

const objDummy = {
    "name": "Farhan Syarif",
    "age": "20",
    "location": "South Sulawesi",
    "degree": "-",
    "phone": "081241414196",
    "email": "farhanminta1234@gmail.com",
    "motto": "Terkadang hidup memang tidak adil, namun jika kita ingin tetap bertahan di dunia ini kita harus dapat bertahan di tengah ketidak adilan dunia ini.",
    "facebook": "http://www.facebook.com/farhan.minta",
    "linkedin" : "https://www.linkedin.com/in/farhan-syarif-87a305257/",
    "instagram" : "https://www.instagram.com/farhansyariff_/",
    "whoami": "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam et, laborum quam vel qui culpa beatae consequatur explicabo. Molestiae voluptate et aut unde rem cupiditate neque quos pariatur deleniti magni eos ex rerum eligendi fuga corrupti sed nulla necessitatibus ducimus, nam ipsam molestias iste! Labore ipsa ratione illo a necessitatibus!",
    "education": [
        "SDN Paccinongang", "SMPN 4 Sungguminasa", "SMAN 10 Gowa", "Universitas Muslin Indonesia"
    ],
    "skills": [{
            "skill": "NodeJS",
            "type": "Programing language",
            "range": "38"
        },
        {
            "skill": "HTML",
            "type": "Markup Language",
            "range": "60"
        },
        {
            "skill": "CSS",
            "type": "Styling",
            "range": "40"
        }
    ],
    "experience" : [
        "Translator english to indonesia in Komikcast", "Make an website for BSU Teratai Pampang", "GDSC University of Muslim Indonesia as a Core Team"
    ]
}

const getHeroInfo = (req, res) => {
    const {
        name,
        motto,
        facebook,
        linkedin,
        instagram
    } = objDummy
    res.render('profesi', {
        layout: 'layout/main-layout',
        data: {
            name,
            motto,
            facebook,
            linkedin,
            instagram
        }
    })
}

const getAboutMe = (req, res) => {
    const {
        name,
        age,
        location,
        degree,
        phone,
        email,
        whoami,
        education
    } = objDummy
    res.render('about', {
        layout: 'layout/main-layout',
        data: {
            name,
            age,
            location,
            degree,
            phone,
            email,
            whoami,
            education
        }
    })
}

const getSkill = (req, res) => {
    const {
        skills
    } = objDummy
    res.render('skill', {
        layout: 'layout/main-layout',
        data: {
            skills
        }
    })
}

const getExperience = (req, res) => {
    const {experience} = objDummy
    res.render('experience', {
        layout: 'layout/main-layout',
        data:{experience}
    })
}
module.exports = {
    urlencodedParser,
    getHeroInfo,
    getAboutMe,
    getSkill,
    getExperience
}