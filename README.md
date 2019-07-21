# (16. July 2019) **I‘m in the process of rewriting this script from the ground up for a much cleaner and a more user-friendly implementation of subscriber levels/ranks. Please check back in a few days.**





# ⭐ PB-SubRanks ⭐

The SubRanks Module is a highly customizable extension for Phantombot, that lets you set Ranks based on the *total* amount of months a viewer has been subscribed to your channel. (This extension is built with Twitchs new sub system in mind.)
You can either use this extension just as some kind of sub-age command, similar to followage, or you can also set (funny) names for each sub-month (like levels) to engage people to resub. The module will detect if the user is actively subbed at the moment and if that's not the case the level will not be displayed (might be an option in the future tho, if requested).  
  
This uses part of the existing ranks system of Phantombot. Existing Custom Ranks will be replaced by Sub Ranks. (They will be backed up on setup). Why did I do it this way? I just seemed more intuitive/convenient/less cluttered to have just one ranks system on the channel. Plus you can use the (rank) tag in standard commands, like !points, and it will give you the sub rank.  
  
*If you have further questions, feel free to contact me on Twitter @aKuhTV. If you should encounter any issues, please report them in the Issues tab here on Github.*
  
-------------  
  
## ❕ COMMANDS

For everyone:  
**!subage** - *Lets a user check their current total Sub duration. Available options: !subage [username]*  
  
![](https://i.imgur.com/5aA600I.jpg)  
  
**!level** - *Lets a user check their current total Sub duration and also the custom Sub-Rank name.  Can be changed to a custom command using an alias in Phantombot. Available options: !level [username]*  
  
![](https://i.imgur.com/X41DBEk.jpg)  
  
For Mods:  
**!subnamechange [old name] [new name]** - *Lets a Mod or higher transfer a users rank data to a new username after a name change. This will NOT be done automatically when using the regular !namechange command.*  
**!setsubrank [name] [n]** - *Sets the Rank/amount of subbed months to given number "n". You may use this for initial setup. The sub month data will be updated automatically on a resub event.*  
  
For Caster and Admin:  
**!levelname [n]** - *Responds with the set name for the given level "n".*  
  
Planned for future release:  
**!revert** - *This will revert the ranks data to the standard custom ranks, that were backed up on setup. BE CAREFUL, THIS WILL OVERWRITE THE SUB RANKS. ONLY USE THIS IF YOU UNINSTALL THE EXTENSION AFTERWARDS! A backup of your sub ranks data will be created.*  
**!restore** - *This will restore the sub ranks data after using the !revert command. The standard custom ranks will be overwritten. A backup of your standard custom ranks data will be created.*  
  
  
--------------  
  
## 📆 CHANGELOG  

~~0.1.1 - Initial public release. Added support for name changes, bug fixes  
0.2.1 - Added feature to set the level of a user manually via command  
0.3 - Added full localization support and ENGLISH TRANSLATION. Fixed a bug, where the active-sub-check would not work as expected.  
0.3.1 - Added feature to toggle synchronisation of sub-month data between Twitchs database and the bot's database. Translated console messages to English.   
0.3.2  
0.3.3 - Added support for syncing cumulative months with Twitchs database on Sub-Gift events.~~  
  
1.0 - Complete rewrite of the module. It's a lot cleaner, more reliable and easier to use now. Rank names and user ranks can now both be set through Phantombots Web Panel.  
  
(Don't use versions before 1.0! The module has been rewritten from the ground up.)  
  
--------------  
  
## 💾 INSTALLATION and UPDATING  
    
- Make sure you use a Phantombot version that was released after May 18th 2019! (currently only nightly builds: https://github.com/PhantomBot/nightly-build/tree/master/historical)  
- Download latest release from the "Releases" section: https://github.com/aKuhTV/PB-SubRanks/releases  
- Place the *SubRanks.js* inside *[Your Phantombot Folder]\scripts\custom*. If that folder doesn't exist, create it.  
- Place the *custom-SubRanks.js* inside *[Your Phantombot Folder]\scripts\lang\english (or whatever language your bot is set to)\custom*. If that folder doesn't exist, create it.  
  
**If you are UPDATING SubRanks from an older version, ONLY replace the *SubRanks.js* with the new one! DO NOT overwite *custom-SubRanks.js*, since it contains all your custom level names!** Any other userdata, like sub ranks, is stored in the phantombot.db database.  
**If you are updating PHANTOMBOT, don't forget to copy the *SubRanks.js* and *custom-SubRanks.js* over to the new Phantombot.**  
  
That's it for installation. For customization and setting your own level names visit the wiki:  
  
❗ **Note: Due to limitations of the sub month query, the sub months of a viewer will be counted on their first sub, resub or subgift after installation, according to the cumulative months data that Twitch provides.**     
  
❕ **If you want to have the full funcionality availabe directly after installation, you need to manually set the number of months using the !setsubrank command. If you use Tipeeestream, they provide a pretty useful Sub-Month Leaderboard on their dashboard, which gives you the age of at least the Top 100 Subs.**
