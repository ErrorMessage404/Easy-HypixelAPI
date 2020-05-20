const fetch = require('cross-fetch');

class Hypixel {
	/**
	* Create a new API client instance.
	* @param {string} key - A valid Hypixel API key
	*/
    constructor (key) {
		this.key = key
    }

    /**
	* Get a player's UUID.
	* @param {string} username - The target user's ingame name
	*/
    async getUUID(username) {
        if(!username) throw new Error("Missing arguments");
        let data;
        await fetch(`https://api.mojang.com/users/profiles/minecraft/${username}`)
        .then(res => {
          if (res.status >= 400) {
            data = null
            throw new Error("Bad response from server");
          }
          return res.json();
        })
        .then(d => { data = d; })
        .catch(err => { console.error(err); data = null; });
        return data;
    }
    
    async playerCount() {
        let data;
        await fetch(`https://api.hypixel.net/playerCount?key=${this.key}`)
        .then(res => {
        if (res.status >= 400) {
            data = null
            throw new Error("Bad response from server");
        }
        return res.json();
        })
        .then(d => { data =  d; })
        .catch(err => { console.error(err); data = null; });
        return data;
    }
    
    async playerFromUUID(uuid) {
        let data;
        await fetch(`https://api.hypixel.net/player?uuid=${uuid}&key=${this.key}`)
        .then(res => {
        if (res.status >= 400) {
            data = null
            throw new Error("Bad response from server");
        }
        return res.json();
        })
        .then(d => { data = d; })
        .catch(err => { console.error(err); data = null; });
        return data;
    }

    async playerFromUsername(username) {
        let data;
        let uuid = await this.getUUID(username).then(res => { return res.id })
        await fetch(`https://api.hypixel.net/player?uuid=${uuid}&key=${this.key}`)
        .then(res => {
        if (res.status >= 400) {
            data = null
            throw new Error("Bad response from server");
        }
        return res.json();
        })
        .then(d => { data = d; })
        .catch(err => { console.error(err); data = null; });
        return data;
    }
}

module.exports = Hypixel

