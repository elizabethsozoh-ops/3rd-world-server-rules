
export const RULEBOOK_CONTENT = [
    // Page 1: Cover
    {
        id: 'cover',
        type: 'cover',
        videoUrl: '/assets/Whisk_etojrznmjtm0ydn20cn0gtotewn1qtllljz20sm.mp4',
        muted: true
    },
    // Page 2: Community and Server Rules + Hate Speech & Harassment
    {
        id: 'real-rules-start',
        type: 'rule-text-dense',
        title: '3RD WORLD RP – COMMUNITY AND SERVER RULES',
        content: `Welcome to 3rd World RP. This is not a casual "cops and robbers" playground — it is a serious roleplay community built for players who value immersion, storytelling, and respect. Every rule in this document exists to protect the integrity of our RP environment and the safety of our members.

If you are here to troll, exploit mechanics, or treat this server like an arcade game, you will not last long.

OUR PHILOSOPHY IS SIMPLE:

🎭 Roleplay First – Every interaction should contribute to the story.
🤝 Respect Always – Out-of-character harassment, toxicity, or hate speech will never be tolerated.
🌍 Immersion Matters – Treat the world as real, value your character's life, and respect the RP of others.

3RD WORLD COMMUNITY RULES

NO HATE SPEECH OR REAL-WORLD BIGOTRY

This is a roleplay community, not a space for real-world politics or prejudice. Any form of racism, sexism, homophobia, transphobia, religious intolerance, or similar hate will not be tolerated - in or out of character. Roleplay cannot be used to excuse hate. You can play a villain without importing real-world bigotry. Violators will be removed from the community.

NO HARASSMENT

Harassment outside of the game - whether through Discord, DMs, social media, or other platforms - is not tolerated. This includes targeted insults, sexual harassment, threats, stalking, or any behavior that causes real-world discomfort, intimidation, or harm. Unwanted attention that continues after boundaries are clearly set is prohibited.`,
        theme: 'vibe',
        pageNumber: 2
    },
    // Page 3: Founders Intro - NOW WITH IMPACT
    {
        id: 'founders-image',
        type: 'comic-panel',
        imageBg: '/assets/ryleeenbig.png',
        objectFit: 'contain',
        popups: [
            { text: 'THE FOUNDERS!', x: '50%', y: '15%', rotate: -2, color: 'yellow', scale: 1.4 },
            { text: 'RESPECT!', x: '20%', y: '80%', rotate: -15, color: 'blue', scale: 1.1, delay: 1 },
            { text: 'STORY!', x: '80%', y: '75%', rotate: 10, color: 'red', scale: 1.2, delay: 1.5 }
        ],
        pageNumber: 3
    },
    // Page 4: Community Standards & Conduct + Toxicity & Adult Server
    {
        id: 'rules-conduct',
        type: 'rule-text-dense',
        title: '3RD WORLD COMMUNITY RULES',
        content: `PROGRESSIVE DISCIPLINE

Punishments scale with severity: warnings \u2192 timeouts \u2192 bans. Players know what to expect.

EXAMPLES OF UNACCEPTABLE OOC CONDUCT

\u2022 Sending repeated messages after being blocked or told to stop.\n\u2022 Harassing someone over RP events via Discord or social media.\n\u2022 Group chats formed to mock, harass, or doxx community members.\n\u2022 Sharing personal information or screenshots without consent.

If you feel unsafe or targeted outside the game, please open a ticket with context. We take real-world harassment seriously.

OFF-SERVER CONDUCT

We are not here to mediate friend group disputes or personal fallouts. But if your off-server conduct creates a hostile environment or threatens the well-being of another player, we reserve the right to remove you from the community, regardless of where the behavior occurred.

This includes, but is not limited to: harassment, doxxing, threats, targeted smear campaigns, or behavior that erodes trust or safety.

COMMUNITY TOXICITY

Criticism is welcome. Toxicity is not. You're free to share concerns or disagreements - but abuse, disrespect, harassment, or targeted negativity toward the community, server, or staff will not be tolerated. We take accountability seriously. Reports involving staff (even owners) are reviewed independently. This includes ban disputes.

BAN APPEALS

If you're banned, and no longer able to post in Discord, you can appeal your ban through a 3rd party unless banned for using 3rd party software, harassment, toxicity and or a risk to the community. We understand that mistakes happen - staff are human. Ban appeals are reviewed by someone other than the original issuing staff member to ensure fairness.`,
        theme: 'neon',
        pageNumber: 4
    },
    // Page 5: Conduct Policies (with video)
    {
        id: 'rules-policies',
        type: 'rule-text-image',
        videoUrl: '/assets/mrdevcorrect.mp4',
        muted: true,
        title: 'CONDUCT POLICIES',
        content: `ADULT SERVER

This server is 18+. That means that humor and conversation topics could be adult in nature at times.

NO BACKSEAT MODERATING

If someone is breaking a rule, open a ticket or report - don't try to enforce it yourself in public channels. It creates confusion, fuels drama, and rarely resolves the issue.

STAFF

IC staff members are civilians just like yourself and should be treated as such. Don't approach staff about Discord matters. Staff is chosen with discretion so the chosen members will deal with all Discord matters, and no individual will be removed from certain tickets whether involved or not.`,
        pageNumber: 5
    },
    // Page 6: Server Policies
    {
        id: 'rules-server-policies',
        type: 'rule-text-dense',
        title: 'SERVER POLICIES',
        content: `BAN EVASION AND ALTS

Do not use alt accounts to evade bans, spy on community spaces, or manipulate social interactions. Any use of alternate Discord or FiveM accounts must be disclosed to staff.

TICKET & CHANNEL USE & SPAM

Use tickets and channels for their intended purpose. Keep reports clear, respectful, and on-topic. Do not spam, meme, argue with staff, or submit joke reports - misuse of tickets may result in restrictions or disciplinary action.

NAMING POLICY

All character names must follow community standards. This means no slurs, impersonation, offensive references, sexual content, or troll material. We reserve the right to ask you to change your name or remove content at any time. Refusal to comply may result in removal from the community.

NO ADVERTISING

Do not promote or advertise other servers, Discords, or communities in public or private messages. Failure to comply may result in removal from the community.

INACTIVITY POLICY

Inactive players (30 days) are removed, and characters wiped after 60 days. Once removed players will have to re-whitelist again. Members with real-life obligations may appeal for exceptions.

STAFF IN ANOTHER SERVER

Any form of staff in a different server will not be allowed access here.

LEAVE DRAMA AT THE DOOR

This is a space for collaborative RP and fun. If you're bringing constant negativity, dragging OOC beef into public chat, or fueling arguments, expect to be removed. You don't have to be friends with everyone - but you do need to act like an adult.`,
        theme: 'neon',
        pageNumber: 6
    },
    // Page 7: Werencat Image
    {
        id: 'werencat-image',
        type: 'comic-panel',
        imageBg: '/assets/werencat.jpeg',
        pageNumber: 7
    },
    // Page 8: Server Rules
    {
        id: 'server-rules',
        type: 'rule-text-dense',
        title: 'SERVER RULES',
        content: `ROLEPLAY FIRST

This is an RP server. You must remain in character at all times and approach every situation with the intent to engage, react, and contribute to the scene.

If another player offers roleplay, you are expected to reciprocate - even if you're grinding, crafting, or committing a crime. There is no "busy farming" exception.

If you're offered roleplay from law enforcement during a criminal event, you must give something back. You don't have to surrender, but you do have to engage and vice versa.

No contacting staff about anything related to the server/whitelisting/applications!! Failure to adhere to this will result in application termination and or 3 day time out.

IN GAME HARASSMENT

This is a roleplay server - character conflict, betrayal, revenge, and long-term storylines are part of the experience. However, using RP as a cover for personal targeting or making another player feel unsafe is not acceptable.

HARASSMENT IN-SERVER INCLUDES:

\u2022 Repeatedly inserting into another player's RP without connection or purpose.\n\u2022 Using multiple characters to follow or provoke the same player.\n\u2022 Refusing to disengage from someone who has clearly attempted to exit the RP.\n\u2022 Pushing discomfort under the guise of "it's just RP" with no collaborative narrative.

THIS DOES NOT INCLUDE:

\u2022 Gang or criminal retaliation based on actual storylines.\n\u2022 Long-term rivalries, betrayals, or consequences from prior RP.\n\u2022 Intense or high-stakes RP when both players are actively engaged in the story.

IMPORTANT:

Any form of harassment that is deemed inappropriate will lead to consequences. If you're unsure whether something is crossing the line, open a ticket. Staff will review intent, frequency, justification, and whether OOC boundaries were respected. False or weaponized harassment reports used to avoid IC consequences may lead to disciplinary action.`,
        theme: 'neon',
        pageNumber: 8
    },
    // Page 9: Ryleen Image
    {
        id: 'ryleen-image',
        type: 'comic-panel',
        imageBg: '/assets/mrdevenjujureg.png',
        objectFit: 'contain',
        pageNumber: 9
    },
    // Page 10: Character & Conduct Rules
    {
        id: 'character-conduct',
        type: 'rule-text-dense',
        title: 'CHARACTER & CONDUCT',
        content: `NO BREAKING CHARACTER

You may not break character in the middle of a scene. If you believe a rule has been broken, complete the interaction and report it afterward through the proper channels.

The only exceptions are serious violations like hate speech, sexual content, or extreme harassment - which should be reported immediately.

Anything said towards your character IC should not be taken OOC (meaning being sworn at doesnt mean the person behind the screen needs to take offence) This does not mean using racist remarks and or bigotry terms are ok, they are still against server rules.

DO NOT say things like "nice RDM" or "failRP" in character! Do not complain about desync or mechanics while you're supposed to be playing your character.

NO BACKSEAT POLICING

Refrain from telling Law Enforcement how to do their jobs or what their SOPs state. They don't tell you how to do crime so don't go telling them how to do their jobs.

NO BACKSEAT DOCTORS

Refrain from telling EMS how to do their jobs. They are also here to RP so give them that chance. EMS have the most stressful and difficult job on the server, give them time to respond and treat them with respect AT ALL TIMES and vice versa.

NO BACKSEAT GANGS

Refrain from snide remarks towards gang members and negative remarks in conversation with other civilians if you are a PD officer and or EMS, they are not allowed to tell you how to police or EMS so don't go telling them how to gang.

NO EXPLOITING

If there is a mechanic that does not seem to be working as intended or that is over-tuned (e.g., emote spamming, use of emotes to hide actions or in combat, abusable economic rewards), report this to staff and stop using the mechanic.

Also, do not undertake actions which would exploit a situation including but not limited to: Combat logging.`,
        theme: 'cyan',
        pageNumber: 10
    },
    // Page 11: Exploiting & Game Mechanics
    {
        id: 'exploiting-mechanics',
        type: 'rule-text-dense',
        title: 'GAME MECHANICS & RULES',
        content: `EXPLOITING (CONTINUED)

Any form of money/item duplication, glitch abuse, or exploiting game mechanics to generate wealth is strictly forbidden and must be reported as soon as it is found.

Speed boosting and Glitch rolling is PROHIBITED. Any members caught doing this will be given an immediate 7-Day Timeout. The Third Sun Rises.

\u2022 Camping respawn points     \u2022 Major crime mechanics (Any heists including store robberies) 30 minutes before or after regularly scheduled restarts.

THEFT AND OPERATION OF GOVERNMENT VEHICLES IS PROHIBITED (PD/EMS)

Members caught in violation of this rule will be punished. PD/EMS Giving these vehicles to unauthorized personal will also result in punishment.

PD RESPONSE TO CRIME SCENES

If police do not respond to a crime scene\u2014including any heist, robbery, or criminal activity\u2014within a reasonable timeframe, criminals are free to leave or remain at their discretion. Criminals are not expected to wait indefinitely for law enforcement. Once the crime is committed, it is the responsibility of PD to respond and pursue\u2014not the criminals to stall or delay for engagement.

ABUSING GAME MECHANICS TO AVOID CONSEQUENCES OR BREAK IMMERSION

Sending any money, items or any goods between characters, i.e. Transferring items to your friends and deleting your character then getting everything back on a new character. This is an abuse of game mechanics, and to do this in any form including through other players is additionally blatant metagaming (Your characters don't know each other and can't.)

ABUSING RESPAWN MECHANICS

You must not use the respawn mechanic unless you are unreachable by PD, medical, or you are glitched. In addition, if you are glitched and police have come to the scene - turn yourself in. If downed at a scene, you need to alert for medical and not use the respawn mechanic if someone does not take you away.

VALUE YOUR LIFE (NVL)

Value your life and the lives of those your character would value (e.g., police with innocents/hostages, your friends, and acquaintances). This includes when a gun is placed at your back or when you are unarmed. You must surrender unless you are planning to RP out the full consequences of your actions for story reasons (e.g., planning to permadeath or other very serious permanent consequences like government job firing or permanent negative character drawbacks).`,
        theme: 'amber',
        pageNumber: 11
    },
    // Page 12: Elizabeth and Faustus Image
    {
        id: 'elizabethandfaustus-image',
        type: 'comic-panel',
        imageBg: '/assets/elizabethandfaust.jpeg',
        imagePosition: '85% center',
        pageLabelPos: 'bottom-left',
        pageNumber: 12
    },
    // Page 13: Metagaming, Stream Sniping, Powergaming
    {
        id: 'metagaming-powergaming',
        type: 'rule-text-dense',
        title: 'SERVER RULES (CONTINUED)',
        content: `NO METAGAMING

Metagaming is the act of using information your character has not gained in character. This could be information from streams, discord direct messages, or other methods of OOC information consumption.

This includes indirectly using the information. Just because you don't openly say the meta'd information out loud does not mean you haven't used it to take actions your character would not have otherwise to gain a favorable result.

*NB* This includes reading messages from a chat and then proceeding to do things or change character behaviour based on the message!

The use of any 3rd Party Communication Tools to discuss roleplay or server related content while the player is currently loaded into 3rd WorldRP server, is strictly prohibited and will result in serious consequences.

NO STREAM SNIPING OR CLOUT CHASING

Support streamers by subscribing, promoting their streams, and being a positive member of their community. Do not engage streamers in their stream chat while playing on the server!

Do not under any circumstance use a stream to gain information about a streamer's needs or location to join them on the server. Keep your interactions authentic and to your character.

NO POWERGAMING

Powergaming is when you force outcomes on another player without giving them a fair chance to react, respond, or contribute to the RP. It removes their agency and turns RP into a one-sided interaction. You must leave room for player response - even in hostile situations like robberies, kidnappings, or executions.

EXAMPLES OF POWERGAMING:

\u2022 Forcing a /me that assumes success ("/me slits throat and walks away")\n\u2022 Giving no warning or RP before killing a kidnapped player\n\u2022 Tying someone up, looting them, and shooting them all in one sentence`,
        theme: 'neon-blue',
        pageNumber: 13
    },
    // Page 14: Fail RP, Copyright, Events, Government Rules
    {
        id: 'failrp-government',
        type: 'rule-text-dense',
        title: 'ROLEPLAY STANDARDS',
        content: `NOT POWERGAMING:

If a player made repeated choices that led to consequences over time (e.g., scamming a gang and getting kidnapped), that's not powergaming - it's story-driven retaliation.

If you're controlling the outcome and not the roleplay - you're powergaming.

FAIL RP

Our goal is to maintain a high-quality RP experience for all players. If you openly distort the world for others with low RP quality or disrupt other players' RP experience by being abnormally obnoxious and not taking the server seriously, we reserve the right to remove you from the server.

Please ensure that your character's appearance aligns with the realistic and immersive standards we strive to uphold. Any attire deemed low effort or disruptive to the immersive environment of the server, such as those worn to show an obvious association with the FiveM Arena game mode, will not be tolerated.

Example: Combinations of face paint, surgical gloves, and goggles typically associated with FiveM arena. Cosplay and other bit outfits are tolerated. However, anyone whose whole identity is distorting the reality of others is not.

COPYRIGHT MUSIC

Do not endanger content creators by playing copyrighted music in public. Make every effort to protect content creators as it could jeopardize their livelihood.

SERVER EVENTS

When there is a server wide event happening (I.E. Concert, Mayoral Debate, Funeral etc) players are not allowed to intervene, or interrupt with these until the events have concluded. We can allow for a very serious RP story but it would need to be cleared by senior staff prior.

GOVERNMENT AND ALLOWLISTED JOB RULES

Government roles naturally hold power over criminals, but that power must be used fairly and with RP justification. Targeting specific players or groups repeatedly without solid in-character reasoning is Fail RP. Undermining or sabotaging departments for OOC reasons (e.g. rank disputes, mechanics, or admin decisions) is not allowed and will be treated as an OOC breach.

If you're upset OOC, open a ticket or just log off. Do not take it out in-game or use RP to air personal frustrations. IC conflict is fine. OOC sabotage is not.`,
        theme: 'neon',
        pageNumber: 14
    },
    // Page 15: Green Zones, Roleplay over Gunplay + Image fill
    {
        id: 'greenzones-gunplay',
        type: 'rule-text-image',
        imageBg: '/assets/ryleeenfaust.png',
        imagePosition: 'right center',
        objectFit: 'cover',
        showPageNumber: true,
        title: 'FINAL RULES',
        content: `GREEN ZONES

Repeated and/or low-effort kidnapping, robbing, or assaulting (with weapons) in and around government buildings is strictly prohibited. Example: Your friend gets captured for a chase, and you decide on a whim to break them out of custody in a hospital or police lobby.

ROLEPLAY OVER GUNPLAY

Players must prioritize roleplay interactions over combat first. Engaging in a shootout must be justified by proper in-character reasoning & build up. Random or unnecessary violence that disrupts roleplay is considered 'Gunplay Over Roleplay'. Players are expected to de-escalate situations through roleplay before resorting to weapons.`,
        popups: [
            { text: 'SAFE!', x: '50%', y: '45%', rotate: -5, color: 'blue', scale: 1.2 }
        ],
        pageNumber: 15
    },
    // Page 16: Caten Image
    {
        id: 'caten-image',
        type: 'comic-panel',
        imageBg: '/assets/catenbigendev.png',
        objectFit: 'contain',
        showPageNumber: true,
        pageNumber: 16
    },
    // Page 17: Conflict Rules Part 1
    {
        id: 'conflict-rules-1',
        type: 'rule-text-dense',
        title: 'Conflict Rules',
        content: `NO RANDOM DEATHMATCHING

No attacking or engaging in combat with another player without verbal RP interaction or being initiated into combat first. This includes with vehicles or drive-bys. You must give sufficient RP before shooting.


NO VEHICLE DEATHMATCHING

Do not purposefully use your vehicle as a weapon unless there is verbal RP or escalation. Just escaping in your vehicle or ramming with your vehicle (once, not multiple times) and if it is not valuing your life to do so. This does not apply to staged executions, just active or friendly initiated conflict.


CAMPING TELEPORTS & LADDERS

Do not camp exits where players have no counterplay. This includes elevators, housing doors, and ladders. You may not immediately hold on attack, or shoot someone the moment they exit one of these unless there is clear RP buildup and they have a fair chance to react, re-enter, or take cover.


GANG WARS

Gangs have an opportunity to hash it out in their specified areas (South Side) (Anything below Olympic Freeway).

PD will give sufficient time for gang war to complete before responding for evidence collection. (0-30min) Gangs are to vacate the area once PD arrive, failure will result in getting shot.

However, any Gang Wars or shots fired calls above Olympic Freeway will result in immediate PD response to protect citizens`,
        theme: 'conflict',
        pageNumber: 17
    },
    // Page 18: Conflict Rules Part 2
    {
        id: 'conflict-rules-2',
        type: 'rule-text-dense',
        title: 'Conflict Numbers Rules:',
        content: `GENERAL CONFLICT

Civilian and criminal conflicts are set to 5v5 (police are allowed to have what they feel is appropriate to the situation). There are situations where you being 5 cannot wait and or initiate solely on that logic as this does not apply for PD SOPs. You will adhere to their SOPs for each situation.) While this is the case. Criminals do have the option to engage with vehicles and vehicles can push into a conflict if there's a 2nd transport and even transport and save them. (This is for RP and serious consequences e.g A big warrant or a case built with RP: +10 months (Don't request a transport if you were caught for a store robbery)

TURF OR PROPERTY

This is a small area or section (a small set of buildings or an interior) that you have sufficiently claimed through RP. (Like "this is my club"). This does not include large areas or regions. (You can't claim all of The South Side as defenders' rights, as it's a huge section)

• If you are attacked on your turf or property and you have more than 5 people on your turf or property, your gang/group may defend yourselves. However, you may not allow people who were not on your turf at the time of the attack to engage over the numbers limit. Respawns will not extend the conflict or your turf or property numbers limits.

HEISTS

5 players max to a heist or crime mechanic. Police are limited to 8. Open Scene is subject to 5 v 5 scenario, PD = 5 players

ENDLESS CONFLICT

Every conflict has an expiry date. This is particularly true when it involves a group or gang towards another group/gang/individual.

If you continually engage in a conflict that results in your character/friends/groups/gangs harm without attempting to end the conflict, this is considered NVL.

In addition, if you continually harass/engage a group/gang/individual without giving them a reasonable option to end the conflict, this will be considered griefing and against the rules.`,
        popups: [
            { text: 'POW!', x: '30%', y: '40%', rotate: -15, color: 'red', scale: 1.1, delay: 0.8 },
            { text: 'BAM!', x: '70%', y: '65%', rotate: 10, color: 'yellow', scale: 1.3, delay: 1.2 }
        ],
        theme: 'conflict',
        pageNumber: 18
    },
    // Page 19: Post-Conflict & Medical Rules
    {
        id: 'conflict-rules-3',
        type: 'rule-text-dense',
        title: 'Post-Conflict Behavior',
        content: `CONFLICT COOLDOWN

If you continually engage in large mass shootouts (Gang Wars) with multiple casualties over a short period of time (within 30 – 60 minutes of one another), this will be considered Fail RP.

POCKET WIPING

Taking the majority of items from a person when they're down or through robbery mechanics is NVL unless there is a reason to do so (e.g., no consideration griefing).

Example: Taking someone's gun or some of their valuable goods is okay. Taking all of their water, food, and random common items is not.

NO FARMING, COP-BAITING OR LOOT BOXING PD AT TRAFFIC STOPS OR LOOTING THEIR GEAR WITHOUT REAL RP VALUE

(Looting protocol or a certain yourself or kidnapping a cop with genuine, non low-effort, RP purpose is ok.)

INJURY, DEATH AND MEDICALS

POST-CONFLICT BEHAVIOR

Your character is still alive and aware while downed. You must not use this time to:

Trash talk other players OOC-style (e.g., "get shit on")

Complain about server mechanics or "lag"

Stay completely silent or AFK unless ongoing RP is justified

If your character is injured or revived, you're expected to stay in character and respond accordingly. Treat it like part of the story - not a loading screen. This isn't Call of Duty. We don't do /killcams, post-death trash talk, or "1v1 me" energy. If your character's shot, stabbed, downed, or dead - treat it like a serious moment. Not a leaderboard reset.`,
        popups: [
            { text: 'WOW!', x: '80%', y: '30%', rotate: 25, color: 'pink', scale: 1.5, delay: 1.5 }
        ],
        theme: 'cyan',
        pageNumber: 19
    },
    // Page 20: Werenjuju Image
    {
        id: 'werenjuju-image',
        type: 'comic-panel',
        videoUrl: '/assets/jujuanwerner.mp4',
        objectFit: 'cover',
        muted: true,
        pageNumber: 20
    },
    // Page 21: NLR & RP Content Rules
    {
        id: 'nlr-rules',
        type: 'rule-text-dense',
        title: 'New Life Rule & Content Guidelines',
        content: `NEW LIFE RULE (NLR) - EXECUTIONS & MEMORY LOSS

If your character is executed (taken somewhere and intentionally downed as part of a planned RP scene), YOU MAY NOT remember specific identifying details about your attackers.

YOU MAY REMEMBER:

The general reason they were upset with you

How you were hurt (shot, stabbed, beaten, etc.)

How many people were involved

What they were wearing the vehicle(s) they used

YOU MAY NOT REMEMBER:

Their names or voices

Exact facial features or character models

License plates, tattoos, or accents

Anything that would lead you to immediately identify them.

Treat it like a traumatic memory: chaotic, partial, and unclear. If you were meant to live and tell the story, they would've left you conscious.

OCEAN DUMPING

Dumping someone's body in the ocean is allowed for story purposes. However, this must not be used as an attempt to force permadeath or memory loss.

If a player is ocean dumped, they are allowed to direct police to the location of where they were originally downed for evidence collection purposes.

In addition, ocean dumping vehicles with no prior roleplay is against the rules and is considered Fail RP.`,
        theme: 'conflict',
        pageNumber: 21
    },
    // Page 22: Government & Allow-Listed Jobs Rules
    {
        id: 'government-jobs-rules',
        type: 'rule-text-dense',
        title: 'Government & Allow-Listed Jobs',
        content: `GRAPHIC CONTENT

NO EROTIC ROLEPLAY - is strictly prohibited in all forms – including text, emotes, or animations.

BAD TASTE RP - You may not roleplay topics that mirror real-life trauma or suffering in ways that are distressing, out of place, or disruptive to the community. Cancer, terminal illness, or life-threatening diseases, pregnancy complications, including miscarriage or abortion RP, suicide, self-harm, or mental health crisis RP

GOVERNMENT OR ALLOW-LISTED JOBS (PD / EMS)

Server Staff reserve the right to investigate and take action against corruption roleplay that is deemed excessive, unrealistic or detrimental to the server's balance.

Corrupt players must accept the risk of being caught and face in-game consequences such as investigations, arrests or job termination.

Players in government, law enforcement, medical staff (including private practice) or high-ranking positions cannot provide false information for subpoenas or warrant requests due to a lower burden of proof present for the sake of expediency of RP.

Players with access to specialized sectors (For the purpose of their in-game job, law enforcement, medical staff etc) or end or subscription benefits (Server Subscription) are not be sold, bartered or given to players to allow them to have access to the purchasing items.

IF YOU HAVE AN ISSUE, OPEN A TICKET TO DISCUSS IT WITH SERVER STAFF RATHER THAN IMPACTING THE COMMUNITY MORALE NEGATIVELY.`,
        theme: 'amber',
        pageNumber: 22
    },
    // Page 23: Owners Reg Video
    {
        id: 'owners-reg-video',
        type: 'comic-panel',
        videoUrl: '/assets/ownersreg.mp4',
        objectFit: 'cover',
        muted: true,
        pageNumber: 23
    }
];

