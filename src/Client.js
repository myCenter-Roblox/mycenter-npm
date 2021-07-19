const fetch = require('node-fetch');

class myCenterClient {
  constructor(botId) {
    this.botId = botId;
  }

  async makeRequest(type, args) {
    return fetch("https://my-center.net/roblox/bots/" + this.botId, {
      method: "post",
      body: JSON.stringify({ ...{ type: type, }, ...args }),
      headers: { 'Content-Type': 'application/json' }
    });
  }

  async shout(message) {
    if (typeof message !== "string") throw new Error("The shout message must be a string!");

    return this.makeRequest("shout", {
      message: message
    });
  }

  async exile(userId) {
    if (typeof userId !== "number") throw new Error("The user ID must be a number!");

    return this.makeRequest("exile", {
      userId: userId
    });
  }

  async rank(userId, rankId) {
    if (typeof userId !== "number") throw new Error("The user ID must be a number!");
    if (typeof rankId !== "number") throw new Error("The rank ID must be a number!");

    if (rankId > 255 || rank < 1) throw new Error("The rank ID must be a number greater than 0 and less than 255!");

    return this.makeRequest("rank", {
      userId: userId,
      rankId: rankId
    })
  }

  async get getJoinRequests() {
    return this.makeRequest("getjoinrequests", {});
  }

  async acceptJoinRequest(userId) {
    if (typeof userId !== "number") throw new Error("The user ID must be a number!");

    return this.makeRequest("acceptjoinrequest", {
      userId: userId
    });
  }

  async declineJoinRequest(userId) {
    if (typeof userId !== "number") throw new Error("The user ID must be a number!");

    return this.makeRequest("declinejoinrequest", {
      userId: userId
    });
  }

  async get info() {
    return this.makeRequest("info", {});
  }

  
}

module.exports = myCenterClient;