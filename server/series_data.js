const seriesDB = {
    theWire : {
        title:"The Wire",
        year:"2002–2008",
        released:"02 Jun 2002",
        runtime:"59 min",
        genre:"Crime, Drama, Thriller",
        director:"David Simon",
        writer:"David Simon",
        actors:"Dominic West, John Doman, Deirdre Lovejoy, Wendell Pierce",
        plot:"The Baltimore drug scene, as seen through the eyes of drug dealers and law enforcement.",
        language:"English, Greek, Mandarin, Spanish",
        country:"USA",
        awards:"Nominated for 2 Primetime Emmys. Another 16 wins & 52 nominations.",
        poster:"https://m.media-amazon.com/images/M/MV5BNTllYzFhMjAtZjExNS00MjM4LWE5YmMtOGFiZGRlOTU5YzJiXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_SX300.jpg",
        rating:"9.3"
    },
    strangerThings : {
        title:"Stranger Things",
        year:"2016–",
        released:"15 Jul 2016",
        runtime:"51 min",
        genre:"Drama, Fantasy, Horror",
        director:"Matt Duffer, Ross Duffer",
        writer:"Matt Duffer, Ross Duffer",
        actors:"Millie Bobby Brown, Finn Wolfhard,David Harbour Winona Ryder",
        plot:"When a young boy disappears, his mother, a police chief and his friends must confront terrifying supernatural forces in order to get him back.",
        language:"English, Russian",
        country:"United States",
        poster:"https://m.media-amazon.com/images/M/MV5BN2ZmYjg1YmItNWQ4OC00YWM0LWE0ZDktYThjOTZiZjhhN2Q2XkEyXkFqcGdeQXVyNjgxNTQ3Mjk@._V1_SX300.jpg",
        rating:"8.7"
    },
    houseOfCards : {
        title:"House of Cards",
        year:"2013–2018",
        released:"01 Feb 2013",
        runtime:"51 min",
        genre:"Drama",
        director:"Beau Willimon",
        writer:"Beau Willimon",
        actors:"Kevin Spacey, Michel Gill, Robin Wright",
        plot:"A Congressman works with his equally conniving wife to exact revenge on the people who betrayed him.",
        language:"English",
        country:"United States",
        poster:"https://m.media-amazon.com/images/M/MV5BODM1MDU2NjY5NF5BMl5BanBnXkFtZTgwMDkxNTcwNjM@._V1_SX300.jpg",
        rating:"8.7"
    },
    wandaVision : {
        title:"WandaVision",
        year:"2021",
        released:"15 Jan 2021",
        runtime:"350 min",
        genre:"Action, Comedy, Drama, Fantasy, Sci-Fi",
        director:"Jac Schaeffer, Matt Shakman",
        writer:"Jac Schaeffer",
        actors:"Elizabeth Olsen, Paul Bettany, Kathryn Hahn, Teyonah Parris",
        plot:"Blends the style of classic sitcoms with the MCU, in which Wanda Maximoff and Vision - two super-powered beings living their ideal suburban lives - begin to suspect that everything is not as it seems.",
        language:"English",
        country:"USA",
        poster:"https://m.media-amazon.com/images/M/MV5BYjJiZmE5ZDgtYWUxZi00MWI1LTg2MmEtZmUwZGE2YzRkNTE5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        rating:"8.1"
    },
    theMandalorian : {
        title:"The Mandalorian",
        year:"2019–",
        released:"12 Nov 2019",
        runtime:"40 min",
        genre:"Action, Adventure, Sci-Fi",
        director:"Jon Favreau",
        writer:"Jon Favreau",
        actors:"Pedro Pascal, Gina Carano, Giancarlo Esposito",
        plot:"The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic.",
        language:"English",
        country:"United States",
        poster:"https://m.media-amazon.com/images/M/MV5BZDhlMzY0ZGItZTcyNS00ZTAxLWIyMmYtZGQ2ODg5OWZiYmJkXkEyXkFqcGdeQXVyODkzNTgxMDg@._V1_SX300.jpg",
        rating:"8.8"
    },
    lostInSpace : {
        title:"Lost in Space",
        year:"2018–",
        rated:"TV-PG",
        released:"13 Apr 2018",
        runtime:"60 min",
        genre:"Adventure, Drama, Family",
        director:"Irwin Allen",
        writer:"Matt Sazama, Burk Sharpless, Irwin Allen",
        actors:"Maxwell Jenkins, Molly Parker, Toby Stephens",
        plot:"After crash-landing on an alien planet, the Robinson family fight against all odds to survive and escape, but they're surrounded by hidden dangers.",
        language:"English",
        country:"United States",
        poster:"https://m.media-amazon.com/images/M/MV5BYzZkOTY4MDgtODI5Mi00ZjA4LWJkODgtYzBiOGE3MWNhZWFmXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        rating:"7.3"
    },
    narcosMexico : {
        title:"Narcos: Mexico",
        year:"2018–",
        released:"16 Nov 2018",
        runtime:"50 min",
        genre:"Crime, Drama",
        director:"Amat Escalante, Alonso Ruizpalacios",
        writer:"Carlo Bernard, Chris Brancato, Doug Miro",
        actors:"Scoot McNairy, Diego Luna, José María Yazpik, Michael Pena",
        plot:"The rise of the Guadalajara Cartel as an American DEA agent learns the danger of targeting narcos in Mexico.",
        language:"English, Spanish",
        country:"Mexico, USA",
        poster:"https://m.media-amazon.com/images/M/MV5BMGJiMTc0OTctZDU1Yy00YjdiLTk1NWYtZTgzMjc1ODg4YzhkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
        rating:"8.4"
    },
    fauda : {
        title:"Fauda",
        year:"2015–",
        released:"15 Feb 2015",
        runtime:"60 min",
        genre:"Action, Drama, Thriller",
        director:"Lior Raz, Avi Issacharoff",
        writer:"Lior Raz, Avi Issacharoff",
        actors:"Lior Raz, Itzik Cohen, Neta Garty, Rona-Lee Shim'on",
        plot:"The human stories on both sides of the Israel-Palestine conflict.",
        language:"Hebrew, Arabic","Country":"Israel",
        poster:"https://m.media-amazon.com/images/M/MV5BZTk5OTU5Y2EtY2M1NC00N2E5LWJlMTMtODgzMDc2NDk1MTczXkEyXkFqcGdeQXVyMjMyMzI4MzY@._V1_SX300.jpg",
        rating:"8.2"
    },
    jackRyan : {
        title:"Jack Ryan",
        year:"2018–",
        released:"31 Aug 2018",
        runtime:"60 min",
        genre:"Action, Drama, Thriller",
        director:"N/A",
        writer:"Carlton Cuse, Graham Roland",
        actors:"John Krasinski, Wendell Pierce, John Hoogenakker",
        plot:"An up-and-coming CIA analyst, Jack Ryan, is thrust into a dangerous field assignment as he uncovers a pattern in terrorist communication that launches him into the center of a dangerous gambit.",
        language:"Arabic, Spanish, Russian, French, Turkish, German, Japanese, English",
        country:"United States",
        poster:"https://m.media-amazon.com/images/M/MV5BNDg1Zjc4YzktMmRmZi00ZWJmLWJiYzgtYjg3MmE0OTM1NzY5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        rating:"8.1"
    },
    friends : {
        title:"Friends",
        year:"1994–2004",
        released:"22 Sep 1994",
        runtime:"22 min",
        genre:"Comedy, Romance",
        director:"N/A",
        writer:"David Crane, Marta Kauffman",
        actors:"Jennifer Aniston, Courteney Cox, Lisa Kudrow, Matt LeBlanc, Matthew Perry",
        plot:"Follows the personal and professional lives of six twenty to thirty-something-year-old friends living in Manhattan.",
        language:"English, Spanish, Italian, French, Dutch, Hebrew",
        country:"USA",
        poster:"https://m.media-amazon.com/images/M/MV5BNDVkYjU0MzctMWRmZi00NTkxLTgwZWEtOWVhYjZlYjllYmU4XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        rating:"8.9"
    },
    breakingBad : {
        title:"Breaking Bad",
        year:"2008–2013",
        rated:"TV-MA",
        released:"20 Jan 2008",
        runtime:"49 min",
        genre:"Crime, Drama, Thriller",
        director:"Bryan Cranston",
        writer:"Vince Gilligan",
        actors:"Bryan Cranston, Aaron Paul, Anna Gunn",
        plot:"A high school chemistry teacher diagnosed with inoperable lung cancer turns to manufacturing and selling methamphetamine in order to secure his family's future.",
        language:"English, Spanish",
        country:"United States",
        poster:"https://m.media-amazon.com/images/M/MV5BMjhiMzgxZTctNDc1Ni00OTIxLTlhMTYtZTA3ZWFkODRkNmE2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        rating:"9.4"
    },
    chernobyl : {
        title:"Chernobyl",
        year:"2019",
        released:"06 May 2019",
        runtime:"330 min",
        genre:"Drama, History, Thriller",
        director:"Johan Renck",
        writer:"Craig Mazin",
        actors:"Jessie Buckley, Jared Harris, Stellan Skarsgård, Adam Nagaitis",
        plot:"In April 1986, an explosion at the Chernobyl nuclear power plant in the Union of Soviet Socialist Republics becomes one of the world's worst man-made catastrophes.",
        language:"English, Russian, Ukrainian",
        country:"USA, UK",
        poster:"https://m.media-amazon.com/images/M/MV5BZGQ2YmMxZmEtYjI5OS00NzlkLTlkNTEtYWMyMzkyMzc2MDU5XkEyXkFqcGdeQXVyMzQ2MDI5NjU@._V1_SX300.jpg",
        rating:"9.4"
    },
    loki : {
        title:"Loki",
        year:"2021–",
        released:"09 Jun 2021",
        runtime:"51-54 min",
        genre:"Action, Adventure, Fantasy",
        director:"Kate Herron",
        writer:"Michael Waldron",
        actors:"Tom Hiddleston, Owen Wilson, Sophia Di Martino",
        plot:"A new Marvel chapter with Loki at its center.",
        language:"English",
        country:"United States",
        poster:"https://m.media-amazon.com/images/M/MV5BNTkwOTE1ZDYtODQ3Yy00YTYwLTg0YWQtYmVkNmFjNGZlYmRiXkEyXkFqcGdeQXVyNTc4MjczMTM@._V1_SX300.jpg",
        rating:"9.1"
    },
    sherlock : {
        title:"Sherlock",
        year:"2010–2017",
        released:"24 Oct 2010",
        runtime:"88 min",
        genre:"Crime, Drama, Mystery, Thriller",
        director:"Mark Gatiss, Steven Moffat",
        writer:"Mark Gatiss, Steven Moffat",
        actors:"Benedict Cumberbatch, Martin Freeman, Una Stubbs, Rupert Graves",
        plot:"A modern update finds the famous sleuth and his doctor partner solving crime in 21st century London.",
        language:"English",
        country:"UK, USA",
        poster:"https://m.media-amazon.com/images/M/MV5BMWY3NTljMjEtYzRiMi00NWM2LTkzNjItZTVmZjE0MTdjMjJhL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyNTQ4NTc5OTU@._V1_SX300.jpg",
        rating:"9.1"
    },
    theSopranos : {
        title:"The Sopranos",
        year:"1999–2007",
        released:"10 Jan 1999",
        runtime:"55 min",
        genre:"Crime, Drama",
        director:"David Chase",
        writer:"David Chase",
        actors:"James Gandolfini, Lorraine Bracco, Edie Falco",
        plot:"New Jersey mob boss Tony Soprano deals with personal and professional issues in his home and business life that affect his mental state, leading him to seek professional psychiatric counseling.",
        language:"English, Italian, Russian",
        country:"United States",
        poster:"https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
        rating:"9.2"
    },
    fargo : {
        title:"Fargo",
        year:"2014–",
        rated:"TV-MA",
        released:"15 Apr 2014",
        runtime:"53 min",
        genre:"Crime, Drama, Thriller",
        director:"Noah Hawley, Keith Gordon, Dearbhla Walsh",
        writer:"Noah Hawley",
        actors:"Allison Tolman, Billy Bob Thornton, Colin Hanks, Martin Freeman",
        plot:"Various chronicles of deception, intrigue and murder in and around frozen Minnesota. Yet all of these tales mysteriously lead back one way or another to Fargo, North Dakota.",
        language:"English, German, Korean, Spanish, American Sign Language, French, Ukrainian, Hebrew, Russian",
        country:"USA",
        poster:"https://m.media-amazon.com/images/M/MV5BN2NiMGE5M2UtNWNlNC00N2Y4LTkwOWUtMDlkMzEwNTcyOTcyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
        rating:"8.9"
    },
    specialOps : {
        title:"Special OPS",
        year:"2020–",
        rated:"TV-MA",
        released:"17 Mar 2020","Runtime":"49 min","Genre":"Action, Crime, Thriller",
        genre:"Drama,Thriller",
        director:"Neeraj Pandey",
        writer:"Neeraj Pandey",
        actors:"Kay Kay Menon, Karan Tacker, Vinay Pathak",
        plot:"The story through the eyes of Himmat Singh is based on the inspiration was taken from Nineteen Years of nationally significant events, several espionage missions were undertaken by India in the last two decades.",
        language:"Hindi",
        country:"India",
        poster:"https://m.media-amazon.com/images/M/MV5BMDc3Zjc4NjAtMTI2MC00YmQwLTk3MmItZTZiNWM0YmNiNmNkXkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_SX300.jpg",
        rating:"8.6"
    },
    paatalLok : {
        title:"Paatal Lok",
        year:"2020–",
        rated:"TV-MA",
        released:"15 May 2020",
        runtime:"44 min",
        genre:"Crime, Drama, Thriller",
        director:"Prosit Roy,Avinash Arun",
        writer:"Sudip Sharma",
        actors:"Jaideep Ahlawat, Neeraj Kabi, Ishwak Singh, Abhishek Banerjee",
        plot:"A down and out cop lands the case of a lifetime when four suspects are nabbed in the assassination attempt of a journalist. The pursuit of it leads him to 'Paatal Lok', and to shocking discoveries in the past of the four suspects.",
        language:"Hindi",
        country:"India",
        poster:"https://m.media-amazon.com/images/M/MV5BMTE5NWUyMmYtMWE1My00ZDhiLWExZjEtMGJjYTA0OGYwZjIwXkEyXkFqcGdeQXVyODQ5NDUwMDk@._V1_SX300.jpg",
        rating:"7.8"
    },

    theFamilyMan: {
        title:"The Family Man",
        year:"2019–",
        rated:"TV-14",
        released:"19 Sep 2019",
        runtime:"45 min",
        genre:"Action, Comedy, Drama",
        director:"Raj Nidimoru, Krishna D.K, Suparn S. Verma",
        writer:"Krishna D.K., Raj Nidimoru",
        actors:"Manoj Bajpayee, Samantha Akkineni, Priyamani, Sharib Hashmi, Neeraj Madhav",
        plot:"A working man from the National Investigation Agency tries to protect the nation from terrorism, but he also needs to keep his family safe from his secret job.",
        language:"Hindi",
        country:"India",
        poster:"https://m.media-amazon.com/images/M/MV5BMzRjZWVmMzItNTdmYS00OWEzLTgyOGUtNThiNTU2ZThlYjY0XkEyXkFqcGdeQXVyMTIxMDk2NDE4._V1_SX300.jpg",
        rating:"8.8"
   },
   ghoul : {
    title:"Ghoul",
    year:"2018",
    released:"24 Aug 2018",
    runtime:"45 min",
    genre:"Drama, Fantasy, Horror, Sci-Fi",
    director:"Patrick Graham",
    writer:"N/A",
    actors:"Radhika Apte, Manav Kaul, Rohit Pathak, Mahesh Balraj",
    plot:"In a totalitarian near-future India, a mysterious prisoner is sent to a remote military interrogation center where he turns the tables on his captors by exposing their most shameful secrets and unleashing a demon from Arabic folklore.",
    language:"Hindi, English",
    country:"India",
    poster:"https://m.media-amazon.com/images/M/MV5BMjAyMDMzNTU5M15BMl5BanBnXkFtZTgwMjg2NjExNjM@._V1_SX300.jpg",
    rating:"7.1"
   },
   mirzapur : {
    title:"Mirzapur",
    year:"2018–",
    released:"15 Nov 2018",
    runtime:"60 min",
    genre:"Action, Crime, Drama",
    director:"Puneet Krishna, Vineet Krishna",
    writer:"Puneet Krishna, Karan Anshuman",
    actors:"Pankaj Tripathi, Ali Fazal, Divyendu Sharma, Vijay Varma, Shweta Tripathi, Isha Talwar, Anjum Sharma",
    plot:"A shocking incident at a wedding procession ignites a series of events entangling the lives of two families in the lawless city of Mirzapur.",
    language:"Hindi",
    country:"India",
    poster:"https://m.media-amazon.com/images/M/MV5BN2NlNGYwYTUtMTczMi00NGVjLTgwMzUtNjBkZjIyNDc2NjcxXkEyXkFqcGdeQXVyODQ5NDUwMDk@._V1_SX300.jpg",
    rating:"8.4"
   },
   aspirants : {
        title:"Aspirants",
        year:"2021–",
        released:"07 Apr 2021",
        runtime:"45 min",
        genre:"Drama",
        director:"Apoorva Singh Karki",
        writer:"Arunabh Kumar, Shreyansh Pandey",
        actors:"Sunny Hinduja, Abhilash Thapliyal, Naveen Kasturia, Shivankit Singh Parihar",
        plot:"It is the story of the journey of three UPSC (public service competitive exams in India) aspirants and their friendship against all odds.",
        language:"Hindi",
        country:"India",
        poster:"https://m.media-amazon.com/images/M/MV5BNWRkMjA0NjItMmViYS00MDQyLTgyMWYtOWFmOTA4NmU5MjRjXkEyXkFqcGdeQXVyNDY4NjAxNTc@._V1_SX300.jpg",
        rating:"9.0"
   } ,

   asur : {
    title:"Asur: Welcome to Your Dark Side",
    year:"2020–",
    released:"02 Mar 2020",
    runtime:"43 min",
    genre:"Crime, Drama, Mystery",
    director: "NA",
    writer:"Gaurav Shukla",
    actors:"Arshad Warsi, Barun Sobti, Riddhi Dogra",
    plot:"A unique crime thriller that pits two opposing worlds against each other. The less explored, intricate world of forensic science and the deep mysticism of ancient Indian Mythology.",
    language:"Hindi",
    country:"India",
    poster:"https://m.media-amazon.com/images/M/MV5BZWJiMDZmNTAtZDg5YS00NDgyLThkMzctYTczZjllNzU0YWY5XkEyXkFqcGdeQXVyMTAwMDI3ODEw._V1_SX300.jpg",
    rating:"8.5"
   },

   scam1992 : {
    title:"Scam 1992: The Harshad Mehta Story",
    year:"2020",
    released:"09 Oct 2020",
    runtime:"54 min",
    genre:"Biography, Crime, Drama",
    director:"Hansal Mehta",
    writer:"N/A",
    actors:"Pratik Gandhi, Shreya Dhanwanthary, Hemant Kher, Anjali Barot",
    plot:"Set in 1980's and 90's Bombay, it follows the life of Harshad Mehta, a stockbroker who took the stock market to dizzying heights and his catastrophic downfall.",
    language:"Hindi",
    country:"India",
    awards:"1 win.",
    poster:"https://m.media-amazon.com/images/M/MV5BNjgxZTMxNmQtZGFkZS00NDUyLTllMzYtOTE0ZjdlMjM1ZWU0XkEyXkFqcGdeQXVyMTAyMTE1MDA1._V1_SX300.jpg",
    rating:"9.5"
   },
   cubicles : {
    title:"Cubicles",
    year:"2019–",
    released:"10 Dec 2019",
    runtime:"28 min",
    genre:"Comedy, Drama",
    director:"Amit Golani, Chaitanya Kumbhakonum",
    writer:"Amit Golani",
    actors:"Abhishek Chauhan, Nidhi Bisht, Arnav Bhasin, Badri Chavan",
    plot:"Follows the chronicles of Piyush, a typical first jobber & the people around him.",
    language:"Hindi",
    country:"India",
    poster:"https://m.media-amazon.com/images/M/MV5BZDM4OGE4OTQtMTBjMS00NjQzLTkyZTQtMmMzOTNmOGRjMGQ3XkEyXkFqcGdeQXVyNDAzNDk0MTQ@._V1_SX300.jpg",
    rating:"8.3"
   },

   jamtara : {
    title:"Jamtara: Sabka Number Ayega",
    year:"2020–",
    released:"10 Jan 2020",
    runtime:"29 min",
    genre:"Crime",
    director:"Soumendra Padhi",
    writer:"N/A",
    actors:"Amit Sial, Dibyendu Bhattacharya, Aksha Pardasany, Anshumaan Pushkar",
    plot:"A group of small-town young men run a lucrative phishing operation, until a corrupt politician wants in on their scheme ,and a cop wants to fight it.",
    language:"Hindi",
    country:"India",
    poster:"https://m.media-amazon.com/images/M/MV5BNWM1OGE2MmItZWUzZi00OGY5LThhMmQtZmJjZmJlYmQ5NTkwXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    rating:"7.3"
   },
   panchayat : {
    title:"Panchayat",
    year:"2020–",
    released:"05 Mar 2020",
    runtime:"35 min",
    genre:"Comedy, Drama",
    director:"Deepak Kumar Mishra",
    writer:"Chandan Kumar",
    actors:"Jitendra Kumar, Raghuvir Yadav, Chandan Roy, Neena Gupta",
    plot:"A comedy-drama, which captures the journey of an engineering graduate Abhishek, who for lack of a better job option joins as secretary of a Panchayat office in a remote village of Uttar Pradesh.",
    language:"Hindi",
    country:"India",
    poster:"https://m.media-amazon.com/images/M/MV5BMTllYzQ0MzctZTI4Ny00YTE2LTkzYjktMTc4ZWE2MDUxNzk2XkEyXkFqcGdeQXVyNzEyNTM4MTU@._V1_SX300.jpg",
    rating:"8.8"
   },
   ray : {
    title:"Ray",
    year:"2021–",
    released:"25 Jun 2021",
    runtime:"54-60 min",
    genre:"Crime, Drama, Thriller",
    director:"Srijit Mukherji, Vasan Bala, Abhishek Chaubey",
    writer:"Sayantan Mukherjee, Satyajeet Ray(Based on his short stories)",
    actors:"Kay Kay Menon, Manoj Bajpayee, Ali Fazal, Shweta Basu Prasad",
    plot:"From a satire to a psychological thriller, four short stories from celebrated auteur and writer Satyajit Ray are adapted for the screen in this series.",
    language:"Hindi",
    country:"India",
    poster:"https://m.media-amazon.com/images/M/MV5BZmQ0YWUzNmYtNzFlMi00NTIxLWE0MDctNzc4MmE0ODg4OTI5XkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_SX300.jpg",
    rating:"NA"
   },
   selectionDay : {
    title:"Selection Day",
    year:"2018–",
    released:"28 Dec 2018",
    runtime:"23 min",
    genre:"Sport",
    director:"Udayan Prasad, Karan Boolani",
    writer:"N/A",
    actors:"Yash Dholye, Prashannt Jha, Mahesh Manjrekar, Shiv Panditt",
    plot:"Story of an Indian boy's love of cricket in Mumbai, and his discovery that the game isn't as pure as he thought.",
    language:"Hindi",
    country:"India",
    poster:"https://m.media-amazon.com/images/M/MV5BYmEyYTY2Y2MtY2Q4Yy00NDFjLTg3MzQtYjllMTViMzBjNzlmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
    rating:"7.4"
   },
   insideEdge : {
    title:"Inside Edge",
    year:"2017–",
    released:"10 Jul 2017",
    runtime:"45 min",
    genre:"Drama, Sport",
    director:"Karan Anshuman",
    writer:"Karan Anshuman",
    actors:"Richa Chadha, Angad Bedi, Tanuj Virwani",
    plot:"Inside Edge is the story of the Mumbai Mavericks, a T20 cricket franchise playing in the Powerplay League. Set in a landscape of conflicting interests, where selfishness is almost a virtue, where money, crime and power are mere means ",
    language:"Hindi, English",
    country:"India",
    poster:"https://m.media-amazon.com/images/M/MV5BOTZhZTUyYzgtNmQyMS00MDI3LTg4ZjMtMTUxYjU3MDAyMDY0XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_SX300.jpg",
    rating:"8.0"
   },
   okComputer : {
    title:"OK Computer",
    year:"2021–",
    released:"26 Mar 2021",
    runtime:"40 min",
    genre:"Comedy, Crime, Mystery",
    director:"Pooja Shetty, Neil Pagedar",
    writer:"N/A",
    actors:"Vijay Varma, Radhika Apte, Kani Kusruti, Jacky Shroff",
    plot:"In a New India - of towering smart holograms and drone superhighways - hard-boiled Cyber Crime detective Saajan Kundu is called out of retirement when a self-driving taxi is hacked and ordered to kill an anonymous human victim.",
    language:"Hindi",
    country:"India",
    poster:"https://m.media-amazon.com/images/M/MV5BMmRkMzA3MjEtZWJkNS00Y2EzLWE5ZTEtYTZiNWY0ZjRjZWVlXkEyXkFqcGdeQXVyNzgzMjQzMDM@._V1_SX300.jpg",
    rating:"5.4"
   },
   bandishBandits : {
    title:"Bandish Bandits",
    year:"2020–",
    released:"04 Aug 2020",
    runtime:"30 min",
    genre:"Drama, Music, Romance",
    director:"Anand Tiwari",
    writer:"Amritpal Singh Bindra, Anand Tiwari",
    actors:"Ritwik Bhowmik, Shreya Chaudhary, Atul Kulkarni, Naseeruddin Shah, Sheeba Chaddha",
    plot:"Indian classical singer Radhe and pop star Tamanna. Despite their contrasting personalities, the two \"set out together on a journey of self-discovery to see if opposites, though they might attract, can also adapt and go the long haul",
    language:"Hindi",
    country:"India",
    poster:"https://m.media-amazon.com/images/M/MV5BOWY3NjY1MTMtZmNiZS00OGVkLThkMjYtMWVjYzFiZDJhMmQ5XkEyXkFqcGdeQXVyMTE1MTc3MTQw._V1_SX300.jpg",
    rating:"8.7"
   },
    
};

module.exports = seriesDB