# ⭐ PB-SubscriberLevels ⭐

The SubscriberLevel Module is a highly customizable extension for Phantombot, that lets you set Levels, similar to Ranks, but based on the *total* amount of months a viewer has been subscribed to your channel. (Not the months in a row! This extension is built with Twitchs new sub system in mind.)
You can either use this extension just as some kind of sub-age command, similar to followage, or optionally you can also set (funny) names for each level (sub-month) to engage people to resub. The module will *automagically* detect if you have set a level name and respond with the appropriate message. It will also detect if the user is actively subbed at the moment and if that's not the case the level will not be displayed (might be an option in the future tho, if requested).
Another neat little feature: You can customize the emotes in the bot's responds, one emote for active subs, one for non-subs.

Uses additional tables for user data and settings in the phantombot.db database, so all your important data is stored in one place for easier updating :)  

*If you have further questions, feel free to contact me on Twitter @aKuhTV. If you should encounter any issues, please report them in the Issues tab here on Github.*
  
-------------  
  
## ❕ COMMANDS

For everyone:  
**!level** - *Lets a user check their current total Sub duration and optionally also the custom Resub-Level name.  Can be changed to a custom command using an alias in Phantombot. Available options: !level [username]*  
  
For Mods:  
**!subnamechange [old name] [new name]** - *Lets a Mod or higher transfer a users Level data to a new username after a name change.*  
  
For Caster and Admin:  
**!setlevelname [n]** - *Changes the name of a Resub Level. n is the number of months a user has to be subscribed in total (not in a row) to get this Level. Example: "!setlevelname 1 Newbie" sets the Level name for subs with a total of 1 month to "Newbie".*  
**!levelname [n]** - *Responds with the set name for the given level "n".*  
**!setsubname [something]** - *Changes the name of the Sub-Role in the !level responds. Default is "Sub".*  
**!setsubemote [Twitch Emote]** - *Changes the emote that is displayed in !level responds, if the user is a sub. Default is "bleedPurple".* *  
**!setsademote [Twitch Emote]** - *Changes the emote that is displayed in !level responds, if the user is not a sub. Default is "BibleThump".* *  
**!setlevel [name] [n]** - *Sets the Level/amount of subbed months to given number "n". Be careful, only use this if the database is not in sync with the actual subscriber age on twitch!*  
**!apisync [on|off|status]** - *Toggles synchronisation of Sub-months data with Twitchs API. Having this turned on can avoid async sub data between Twitchs database and the bot's database. Having this turned off (not recommended) the bot won't sync data with Twitch, but rather just increase the stored value by 1 upon a resub event. Default is "on". **Note, that a users sub data is only synchronised on their RESUB or SUBGIFT event, not a normal sub event, due to limitations of the bots system. Further info in the installation section down below**.*   
  

*Note, that the bot can only use emotes, that are available on the bot's account. (Global emotes and emotes from channels the bot's account is subscribed to)  
  
--------------  
  
## 📆 CHANGELOG  

0.1 - Initial version  
0.1.1 - Initial public release. Added support for name changes, bug fixes  
0.2.1 - Added feature to set the level of a user manually via command  
0.3 - Added full localization support and ENGLISH TRANSLATION. Fixed a bug, where the active-sub-check would not work as expected.  
0.3.1 - Added feature to toggle synchronisation of sub-month data between Twitchs database and the bot's database. Translated console messages to English.   
0.3.2_hotfix - bugfix  
**0.3.3 - Added support for syncing cumulative months with Twitchs satabase on Sub-Gift events.
Fixed an issue, where the apisync toggle wouldn't work if the user wasn't already listed in the database.**  
  
(Don't use versions before 0.3.3!)  
  
--------------  
  
## 💾 INSTALLATION and UPDATING  
    
- Make sure you have the Phantombot Nightly build from 4. February 2019 or a later version pf Phantombot!  
- Download latest release from the "Releases" section: https://github.com/aKuhTV/PB-SubscriberLevels/releases  
- Place the *SubscriberLevels_0.x.js* inside *[Your Phantombot Folder]\scripts\custom*. If that folder doesn't exist, create it.  
- Place the *custom-SubscriberLevels_0.x.js* inside *[Your Phantombot Folder]\scripts\lang\english (or whatever language your bot is set to)\custom*. If that folder doesn't exist, create it.  
  
**If you are UPDATING from an older version, delete the old files and replace them by the new ones!** You won't lose any userdata, since it is stored in a different place.  
  
That's it, it's as easy as that! On the first startup the extension will automatically create all needed databases. The rest can be configured using the commands listed above.  
  
❗ **Note: Due to limitations of the sub month query, the months of a sub will be counted on their first resub or subgift after installation, according to the cumulative months data that Twitch provides.** (assuming !APIsync is turned on, which it is by default). **This will change as soon as Phantombot's Twitch API integration is fully updated for the new sub system.**   
  
❕ **If you want to have the full funcionality availabe directly after installation, you need to manually set the number of months using the !setlevel command. (Not recommended, as this could lead to differences between Twitchs Database and the Bots database.) So maybe wait a bit before making the chat command available for everyone**
