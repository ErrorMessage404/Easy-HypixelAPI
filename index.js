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

    /**
	* Get the current player count
	*/
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
    
    /**
	* Get a player's hypixel info.
	* @param {string} uuid - The target user's uuid
	*/
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

    /**
	* Get a player's hypixel info.
	* @param {string} username - The target user's ingame name
	*/
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

    /**
	* Returns information regarding given key.
	*/
    async key() {
        let data;
        await fetch(`https://api.hypixel.net/key?key=${this.key}`)
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

    /**
	* Returns a list of boosters.
	*/
    async boosters() {
        let data;
        await fetch(`https://api.hypixel.net/boosters?key=${this.key}`)
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

    /**
	* Returns the id of the requested guild.
	* @param {string} name - The target guilds name (casesensitive)
	*/
    async findGuildByName(name) {
        let data;
        await fetch(`https://api.hypixel.net/findGuild?byName=${name}&key=${this.key}`)
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

    /**
	* Returns the id of the requested guild.
	* @param {string} uuid - The target user's uuid
	*/
    async findGuildByUuid(uuid) {
        let data;
        await fetch(`https://api.hypixel.net/findGuild?byUuid=${uuid}&key=${this.key}`)
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

    /**
	* Returns friendships for given player.
	* @param {string} username - The target user's ingame name
	*/
    async friendsFromUsername(username) {
        let data;
        let uuid = await this.getUUID(username).then(res => { return res.id })
        await fetch(`https://api.hypixel.net/friends?uuid=${uuid}&key=${this.key}`)
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

    /**
	* Returns friendships for given player.
	* @param {string} uuid - The target user's uuid
	*/
    async friendsFromUuid(uuid) {
        let data;
        await fetch(`https://api.hypixel.net/friends?uuid=${uuid}&key=${this.key}`)
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

    /**
	* Returns the current player count along with the player count of each public game + mode on the server.
	*/
    async gameCounts() {
        let data;
        await fetch(`https://api.hypixel.net/gameCounts?key=${this.key}`)
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

    /**
	* Returns information about given guild.
	* @param {string} guildID - Guild id returned by findGuild
	*/
    async guildFromGuildID(guildID) {
        let data;
        await fetch(`https://api.hypixel.net/guild?id=${guildID}&key=${this.key}`)
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

    /**
	* Returns information about given guild.
	* @param {string} username - The target user's ingame name
	*/
    async guildFromPlayer(username) {
        let data;
        let uuid = await this.getUUID(username).then(res => { return res.id })
        await fetch(`https://api.hypixel.net/guild?player=${uuid}&key=${this.key}`)
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

    /**
	* Returns information about given guild.
	* @param {string} name - The target guild's name
	*/
    async guildFromName(name) {
        let data;
        await fetch(`https://api.hypixel.net/guild?name=${name}&key=${this.key}`)
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

    /**
	* Returns a list of the official leaderboards and their current standings for games on the network.
	*/
    async leaderboard() {
        let data;
        await fetch(`https://api.hypixel.net/leaderboard?key=${this.key}`)
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

    /**
	* Returns recent games of a player. A maximum of 100 games are returned and recent games are only stored for up to 3 days at this time.
	* @param {string} uuid - The target user's uuid
	*/
    async recentGamesFromUUID(uuid) {
        let data;
        await fetch(`https://api.hypixel.net/recentGames?uuid=${uuid}&key=${this.key}`)
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

    /**
	* Returns recent games of a player. A maximum of 100 games are returned and recent games are only stored for up to 3 days at this time.
	* @param {string} username - The target user's ingame name
	*/
    async recentGamesFromUsername(username) {
        let data;
        let uuid = await this.getUUID(username).then(res => { return res.id })
        await fetch(`https://api.hypixel.net/recentGames?uuid=${uuid}&key=${this.key}`)
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

    /**
		* Returns online status information for given player, including game, mode and map when available. Players can disable this endpoint via in-game settings. When done so the API will return as if the player is offline.
	* @param {string} uuid - The target user's uuid
	*/
    async statusFromUUID(uuid) {
        let data;
        await fetch(`https://api.hypixel.net/status?uuid=${uuid}&key=${this.key}`)
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

    /**
	* Returns online status information for given player, including game, mode and map when available. Players can disable this endpoint via in-game settings. When done so the API will return as if the player is offline.
	* @param {string} username - The target user's ingame name
	*/
    async statusFromUsername(username) {
        let data;
        let uuid = await this.getUUID(username).then(res => { return res.id })
        await fetch(`https://api.hypixel.net/status?uuid=${uuid}&key=${this.key}`)
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

    /**
	* Returns some statistics about Watchdog & bans.
	*/
    async watchdogstats() {
        let data;
        await fetch(`https://api.hypixel.net/watchdogstats?key=${this.key}`)
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

