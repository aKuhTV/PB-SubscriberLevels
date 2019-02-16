/**
 * SubscriberLevels by aKuhTV
 *
 * Find out for how many months you have been subscribed (and which Level you are on)
 */

 (function() {

	var dbExists = $.inidb.FileExists('ResubMonths');

	if (dbExists){

		$.consoleLn('Resub Database gefunden!');

	} else {

		$.consoleLn('Resub Database nicht gefunden, erstelle neue Database');
		$.inidb.AddFile('ResubMonths');
		dbExists = $.inidb.FileExists('ResubMonths');

			if (dbExists){

				$.consoleLn('Resub Database erfolgreich erstellt!');

			}
	}


	var levelDbExists = $.inidb.FileExists('ResubLevelNames');

	if (levelDbExists){

		$.consoleLn('Resub Level Names Database gefunden!');

	} else {

		$.consoleLn('Resub Level Names Database nicht gefunden, erstelle neue Database');
		$.inidb.AddFile('ResubLevelNames');
		levelDbExists = $.inidb.FileExists('ResubLevelNames');

			if (levelDbExists){

				$.consoleLn('Resub Level Names Database erfolgreich erstellt!');

			}
	}


	var settingsDbExists = $.inidb.FileExists('ResubLevelSettings');

	if (settingsDbExists){

		$.consoleLn('Resub Level Settings Database gefunden!');

	} else {

		$.consoleLn('Resub Level Settings Database nicht gefunden, erstelle neue Database');
		$.inidb.AddFile('ResubLevelSettings');
		$.inidb.set('ResubLevelSettings', "subEmote", "bleedPurple");
		$.inidb.set('ResubLevelSettings', "sadEmote", "BibleThump");
		$.inidb.set('ResubLevelSettings', "subName", "Sub");
		settingsDbExists = $.inidb.FileExists('ResubLevelSettings');

			if (settingsDbExists){

				$.consoleLn('Resub Level Settings Database erfolgreich erstellt!');

			}
	}


	/*
     * @event twitchSubscriber
     */
    $.bind('twitchSubscriber', function(event) {

        var subscriber = event.getSubscriber();

        if($.inidb.exists('ResubMonths', subscriber)){
			
			$.inidb.incr('ResubMonths', subscriber, 1);

		} else {
			
			$.inidb.set('ResubMonths', subscriber, 1);

		}
    });

    /*
     * @event twitchPrimeSubscriber
     */
    $.bind('twitchPrimeSubscriber', function(event) {

        var subscriber = event.getSubscriber();

        if($.inidb.exists('ResubMonths', subscriber)){
			
			$.inidb.incr('ResubMonths', subscriber, 1);

		} else {
			
			$.inidb.set('ResubMonths', subscriber, 1);

		}
    });

    /*
     * @event twitchReSubscriber
     */
    $.bind('twitchReSubscriber', function(event) {

        var resubscriber = event.getReSubscriber();

        if($.inidb.exists('ResubMonths', resubscriber)){
			
			$.inidb.incr('ResubMonths', resubscriber, 1);

		} else {
			
			$.inidb.set('ResubMonths', resubscriber, 1);

		}
    });

    /*
     * @event twitchSubscriptionGift
     */
    $.bind('twitchSubscriptionGift', function(event) {

        var recipient = event.getRecipient();

		if($.inidb.exists('ResubMonths', recipient)){
			
			$.inidb.incr('ResubMonths', recipient, 1);

		} else {
			
			$.inidb.set('ResubMonths', recipient, 1);

		}
    });


    /*
     * @event twitchAnonymousSubscriptionGift
     */
    $.bind('twitchAnonymousSubscriptionGift', function(event) {

        var recipient = event.getRecipient();

        if($.inidb.exists('ResubMonths', recipient)){
			
			$.inidb.incr('ResubMonths', recipient, 1);

		} else {
			
			$.inidb.set('ResubMonths', recipient, 1);

		}
    });


    /**
     * @event command
     */
	$.bind('command', function(event) {
		var sender = event.getSender(),
			command = event.getCommand(),
			args = event.getArgs();
			arguments = event.getArguments();
			resubMonths = $.inidb.get('ResubMonths', sender);
			isSub = $.inidb.get('subscribed', sender);
			levelName = $.inidb.get('ResubLevelNames', resubMonths);

			argIsSub = $.inidb.get('subscribed', args[0]);
			argResubMonths = $.inidb.get('ResubMonths', args[0]);
			argLevelName = $.inidb.get('ResubLevelNames', argResubMonths);

			subEmote = $.inidb.get('ResubLevelSettings', "subEmote");
			sadEmote = $.inidb.get('ResubLevelSettings', "sadEmote");
			subName = $.inidb.get('ResubLevelSettings', "subName");

		if(command.equalsIgnoreCase('level')) {

			if (args[0] !== undefined) {

				/**$.say(sender + ', du kannst nur deinen eigenen Sub-Level abfragen.'); */


				if (argIsSub && argResubMonths != null) {

					if (argLevelName != null) {

						if (argResubMonths == 1) {
				
							$.say(args[0] + ' ist Sub im ersten Monat und somit ' + subName + ' des Levels ' + argLevelName + " " + subEmote);

						} else {

							$.say(args[0] + ' ist seit ' + argResubMonths + ' Monaten Sub und somit ' + subName + ' des Levels ' + argLevelName + " " + subEmote);

						}

					} else {

						if (argResubMonths == 1) {
					
							$.say(args[0] + ' ist ' + subName + ' im ersten Monat. ' + subEmote);

						} else {
						
							$.say(args[0] + ' ist seit ' + argResubMonths + ' Monaten ' + subName + '. ' + subEmote);

						}

					}

				} else if (argIsSub && argResubMonths == null) {
				
					$.say('Dazu liegen mir keine Daten vor, ' + sender);

				} else {
				
					//$.say(args[0] + ' ist momentan kein Sub. ' + sadEmote);
					$.say($.lang.get('subscriberlevels.nosubarg', args[0], sadEmote));

				}

			} else {
			
				if (isSub && resubMonths != null) {

					if (levelName != null) {

						if (resubMonths == 1) {
				
							$.say(sender + ' ist Sub im ersten Monat und somit ' + subName + ' des Levels ' + levelName + ' ' + subEmote);

						} else {
						
							$.say(sender + ' ist seit ' + resubMonths + ' Monaten Sub und somit ' + subName + ' des Levels ' + levelName + ' ' + subEmote);

						}

					} else {

						if (resubMonths == 1) {
					
							$.say(sender + ' ist ' + subName + ' im ersten Monat. ' + subEmote);

						} else {
						
							$.say(sender + ' ist seit ' + resubMonths + ' Monaten ' + subName + '. ' + subEmote);

						}

					}

				} else if (isSub && resubMonths == null) {
				
					$.say('Du kannst deinen Level ab deinem kommenden Resub abrufen, ' + sender);

				} else {
				
					$.say('Du bist momentan kein Sub, ' + sender + ' ' + sadEmote);

				}
			}
		}


		if (command.equalsIgnoreCase('setlevelname')) {
		
			if (args[1] != undefined) {
			
				$.inidb.set('ResubLevelNames', args[0], args[1]);
				$.say('Der Name von Level ' + args[0] + ' ist jetzt: ' + args[1]);

			} else {
			
				$.say('Gib die Resub-Zahl und einen Level-Namen an. zB: !setlevelname 1 Neuling');

			}

		}


		if(command.equalsIgnoreCase('levelname')) {
		
			if (args[0] != undefined && $.inidb.get('ResubLevelNames', args[0]) != null) {
			
				var levelName = $.inidb.get('ResubLevelNames', args[0]);
				$.say('Aktueller Name von Level ' + args[0] + ': ' + levelName);

			} else if (args[0] != undefined && $.inidb.get('ResubLevelNames', args[0]) == null) {

				$.say('Level ' + args[0] + ' hat noch keinen Namen.');

			} else {
			
				$.say('Gib die Level-Zahl an. zB: !levelname 1');

			}

		}


		if (command.equalsIgnoreCase('setsubemote')) {
		
			if (args[0] != undefined) {
			
				$.inidb.set('ResubLevelSettings', "subEmote", args[0]);
				$.say('Das Sub-Emote in Level-Abfragen ist jetzt ' + args[0]);

			} else {
			
				$.say('Gib ein Emote an.');

			}

		}


		if (command.equalsIgnoreCase('setsademote')) {
		
			if (args[0] != undefined) {
			
				$.inidb.set('ResubLevelSettings', "sadEmote", args[0]);
				$.say('Das Non-Sub-Emote in Level-Abfragen ist jetzt ' + args[0]);

			} else {
			
				$.say('Gib ein Emote an.');

			}

		}


		if (command.equalsIgnoreCase('setsubname')) {
		
			if (args[0] != undefined) {
			
				$.inidb.set('ResubLevelSettings', "subName", args[0]);
				$.say('Die Sub-Rolle heisst jetzt ' + args[0]);

			} else {
			
				$.say('Gib der Sub-Rolle einen Namen.');

			}

		}


		if (command.equalsIgnoreCase('setlevel')) {
		
			if (args[1] != undefined) {
			
				$.inidb.set('ResubMonths', args[0], args[1]);
				$.say('Das Resub-Level von ' + args[0] + ' ist jetzt Level ' + args[1] + '.');

			}

		}


		if (command.equalsIgnoreCase('subnamechange')) {
		
			if (args[1] != undefined) {
			
				$.inidb.set('ResubMonths', args[1], $.inidb.get('ResubMonths', args[0]));
				$.inidb.del('ResubMonths', args[0]);
				$.say('Resub-Level-Module: Die Sub-Level von ' + args[0] + ' wurden auf ' + args[1] + ' transferiert.');

			}

		}

	})


	 /**
     * @event initReady
     */
    $.bind('initReady', function() {
        if ($.bot.isModuleEnabled('./custom/SubscriberLevels_0.2.1.js')) {

			$.consoleLn('** SubscriberLevels by aKuhTV, v. 0.2.1_ger (C)2019 **');

            $.registerChatCommand('./custom/SubscriberLevels_0.2.1.js', 'level', 7);
			$.registerChatCommand('./custom/SubscriberLevels_0.2.1.js', 'setlevelname', 1);
			$.registerChatCommand('./custom/SubscriberLevels_0.2.1.js', 'levelname', 1);
			$.registerChatCommand('./custom/SubscriberLevels_0.2.1.js', 'setsubemote', 1);
			$.registerChatCommand('./custom/SubscriberLevels_0.2.1.js', 'setsademote', 1);
			$.registerChatCommand('./custom/SubscriberLevels_0.2.1.js', 'setsubname', 1);
			$.registerChatCommand('./custom/SubscriberLevels_0.2.1.js', 'subnamechange', 2);
			$.registerChatCommand('./custom/SubscriberLevels_0.2.1.js', 'setlevel', 1);

        }
    });

 })();