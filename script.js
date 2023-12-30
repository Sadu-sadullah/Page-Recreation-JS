//Data needed for the challenge in the form of a map
const asabenehChallenges2020 = {
    description: 'Asabeneh Yetayeh challenges',
    challengeTitle: 'Asabeneh Yetayeh challenges',
    challengeSubtitle: '30DaysOfJavaScript Challenge',
    challengeYear: 2020,
    keywords: [
      'HTML',
      'HTML5',
      'CSS',
      'CSS3',
      'JS',
      'JavaScript',
      'ES6',
      'Promise',
      'async await',
      'Database',
      'React',
      'React Hooks',
      'Context API',
      'React Router',
      'Web Storage',
      'localStorage',
      'sessionStorage',
      'Redux',
      'Node',
      'MongoDB',
      'SQL',
      'API',
      'DOM',
      'data science',
      'MERN',
      'Python',
      'Flask',
      'Statistics',
      'Linear Algebra',
      'Numpy',
      'Pandas',
      'Scipy',
      'Scikit-learn',
      'Visualization',
      'D3.js'
    ],
    author: {
      firstName: 'Asabeneh',
      lastName: 'Yetayeh',
      titles: [
        ['🌱', 'Educator'],
        ['💻', 'Programmer'],
        ['🌐', 'Developer'],
        ['🔥', 'Motivator'],
        ['📔', 'Content Creator']
      ],
      qualifications: [
        'MSc. Computer Science Ongoing',
        'BSc. Information and Communication Eng.',
        'MSc. Food Technology',
        'BSc.Food Technology'
      ],
      socialLinks: [
        {
          social: 'LinkedIn',
          url: 'https://www.linkedin.com/in/asabeneh/',
          fontawesomeIcon: '<i class="fab fa-linkedin">'
        },
        {
          social: 'Twitter',
          url: 'https://twitter.com/Asabeneh',
          fontawesomeIcon: '<i class="fa-brands fa-square-x-twitter"></i>'
        },
        {
          social: 'Github',
          fontawesomeIcon: '<i class="fab fa-github-square"></i>',
          url: 'https://github.com/Asabeneh'
        },
        {
          social: 'DEV.to',
          fontawesomeIcon: '<i class="fa-brands fa-dev"></i>',
          url: 'https://dev.to/asabeneh'
        }
      ],
      skills: [
        'Web Development',
        'Data Analysis',
        'Data Visualization',
        'Programming',
        'Databases',
        'Developing API'
      ],
      bio:
        'I am an educator, developer, motivator and content creator. I am a life-long learner. If you like to know more about me checkout my LinkedIn or Github profile. Thank you so much for joining in my quest of changing everyone to developer.'
    },
    challenges: [
      {
        name: '30 Days Of Python',
        topics: [
          'Python',
          'Flask',
          'Numpy',
          'Pandas',
          'Statistics',
          'API',
          'MongoDB'
        ],
        days: 30,
        status: 'Done',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30-Days-Of-Python'
      },
      {
        name: '30 Days Of JavaScript',
        topics: ['JavaScript', 'ES6', 'Promise', 'async and await', 'DOM'],
        days: 30,
        status: 'Ongoing',
        questions: 'Above 500',
        projects: 'About 30',
        interviewQns: '',
        githubUrl: 'https://github.com/Asabeneh/30DaysOfJavaScript'
      },
      {
        name: '30 Days Of HTML & CSS',
        topics: ['CSS', 'Flex', 'Grid', 'CSS Animation'],
        days: 30,
        status: 'Coming',
        questions: 'Above 500',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of React',
        topics: [
          'React',
          'React Router',
          'Redux',
          'Context API',
          'React Hooks',
          'MERN'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of ReactNative',
        topics: ['ReactNative', 'Redux'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: 'Two',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Fullstack',
        topics: ['React', 'Redux', 'MongoDB', 'Node', 'MERN'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Data Analysis',
        topics: ['Python', 'Numpy', 'Pandas', 'Statistics', 'Visualization'],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      },
      {
        name: '30 Days Of Machine Learning',
        topics: [
          'Python',
          'Numpy',
          'Pandas',
          'Scikit-learn',
          'Scipy',
          'Linear Algebra',
          'Statistics',
          'Visualization'
        ],
        days: 30,
        status: 'Coming',
        questions: '',
        projects: '',
        interviewQns: '',
        githubUrl: ''
      }
    ]
  }

document.body.setAttribute('style', 'margin: 0; font-family: "Arial", monospace;')

//Creating the headers for the webpage
const headersdiv = document.querySelector('#headers')
headersdiv.setAttribute('style', 'text-align: center;')
const mainHeader = document.createElement('h1')
const mainHeaderTextNode = document.createTextNode(`${asabenehChallenges2020.challengeTitle} in `)
mainHeader.appendChild(mainHeaderTextNode)
const year = document.createElement('span')
year.setAttribute('id', 'year')
year.textContent = '2020'

//Changing the color of the 2020 text
let index = 0
const changeColor = () => {
    const colors = ['blue', 'green', 'DarkGoldenRod', 'red', 'DarkMagenta']
    index === colors.length - 1 ? index = 0 : index++
    year.style.color = colors[index]
}

setInterval(changeColor, 1000)

mainHeader.setAttribute('style', 'font-weight: lighter;')
year.setAttribute('style', 'font-size: 80px;')
mainHeader.appendChild(year)
headersdiv.appendChild(mainHeader)

const subHeading = document.createElement('h4')
subHeading.textContent = `${asabenehChallenges2020.challengeSubtitle}`
subHeading.setAttribute('style', 'font-weight: lighter; text-decoration: underline;')
headersdiv.appendChild(subHeading)

//creating the elements for the date
const timer = document.createElement('p')
timer.setAttribute('id', 'time')

//Creating a function that will show time
let setTime = () => {
    const now = new Date()
    let yearNow = now.getFullYear(), monthNow = now.getMonth(), dateNow = now.getDate(), hourNow = now.getHours(), minuteNow = now.getMinutes(), secondsNow = now.getSeconds()

    //using tertiary condition to change hours from single digit to double digit if less than 10
    hourNow < 10 ? hourNow = '0' + hourNow : hourNow
    //using tertiary condition to change 24 hrs to 12hrs clock
    hourNow > 12 ? hourNow -= 12 : hourNow

    //using tertiary condition to change seconds from single digiti to double digit if less than 10
    secondsNow < 10 ? secondsNow = '0' + secondsNow : secondsNow

    //using tertiary condition to change minutes from single digiti to double digit if less than 10
    minuteNow < 10 ? minuteNow = '0' + minuteNow : minuteNow

    //Checking if PM or AM
    let timePeriod = ''
    now.getHours < 12 ? timePeriod = 'AM' : timePeriod = 'PM'

    //using tertiary condition to change date from single digit to double digit if less than 10
    dateNow < 10 ? '0' + dateNow : dateNow 

    //Using switch to change the month from numbers to strings
    switch (true) {
        case monthNow == 0:
            monthNow = 'January'
            break;
        case monthNow == 1:
            monthNow = 'February'
            break;
        case monthNow == 2:
            monthNow = 'March'
            break;
        case monthNow == 3:
            monthNow = 'April'
            break;
        case monthNow == 4:
            monthNow = 'May'
            break;
        case monthNow == 5:
            monthNow = 'June'
            break;
        case monthNow == 6:
            monthNow = 'July'
            break;
        case monthNow == 7:
            monthNow = 'August'
            break;
        case monthNow == 8:
            monthNow = 'September'
            break;
        case monthNow == 9:
            monthNow = 'October'
            break;
        case monthNow == 10:
            monthNow = 'November'
            break;
        case monthNow == 11:
            monthNow = 'December'
            break;
        default:
            console.log('Error occured')
            break;
    }
    document.getElementById('time').innerHTML = monthNow + ' ' + dateNow + ', ' + yearNow + ' ' + hourNow + ':' + minuteNow + ':' + secondsNow + ' ' + timePeriod
}

setInterval(setTime, 1000)

let indexTwo = 0
let changeBgTime = () => {
    const colorsNew = ['AntiqueWhite', 'Chocolate', 'DarkCyan', 'Coral', 'DarkViolet', 'LightSalmon', 'OrangeRed']
    indexTwo == colorsNew.length - 1 ? indexTwo = 0 : indexTwo++
    document.getElementById('time').style.backgroundColor = colorsNew[indexTwo]
}

setInterval(changeBgTime, 1000)
timer.setAttribute('style', 'padding: 10px; display: inline-block;')
headersdiv.appendChild(timer)


//Extracting the needed data from the object
//Creating a new arr to store only the challenges array from the whole object
const challengesArr = asabenehChallenges2020.challenges

//creating another object that would remove only the name values from the newly created array
const challengesNameArr = challengesArr.map(challenge => challenge.name)
const statusArr = challengesArr.map(key => key.status)

//Creating an arr for the main titles
const mainArr = challengesNameArr.map(title => title.replace('30 Days Of', '').trim())

//Selecting the content for the body
const bodyContent = document.querySelector('#body-content')

//Using a for loop to itterate through the arr that was created from the object and get the needed data
for (let index = 0; index < challengesNameArr.length; index++) {
const topicsArr = challengesArr[index].topics

const divContent = document.createElement('div')
const challengesName = document.createElement('p')
const nameOf = document.createElement('details')
const nameDetails = document.createElement('summary')
const moreInfo = document.createElement('p')
const statusOf = document.createElement('p')
  
//Using if to change the bg of the div according to the status
if (statusArr[index] == 'Done') {
  divContent.setAttribute('style', 'display: flex; justify-content: space-between; align-items: center; background-color: #2dbf73; padding: 20px; margin: 3px; margin-left: 10em; margin-right: 10em;')
} else if (statusArr[index] == 'Ongoing'){
  divContent.setAttribute('style', 'display: flex; justify-content: space-between; align-items: center; background-color: #fddb3a; padding: 20px; margin: 3px; margin-left: 10em; margin-right: 10em;')
} else {
  divContent.setAttribute('style', 'display: flex; justify-content: space-between; align-items: center; background-color: #fa5e53; padding: 20px; margin: 3px; margin-left: 10em; margin-right: 10em;')
}

challengesName.setAttribute('style', 'padding-right: 50px; margin: 0;')
nameOf.setAttribute('style', 'padding-right: 50px;')
statusOf.setAttribute('style', 'margin: 0;')

  
challengesName.textContent = challengesNameArr[index]
nameDetails.textContent = mainArr[index]

topicsArr.forEach(element => {
  const textNode = document.createTextNode(element)

  const lineBreak = document.createElement('br')

  moreInfo.appendChild(textNode)
  moreInfo.appendChild(lineBreak)
});

statusOf.textContent = statusArr[index]

bodyContent.appendChild(divContent)
divContent.appendChild(challengesName)
divContent.appendChild(nameOf)
nameOf.appendChild(nameDetails)
nameOf.appendChild(moreInfo)
divContent.appendChild(statusOf)

}

//Selecting the footer div first
const footerDiv = document.querySelector('#footer-content')

//Getting the authors detail stored in an array from the object
const authorDetails = asabenehChallenges2020.author


//Creating a h1 element to show the authors name
const fullName = document.createElement('h1')
const fullNameTextNode = document.createTextNode(`${authorDetails.firstName} ${authorDetails.lastName}`)
fullName.appendChild(fullNameTextNode)
fullName.setAttribute('style', 'text-align: center; font-weight: normal;')

footerDiv.appendChild(fullName)

//Creating an array from the authors array to get the social details and then display them on the page
const socials = authorDetails.socialLinks


//creating a new div within the footer div for the logos
const socialLogos = document.createElement('div')
socialLogos.setAttribute('style', 'text-align: center')
footerDiv.appendChild(socialLogos)

//Extracting the values for the fontawesomeicons only
const classOfIcons = socials.map(links => links.fontawesomeIcon)

//Extracting the values for the links only
const linksOnly = socials.map(links => links.url)

//Using regex to remove the class only from the array
const extractedClasses = classOfIcons.map( str => {
  const match = str.match(/class="([^"]*)"/)
  return match ? match[1] : null
})

//Creating link elements using a for loop that would contain the logos and would serve as the link to the social pages
for (let index = 0; index < extractedClasses.length; index++) {
  const links = document.createElement('a')
  const linkshref = document.createElement('i')
  linkshref.setAttribute('class', extractedClasses[index])
  linkshref.setAttribute('style', 'font-size: 40px; padding-right: 10px;')
  links.setAttribute('style', 'color: Black;')
  links.setAttribute('href', linksOnly[index])
  socialLogos.appendChild(links)
  links.appendChild(linkshref)
}

//Using the already existing author object and extracting the bio info from it
const bioDiv = document.createElement('div')
bioDiv.setAttribute('class', 'bio-div')
bioDiv.setAttribute('style', 'margin-top: 80px; margin-right: 200px; margin-left: 200px')
const bio = document.createElement('p')
bio.setAttribute('style', 'text-align: center')
bio.textContent = authorDetails.bio
footerDiv.appendChild(bioDiv)
bioDiv.appendChild(bio)

//Creating a whole separate div which will contain separate divs for each of the Titles, Skills and Qualifications
const bigDiv = document.createElement('div')
bigDiv.setAttribute('class', 'big-div')
bigDiv.setAttribute('style', 'display: flex; justify-content: space-between; margin-left: 15rem; margin-right: 15rem;')

//Creating the div that will contain the titles
const titlesDiv = document.createElement('div')
titlesDiv.setAttribute('class', 'titles-div')
const titleOfTitlesDiv = document.createElement('h4')
titleOfTitlesDiv.textContent = 'Titles'
footerDiv.appendChild(bigDiv)
bigDiv.appendChild(titlesDiv)
titlesDiv.appendChild(titleOfTitlesDiv)
authorDetails.titles.forEach(element => {
  const titlesThemselves = document.createElement('p')
  titlesThemselves.textContent = element.join(' ')
  titlesDiv.appendChild(titlesThemselves)
});

//creating the div that will contain the skills
const skillsDiv = document.createElement('div')
skillsDiv.setAttribute('class', 'skills-div')
const skillsH = document.createElement('h4')
skillsH.textContent = 'Skills'
bigDiv.appendChild(skillsDiv)
skillsDiv.appendChild(skillsH)
authorDetails.skills.forEach(element => {
  const skillsThemselves = document.createElement('p')
  skillsThemselves.textContent = `✅ ${element}`
  skillsDiv.appendChild(skillsThemselves)
})

//Creating the div that will contain the qualifications
const qualiDiv = document.createElement('div')
qualiDiv.setAttribute('class', 'qualifications-div')
const qualiH = document.createElement('h4')
qualiH.textContent = 'Qualifications'
bigDiv.appendChild(qualiDiv)
qualiDiv.appendChild(qualiH)
authorDetails.qualifications.forEach(element => {
  const qualiThemselves = document.createElement('p')
  if(element.includes('MSc. Computer Science Ongoing')){
    qualiThemselves.textContent = `📖 ${element}`
    qualiDiv.appendChild(qualiThemselves)
  } else {
    qualiThemselves.textContent = `👨🏽‍🎓 ${element}`
    qualiDiv.appendChild(qualiThemselves)
  }
});

//Creating the div that will contain the keywords which will be appended directly to the footer div
const keywordsDiv = document.createElement('div')
keywordsDiv.setAttribute('class', 'keywords-div')
keywordsDiv.setAttribute('style', 'margin-left: 15rem; margin-right: 15rem; margin-bottom: 3rem;')
const keywordsHDiv = document.createElement('div')
const keywordsH = document.createElement('h4')
keywordsH.textContent = 'Keywords'
const keywordsOnlyDiv = document.createElement('div')
keywordsOnlyDiv.setAttribute('style', 'margin-left: 20px;')
keywordsDiv.appendChild(keywordsHDiv)
keywordsDiv.appendChild(keywordsOnlyDiv)
keywordsHDiv.appendChild(keywordsH)
footerDiv.appendChild(keywordsDiv)

//Creating a function that will create a random hex number for the background colors
function randomHex() {
  const charPool = '1234567890ABCDEF'
  const n = 6
  let randomChar = '#'
  
  for (i = 0; i < n; i++) {
      let rIndex = Math.floor(Math.random() * charPool.length) % charPool.length
      randomChar += charPool[rIndex]
  }
  return randomChar
}

//Using a loop to go through the values within the object
asabenehChallenges2020.keywords.forEach(element => {
  const keyword = document.createElement('h5')
  keyword.textContent = `# ${element}`
  keyword.setAttribute('style', 'border-radius: 20px; display: inline-block; padding: 10px; margin-left : 10px; margin-right : 10px; margin-top : 5px; margin-bottom : 5px;')
  keyword.style.backgroundColor = randomHex()
  keywordsOnlyDiv.appendChild(keyword)
});