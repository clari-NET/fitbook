const data = {};

data.boolean = [true, false];

data.firstName = [
  'Liam', 'Emma', 'Noah', 'Olivia', 'William', 'Ava', 'James', 'Isabella', 'Oliver', 'Sophia', 'Benjamin', 'Charlotte', 'Elijah', 'Mia', 'Lucas', 'Amelia', 'Mason', 'Harper', 'Logan', 'Evelyn', 'Alexander', 'Abigail', 'Ethan', 'Emily', 'Jackson', 'Elizabeth', 'Sebastian', 'Avery', 'Michael', 'Ella', 'Aiden', 'Scarlett', 'Daniel', 'Grace', 'Matthew', 'Chloe', 'Samuel', 'Victoria', 'David', 'Madison', 'Joseph', 'Lily', 'Carter', 'Riley', 'Owen', 'Zoey', 'Wyatt', 'Penelope', 'Isabella', 'Nora', 'Henry', 'Eleanor', 'Leo', 'Hannah',
];

data.lastName = [
  'Smith', 'Johnson', 'Williams', 'Jones', 'Brown', 'Garcia', 'Miller', 'Davis', 'Rodriguez', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez', 'Perez', 'Taylor', 'Anderson', 'Wilson', 'Moore', 'Jackson', 'Martin', 'Lee', 'Thompson', 'White', 'Harris', 'Sanchez', 'Clark', 'Lewis', 'Robinson', 'Walker', 'Mitchell', 'Roberts', 'Turner', 'Phillips', 'Campbell', 'Parker', 'Evans', 'Edwards', 'Collins', 'Stewart', 'Flores', 'Morris', 'Murphy', 'Bailey', 'Rivera', 'Richardson', 'Cox', 'Howard', 'Ward', 'Torres', 'Peterson', 'Gray',
];

data.activities = [
  'Running', 'Swimming', 'Cycling', 'Basketball', 'Football', 'Baseball', 'Volleyball', 'Tennis', 'Golf', 'Soccer', 'Hiking', 'Boxing', 'Wrestling', 'Martial Arts', 'Gymnastics', 'Dancing', 'Yoga', 'Pilates', 'Surfing', 'Skiing', 'Snowboarding', 'Skateboarding', 'Rock Climbing', 'Kayaking', 'Canoeing', 'Rowing', 'Sailing', 'Fishing', 'Horseback Riding', 'Archery', 'Shooting', 'Fencing', 'Badminton', 'Table Tennis', 'Hockey', 'Ice Skating', 'Figure Skating', 'Crossfit', 'Powerlifting', 'Weightlifting', 'Bodybuilding', 'Circuit Training', 'HIIT', 'Zumba', 'Pole Dancing', 'Aerial Yoga', 'Acro Yoga', 'Kickboxing', 'Taekwondo', 'Judo', 'Karate', 'Capoeira', 'Parkour', 'Trampoline', 'Bouldering', 'Highlining', 'Paragliding', 'Skydiving',
];

