const recentProjects = [
  {
    name: 'Formula Stocks',
    description: `A stock recommendation service,
                  based on a deep learning algorithm,
                  which selects profitable stocks 84-92% of the time.`,
    timespan: '3 weeks',
    backgroundColor: '#323B42',
    domColor: '#27A5F9',
    liveLink: 'https://formulastocks.com',
    githubLink: 'https://github.com/MarkLyck/Formula-Stocks',
    screenshots: ['/assets/projects/FormulaStocks/landingPage.jpg', '/assets/projects/formulaStocks/portfolioPage.jpg', '/assets/projects/formulaStocks/suggestionsPage.jpg', '/assets/projects/formulaStocks/adminPage.jpg'],
    devices: [
      {
        name: 'tablet',
        image: '/assets/projects/FormulaStocks/landingPage.jpg',
      }
    ],
    caseStudy: {
      tabletImage: '/assets/projects/FormulaStocks/tablet.jpg',
      process: `
        The process started with determining what features was needed for the MVP.
        After I had the feature list and main user stories written down,
        I wrote out the data models and collections I needed for the app.
        I then went on to create the Dashboard wireframes in Sketch followed by a complete prototype
        design for the landing page. Once both me and my client was happy with the designs,
        I did some research on what libraries would be best suited for the application.
        From that point on, I started coding the app, fully fledging out one section at a time.`,
      wireframes: ['/assets/projects/FormulaStocks/wf_portfolio.jpg','/assets/projects/FormulaStocks/wf_suggestions.jpg'],
      performance: `
        Performance is incredibly important for a truly good user experience.
        From the get-go, my aim was to make the website perform really well, keeping the overhead as
        low as possible. This is not easy with a “single page” website with a lot of media and libraries.
        Minification of assets, additional image compression, caching etc. did all contribute to keeping
        the overhead to a minimum, something which increased the performance dramatically.
      `,
      technologyStack: `
        The core component of the stack is React. It’s a library for building user interfaces.
        I used Backbone for my data models and collection, Kinvey a Backend as a service,
        for my Backend, proxy server and node scripts. The app was written in ES2015 Javascript with
        the use of Babel.js to keep support for older browsers. JQuery was used for AJAX requests,
        and scroll event handling.
      `,
      technologies: ['HTML', 'Sass', 'Javascript', 'React', 'Backbone', 'Kinvey', 'Stripe', 'JQuery', 'Underscore', 'AmCharts', 'Draft.js', 'React-smooth-scroll', 'Free-geo-api', 'Quandl', 'Moment', 'React-dropzone', 'React-html-parser'],
      tracking: `
        To get clear view on who visits the website, and how they interact on the page,
        I implemented tracking using Google Analytics. But I also implemented a custom solution where
        the client can see where visitors are coming from, and some more specific statistics
        customized for Formula Stocks.
      `,
      trackingImage: '/assets/projects/formulaStocks/adminPage.jpg',
    }
  },
  {
    name: 'Bring the Band',
    description: `Vote on your favorite bands to attend the festival!,
                  buy tickets with a secure credit card transaction,
                  listen to music & more. Fully unit tested.`,
    timespan: '1 week',
    backgroundColor: '#2A5861',
    domColor: '#1DBC86',
    liveLink: 'https://marklyck.github.io/Bring-the-Band/',
    githubLink: 'https://github.com/MarkLyck/Bring-the-Band',
    caseStudy: false,
    devices: [
      {
        name: 'tablet',
        image: 'assets/images/projects/bring-the-band/tablet.jpg',
      }
    ]
  },
  {
    name: 'OpenBMC',
    description: `A collaborative open source project for IBM, built with Electron. OpenBMC makes it easy to discover endpoints and run methods.`,
    timespan: '3 days',
    backgroundColor: '#23272D',
    domColor: '#4EA6E3',
    caseStudy: false,
    devices: [
      {
        name: 'tablet',
        image: 'assets/projects/openBMC/OpenBMC_Watchdog.jpg',
      }
    ]
  },
  {
    name: 'Flammen',
    description: `Expand menu items to see details,
                  add your orders to the cart,
                  make special requests and place your order.
                  Restaurant owner can see orders, mark them as done or delete them.`,
    timespan: '3 days',
    backgroundColor: '#312B2B',
    domColor: '#C94745',
    liveLink: 'https://marklyck.github.io/restaurant-order-system/',
    githubLink: 'https://github.com/MarkLyck/restaurant-order-system',
    caseStudy: false,
    devices: [
      {
        name: 'tablet',
        image: 'assets/images/projects/flammen/tablet.jpg',
      }
    ]
  }
];


export default recentProjects;
