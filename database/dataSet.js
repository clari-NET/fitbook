// Complied sets of data
const users = [];
const communities = [];
const events = [];
const posts = [];

// Randomized seed data
// let user_id = [];
// let communities = [];
// let events = [];
// let posts = [];

exports.boolean = [true, false];

exports.gender = ['men', 'women'];

exports.firstName = [
  'Liam', 'Emma', 'Noah', 'Olivia', 'William', 'Ava', 'James', 'Isabella', 'Oliver', 'Sophia', 'Benjamin', 'Charlotte', 'Elijah', 'Mia', 'Lucas', 'Amelia', 'Mason', 'Harper', 'Logan', 'Evelyn', 'Alexander', 'Abigail', 'Ethan', 'Emily', 'Jackson', 'Elizabeth', 'Sebastian', 'Avery', 'Michael', 'Ella', 'Aiden', 'Scarlett', 'Daniel', 'Grace', 'Matthew', 'Chloe', 'Samuel', 'Victoria', 'David', 'Madison', 'Joseph', 'Lily', 'Carter', 'Riley', 'Owen', 'Zoey', 'Wyatt', 'Penelope', 'Isabella', 'Nora', 'Henry', 'Eleanor', 'Leo', 'Hannah',
];

exports.lastName = [
  'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Perez', 'Taylor', 'Anderson', 'Wilson', 'Moore', 'Jackson', 'Martin', 'Lee', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Mitchell', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart', 'Flores', 'Morris', 'Murphy', 'Bailey', 'Rivera', 'Richardson', 'Cox', 'Howard', 'Ward', 'Torres', 'Peterson', 'Gray',
];

exports.activities = [
  'Running', 'Swimming', 'Cycling', 'Basketball', 'Football', 'Baseball', 'Volleyball', 'Tennis', 'Golf', 'Soccer', 'Hiking', 'Boxing', 'Wrestling', 'Martial Arts', 'Gymnastics', 'Dancing', 'Yoga', 'Pilates', 'Surfing', 'Skiing', 'Snowboarding', 'Skateboarding', 'Rock Climbing', 'Kayaking', 'Canoeing', 'Rowing', 'Sailing', 'Fishing', 'Horseback Riding', 'Archery', 'Shooting', 'Fencing', 'Badminton', 'Table Tennis', 'Hockey', 'Ice Skating', 'Figure Skating', 'Crossfit', 'Powerlifting', 'Weightlifting', 'Bodybuilding', 'Circuit Training', 'HIIT', 'Zumba', 'Pole Dancing', 'Aerial Yoga', 'Acro Yoga', 'Kickboxing', 'Taekwondo', 'Judo', 'Karate', 'Capoeira', 'Parkour', 'Trampoline', 'Bouldering', 'Highlining', 'Paragliding', 'Skydiving',
];