data.community = [
  {
    id: 1,
    name: 'FitFam Community',
    description: 'A community of fitness enthusiasts who are like family, supporting each other in their health and wellness journeys.',
  },
  {
    id: 2,
    name: 'Sweat Squad',
    description: 'A group of dedicated athletes who love to work up a sweat and push themselves to their limits.',
  },
  {
    id: 3,
    name: "Runners' Alliance",
    description: 'A community of runners who come together to share their passion for running and motivate each other to reach their goals.',
  },
  {
    id: 4,
    name: 'Yoga Tribe',
    description: 'A tribe of yoga practitioners who share a love for this ancient practice, and come together to support and inspire one another.',
  },
  {
    id: 5,
    name: 'Gym Warriors',
    description: 'A group of dedicated gym-goers who push themselves to their limits and strive to achieve their fitness goals.',
  },
  {
    id: 6,
    name: 'Spin Squad',
    description: 'A community of spin enthusiasts who love to ride together and challenge each other to push their limits.',
  },
  {
    id: 7,
    name: 'Fitness Friends',
    description: 'A community of friends who share a passion for fitness and enjoy working out together.',
  },
  {
    id: 8,
    name: 'Team CrossFit',
    description: 'A team of dedicated CrossFit athletes who come together to train, compete and support one another.',
  },
  {
    id: 9,
    name: 'Endurance Nation',
    description: 'A community of endurance athletes who push themselves to their limits and strive to achieve their fitness goals.',
  },
  {
    id: 10,
    name: 'Athletic Alliance',
    description: 'A community of athletes who come together to share their passion for sports and motivate each other to reach their goals.',
  },
  {
    id: 11,
    name: 'Iron Tribe',
    description: 'A tribe of strength athletes who share a love for powerlifting, weightlifting, and other strength sports.',
  },
  {
    id: 12,
    name: 'Boxing Brigade',
    description: 'A community of boxing enthusiasts who come together to train, spar, and support each other in their boxing journey.',
  },
  {
    id: 13,
    name: 'Trailblazers',
    description: 'A community of outdoor enthusiasts who love to explore the great outdoors, go on hikes and trail runs together.',
  },
  {
    id: 14,
    name: 'Swim Squad',
    description: 'A community of swimmers who share a love for the water, come together to train, compete and support each other in their swimming journey.',
  },
  {
    id: 15,
    name: 'Cycling Crew',
    description: 'A crew of cyclists who love to ride together, challenge each other, and explore the world on two wheels.',
  },
  {
    id: 16,
    name: 'Tennis Titans',
    description: 'A community of tennis enthusiasts who share a passion for the sport, and come together to play, compete, and have fun.',
  },
  {
    id: 17,
    name: 'Pilates Posse',
    description: 'A group of Pilates enthusiasts who come together to practice, support each other and share their love for this mindful practice.',
  },
  {
    id: 18,
    name: 'Surf Tribe',
    description: 'A tribe of surfers who share a love for the ocean, come together to catch waves, have fun and support each other in their surfing journey.',
  }];

