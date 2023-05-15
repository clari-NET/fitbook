## Fitbook

A social media application that brings together fitness minded individuals through user created communities and events.

## Authors

[Andrew Ihn](https://github.com/roormade)\
[Brett Tanonaka](https://github.com/B-Tanonaka)\
[Elliott Tung](https://github.com/elliott234)\
[Johnathan Simeroth](https://github.com/johnsimeroth)\
[Minseok Song](https://github.com/msong1)\
[Nicholas Milligan](https://github.com/NicMilli)\
[Yale Yang](https://github.com/yaleyang5)\
[Yeongcheol Hwang](https://github.com/yeonghwang94)

## Built With
![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)![Expo](https://img.shields.io/badge/expo-1C1E24?style=for-the-badge&logo=expo&logoColor=#D04A37)![JavaScript](https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E)![Git](https://img.shields.io/badge/GIT-E44C30?style=for-the-badge&logo=git&logoColor=white)![ESLINT](https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white)

## Key Features
- Authentication and individual user profiles
- Direct messaging between friends
- Ability to create communities, posts, and events
- Users can comment and like posts
- Navigation between communitites, events, and user profiles from various points in the application
- Creating navigation stacks allowing the user to go back to previous screens

## Login
Users are able to log in or create an account using an email and password or their Google account

## Home feed
Once logged in, the user is presented a home feed with posts and events from communities they have joined

#### Bottom navigation
The navigation bar sticks to the bottom of the screen and has four tab options: Home, Profile, Communities, Messages

#### Creating a post or community
On the home tab, a user can press on the plus button to create a post or event

## Profile
On the profile tab, a top navigation appears that shows the user their activity, friends, communities, and profile information
<div>
	<details>
		<summary>Top Navigation</summary>
		<div>
      <h4>Activity</h4>
      <p>Comments and posts</p>
    </div>
    <div>
      <h4>Friends</h4>
      <p>List of friends that the user can choose to direct message</p>
    </div>
    <div>
      <h4>Communities</h4>
      <p>Communities user has joined</p>
    </div>
    <div>
      <h4>Profile</h4>
      <p>User information such as username, statistics, profile photo</p>
    </div>
	</details>
</div>

## Communities
<ul>
	<li>List of available and suggested communitites that the user has not joined</li>
	<li>Search function that filters list of communitites</li>
  <li>Able to click on community card to navigate to the community page</li>
</ul>

## Messages
<ul>
	<li>Conversations with other users</li>
	<li>Click on message card to navigate to the conversation</li>
</ul>

## Getting Started

Installation
- Clone the repository
    ```
        git clone https://github.com/clari-NET/fitbook
    ```
- Install the dependencies
    ```
        npm install
    ```
- Run the following script
    ```
        npm start | if you have Expo installed (best run on an iPhone 14)
        npm run web
    ```