exports.community = [
  {
    name: 'FitFam Community',
    description: 'A community of fitness enthusiasts who are like family, supporting each other in their health and wellness journeys.',
  },
  {
    name: 'Sweat Squad',
    description: 'A group of dedicated athletes who love to work up a sweat and push themselves to their limits.',
  },
  {
    name: "Runners' Alliance",
    description: 'A community of runners who come together to share their passion for running and motivate each other to reach their goals.',
  },
  {
    name: 'Yoga Tribe',
    description: 'A tribe of yoga practitioners who share a love for this ancient practice, and come together to support and inspire one another.',
  },
  {
    name: 'Gym Warriors',
    description: 'A group of dedicated gym-goers who push themselves to their limits and strive to achieve their fitness goals.',
  },
  {
    name: 'Spin Squad',
    description: 'A community of spin enthusiasts who love to ride together and challenge each other to push their limits.',
  },
  {
    name: 'Fitness Friends',
    description: 'A community of friends who share a passion for fitness and enjoy working out together.',
  },
  {
    name: 'Team CrossFit',
    description: 'A team of dedicated CrossFit athletes who come together to train, compete and support one another.',
  },
  {
    name: 'Endurance Nation',
    description: 'A community of endurance athletes who push themselves to their limits and strive to achieve their fitness goals.',
  },
  {
    name: 'Athletic Alliance',
    description: 'A community of athletes who come together to share their passion for sports and motivate each other to reach their goals.',
  },
  {
    name: 'Iron Tribe',
    description: 'A tribe of strength athletes who share a love for powerlifting, weightlifting, and other strength sports.',
  },
  {
    name: 'Boxing Brigade',
    description: 'A community of boxing enthusiasts who come together to train, spar, and support each other in their boxing journey.',
  },
  {
    name: 'Trailblazers',
    description: 'A community of outdoor enthusiasts who love to explore the great outdoors, go on hikes and trail runs together.',
  },
  {
    name: 'Swim Squad',
    description: 'A community of swimmers who share a love for the water, come together to train, compete and support each other in their swimming journey.',
  },
  {
    name: 'Cycling Crew',
    description: 'A crew of cyclists who love to ride together, challenge each other, and explore the world on two wheels.',
  },
  {
    name: 'Tennis Titans',
    description: 'A community of tennis enthusiasts who share a passion for the sport, and come together to play, compete, and have fun.',
  },
  {
    name: 'Pilates Posse',
    description: 'A group of Pilates enthusiasts who come together to practice, support each other and share their love for this mindful practice.',
  },
  {
    name: 'Surf Tribe',
    description: 'A tribe of surfers who share a love for the ocean, come together to catch waves, have fun and support each other in their surfing journey.',
  }];