data.users = [
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

data.statistics = [
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

data.posts = [
  {
    id: 1,
    text: 'Remember to listen to your body and take breaks when needed during your workouts.',
    createdAt: 1648326780265,
    lifts: 23,
  },
  {
    id: 2,
    text: 'Incorporate some outdoor activities like hiking or biking into your fitness routine for a change of scenery.',
    createdAt: 1648238829003,
    lifts: 3,
  },
  {
    id: 3,
    text: "Don't be afraid to ask for help or advice from a personal trainer or fitness professional.",
    createdAt: 1648195431802,
    lifts: 100,
  },
  {
    id: 4,
    text: 'Remember that progress takes time and consistency. Keep at it!',
    createdAt: 1648142059136,
    lifts: 84,
  },
  {
    id: 5,
    text: 'Try incorporating some yoga or stretching exercises into your routine to improve flexibility and prevent injury.',
    createdAt: 1648054860906,
    lifts: 40,
  },
  {
    id: 6,
    text: 'Stay motivated by tracking your progress and celebrating your accomplishments along the way.',
    createdAt: 1647980863464,
    lifts: 76,
  },
  {
    id: 7,
    text: 'Mix up your workouts with different exercises and routines to challenge your body and avoid boredom.',
    createdAt: 1647928808687,
    lifts: 56,
  },
  {
    id: 8,
    text: "Don't forget to warm up and cool down properly to prepare your body for exercise and aid in recovery.",
    createdAt: 1647846481982,
    lifts: 19,
  },
  {
    id: 9,
    text: 'Try setting small, achievable goals for each workout session to help you stay focused and motivated.',
    createdAt: 1647773882735,
    lifts: 87,
  },
  {
    id: 10,
    text: 'Remember that proper nutrition and hydration are essential for peak performance and recovery.',
    createdAt: 1647730931614,
    lifts: 34,
  },
  {
    id: 11,
    text: 'Did you know that foam rolling can help with muscle soreness and tightness? Give it a try!',
    createdAt: 1647644911915,
    lifts: 58,
  },
  {
    id: 12,
    text: 'Set a schedule and make fitness a priority in your daily routine.',
    createdAt: 1647572839176,
    lifts: 27,
  },
  {
    id: 13,
    text: 'Try working out with a friend or partner for extra motivation and accountability.',
    createdAt: 1647510228341,
    lifts: 19,
  },
  {
    id: 14,
    text: 'Remember to celebrate the small victories and progress along your fitness journey.',
    createdAt: 1647434382163,
    lifts: 2,
  },
  {
    id: 15,
    text: 'Try incorporating some bodyweight exercises like push-ups or squats into your workout routine.',
    createdAt: 1647357329367,
    lifts: 48,
  },
  {
    id: 16,
    text: "Don't be discouraged by setbacks or plateaus. Keep pushing forward!",
    createdAt: 1647280379275,
    lifts: 28,
  },
  {
    id: 17,
    text: 'Remember that rest and recovery are just as important as the workout itself. Take care of your body!',
    createdAt: 1647194260355,
    lifts: 44,
  },
  {
    id: 18,
    text: "Don't compare your progress or journey to anyone else's. Everyone's path is unique.",
    createdAt: 1647110415826,
    lifts: 69,
  },
  {
    id: 19,
    text: 'Stay positive and stay focused on your goals, even on the tough days.',
    createdAt: 1647025705228,
    lifts: 28,
  },
  {
    id: 20,
    text: 'Mix up your cardio routine with different machines or activities to keep things interesting.',
    createdAt: 1646950899135,
    lifts: 47,
  },
  {
    id: 21,
    text: "Don't be afraid to modify exercises or movements to accommodate any injuries or limitations you may have.",
    createdAt: 1646877331667,
    lifts: 38,
  },
  {
    id: 22,
    text: 'Try incorporating some resistance training into your workouts to build muscle and improve bone density.',
    createdAt: 1646814813821,
    lifts: 73,
  },
  {
    id: 23,
    text: 'Stay hydrated before, during, and after your workouts to prevent dehydration and fatigue.',
    createdAt: 1646732144479,
    lifts: 84,
  },
  {
    id: 24,
    text: "Don't forget to stretch after your workouts to help reduce soreness and improve flexibility.",
    createdAt: 1646660594486,
    lifts: 23,
  },
  {
    id: 25,
    text: 'Try setting a new fitness-related goal each month to keep yourself challenged and motivated.',
    createdAt: 1646576621084,
    lifts: 56,
  },
  {
    id: 26,
    text: 'Remember that consistency is key. Make fitness a habit in your daily routine.',
    createdAt: 1646514099315,
    lifts: 85,
  },
  {
    id: 27,
    text: 'Mix up your workouts with different types of equipment or classes to keep things fresh and challenging.',
    createdAt: 1646428188786,
    lifts: 77,
  },
  {
    id: 28,
    text: 'Remember to fuel your body properly before and after your workouts for optimal performance and recovery.',
    createdAt: 1646342874123,
    lifts: 190,
  },
  {
    id: 29,
    text: 'Incorporate some fun activities like dancing or sports into your fitness routine to keep things enjoyable.',
    createdAt: 1646260203057,
    lifts: 45,
  },
  {
    id: 30,
    text: 'Try setting a new personal best or record for a certain exercise or activity each week to challenge yourself.',
    createdAt: 1646193062024,
    lifts: 845,
  },
  {
    id: 31,
    text: "Remember that it's okay to take a break or rest day when you need it. Don't push yourself too hard.",
    createdAt: 1646119981875,
    lifts: 23,
  },
  {
    id: 32,
    text: 'Try working out in the morning to jumpstart your day and give you energy for the rest of the day.',
    createdAt: 1646036858899,
    lifts: 247,
  },
  {
    id: 33,
    text: "Don't be afraid to try new exercises or routines to challenge your body and keep things interesting.",
    createdAt: 1645954067251,
    lifts: 28,
  },
  {
    id: 34,
    text: "The only bad workout is the one that didn't happen. Keep pushing yourself, even on the tough days.",
    createdAt: 1645954067251,
    lifts: 18,
  },
  {
    id: 35,
    text: "Fitness is not about being better than someone else. It's about being better than you used to be.",
    createdAt: 1645954112248,
    lifts: 84,
  },
  {
    id: 36,
    text: "Don't let your mind limit what your body is capable of. Believe in yourself and you can achieve anything.",
    createdAt: 1645954167723,
    lifts: 11,
  },
  {
    id: 37,
    text: 'Set goals that challenge you but are still attainable. Celebrate your progress along the way.',
    createdAt: 1645954221298,
    lifts: 18,
  },
  {
    id: 38,
    text: "The best project you'll ever work on is yourself. Invest time and effort into your health and fitness.",
    createdAt: 1645954276551,
    lifts: 28,
  },
  {
    id: 39,
    text: "Don't compare your fitness journey to anyone else's. Everyone has their own pace and their own path.",
    createdAt: 1645954331198,
    lifts: 32,
  },
  {
    id: 40,
    text: "Stay consistent with your workouts and healthy habits, even on the days when you don't feel like it.",
    createdAt: 1645954386831,
    lifts: 98,
  },
  {
    id: 41,
    text: 'Remember that fitness is not just about the physical benefits. It can also improve your mental health and wellbeing.',
    createdAt: 1645954440287,
    lifts: 37,
  },
  {
    id: 42,
    text: 'Celebrate your small victories along the way. Every step forward is progress, no matter how small.',
    createdAt: 1645954492965,
    lifts: 37,
  },
  {
    id: 43,
    text: 'Surround yourself with people who support and encourage your fitness goals. A positive community can make all the difference.',
    createdAt: 1645954546287,
    lifts: 27,
  },
  {
    id: 44,
    text: "Don't let a setback or obstacle derail your progress. Use it as an opportunity to learn and grow.",
    createdAt: 1645954600598,
    lifts: 38,
  },
  {
    id: 45,
    text: 'Remember that fitness is a journey, not a destination. Enjoy the process and the results will follow.',
    createdAt: 1645954653099,
    lifts: 27,
  },
  {
    id: 46,
    text: 'Mix up your workouts to prevent boredom and plateauing. Try new exercises and challenges to keep things fresh.',
    createdAt: 1645954707331,
    lifts: 48,
  },
  {
    id: 47,
    text: 'Focus on progress, not perfection. Every step forward, no matter how small, is a step in the right direction.',
    createdAt: 1645954760898,
    lifts: 23,
  },
  {
    id: 48,
    text: "Don't let comparison steal your joy. Focus on your own progress and journey, not what others are doing.",
    createdAt: 1645954815287,
    lifts: 13,
  },
  {
    id: 49,
    text: 'Remember to fuel your body with healthy and nutritious foods to support your fitness goals.',
    createdAt: 1645954868951,
    lifts: 60,
  },
  {
    id: 50,
    text: 'Find a workout buddy or accountability partner to help keep you motivated and on track.',
    createdAt: 1645954923554,
    lifts: 27,
  },
];

data.emojis = [
  'U+1F436', 'U+1F338', 'U+1F680', 'U+1F355', 'U+1F393', 'U+1F3B8', 'U+1F341', 'U+1F981', 'U+1F30A', 'U+1F984', 'U+1F3A8', 'U+1F6B2', 'U+1F418', 'U+1F368', 'U+1F4DA', 'U+1F30B', 'U+1F3A2', 'U+1F420', 'U+1F308',
];

data.locations = [
  'Miami, FL', 'Honolulu, HI', 'Denver, CO', 'Chicago, IL', 'Boston, MA', 'San Francisco, CA', 'Kansas City, MO', 'Charleston, SC', 'Baltimore, MD', 'Portland, OR', 'New Orleans, LA', 'Austin, TX', 'Portland, ME', 'Seattle, WA', 'Nashville, TN', 'Las Vegas, NV', 'Anchorage, AK', 'Atlanta, GA', 'Phoenix, AZ', 'St. Louis, MO',
];

data.events = [
  {
    id: 1,
    name: 'Morning Yoga',
    date_time: {
      date: '2023-05-02',
      time: '08:00 AM',
    },
    category: 'Yoga',
    location: 'New Orleans, LA',
    description: 'Start your day off with a relaxing and energizing yoga flow, suitable for all levels.',
  },
  {
    id: 2,
    name: 'Zumba Fitness',
    date_time: {
      date: '2023-05-04',
      time: '06:30 PM',
    },
    category: 'Dance',
    location: 'Austin, TX',
    description: 'Get your heart pumping and your feet moving with this fun and upbeat dance workout, featuring Latin-inspired rhythms.',
  },
  {
    id: 3,
    name: 'Body Pump',
    date_time: {
      date: '2023-05-06',
      time: '09:00 AM',
    },
    category: 'Strength Training',
    location: 'Portland, ME',
    description: 'Build lean muscle and tone your entire body with this full-body workout, using light to moderate weights and high reps.',
  },
  {
    id: 4,
    name: 'Cycling Challenge',
    date_time: {
      date: '2023-05-08',
      time: '07:30 AM',
    },
    category: 'Cycling',
    location: 'Seattle, WA',
    description: 'Push yourself to the limit with this challenging and high-intensity indoor cycling workout, designed to improve your cardiovascular fitness and endurance.',
  },
  {
    id: 5,
    name: 'CrossFit Team WOD',
    date_time: {
      date: '2023-05-10',
      time: '05:00 PM',
    },
    category: 'CrossFit',
    location: 'Nashville, TN',
    description: 'Join a supportive and fun community while completing a challenging and varied workout, combining functional movements and high-intensity interval training.',
  },
  {
    id: 6,
    name: 'Pilates Mat Class',
    date_time: {
      date: '2023-05-12',
      time: '10:00 AM',
    },
    category: 'Pilates',
    location: 'Chicago, IL',
    description: 'Strengthen your core and improve your posture and flexibility with this classic Pilates mat class, suitable for all levels.',
  },
  {
    id: 7,
    name: 'Hatha Yoga',
    date_time: {
      date: '2023-05-14',
      time: '09:30 AM',
    },
    category: 'Yoga',
    location: 'Denver, CO',
    description: 'Find balance and harmony in body and mind with this gentle and meditative style of yoga, focusing on breath and alignment.',
  },
  {
    id: 8,
    name: 'Tabata Bootcamp',
    date_time: {
      date: '2023-05-16',
      time: '06:00 PM',
    },
    category: 'HIIT',
    location: 'Boston, MA',
    description: 'Get ready to sweat and burn calories with this high-intensity interval training workout, using the Tabata protocol to push you to your limits.',
  },
  {
    id: 9,
    name: 'Zumba Toning',
    date_time: {
      date: '2023-05-18',
      time: '07:00 PM',
    },
    category: 'Dance',
    location: 'Las Vegas, NV',
    description: 'Sculpt and tone your muscles while dancing to upbeat rhythms, using weighted toning sticks for an extra challenge.',
  },
  {
    id: 10,
    name: 'Power Yoga',
    date_time: {
      date: '2023-05-20',
      time: '08:30 AM',
    },
    category: 'Yoga',
    location: 'Miami, FL',
    description: 'Challenge yourself and build strength and stamina with this dynamic and athletic style of yoga, combining flow sequences and strength poses.',
  },
  {
    id: 11,
    name: 'TRX Suspension Training',
    date_time: {
      date: '2023-05-22',
      time: '11:00 AM',
    },
    category: 'Strength Training',
    location: 'San Diego, CA',
    description: 'Use your own body weight and gravity to improve your functional strength, balance, and stability with this full-body workout using TRX suspension straps.',
  },
  {
    id: 12,
    name: 'Spinning Ride',
    date_time: {
      date: '2023-05-24',
      time: '06:30 PM',
    },
    category: 'Cycling',
    location: 'New York, NY',
    description: 'Experience the thrill of outdoor cycling indoors with this intense and challenging spinning ride, set to music and incorporating hills, sprints, and intervals.',
  },
  {
    id: 13,
    name: 'Paddleboard Yoga',
    date_time: {
      date: '2023-06-05',
      time: '11:00 AM',
    },
    category: 'Yoga',
    location: 'Miami Beach, FL',
    description: 'Take your yoga practice to the water and enjoy the sun, the sea, and the sky while balancing on a paddleboard and flowing through poses.',
  },
  {
    id: 14,
    name: 'Boxing Fitness',
    date_time: {
      date: '2023-05-28',
      time: '07:00 PM',
    },
    category: 'Boxing',
    location: 'Los Angeles, CA',
    description: 'Learn basic boxing techniques and get a full-body workout with this fun and empowering class, using gloves and punching bags.',
  },
  {
    id: 15,
    name: 'Aerial Yoga',
    date_time: {
      date: '2023-05-30',
      time: '10:00 AM',
    },
    category: 'Yoga',
    location: 'Seattle, WA',
    description: 'Explore new dimensions of movement and flexibility with this playful and challenging style of yoga, using suspended hammocks to support and deepen your poses.',
  },
  {
    id: 16,
    name: 'Barbell Strength',
    date_time: {
      date: '2023-06-01',
      time: '06:00 PM',
    },
    category: 'Strength Training',
    location: 'Houston, TX',
    description: 'Get stronger and build lean muscle mass with this traditional weightlifting class, using barbells and plates to target all major muscle groups.',
  },
  {
    id: 17,
    name: 'Tai Chi',
    date_time: {
      date: '2023-06-03',
      time: '08:30 AM',
    },
    category: 'Mind-Body',
    location: 'Portland, OR',
    description: 'Connect with your inner peace and cultivate mindfulness and relaxation with this gentle and flowing form of martial arts, based on ancient Chinese philosophy.',
  },
];

data.comments = [
  {
    comment_id: 1,
    comment: 'Great workout! I love how challenging it was.',
    date: 1693008000,
    lifts: 8,
    report: false,
  },
  {
    comment_id: 2,
    comment: 'This is exactly what I needed to get motivated again.',
    date: 1693008000,
    lifts: 3,
    report: false,
  },
  {
    comment_id: 3,
    comment: 'I can feel the burn already, thanks for the killer routine!',
    date: 1692921600,
    lifts: 9,
    report: false,
  },
  {
    comment_id: 4,
    comment: 'I never thought I could lift that much weight, but with your guidance I did it!',
    date: 1692921600,
    lifts: 10,
    report: false,
  },
  {
    comment_id: 5,
    comment: "Amazing class! Can't wait to come back next week.",
    date: 1692835200,
    lifts: 6,
    report: false,
  },
  {
    comment_id: 6,
    comment: "I feel so energized and accomplished after today's session.",
    date: 1692835200,
    lifts: 7,
    report: false,
  },
  {
    comment_id: 7,
    comment: 'Your gym is the best place to work out in town, hands down.',
    date: 1692748800,
    lifts: 5,
    report: false,
  },
  {
    comment_id: 8,
    comment: "I recommend this gym to all my friends, it's like a second home to me.",
    date: 1692748800,
    lifts: 2,
    report: false,
  },
  {
    comment_id: 9,
    comment: 'Thanks for the tips and the encouragement, I can see my progress already!',
    date: 1692662400,
    lifts: 4,
    report: false,
  },
  {
    comment_id: 10,
    comment: "I can't believe how much I accomplished in just one hour!",
    date: 1692662400,
    lifts: 1,
    report: false,
  },
  {
    comment_id: 11,
    comment: 'Your classes are always challenging but so worth it!',
    date: 1692576000,
    lifts: 8,
    report: false,
  },
  {
    comment_id: 12,
    comment: 'I always leave your gym feeling strong and empowered.',
    date: 1692489600,
    lifts: 5,
    report: false,
  },
  {
    comment_id: 13,
    comment: 'Thanks for pushing me to my limits, I needed that extra motivation.',
    date: 1692403200,
    lifts: 9,
    report: false,
  },
  {
    comment_id: 14,
    comment: "I'm so happy I found this gym, it's been a game-changer for me.",
    date: 1692316800,
    lifts: 6,
    report: false,
  },
  {
    comment_id: 15,
    comment: 'I love how inclusive and welcoming this gym is, it makes me excited to work out.',
    date: 1692230400,
    lifts: 3,
    report: false,
  },
  {
    comment_id: 16,
    comment: 'Your training techniques are really effective, I can feel the difference already.',
    date: 1692144000,
    lifts: 2,
    report: false,
  },
  {
    comment_id: 17,
    comment: "I appreciate the emphasis on proper form and technique, it's helped prevent injuries.",
    date: 1692057600,
    lifts: 7,
    report: false,
  },
  {
    comment_id: 18,
    comment: "I'm so grateful for the supportive and motivating atmosphere you've created here.",
    date: 1691971200,
    lifts: 4,
    report: false,
  },
  {
    comment_id: 19,
    comment: "I've been a member here for years and it's still the best gym in town!",
    date: 1691884800,
    lifts: 1,
    report: false,
  },
];

export default data;