export const QUIZ_QUESTIONS = [
    {
        question: "You get into an argument with another player and they insult you. What should you do?",
        options: [
            "Insult them back, but harder.",
            "Shoot them immediately.",
            "Report it if it's OOC toxicity, otherwise handle it in RP.",
            "Doxx them on Discord."
        ],
        correct: 2,
        correctResponse: "Good. Keep it in the city, or report it if it crosses the line.",
        wrongResponse: "Wrong! We don't tolerate toxicity or rule breaks to settle scores."
    },
    {
        question: "You are downed in a shootout and wake up at the hospital (NLR). What do you remember?",
        options: [
            "Everything, I'm going back for revenge!",
            "The face of the guy who shot me.",
            "Only vague details like 'I was hurt', but no names or faces.",
            "I remember the license plate of their car."
        ],
        correct: 2,
        correctResponse: "Exactly. You're alive, but dazed. No revenge killing.",
        wrongResponse: "Fail RP! You can't remember your killer if you were executed or respawned."
    },
    {
        question: "What is 'Metagaming'?",
        options: [
            "Playing the game really well.",
            "Using OOC info (like Discord or Streams) in-character.",
            "Using high-tier weapons.",
            "Roleplaying as a superhero."
        ],
        correct: 1,
        correctResponse: "Spot on. Keep outside info OUT of the city.",
        wrongResponse: "Nope. Metagaming is using info your character shouldn't know."
    },
    {
        question: "Can you rob someone in a Police Station lobby?",
        options: [
            "Yes, if I'm fast.",
            "No, it's a Green Zone.",
            "Only if no cops are looking.",
            "Yes, if I have a hostage."
        ],
        correct: 1,
        correctResponse: "Correct. Gov buildings are Green Zones. Take it outside.",
        wrongResponse: "Are you crazy? That's a Green Zone. Forbidden."
    },
    {
        question: "You see a streamer playing on the server. What do you do?",
        options: [
            "Go find them and say 'Hi YouTube!'",
            "Watch their stream to find their location.",
            "Treat them like any other citizen and ignore the stream.",
            "Ask them for a shoutout."
        ],
        correct: 2,
        correctResponse: "Perfect. No clout chasing, no stream sniping.",
        wrongResponse: "Banned! Stream sniping or clout chasing is strictly prohibited."
    },
    {
        question: "What is VDM (Vehicle Deathmatch)?",
        options: [
            "Using a vehicle as a weapon to kill/injure without RP reason.",
            "Running over NPCs only.",
            "Shooting from a car.",
            "Crashing your car into a wall."
        ],
        correct: 0,
        correctResponse: "Exactly. Cars are for transport, not murder weapons.",
        wrongResponse: "Wrong. Randomly running people over is a bannable offense."
    },
    {
        question: "What is 'Fear RP'?",
        options: [
            "Fearing no one because I'm a gangster.",
            "Being afraid of the dark.",
            "Valuing your life when threatened (e.g., gun to your head).",
            "Screaming whenever I see a cop."
        ],
        correct: 2,
        correctResponse: "Correct. Use common sense. If you face a gun, you surrender.",
        wrongResponse: "Fail RP. You must value your life appropriately."
    },
    {
        question: "Can you use a mod menu or hacks?",
        options: [
            "Yes, if it makes the game fun.",
            "Only for teleporting.",
            "Never. Skipping the grind or cheating gets you banned.",
            "Only if admin isn't online."
        ],
        correct: 2,
        correctResponse: "Right. Zero tolerance for cheaters.",
        wrongResponse: "Instant Ban. Don't even think about it."
    },
    {
        question: "You want to rob a store. How many cops must be online?",
        options: [
            "Zero. Free money!",
            "At least 1.",
            "It depends on the specific crime rules (Minimum Requirements).",
            "It doesn't matter."
        ],
        correct: 2,
        correctResponse: "Good answer. Check the specific crime rules before starting.",
        wrongResponse: "Check the rules. Most robberies require a minimum cop count."
    },
    {
        question: "What are the three core pillars of the 3rd World RP server philosophy?",
        options: [
            "Cops & Robbers, Fast Cars, and Heists.",
            "Roleplay First, Respect Always, and Immersion Matters.",
            "Grinding, Crafting, and Combat Power.",
            "Be Toxic, Get Clout, and Win Every Gunfight."
        ],
        correct: 1,
        correctResponse: "Exactly. The three pillars of our community.",
        wrongResponse: "Wrong! We are here for Story and Respect, not just grinding."
    },
    {
        question: "What is the age requirement to play on the 3rd World RP server?",
        options: [
            "No requirement.",
            "13 years old.",
            "16 years old.",
            "18 years old."
        ],
        correct: 3,
        correctResponse: "Correct! We are an adult-only server.",
        wrongResponse: "Actually, you must be at least 18 years old to play here."
    },
    {
        question: "Roleplay First rule states that every interaction should contribute to the _____.",
        options: [
            "Leaderboard.",
            "Bank Account.",
            "Story.",
            "Stats."
        ],
        correct: 2,
        correctResponse: "Yes! Every interaction is a chapter in a bigger story.",
        wrongResponse: "Incorrect. We value the STORY above all else."
    },
    {
        question: "What consequence do players face for importing real-world bigotry into roleplay?",
        options: [
            "A verbal warning.",
            "Removal from the community.",
            "A 24-hour timeout.",
            "In-game fine."
        ],
        correct: 1,
        correctResponse: "Zero tolerance. Bigotry has no place in our world.",
        wrongResponse: "Zero tolerance. This results in instant removal."
    },
    {
        question: "Where is harassment prohibited besides inside the game?",
        options: [
            "Only in-game.",
            "Only on Reddit.",
            "Discord, DMs, social media, and other external platforms.",
            "Nowhere else."
        ],
        correct: 2,
        correctResponse: "Correct. Harassment is not tolerated anywhere.",
        wrongResponse: "Wrong. Harassment is forbidden both IC and OOC across all platforms."
    },
    {
        question: "What is the progression scale for discipline on the server?",
        options: [
            "Bans only.",
            "Warnings lead to timeouts, which lead to bans.",
            "Fines and then bans.",
            "Public shaming then timeouts."
        ],
        correct: 1,
        correctResponse: "Systemic and fair. We follow a progressive scale.",
        wrongResponse: "No, we follow a path: Warning → Timeout → Ban."
    },
    {
        question: "Staff reserves the right to remove players if external behavior creates a _____.",
        options: [
            "Funny meme.",
            "Profit.",
            "Hostile environment.",
            "New character."
        ],
        correct: 2,
        correctResponse: "Safety first. Hostility OOC leads to a ban IC.",
        wrongResponse: "Incorrect. A hostile environment OOC is grounds for removal."
    },
    {
        question: "Who reviews ban appeals involving staff members or owners to ensure fairness?",
        options: [
            "The same staff member.",
            "An independent party.",
            "The player's friends.",
            "Nobody."
        ],
        correct: 1,
        correctResponse: "Correct. We use independent review for fairness.",
        wrongResponse: "Incorrect. Independent parties review these for transparency."
    },
    {
        question: "If a player sees a rule being broken, what is the required procedure?",
        options: [
            "Enforce the rule yourself in chat.",
            "Shoot the player breaking the rule.",
            "Open a ticket or report the incident.",
            "Ignore it and complain on Twitter."
        ],
        correct: 2,
        correctResponse: "Let staff handle it. Open a ticket.",
        wrongResponse: "No backseat moderating! Open a ticket and let us handle it."
    },
    {
        question: "What is the server policy regarding 'alts' to evade bans?",
        options: [
            "It is allowed once.",
            "It is strictly prohibited and considered ban evasion.",
            "Alts are permitted for everyone.",
            "Only staff can have alts."
        ],
        correct: 1,
        correctResponse: "Correct. Ban evasion is a one-way ticket out.",
        wrongResponse: "Absolutely not. Using alts to evade bans is strictly prohibited."
    },
    {
        question: "Character names must specifically exclude _____.",
        options: [
            "Cool nouns.",
            "Slurs, impersonation, or offensive references.",
            "Last names.",
            "Common names."
        ],
        correct: 1,
        correctResponse: "Keep it clean and realistic.",
        wrongResponse: "Incorrect. Names must be free of slurs, impersonation, and offense."
    },
    {
        question: "After how many days of inactivity are players removed from the whitelist?",
        options: [
            "7 days.",
            "14 days.",
            "30 days.",
            "90 days."
        ],
        correct: 2,
        correctResponse: "Correct. 30 days keeps the whitelist fresh.",
        wrongResponse: "It's 30 days of inactivity before removal."
    },
    {
        question: "After how many days of inactivity are characters completely wiped?",
        options: [
            "30 days.",
            "60 days.",
            "100 days.",
            "Forever."
        ],
        correct: 1,
        correctResponse: "Correct. 60 days of inactivity results in a character wipe.",
        wrongResponse: "Actually, it's 60 days before characters are wiped."
    },
    {
        question: "Can you hold staff positions in another server while on 3rd World RP staff?",
        options: [
            "Yes.",
            "No.",
            "Only if it's a small server.",
            "Only for different games."
        ],
        correct: 1,
        correctResponse: "Conflict of interest. One staff role at a time.",
        wrongResponse: "No. Staff in other servers are not permitted here."
    },
    {
        question: "Penalty for contacting staff about the status of a whitelist application?",
        options: [
            "A speed boost.",
            "Faster review.",
            "Application termination or a 3-day timeout.",
            "A free car."
        ],
        correct: 2,
        correctResponse: "Patience is a virtue. Don't DM staff about your app.",
        wrongResponse: "Wrong! Contacting staff about apps leads to termination or timeouts."
    },
    {
        question: "Does 'In-Game Harassment' include storyline-based retaliation?",
        options: [
            "Yes.",
            "No.",
            "Only if it's a gang.",
            "Only if it's police."
        ],
        correct: 1,
        correctResponse: "Correct. Story-driven conflict is NOT harassment.",
        wrongResponse: "Incorrect. Legitimate storyline consequences are part of the game."
    },
    {
        question: "When can you break character in the middle of a scene?",
        options: [
            "When you lose a gunfight.",
            "When your car breaks down.",
            "Only for serious violations like hate speech or sexual content.",
            "Whenever you want."
        ],
        correct: 2,
        correctResponse: "Safety first. Only break character for extreme violations.",
        wrongResponse: "Never break character unless there's a serious violation occurring."
    },
    {
        question: "What phrases are strictly prohibited from being said 'In-Character' (IC)?",
        options: [
            "Stop right there!",
            "Put your hands up!",
            "Nice RDM or failRP.",
            "Call the police!"
        ],
        correct: 2,
        correctResponse: "Correct. Keep the OOC terms out of the city.",
        wrongResponse: "Those are OOC terms. Never use them IC."
    },
    {
        question: "What happens if a PD or EMS member gives a gov vehicle to unauthorized personnel?",
        options: [
            "They get promoted.",
            "They will be punished.",
            "Nothing, it's encouraged.",
            "The vehicle explodes."
        ],
        correct: 1,
        correctResponse: "Correct. Government assets are strictly for authorized use.",
        wrongResponse: "Incorrect. This is a prohibited action and results in punishment."
    },
    {
        question: "What is 'Pocket Wiping'?",
        options: [
            "Cleaning your clothes.",
            "Taking every item from a downed person with no RP reason.",
            "Checking your inventory.",
            "Giving items to a friend."
        ],
        correct: 1,
        correctResponse: "Correct. Taking everything for no reason is griefing.",
        wrongResponse: "Wrong! Pocket wiping is taking everything with zero RP justification."
    }
];