exports.users = [
  {
    id: 1,
    firstName: 'Emma',
    lastName: 'Gonzalez',
    username: 'EmmyPop',
    gender: 'women',
  },
  {
    id: 2,
    firstName: 'Alexander',
    lastName: 'Nguyen',
    username: 'AlexTrend',
    gender: 'men',
  },
  {
    id: 3,
    firstName: 'Olivia',
    lastName: 'Wong',
    username: 'LivyVibes',
    gender: 'women',
  },
  {
    id: 4,
    firstName: 'Ethan',
    lastName: 'Rodriguez',
    username: 'EthanElevate',
    gender: 'men',
  },
  {
    id: 5,
    firstName: 'Ava',
    lastName: 'Patel',
    username: 'AvaAura',
    gender: 'women',
  },
  {
    id: 6,
    firstName: 'Benjamin',
    lastName: 'Kim',
    username: 'BenjiBounce',
    gender: 'men',
  },
  {
    id: 7,
    firstName: 'Sophia',
    lastName: 'Singh',
    username: 'SophiaSpark',
    gender: 'women',
  },
  {
    id: 8,
    firstName: 'William',
    lastName: 'Gupta',
    username: 'WillWander',
    gender: 'men',
  },
  {
    id: 9,
    firstName: 'Isabella',
    lastName: 'Chen',
    username: 'IzzyInnovate',
    gender: 'women',
  },
  {
    id: 10,
    firstName: 'Lucas',
    lastName: 'Shah',
    username: 'LukeLeap',
    gender: 'men',
  },
  {
    id: 11,
    firstName: 'Mia',
    lastName: 'Rao',
    username: 'MiaMingle',
    gender: 'women',
  },
  {
    id: 12,
    firstName: 'Jacob',
    lastName: 'Singhania',
    username: 'JaxJump',
    gender: 'men',
  },
  {
    id: 13,
    firstName: 'Charlotte',
    lastName: 'Ali',
    username: 'CharCharm',
    gender: 'women',
  },
  {
    id: 14,
    firstName: 'Daniel',
    lastName: 'Zhang',
    username: 'DanDelight',
    gender: 'men',
  },
  {
    id: 15,
    firstName: 'Amelia',
    lastName: 'Tran',
    username: 'AmyAloha',
    gender: 'women',
  },
  {
    id: 16,
    firstName: 'Matthew',
    lastName: 'Kaur',
    username: 'MattMischief',
    gender: 'men',
  },
  {
    id: 17,
    firstName: 'Chloe',
    lastName: 'Kumar',
    username: 'ChloCozy',
    gender: 'women',
  },
  {
    id: 18,
    firstName: 'Ryan',
    lastName: 'Ali',
    username: 'RyRyRiot',
    gender: 'men',
  },
  {
    id: 19,
    firstName: 'Abigail',
    lastName: 'Patel',
    username: 'GailGlow',
    gender: 'women',
  },
  {
    id: 20,
    firstName: 'Elijah',
    lastName: 'Wong',
    username: 'EliElectric',
    gender: 'men',
  },
  {
    id: 21,
    firstName: 'Mia',
    lastName: 'Singh',
    username: 'MiaMuse',
    gender: 'women',
  },
  {
    id: 22,
    firstName: 'Matthew',
    lastName: 'Shah',
    username: 'MattyMarvel',
    gender: 'men',
  },
  {
    id: 23,
    firstName: 'Elizabeth',
    lastName: 'Gupta',
    username: 'LizLuminous',
    gender: 'women',
  },
  {
    id: 24,
    firstName: 'David',
    lastName: 'Chen',
    username: 'DaveDynamo',
    gender: 'men',
  },
  {
    id: 25,
    firstName: 'Avery',
    lastName: 'Lee',
    username: 'AvaAurora',
    gender: 'women',
  },
  {
    id: 26,
    firstName: 'Carter',
    lastName: 'Singhania',
    username: 'CarCruise',
    gender: 'men',
  },
  {
    id: 27,
    firstName: 'Sofia',
    lastName: 'Nguyen',
    username: 'SofiSizzle',
    gender: 'women',
  },
  {
    id: 28,
    firstName: 'Ethan',
    lastName: 'Shah',
    username: 'EthanElevate',
    gender: 'men',
  },
  {
    id: 29,
    firstName: 'Isabella',
    lastName: 'Patel',
    username: 'BellaBlast',
    gender: 'women',
  },
  {
    id: 30,
    firstName: 'Daniel',
    lastName: 'Wong',
    username: 'DanDazzle',
    gender: 'men',
  },
  {
    id: 31,
    firstName: 'Aaliyah',
    lastName: 'Ali',
    username: 'LiyahLively',
    gender: 'women',
  },
  {
    id: 32,
    firstName: 'William',
    lastName: 'Kaur',
    username: 'WillWander',
    gender: 'men',
  },
  {
    id: 33,
    firstName: 'Emily',
    lastName: 'Tran',
    username: 'EmiEmber',
    gender: 'women',
  },
  {
    id: 34,
    firstName: 'Oliver',
    lastName: 'Liu',
    username: 'OllieOmega',
    gender: 'men',
  },
  {
    id: 35,
    firstName: 'Sophie',
    lastName: 'Wu',
    username: 'SoSoaring',
    gender: 'women',
  },
  {
    id: 36,
    firstName: 'Ethan',
    lastName: 'Sharma',
    username: 'EthanEcho',
    gender: 'men',
  },
  {
    id: 37,
    firstName: 'Charlotte',
    lastName: 'Li',
    username: 'CharCharm',
    gender: 'women',
  },
  {
    id: 38,
    firstName: 'Daniel',
    lastName: 'Chen',
    username: 'DanDynamo',
    gender: 'men',
  },
  {
    id: 39,
    firstName: 'Lila',
    lastName: 'Patel',
    username: 'LilLuminary',
    gender: 'women',
  },
  {
    id: 40,
    firstName: 'Alexander',
    lastName: 'Nguyen',
    username: 'AlexAura',
    gender: 'men',
  },
  {
    id: 41,
    firstName: 'Samantha',
    lastName: 'Gupta',
    username: 'SamSonic',
    gender: 'women',
  },
  {
    id: 42,
    firstName: 'Jacob',
    lastName: 'Kumar',
    username: 'JakeJazz',
    gender: 'men',
  },
  {
    id: 43,
    firstName: 'Victoria',
    lastName: 'Shah',
    username: 'VicVixen',
    gender: 'women',
  },
  {
    id: 44,
    firstName: 'Lucas',
    lastName: 'Ali',
    username: 'LukeLively',
    gender: 'men',
  },
  {
    id: 45,
    firstName: 'Natalie',
    lastName: 'Singh',
    username: 'NatNimbus',
    gender: 'women',
  },
  {
    id: 46,
    firstName: 'Henry',
    lastName: 'Chopra',
    username: 'HankHero',
    gender: 'men',
  },
  {
    id: 47,
    firstName: 'Gabriella',
    lastName: 'Lee',
    username: 'GabiGlow',
    gender: 'women',
  },
  {
    id: 48,
    firstName: 'Benjamin',
    lastName: 'Singhania',
    username: 'BenjiBlaze',
    gender: 'men',
  },
];

