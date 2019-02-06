// const PopUp = require('../lib/models/PopUp');
// const User = require('../lib/models/User');
// const Chance = require('chance');
// const chance = new Chance();

const popUpData = [
  {
    name: 'Casa Zoraya',
    date: '2.10.2019',
    time: '1PM',
    food: 'Latin',
    address: '803 SW Morrison St., Portland, OR',
    zipcode: '97204',
    photoUrl: 'https://www.wweek.com/resizer/nh3TWQPTrfl9EhHG46u_f99BksY=/1200x0/filters:quality(100)/s3.amazonaws.com/arc-wordpress-client-uploads/wweek/wp-content/uploads/2018/07/30101613/4440_Dish_Casa-Zoraya_Jensen-Ocampo_26.jpg'
  },
  {
    name: 'Creole Cravings',
    date: '3.1.2019',
    time: '12PM',
    food: 'Caribbean',
    address:'2373 NW 185th Avenue',
    zipcode: '97124',
    photoUrl:'http://pamplinmedia.com/images/artimg/00003598549627.jpg'
  },
  {
    name: 'Folklore',
    date: '2.20.2019',
    time: '4PM',
    food: 'Vegetarian',
    address: '11150 NE Weidler St, Portland, OR',
    zipcode: '97220',
    photoUrl: 'https://static1.squarespace.com/static/5b155c839772ae6a498323e4/5b9071cc758d46494498bd10/5b9071cc4d7a9c5d79b41885/1536192989592/E39C8DE9-4E3B-4033-83B6-2F4658F8E300.jpg?format=1500w'
  },
  {
    name: 'Jackfruit Kitchen',
    date: '3.15.2019',
    time: '5PM',
    food: 'Vegetarian',
    address: '2117 NE Oregon St, Portland, Oregon',
    zipcode: '97232',
    photoUrl: 'https://i0.wp.com/www.portlandbltweek.com/wp-content/uploads/2017/10/Jackfruit-VEGAN-Kitchen-Portland-BLT-Week-2017-103.jpg?resize=640%2C427&ssl=1'
  },
  {
    name: 'Ippai PDX',
    date: '2.30.2019',
    time: '5PM',
    food: 'Asian', 
    address: '2150 N Killingsworth St, Portland, OR',
    zipcode: '97217',
    photoUrl: 'https://lh6.googleusercontent.com/-Pg77vW5scbo/U9mFTrUiSVI/AAAAAAABfmE/IphAdz0NS5Q/s288/20140726_112519.jpg',
  },
  {
    name: 'Ssshaved Ice',
    date: '3.30.2019',
    time: '12PM',
    food: 'Dessert',
    address: '6310 NE Sandy Blvd, Portland, OR',
    zipcode: '97213',
    photoUrl: 'https://assets3.thrillist.com/v1/image/754347/size/tmg-article_default_mobile;jpeg_quality=20.jpg'
  },
  {
    name: 'Outer Darkness Donuts',
    date: '3.1.2019',
    time: '1PM',
    food: 'Dessert',
    address: '2244, 2039 SE Clinton St, Portland, OR',
    zipcode: '97202',
    photoUrl: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_971,w_1500,x_0,y_0/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/outerdarkness_xey2jv.jpg'
  },
  {
    name: 'Gado gado PDX',
    date: '2.15.2019',
    time: '7PM',
    food: 'Asian',
    address: '2137 E Burnside St, Portland, OR',
    zipcode: '97214',
    photoUrl: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_3655,w_5496,x_0,y_9/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/Unknown-1_cnv0ua.jpg'
  },
  {
    name: 'Burger Stevens',
    date: '3.12.2019',
    time: '6PM',
    food: 'American',
    address: '6238 SW Capitol Hwy, Portland, OR',
    zipcode: '97239',
    photoUrl: 'https://static1.squarespace.com/static/573678293c44d8a1804c7b36/586fe3ac2994ca58b925626d/59ed08bef14aa134e142720f/1508706495490/poMO+BURGER+2.JPG'
  },
  {
    name: 'Mae',
    date: '3.1.2019',
    time: '1PM',
    food: 'Southern',
    address: '2930 NE Killingsworth St, Portland, OR',
    zipcode: '97211',
    photoUrl: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_1901,w_2858,x_318,y_1397/c_limit,dpr_3.0,f_auto,fl_lossy,q_80,w_400/Mae_Maya_Lovelace_Stu_Mullenberg_a12x1e.jpg'
  },
  {
    name: 'Uptown Market',
    date: '3.30.2019',
    time: '5PM',
    food: 'American',
    address: '6620 SW Scholls Ferry Rd, Portland, OR',
    zipcode: '97223',
    photoUrl: 'https://static1.squarespace.com/static/5546860fe4b01331cfdd6354/t/5ad6f4ebf950b724bbdcd889/1524037228092/taco+tuesday+LO.jpg'
  },
  {
    name: 'HunnyMilk',
    date: '2.17.2019',
    time: '12PM',
    food: 'Brunch',
    address: '1981 W Burnside St, Portland, OR',
    zipcode: '97209',
    photoUrl: 'http://edensexpeditions.com/wp-content/uploads/2018/10/IMG_3890-900x450.jpg'
  },
  {
    name: 'Wanna Fight',
    date: '2.20.2019',
    time: '5PM',
    food: 'American',
    address: '6350 SE Foster Rd, Portland, OR',
    zipcode: '97206',
    photoUrl: 'https://scontent.fsjc1-3.fna.fbcdn.net/v/t1.0-9/49897467_798503247148590_7565512487345324032_n.jpg?_nc_cat=107&_nc_ht=scontent.fsjc1-3.fna&oh=406486a496f3e1e2bd395211ff83c728&oe=5CB8CC92'
  },
  {
    name: 'Jolie Laide',
    date: '3.20.2019',
    time: '11PM',
    food: 'French',
    address: '6 SE 28th Ave, Portland, OR',
    zipcode: '97214',
    photoUrl: 'https://cdn-az.allevents.in/banners/ff1f6e2196e89ebb9e8cd8d6ad5213b2'
  },
  {
    name: 'Late Shake',
    date: '2.15.2019',
    time: '12PM',
    food: 'Dessert',
    address: '3158 SE Division St, Portland, OR',
    zipcode: '97202',  
    photoUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/imbj7IuAcbh_KJc_hPJdbw/348s.jpg'
  },
  {
    name: 'Ox Box',
    date: '2.10.2019',
    time: '5PM',
    food: 'Latin',
    address: '2225 NE Martin Luther King Jr Blvd, Portland, OR',
    zipcode: '97212',
    photoUrl: 'https://s3-media4.fl.yelpcdn.com/bphoto/h8yxmVZYdphlACtKh0Hdgg/o.jpg'
  },
  {
    name: 'Ferne + Holly',
    date: '3.1.2019',
    time: '5PM',
    food: 'American',
    address: '7937 SE Stark Portland, OR',
    zipcode: '97215',
    photoUrl: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_2368,w_3024,x_0,y_1331/c_limit,dpr_auto,f_auto,fl_lossy,q_80,w_1080/0817-eat-pop-ups-ox-box_iqdjwf.jpg'
  },
  {
    name: 'NorthFresh Sushi',
    date: '2.15.2019',
    time: '12PM',
    food: 'Asian',
    address: '1707 NE 28th Ave, Portland, OR',
    zipcode: '97212',
    photoUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/07832SBBNhU5BTdpos153A/o.jpg'
  },
  {
    name: 'Bliss House',
    date: '3.29.2019',
    time: '6PM',
    food: 'Vegetarian',
    address: '912 SE Hawthorne Blvd Portland, OR',
    zipcode: '97214',
    photoUrl: 'https://static1.squarespace.com/static/5802fa6ce58c625ab6d99e94/t/597507ffd7bdcef6478a302b/1500841994715/'
  },
  {
    name: 'Obon',
    date: '2.10.2019',
    time: '12PM',
    food: 'Asian',
    address: '3029 SE 21st Ave Portland, OR',
    zipcode: '97202',
    photoUrl: 'https://s3-media1.fl.yelpcdn.com/bphoto/I_ll8tp6udxdtsCrmRYcLw/ls.jpg'
  },
  {
    name: 'Erwina\'s Inasal',
    date: '3.5.2019',
    time: '5PM',
    food: 'Asian',
    address: '9525 SW Beaverton Hillsdale Hwy, Beaverton, OR',
    zipcode: '97005',
    photoUrl:'https://media-cdn.tripadvisor.com/media/photo-s/09/82/d3/7b/our-menu-daily.jpg'
  },
  {
    name: 'Tamago Bros',
    date: '3.24.2019',
    time: '1PM',
    food: 'Asian',
    address: '432 SW 3rd Ave, Portland, OR',
    zipcode: '97204',  
    photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFl9kHLgw1TDM5O3udZACM-nJSTH6ilLDU0z7ZgrcXiBNsp1Nl'
  },
  {
    name: 'Wolf and Bears',
    date: '3.28.2019',
    time: '6PM',
    food: 'Mediterranean',
    address: '3925 N. Mississippi ave',
    zipcode: '97227',
    photoUrl:'https://images.happycow.net/venues/1024/44/81/hcmp44810_70593.jpeg'
  },
  {
    name: 'Shipwreck',
    date: '3.18.2019',
    time: '2PM',
    food: 'American',
    address: '3808 N Williams Ave, Portland, OR',
    zipcode: '97212',
    photoUrl: 'https://lh5.googleusercontent.com/p/AF1QipOFdCZGaAi519bt-jT9jvzjDJHkJd7A7M0KyolY=w284-h160-k-no'
  },
  {
    name: 'Ranch Pizza',
    date: '2.30.2019',
    time: '5PM',
    food: 'American',
    address: '1760 NE Dekum Street',
    zipcode: '97211',
    photoUrl: 'https://cdn.vox-cdn.com/uploads/chorus_image/image/60175345/Ranch_Pizza.0.jpg'
  },
  {
    name: 'Food of Guam',
    date: '2.15.2019',
    time: '2PM',
    food: 'Asian',
    address: '5235 NE Sandy Blvd Portland, OR',
    zipcode: '97213',
    photoUrl: 'https://static1.squarespace.com/static/527a875fe4b088797b057e5c/t/5aa9955a0d9297e80c7e8ed1/1521063268844/CHerylJuettenPhoto-Feastly-PDX671-010-sm.jpg'
  },
  {
    name: 'Jun Jun',
    date: '2.28.2019',
    time: '12PM',
    food: 'Asian',
    address: '950 SW Alder St, Portland, OR',
    zipcode: '97205',
    photoUrl: 'https://media-cdn.tripadvisor.com/media/photo-s/11/33/75/98/food-porn.jpg'
  },
  {
    name: 'Danet',
    date: '3.30.2019',
    time: '12PM',
    food: 'European',
    address: '1001 SW Broadway, Portland',
    zipcode: '97205',
    photoUrl: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_720,w_1080,x_0,y_0/c_limit,dpr_3.0,f_auto,fl_lossy,q_80,w_400/0815-danet-01_ovom0y_bnpkep.jpg'
  },
  {
    name: 'Flight Dessert Bar',
    date: '2.20.2019',
    time: '5PM',
    food: 'Dessert',
    address: '2225 E Burnside St, Portland, OR',
    zipcode: '97214',
    photoUrl: 'https://cdn.vox-cdn.com/thumbor/ZDKrMf-bnK2vpw0rY8glohP2pjc=/0x0:1000x966/1200x900/filters:focal(420x403:580x563)/cdn.vox-cdn.com/uploads/chorus_image/image/60328895/Lena_H_Yelp.0.jpg'
  },
  {
    name: 'Langbaan',
    date: '2.15.2019',
    time: '1PM',
    food: 'Asian',
    address: '6 SE 28th Ave, Portland, OR',
    zipcode: '97214',  
    photoUrl: 'https://langbaanpdx.com/wp-content/uploads/2014/07/DSC_4431-1024x682.jpg'
  },
  {
    name: 'Nodoguro',
    date: '3.15.2019',
    time: '5PM',
    food: 'Asian',
    address: '2832 SE Belmont St, Portland, OR',
    zipcode: '97214',
    photoUrl: 'https://lh3.googleusercontent.com/-cFFBSlA25H4/VrQcAmFO5ZI/AAAAAAACx28/sWbXceeDD6g/s400-Ic42/P1020718.JPG'
  },
  {
    name: 'Pondicherry',
    date: '3.15.2019',
    time: '1PM',
    food: 'Fusion',
    address: '922 NW Davis St, Portland, OR',
    zipcode: '97209',
    photoUrl: 'https://i2.wp.com/coolfooddude.com/wp-content/uploads/2017/02/img_0148.jpg?ssl=1'
  },
  {
    name: 'Thali Supper Club',
    date: '3.10.2019',
    time: '12PM',
    food: 'Asian',
    address: '5027 NE 42nd Ave Portland, OR',
    zipcode: '97218',  
    photoUrl: 'https://res.cloudinary.com/sagacity/image/upload/c_crop,h_720,w_1080,x_0,y_0/c_limit,dpr_3.0,f_auto,fl_lossy,q_80,w_400/IMG_9430_ihdmux_jeoois.jpg'
  },
  {
    name: 'Farm Spirit',
    date: '2.19.2019',
    time: '12PM',
    food: 'Vegetarian',
    address: '1403 SE Belmont St, Portland, OR',
    zipcode: '97214',
    photoUrl: 'https://i.ytimg.com/vi/iTBm4KmxM60/maxresdefault.jpg'
  },
  {
    name: 'Tapalaya',
    date: '3.10.2019',
    time: '',
    food: 'Latin',
    address: '28 NE 28th Ave, Portland, OR',
    zipcode: '97232',
    photoUrl: 'http://edibleportland.com/wp-content/uploads/2017/07/tapalaya-portland.jpg'
  },
];

module.exports = popUpData;
