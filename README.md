# mycenter-npm
myCenter API wrapper for Node.JS users.

# Installation
Install by running the `npm install --save mycenter-npm` command.

# Usage

This will be the most simple form of documentation that you will  ever see in an NPM package. If you aren't familiar with Node.JS, **steer clear away from here**.

```js
// Intiilization
const myCenter = require('mycenter-npm');
const GroupBot = new myCenter("mcv5_group_bot:many-other-letters-and-numbers");

// Functions

// GroupBot.shout(Message)
// Message - String
// Returns: Promise<{
//   success: bool,
//   ?disclaimer: string,
//   ?reason: string
// }>
GroupBot.shout("This is an example shout");

// GroupBot.exile(UserId)
// UserId - Number
// Returns: Promise<{
//   success: bool,
//   ?disclaimer: string,
//   ?reason: string
// }>
GroupBot.exile(123456);

// GroupBot.rank(UserId, RankId)
// UserId - Number
// RankId - Number [1-255]
// Returns: Promise<{
//   success: bool,
//   ?disclaimer: string,
//   ?reason: string
// }>
GroupBot.rank(123456, 200);

// GroupBot.getJoinRequests()
// Returns: Promise<{
//   success: bool,
//   data: JSON,
// }>
GroupBot.getJoinRequests();

// GroupBot.acceptJoinRequest(UserId)
// UserId - Number
// Returns: Promise<{
//   success: bool,
//   ?disclaimer: string,
//   ?reason: string
// }>
GroupBot.acceptJoinRequest(123456);

// GroupBot.declineJoinRequest(UserId)
// UserId - Number
// Returns: Promise<{
//   success: bool,
//   ?disclaimer: string,
//   ?reason: string
// }>
GroupBot.declineJoinRequest(123456);
```

If there are any bugs, please feel free to post a bug report on the Github.