exports.statistics = [
  {
    category: 'Swimming',
    field: 'Butterfly',
    record: 49.87,
  },
  {
    category: 'Basketball',
    field: 'Points',
    record: 31,
  },
  {
    category: 'Soccer',
    field: 'Shots on Goal',
    record: 8,
  },
  {
    category: 'Tennis',
    field: 'Double Faults',
    record: 3,
  },
  {
    category: 'Gymnastics',
    field: 'Floor Exercise',
    record: 9.7,
  },
  {
    category: 'Cycling',
    field: 'Individual Time Trial',
    record: 34.5,
  },
  {
    category: 'Volleyball',
    field: 'Blocks',
    record: 7,
  },
  {
    category: 'Football',
    field: 'Passing Yards',
    record: 345,
  },
  {
    category: 'Swimming',
    field: 'Breaststroke',
    record: 59.21,
  },
  {
    category: 'Basketball',
    field: 'Assists',
    record: 9,
  },
  {
    category: 'Soccer',
    field: 'Goals',
    record: 4,
  },
  {
    category: 'Tennis',
    field: 'Service Aces',
    record: 10,
  },
  {
    category: 'Gymnastics',
    field: 'Vault',
    record: 9.4,
  },
  {
    category: 'Cycling',
    field: 'Sprint',
    record: 18.5,
  },
  {
    category: 'Volleyball',
    field: 'Serves',
    record: 14,
  },
  {
    category: 'Football',
    field: 'Receiving Yards',
    record: 127,
  },
  {
    category: 'Swimming',
    field: 'Backstroke',
    record: 53.75,
  },
  {
    category: 'Basketball',
    field: 'Field Goal Percentage',
    record: 0.62,
  },
  {
    category: 'Soccer',
    field: 'Yellow Cards',
    record: 2,
  },
  {
    category: 'Tennis',
    field: 'Forehand Winners',
    record: 7,
  },
  {
    category: 'Gymnastics',
    field: 'Uneven Bars',
    record: 9.6,
  },
  {
    category: 'Cycling',
    field: 'Mountain Bike Cross-Country',
    record: 42.3,
  },
  {
    category: 'Volleyball',
    field: 'Digs',
    record: 16,
  },
  {
    category: 'Football',
    field: 'Rushing Yards',
    record: 93,
  },
];

