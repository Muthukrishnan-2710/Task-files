// for loop function

const json1 = {
    "name": "Muthu Krishnan",
    "age": 26
  };
  
  for (let key in json1) {
    console.log(key + ": " + json1[key]);
  }

  // for in loop function

  const json2 = {
    "name": "Muthu Krishnan",
    "age": 26
  };
  
  for (let key in json2) {
    console.log(key + ": " + json2[key]);
  }
 
// For of loop function

  // Assuming you have an array of objects
const jsonArray = [
    { "name": "Muthu Krishnan", "age": 26 },
    // Add more objects as needed
  ];
  
  for (let obj of jsonArray) {
    for (let key in obj) {
      console.log(key + ": " + obj[key]);
    }
  }
  
  //For each loop function

  // Assuming you have an array of objects
const jsonArray2 = [
    { "name": "John", "age": 25 },
    // Add more objects as needed
  ];
  
  jsonArray.forEach(obj => {
    for (let key in obj) {
      console.log(key + ": " + obj[key]);
    }
  });
  
  // Resume

  {
  "name"; "Muthu Krishnan",
  "contact"; {
    "email"; "Krish31150183@gmail.com",
    "phone"; "+91 9710490771",
    "address"; "No.3M,G1, Supreme Amor Basil avanue main road sithalapakkam chennai-600126"
  };
  "summary"; 'Experienced in fiber design roles - FTTH , FTTP'
  "education"; [
    {
      "degree": "Master of Commerce",
      "Univerristy": "University of Madras",
      "graduation_year": 2020
    }
  ],
  "experience"; [
    {
      "position": "Network processing new associate",
      "company": "Accenture india pvt ltd.",
      "start_date": "2020-11-19",
      "end_date": "NA",
      "responsibilities": [
        "Responsible to design the client specified area with using of existing infrastruture.",
        "Collaborated with cross-functional teams to deliver high-quality design production.",
      ]
    },
  ],

  "skills"; [
    "PNI",
    "Smallworld",
    "Problem Solving",
    "Team Collaboration"
  ],
  "languages"; [
    {
      "language": "English",
      "proficiency": "Intermediate",
    },
    {
      "language": "Tamil",
      "proficiency": "Expert"
    }
  ],
""}

//Difference between window , screen , document

//In JavaScript, window, screen, and document are all objects that represent different aspects of the browser environment. Here's a brief overview of each:

//window Object:

//The window object is the top-level object in the browser's object model hierarchy.
//It represents the browser window or tab and serves as the global object for JavaScript in the browser.
//It contains properties and methods that provide access to various browser-related functionalities.


//screen Object:

//The screen object represents the user's screen or display.
//It provides information about the user's screen size, resolution, and color depth.

//document Object:

//The document object represents the HTML document loaded in the browser window.
//It provides methods and properties to manipulate the content and structure of the document.

//In summary:

//window deals with the overall browser window and global properties.
//screen deals with properties of the user's screen or display.
//document deals with the content and structure of the HTML document loaded in the browser.
//These objects are part of the broader Document Object Model (DOM) that allows JavaScript to interact with and manipulate the content and structure of a web page.