exports.messages = [
  {
    id: 1,
    text: 'Remember to listen to your body and take breaks when needed during your workouts.',
    createdAt: 1648326780265,
  },
  {
    id: 2,
    text: 'Incorporate some outdoor activities like hiking or biking into your fitness routine for a change of scenery.',
    createdAt: 1648238829003,
  },
  {
    id: 3,
    text: "Don't be afraid to ask for help or advice from a personal trainer or fitness professional.",
    createdAt: 1648195431802,
  },
  {
    id: 4,
    text: 'Remember that progress takes time and consistency. Keep at it!',
    createdAt: 1648142059136,
  },
  {
    id: 5,
    text: 'Try incorporating some yoga or stretching exercises into your routine to improve flexibility and prevent injury.',
    createdAt: 1648054860906,
  },
  {
    id: 6,
    text: 'Stay motivated by tracking your progress and celebrating your accomplishments along the way.',
    createdAt: 1647980863464,
  },
  {
    id: 7,
    text: 'Mix up your workouts with different exercises and routines to challenge your body and avoid boredom.',
    createdAt: 1647928808687,
  },
  {
    id: 8,
    text: "Don't forget to warm up and cool down properly to prepare your body for exercise and aid in recovery.",
    createdAt: 1647846481982,
  },
  {
    id: 9,
    text: 'Try setting small, achievable goals for each workout session to help you stay focused and motivated.',
    createdAt: 1647773882735,
  },
  {
    id: 10,
    text: 'Remember that proper nutrition and hydration are essential for peak performance and recovery.',
    createdAt: 1647730931614,
  },
  {
    id: 11,
    text: 'Did you know that foam rolling can help with muscle soreness and tightness? Give it a try!',
    createdAt: 1647644911915,
  },
  {
    id: 12,
    text: 'Set a schedule and make fitness a priority in your daily routine.',
    createdAt: 1647572839176,
  },
  {
    id: 13,
    text: 'Try working out with a friend or partner for extra motivation and accountability.',
    createdAt: 1647510228341,
  },
  {
    id: 14,
    text: 'Remember to celebrate the small victories and progress along your fitness journey.',
    createdAt: 1647434382163,
  },
  {
    id: 15,
    text: 'Try incorporating some bodyweight exercises like push-ups or squats into your workout routine.',
    createdAt: 1647357329367,
  },
  {
    id: 16,
    text: "Don't be discouraged by setbacks or plateaus. Keep pushing forward!",
    createdAt: 1647280379275,
  },
  {
    id: 17,
    text: 'Remember that rest and recovery are just as important as the workout itself. Take care of your body!',
    createdAt: 1647194260355,
  },
  {
    id: 18,
    text: "Don't compare your progress or journey to anyone else's. Everyone's path is unique.",
    createdAt: 1647110415826,
  },
  {
    id: 19,
    text: 'Stay positive and stay focused on your goals, even on the tough days.',
    createdAt: 1647025705228,
  },
  {
    id: 20,
    text: 'Mix up your cardio routine with different machines or activities to keep things interesting.',
    createdAt: 1646950899135,
  },
  {
    id: 21,
    text: "Don't be afraid to modify exercises or movements to accommodate any injuries or limitations you may have.",
    createdAt: 1646877331667,
  },
  {
    id: 22,
    text: 'Try incorporating some resistance training into your workouts to build muscle and improve bone density.',
    createdAt: 1646814813821,
  },
  {
    id: 23,
    text: 'Stay hydrated before, during, and after your workouts to prevent dehydration and fatigue.',
    createdAt: 1646732144479,
  },
  {
    id: 24,
    text: "Don't forget to stretch after your workouts to help reduce soreness and improve flexibility.",
    createdAt: 1646660594486,
  },
  {
    id: 25,
    text: 'Try setting a new fitness-related goal each month to keep yourself challenged and motivated.',
    createdAt: 1646576621084,
  },
  {
    id: 26,
    text: 'Remember that consistency is key. Make fitness a habit in your daily routine.',
    createdAt: 1646514099315,
  },
  {
    id: 27,
    text: 'Mix up your workouts with different types of equipment or classes to keep things fresh and challenging.',
    createdAt: 1646428188786,
  },
  {
    id: 28,
    text: 'Remember to fuel your body properly before and after your workouts for optimal performance and recovery.',
    createdAt: 1646342874123,
  },
  {
    id: 29,
    text: 'Incorporate some fun activities like dancing or sports into your fitness routine to keep things enjoyable.',
    createdAt: 1646260203057,
  },
  {
    id: 30,
    text: 'Try setting a new personal best or record for a certain exercise or activity each week to challenge yourself.',
    createdAt: 1646193062024,
  },
  {
    id: 31,
    text: "Remember that it's okay to take a break or rest day when you need it. Don't push yourself too hard.",
    createdAt: 1646119981875,
  },
  {
    id: 32,
    text: 'Try working out in the morning to jumpstart your day and give you energy for the rest of the day.',
    createdAt: 1646036858899,
  },
  {
    id: 33,
    text: "Don't be afraid to try new exercises or routines to challenge your body and keep things interesting.",
    createdAt: 1645954067251,
  },
];
