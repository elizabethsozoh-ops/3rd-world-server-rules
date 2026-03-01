
export const RULEBOOK_CONTENT = [
    // Page 1 (LEFT): Community Philosophy & Core Values
    {
        id: 'real-rules-start',
        type: 'rule-text-dense',
        title: '3rd World RP – Community & Server Rules',
        content: `Welcome to 3rd World RP. This is not a casual "cops and robbers" playground — it is a serious roleplay community built for players who value immersion, storytelling, and respect.

Every rule in this document exists to protect the integrity of our RP environment and the safety of our members.

⚠️ If you are here to troll, exploit mechanics, or treat this server like an arcade game, you will not last long.

OUR PHILOSOPHY IS SIMPLE:

🎭 Roleplay First – Every interaction should contribute to the story.

🤝 Respect Always – Out-of-character harassment, toxicity, or hate speech will never be tolerated.

🌍 Immersion Matters – Treat the world as real, value your character's life, and respect the RP of others.`,
        theme: 'vibe',
        section: '3RD WORLD RP – COMMUNITY & SERVER RULES',
        sectionColor: 'white',
        isFirstPageOfSection: true,
        pageNumber: 2,
        enhancedVisuals: true
    },
    // Page 3: The Squad Video
    {
        id: 'comic-break-philosophy',
        type: 'comic-panel',
        videoUrl: '/assets/allthree.mp4',
        muted: true,
        loop: true,
        objectFit: 'contain',
        electricEffect: true,
        pageNumber: 3
    },
    // Page 4: Community Rules - Hate Speech & Harassment
    {
        id: 'community-rules-hate-harassment',
        type: 'rule-text-dense',
        title: '3RD WORLD COMMUNITY RULES',
        content: `NO HATE SPEECH OR REAL-WORLD BIGOTRY

This is a roleplay community, not a space for real-world politics or prejudice. Any form of racism, sexism, homophobia, transphobia, religious intolerance or similar bigotry will result in immediate removal. This includes real-world hate speech (in OR out of character). Roleplay cannot be used to excuse hate. You can play a villain without importing real-world bigotry. Violators will be removed from the community.

NO HARASSMENT

Harassment outside of the game - whether through Discord, DMs, social media, or other platforms - is NOT tolerated. This includes targeted insults, sexual harassment, threats, stalking, or any behavior that causes real-world discomfort, intimidation, or harm. Unwanted attention after clear boundaries have been set is prohibited.`,
        theme: 'neon',
        section: '3RD WORLD COMMUNITY RULES',
        sectionColor: 'cyan',
        isFirstPageOfSection: true,
        pageNumber: 4,
        enhancedVisuals: true
    },
    // Page 5: Founders Intro - NOW WITH IMPACT
    {
        id: 'founders-image',
        type: 'comic-panel',
        videoUrl: '/assets/bustedreg.mp4',
        muted: true,
        loop: true,
        objectFit: 'contain',
        electricEffect: true,
        pageNumber: 5
    },
    // Page 6: Progressive Discipline & OOC Conduct Examples
    {
        id: 'rules-conduct-discipline',
        type: 'rule-text-dense',
        content: `PROGRESSIVE DISCIPLINE

📊 Punishments scale with severity:

Warnings → Timeouts → Bans

Players know what to expect. Fair and transparent enforcement.

EXAMPLES OF UNACCEPTABLE OOC CONDUCT

🚫 The following will result in disciplinary action:

• Sending repeated messages after being blocked or told to stop
• Harassing someone over RP events via Discord or social media
• Group chats formed to mock, harass, or doxx community members
• Sharing personal information or screenshots without consent

💡 If you feel unsafe or targeted outside the game, please open a ticket with context. We take real-world harassment seriously.`,
        theme: 'neon',
        section: '3RD WORLD COMMUNITY RULES',
        sectionColor: 'cyan',
        isFirstPageOfSection: false,
        pageNumber: 6,
        enhancedVisuals: true
    },
    // Page 6.5: Off-Server Conduct (NEW PAGE)
    {
        id: 'rules-off-server-conduct',
        type: 'rule-text-dense',
        videoUrl: '/assets/mrdevcorrect.mp4',
        muted: true,
        loop: true,
        content: `OFF-SERVER CONDUCT

We are not here to mediate friend group disputes or personal fallouts.

⚠️ HOWEVER: If your off-server conduct creates a hostile environment or threatens the well-being of another player, we reserve the right to remove you from the community, regardless of where the behavior occurred.

This includes, but is not limited to, harassment, doxxing, threats, targeted smear campaigns, or behavior that erodes trust or safety.`,
        theme: 'neon',
        section: '3RD WORLD COMMUNITY RULES',
        sectionColor: 'cyan',
        isFirstPageOfSection: false,
        pageNumber: 6.5,
        enhancedVisuals: true
    },
    // Page 7: Community Toxicity & Ban Appeals
    {
        id: 'rules-toxicity-appeals',
        type: 'rule-text-dense',
        content: `COMMUNITY TOXICITY

✓ Criticism is welcome. ✗ Toxicity is not.

You're free to share concerns or disagreements - but abuse, disrespect, harassment, or targeted negativity toward the community, server, or staff will NOT be tolerated.

ACCOUNTABILITY MATTERS: We take accountability seriously. Reports involving staff (even owners) are reviewed independently. This includes ban disputes.

BAN APPEALS

If you're banned and no longer able to post in Discord, you can appeal your ban through a 3rd party.

⛔ EXCEPTIONS (No Appeals): Using 3rd party software/cheats • Harassment or toxicity • Determined to be a risk to the community.

We understand that mistakes happen - staff are human. Ban appeals are reviewed by someone other than the original issuing staff member to ensure fairness.`,
        theme: 'neon',
        section: '3RD WORLD COMMUNITY RULES',
        sectionColor: 'cyan',
        isFirstPageOfSection: false,
        pageNumber: 7,
        enhancedVisuals: true
    },
    // Page 8: Conduct Policies (with video)
    {
        id: 'rules-policies',
        type: 'rule-text-dense',
        theme: 'neon',
        section: '3RD WORLD COMMUNITY RULES',
        sectionColor: 'cyan',
        isFirstPageOfSection: false,
        content: `ADULT SERVER (18+)

This server is 18+. Humor and conversation topics may be adult in nature.

NO BACKSEAT MODERATING

⚠️ If someone is breaking a rule: ✓ Open a ticket or report
Backseat moderation creates confusion, fuels drama, and rarely resolves the issue.

STAFF

IC staff members are civilians just like yourself and should be treated as such. Don't approach staff about Discord matters. Staff is chosen with discretion so the chosen members will deal with all Discord matters, and no individual will be removed from certain tickets whether involved or not.`,
        pageNumber: 8,
        enhancedVisuals: true
    },
    // Page 9: Server Policies Part 1 (Moved from 11)
    {
        id: 'rules-server-policies-1',
        type: 'rule-text-dense',
        content: `BAN EVASION AND ALTS

Do not use alt accounts to evade bans, spy on community spaces, or manipulate social interactions. Any use of alternate Discord or FiveM accounts must be disclosed to staff.

TICKET & CHANNEL USE & SPAM

Use tickets and channels for their intended purpose. Keep reports clear, respectful, and on - topic. Do not spam, meme, argue with staff, or submit joke reports - misuse of tickets may result in restrictions or disciplinary action.

NAMING POLICY

All character names must follow community standards. This means no slurs, impersonation, offensive references, sexual content, or troll material. We reserve the right to ask you to change your name or remove content at any time. Refusal to comply may result in removal from the community.`,
        theme: 'neon',
        section: '3RD WORLD COMMUNITY RULES',
        sectionColor: 'cyan',
        isFirstPageOfSection: false,
        pageNumber: 9,
        enhancedVisuals: true
    },
    // Page 10: Content Image (Tick-Tock)
    {
        id: 'content-image-page',
        type: 'comic-panel',
        imageBg: '/assets/rules/content.png',
        objectFit: 'cover',
        scale: 1.15,
        popups: [
            { type: 'bomb', x: '50%', y: '32%', scale: 1.2, delay: 0.5 }
        ],
        pageNumber: 10
    },
    // Page 11: Server Policies Part 2 (Moved from 12)
    {
        id: 'rules-server-policies-2',
        type: 'rule-text-dense',
        content: `NO ADVERTISING

Do not promote or advertise other servers, Discords, or communities in public or private messages. Failure to comply may result in removal from the community.

INACTIVITY POLICY

Inactive players (30 days) are removed, and characters wiped after 60 days. Once removed players will have to re - whitelist again. Members with real - life obligations may appeal for exceptions.

STAFF IN ANOTHER SERVER

Any form of staff in a different server will not be allowed access here.

LEAVE DRAMA AT THE DOOR - This is a space for collaborative RP and fun. If you're bringing constant negativity, dragging OOC beef into public chat, or fueling arguments, expect to be removed. You don't have to be friends with everyone - but you do need to act like an adult.`,
        theme: 'neon',
        section: '3RD WORLD COMMUNITY RULES',
        sectionColor: 'cyan',
        isFirstPageOfSection: false,
        pageNumber: 11,
        enhancedVisuals: true
    },
    // Page 12: Werencat Image (Moved from 13)
    {
        id: 'werencat-image',
        type: 'comic-panel',
        videoUrl: '/assets/karreg.mp4',
        muted: true,
        loop: true,
        objectFit: 'contain',
        pageNumber: 12
    },
    // Page 13: Server Rules – Roleplay First (Section 3 Start)
    {
        id: 'rules-roleplay-first',
        type: 'rule-text-dense',
        title: 'SERVER RULES',
        content: `ROLEPLAY FIRST

This is an RP server. You must remain in character at all times and approach every situation with the intent to engage, react, and contribute to the scene.

If another player offers roleplay, you are expected to reciprocate - even if you're grinding, crafting, or committing a crime. There is no "busy farming" exception.

If you're offered roleplay from law enforcement during a criminal event, you must give something back. You don't have to surrender, but you do have to engage and vice versa.

NO CONTACTING STAFF about anything related to the server/whitelisting/applications!! Failure to adhere to this will result in application termination and or 3 day time out.

IN GAME HARASSMENT

This is a roleplay server - character conflict, betrayal, revenge, and long-term storylines are part of the experience. However, using RP as a cover for personal targeting or making another player feel unsafe is not acceptable.`,
        theme: 'purple',
        section: 'SERVER RULES',
        sectionColor: 'purple',
        isFirstPageOfSection: true,
        pageNumber: 13,
        enhancedVisuals: true
    },
    // Page 14: In-Game Harassment
    {
        id: 'rules-harassment-1',
        type: 'rule-text-dense',
        theme: 'purple',
        section: 'SERVER RULES',
        sectionColor: 'purple',
        isFirstPageOfSection: false,
        content: `IN GAME HARASSMENT

This is a roleplay server - character conflict, betrayal, revenge, and long-term storylines are part of the experience. However, using RP as a cover for personal targeting or making another player feel unsafe is not acceptable.

HARASSMENT IN-SERVER INCLUDES:

• Repeatedly inserting into another player's RP without connection or purpose.
• Using multiple characters to follow or provoke the same player.
• Refusing to disengage from someone who has clearly attempted to exit the RP.
• Pushing discomfort under the guise of "it's just RP" with no collaborative narrative.

THIS DOES NOT INCLUDE:

• Gang or criminal retaliation based on actual storylines.
• Long-term rivalries, betrayals, or consequences from prior RP.
• Intense or high-stakes RP when both players are actively engaged in the story.

Any form of harassment that is deemed inappropriate will lead to consequences.
If you're unsure whether something is crossing the line, open a ticket. Staff will review intent, frequency, justification, and whether OOC boundaries were respected.

FALSE REPORTS = CONSEQUENCES

False or weaponized harassment reports used to avoid IC consequences may lead to disciplinary action.`,
        pageNumber: 14,
        enhancedVisuals: true,
    },



    // Page 15: Ryleen Image
    {
        id: 'ryleen-image',
        type: 'comic-panel',
        videoUrl: '/assets/sexymans.mp4',
        muted: true,
        loop: true,
        objectFit: 'contain',
        pageLabelPos: 'bottom-right',
        pageNumber: 16
    },
    // Page 16: Character & Conduct Rules Part 1
    {
        id: 'character-conduct-1',
        type: 'rule-text-dense',
        theme: 'purple',
        section: 'SERVER RULES',
        sectionColor: 'purple',
        isFirstPageOfSection: false,
        content: `FALSE REPORTS = CONSEQUENCES

False or weaponized harassment reports used to avoid IC consequences may lead to disciplinary action.

NO BREAKING CHARACTER

You may not break character in the middle of a scene. If you believe a rule has been broken, complete the interaction and report it afterward through the proper channels.

The only exceptions are serious violations like hate speech, sexual content, or extreme harassment - which should be reported immediately.

⚠️ IMPORTANT

Anything said towards your character IC should not be taken OOC (meaning being sworn at doesnt mean the person behind the screen needs to take offence). This does not mean using racist remarks and or bigotry terms are ok, they are still against server rules.

DO NOT say things like "nice RDM" or "failRP" in character! Do not complain about desync or mechanics while you're supposed to be playing your character.`,
        pageNumber: 16,
        enhancedVisuals: true
    },
    // Page 17: Interactive - Spirit's Tic-Tac-Toe
    {
        id: 'spirit-tictactoe',
        type: 'interactive',
        interactiveType: 'spirit-tictactoe',
        pageNumber: 17
    },
    // Page 18: Character & Conduct Rules Part 2
    {
        id: 'character-conduct-2',
        type: 'rule-text-dense',
        theme: 'purple',
        section: 'SERVER RULES',
        sectionColor: 'purple',
        isFirstPageOfSection: false,
        content: `NO BACKSEAT POLICING

Refrain from telling Law Enforcement how to do their jobs or what their SOPs state. They don't tell you how to do crime so don't go telling them how to do their jobs.

NO BACKSEAT DOCTORS

Refrain from telling EMS how to do their jobs. They are also here to RP so give them that chance. EMS have the most stressful and difficult job on the server, give them time to respond and treat them with respect AT ALL TIMES and vice versa.

NO BACKSEAT GANGS

Refrain from snide remarks towards gang members and negative remarks in conversation with other civilians if you are a PD officer and or EMS, they are not allowed to tell you how to police or EMS so don't go telling them how to gang.`,
        pageNumber: 18,
        enhancedVisuals: true
    },
    // Page 19: Exploiting & Game Mechanics Part 1
    {
        id: 'exploiting-mechanics-1',
        type: 'rule-text-dense',
        theme: 'purple',
        section: 'SERVER RULES',
        sectionColor: 'purple',
        isFirstPageOfSection: false,
        content: `NO EXPLOITING

If there is a mechanic that does not seem to be working as intended or that is over tuned (e.g., emote spamming, use of emotes to hide actions or in combat, abusable economic rewards), report this to staff and stop using this mechanic.

Also, do not undertake actions which would exploit a situation including but not limited to:

• Combat logging

• Any form of money/item duplication, glitch abuse, or exploiting game mechanics to generate wealth is strictly forbidden and must be reported as soon as it is found.

• Speed boosting and Glitch rolling is PROHIBITED. Any members caught doing this will be given an immediate 7-Day Timeout. The Third Sun Rises

• Camping respawn points

• Major crime mechanics (Any heists including store robberies) 30 minutes before or after regularly scheduled restarts.

THEFT AND OPERATION OF GOVERNMENT VEHICLES IS PROHIBITED (PD/EMS)

Members caught in violation of this rule will be punished. PD/EMS Giving these vehicles to unauthorized personal will also result in punishment.`,
        pageNumber: 19,
        enhancedVisuals: true
    },
    // Page 20: Game Mechanics Part 2
    {
        id: 'exploiting-mechanics-2',
        type: 'rule-text-dense',
        theme: 'purple',
        section: 'SERVER RULES',
        sectionColor: 'purple',
        isFirstPageOfSection: false,
        content: `PD RESPONSE TO CRIME SCENES

If police do not respond to a crime scene\u2014including any heist, robbery, or criminal activity\u2014within a reasonable timeframe, criminals are free to leave or remain at their discretion. Criminals are not expected to wait indefinitely for law enforcement. Once the crime is committed, it is the responsibility of PD to respond and pursue\u2014not the criminals to stall or delay for engagement.

ABUSING GAME MECHANICS TO AVOID CONSEQUENCES OR BREAK IMMERSION

Sending any money, items or any goods between characters, i.e. Transferring items to your friends and deleting your character then getting everything back on a new character. This is an abuse of game mechanics, and to do this in any form including through other players is additionally blatant metagaming (Your characters don't know each other and can't.)

ABUSING RESPAWN MECHANICS

You must not use the respawn mechanic unless you are unreachable by PD, medical, or you are glitched. In addition, if you are glitched and police have come to the scene - turn yourself in. If downed at a scene, you need to alert for medical and not use the respawn mechanic if someone does not take you away.`,
        pageNumber: 20,
        enhancedVisuals: true
    },
    // Page 22: NVL & Metagaming Part 1
    {
        id: 'exploiting-mechanics-3',
        type: 'rule-text-dense',
        theme: 'purple',
        section: 'SERVER RULES',
        sectionColor: 'purple',
        isFirstPageOfSection: false,
        content: `VALUE YOUR LIFE (NVL)

Value your life and the lives of those your character would value (e.g., police with innocents/hostages, your friends, and acquaintances).

This includes when a gun is placed at your back or when you are unarmed. You must surrender unless you are planning to RP out the full consequences of your actions for story reasons (e.g., planning to permadeath or other very serious permanent consequences like government job firing or permanent negative character drawbacks).

NO METAGAMING

Metagaming is the act of using information your character has not gained in character. This could be information from streams, discord direct messages, or other methods of OOC information consumption.

This includes indirectly using the information. Just because you don't openly say the meta'd information out loud does not mean you haven't used it to take actions your character would not have otherwise to gain a favorable result.

*NB* This includes reading messages from a chat and then proceeding to do things or change character behaviour based on the message!

The use of any 3rd Party Communication Tools to discuss roleplay or server related content while the player is currently loaded into 3rd WorldRP server, is strictly prohibited and will result in serious consequences.`,
        pageNumber: 22,
        enhancedVisuals: true
    },
    // Page 23: Elizabeth and Faustus Image
    {
        id: 'elizabethandfaustus-image',
        type: 'comic-panel',
        videoUrl: '/assets/elizabetreg.mp4',
        muted: true,
        loop: true,
        objectFit: 'contain',
        imagePosition: '85% center',
        pageLabelPos: 'bottom-right',
        pageNumber: 23
    },
    // Page 24: Metagaming Continued, Stream Sniping & Powergaming Intro
    {
        id: 'metagaming-powergaming-1',
        type: 'rule-text-dense',
        theme: 'purple',
        section: 'SERVER RULES',
        sectionColor: 'purple',
        isFirstPageOfSection: false,
        content: `NO STREAM SNIPING OR CLOUT CHASING

Support streamers by subscribing, promoting their streams, and being a positive member of their community. Do not engage streamers in their stream chat while playing on the server!

Do not under any circumstance use a stream to gain information about a streamer's needs or location to join them on the server. Keep your interactions authentic and to your character.

NO POWERGAMING

Powergaming is when you force outcomes on another player without giving them a fair chance to react, respond or contribute to the RP. It removes their agency and turns RP into a one-sided interaction. You must leave room for player response - even in hostile situations like robberies, kidnappings, or executions.

EXAMPLES OF POWERGAMING:

• Forcing a /me that assumes success ("/me slits throat and walks away")
• Giving no warning or RP before killing a kidnapped player
• Tying someone up, looting them, and shooting them all in one sentence

NOT POWERGAMING:

If a player made repeated choices that led to consequences over time (e.g., scamming a gang and getting kidnapped), that's not powergaming - it's story-driven retaliation.

If you're controlling the outcome and not the roleplay - you're powergaming.`,
        pageNumber: 25,
        enhancedVisuals: true
    },
    // Page 26: Fail RP & Standards Part 1
    {
        id: 'failrp-government-1',
        type: 'rule-text-dense',
        theme: 'purple',
        section: 'SERVER RULES',
        sectionColor: 'purple',
        isFirstPageOfSection: false,
        content: `FAIL RP

Our goal is to maintain a high-quality RP experience for all players. If you openly distort the world for others with low RP quality or disrupt other players' RP experience by being abnormally obnoxious and not taking the server seriously, we reserve the right to remove you from the server.

Please ensure that your character's appearance aligns with the realistic and immersive standards we strive to uphold. Any attire deemed low effort or disruptive to the immersive environment of the server, such as those worn to show an obvious association with the FiveM Arena game mode, will not be tolerated.

Example: Combinations of face paint, surgical gloves, and goggles typically associated with FiveM arena. Cosplay and other bit outfits are tolerated. However, anyone whose whole identity is distorting the reality of others is not.

SERVER EVENTS

When there is a server wide event happening (I.E. Concert, Mayoral Debate, Funeral etc) players are not allowed to intervene, or interrupt with these until the events have concluded.

We can allow for a very serious RP story but it would need to be cleared by senior staff prior. Devs, Staff, and Players spend too much time and effort on these events to have them ruined by low-effort means.`,
        pageNumber: 26,
        enhancedVisuals: true
    },
    // Page 27: Server Events & Government Rules
    {
        id: 'failrp-government-2',
        type: 'rule-text-dense',
        theme: 'purple',
        section: 'SERVER RULES',
        sectionColor: 'purple',
        isFirstPageOfSection: false,
        content: `COPYRIGHT MUSIC

Do not endanger content creators by playing copyrighted music in public. Make every effort to protect content creators as it could jeopardize their livelihood.

GOVERNMENT AND ALLOWLISTED JOB RULES

Government roles naturally hold power over criminals, but that power must be used fairly and with RP justification. Targeting specific players or groups repeatedly without solid in-character reasoning is Fail RP.

Undermining or sabotaging departments for OOC reasons (e.g. rank disputes, mechanics, or admin decisions) is not allowed and will be treated as an OOC breach.


If you're upset OOC, open a ticket or just log off. Do not take it out in-game or use RP to air personal frustrations.
✓ IC conflict is fine
✗ OOC sabotage is not

GREEN ZONES

Repeated and/or low-effort kidnapping, robbing, or assaulting (with weapons) in and around government buildings is strictly prohibited. Example: Your friend gets captured for a chase, and you decide on a whim to break them out of custody in a hospital or police lobby.`,
        pageNumber: 27,
        enhancedVisuals: true
    },
    // Page 28: Roleplay over Gunplay
    {
        id: 'greenzones-gunplay',
        type: 'rule-text-dense',
        showPageNumber: true,
        videoUrl: '/assets/dogyassreg.mp4',
        muted: true,
        loop: true,
        noAudio: true,
        objectFit: 'cover',
        theme: 'purple',
        section: 'SERVER RULES',
        sectionColor: 'purple',
        isFirstPageOfSection: false,
        content: `ROLEPLAY OVER GUNPLAY

Players must prioritize roleplay interactions over combat first. Engaging in a shootout must be justified by proper in-character reasoning & build up. Random or unnecessary violence that disrupts roleplay is considered 'Gunplay Over Roleplay'. Players are expected to de-escalate situations through roleplay before resorting to weapons.`,
        pageNumber: 28
    },
    // Page 27: Caten Image
    {
        id: 'caten-image',
        type: 'comic-panel',
        videoUrl: '/assets/catenmelly.mp4',
        muted: true,
        loop: true,
        objectFit: 'contain',
        showPageNumber: true,
        pageNumber: 27
    },
    // Page 27.5: Conflict Rules Part 1
    {
        id: 'conflict-rules-1',
        type: 'rule-text-dense',
        title: 'Conflict Rules',
        section: 'CONFLICT RULES',
        sectionColor: 'red',
        isFirstPageOfSection: true,
        content: `NO RANDOM DEATHMATCHING

No attacking or engaging in combat with another player without verbal RP interaction or being initiated into combat first. This includes with vehicles or drive-bys. You must give sufficient RP before shooting.


NO VEHICLE DEATHMATCHING

Do not purposefully use your vehicle as a weapon unless there is verbal RP or escalation. Just escaping in your vehicle or ramming with your vehicle (once, not multiple times) and if it is not valuing your life to do so. This does not apply to staged executions, just active or friendly initiated conflict.


CAMPING TELEPORTS & LADDERS

Do not camp exits where players have no counterplay. This includes elevators, housing doors, and ladders. You may not immediately hold on attack, or shoot someone the moment they exit one of these unless there is clear RP buildup and they have a fair chance to react, re-enter, or take cover.`,
        theme: 'conflict',
        pageNumber: 28
    },
    // Page 28: Interactive - The Forbidden Page
    {
        id: 'forbidden-page',
        type: 'interactive',
        interactiveType: 'forbidden-page',
        pageNumber: 27.5
    },
    // Page 29: Conflict Numbers Part 1
    {
        id: 'conflict-rules-2a',
        type: 'rule-text-dense',
        section: 'CONFLICT RULES',
        sectionColor: 'red',
        isFirstPageOfSection: false,
        content: `GANG WARS

Gangs are given the opportunity to hash it out in their specified areas (South Side) (Anything below Olympic Freeway).

PD will give sufficient time for gang war to complete before responding for evidence collection. (0-30min) Gangs are to vacate the area once PD arrive, failure will result in getting shot.

However, any Gang Wars or shots fired calls above Olympic Freeway will result in immediate PD response to protect citizens.

GENERAL CONFLICT

Civilian and criminal conflicts are set to 5v5 (police are allowed to have what they feel is appropriate to the situation). There are situations where you being 5 cannot wait and or initiate solely on that logic as this does not apply for PD SOPs. You will adhere to their SOPs for each situation.)

While this is the case, Criminals do have the option to engage with vehicles and vehicles can push into a conflict if there's a 2nd transport and even transport and save them. (This is for RP and serious consequences e.g A big warrant or a case built with RP: +10 months (Don't request a transport if you were caught for a store robbery)`,
        theme: 'conflict',
        pageNumber: 29,
        enhancedVisuals: true
    },
    // Page 30: Conflict Numbers Part 2
    {
        id: 'conflict-rules-2b',
        type: 'rule-text-dense',
        section: 'CONFLICT RULES',
        sectionColor: 'red',
        isFirstPageOfSection: false,
        content: `TURF OR PROPERTY

This is a small area or section (a small set of buildings or an interior) that you have sufficiently claimed through RP. (Like "this is my club"). This does not include large areas or regions. (You can't claim all of The South Side as defenders' rights, as it's a huge section)

• If you are attacked on your turf or property and you have more than 5 people on your turf or property, your gang/group may defend yourselves. However, you may not allow people who were not on your turf at the time of the attack to engage over the numbers limit. Respawns will not extend the conflict or your turf or property numbers limits.

HEISTS

5 players max to a heist or crime mechanic. Police are limited to 8. Open Scene is subject to the scenario. Main Bank = 6 players`,
        theme: 'conflict',
        pageNumber: 30,
        enhancedVisuals: true
    },
    // Page 31: Post-Conflict Part 1
    {
        id: 'conflict-rules-3a',
        type: 'rule-text-dense',
        section: 'CONFLICT RULES',
        sectionColor: 'red',
        isFirstPageOfSection: false,
        content: `ENDLESS CONFLICT

Every conflict has an expiry date. This is particularly true when it involves a group or gang towards another group/gang/individual.

If you continually engage in a conflict that results in your character/friends/groups/gangs harm without attempting to end the conflict, this is considered NVL.

In addition, if you continually harass/engage a group/gang/individual without giving them a reasonable option to end the conflict, this will be considered griefing and against the rules.

CONFLICT COOLDOWN

If you continually engage in large mass shootouts (Gang Wars) with multiple casualties over a short period of time (within 30 – 60 minutes of one another), this will be considered Fail RP.`,
        theme: 'conflict',
        pageNumber: 31,
        enhancedVisuals: true
    },
    // Page 32: Werenjuju Image
    {
        id: 'werenjuju-image',
        type: 'comic-panel',
        videoUrl: '/assets/jujuanwerner.mp4',
        objectFit: 'contain',
        muted: true,
        loop: true,
        electricEffect: true,
        pageNumber: 32
    },
    // Page 33: Injury & Death Behavior
    {
        id: 'conflict-rules-3b',
        type: 'rule-text-dense',
        section: 'CONFLICT RULES',
        sectionColor: 'red',
        isFirstPageOfSection: false,
        content: `POCKET WIPING

Taking the majority of items from a person when they're down or through robbery mechanics is NVL unless there is a reason to do so (e.g., no consideration griefing).

Example: Taking someone's gun or some of their valuable goods is okay. Taking all of their water, food, and random common items is not.

NO FARMING, COP-BAITING OR LOOT BOXING PD AT TRAFFIC STOPS OR LOOTING THEIR GEAR WITHOUT REAL RP VALUE

(Looting mid shootout to sustain yourself or kidnapping a cop with genuine, non low-effort, RP purpose is ok.)`,
        theme: 'conflict',
        pageNumber: 33,
        enhancedVisuals: true
    },
    // Page 34: New Life Rule Part 1
    {
        id: 'nlr-rules-1',
        type: 'rule-text-dense',
        section: 'CONFLICT RULES',
        sectionColor: 'red',
        isFirstPageOfSection: false,
        content: `INJURY, DEATH AND MEDICALS



POST-CONFLICT BEHAVIOR

Your character is still alive and aware while downed. You must not use this time to:

Trash talk other players OOC-style (e.g., "get shit on")

Complain about server mechanics or "lag"

Stay completely silent or AFK unless unconscious RP is justified

If your character is injured or revived, you're expected to stay in character and respond accordingly. Treat it like part of the story - not a loading screen. This isn't Call of Duty. We don't do /killcams, post-death trash talk, or "1v1 me" energy. If your character's shot, stabbed, downed, or dead - treat it like a serious moment. Not a leaderboard reset.`,
        theme: 'conflict',
        pageNumber: 34,
        enhancedVisuals: true
    },
    // Page 37: Fok Video
    {
        id: 'blank-page-35',
        type: 'comic-panel',
        videoUrl: '/assets/fok.mp4',
        muted: true,
        loop: true,
        objectFit: 'contain',
        pageNumber: 37
    },
    // Page 36: Ocean Dumping Rules
    {
        id: 'nlr-rules-2',
        type: 'rule-text-dense',
        content: `NEW LIFE RULE - EXECUTIONS & MEMORY LOSS

If your character is executed (taken somewhere and intentionally downed as part of a planned RP scene), YOU MAY NOT remember specific identifying details about your attackers.

✓ YOU MAY REMEMBER:

- The general reason they were upset with you

- How you were hurt (shot, stabbed, beaten, etc.)

- How many people were involved

- What they were wearing the vehicle(s) they used

✗ YOU MAY NOT REMEMBER:

- Their names or voices

- Exact facial features or character models

- License plates, tattoos, or accents

- Anything that would lead you to immediately identify them

⚠️ Treat it like a traumatic memory: chaotic, partial, and unclear. If you were meant to live and tell the story, they would've left you conscious.`,
        theme: 'conflict',
        pageNumber: 36,
        enhancedVisuals: true
    },
    // Page 39: Ocean Dumping & Graphic Content Rules
    {
        id: 'ocean-dumping-graphic-content',
        type: 'rule-text-dense',
        content: `OCEAN DUMPING

Dumping someone's body in the ocean is allowed for story purposes. However, this must not be used as an attempt to force permadeath or memory loss.

If a player is ocean dumped, they are allowed to direct police to the location of where they were originally downed for evidence collection purposes.

In addition, ocean dumping vehicles with no prior roleplay is against the rules and is considered Fail RP.

GRAPHIC CONTENT

NO EROTIC ROLEPLAY

is strictly prohibited in all forms – including text, emotes, or animations.

BAD TASTE RP

You may not roleplay topics that mirror real-life trauma or suffering in ways that are distressing, out of place, or disruptive to the community.

Cancer, terminal illness, or life-threatening diseases, pregnancy complications, including miscarriage or abortion RP, suicide, self-harm, or mental health crisis RP`,
        theme: 'conflict',
        pageNumber: 39,
        enhancedVisuals: true
    },
    // Page 40: Government & Allow-Listed Jobs Rules
    {
        id: 'government-jobs-rules',
        type: 'rule-text-dense',
        title: 'Government & Allow-Listed Jobs',
        section: 'GOVERNMENT RULES',
        sectionColor: 'amber',
        isFirstPageOfSection: true,
        content: `GOVERNMENT OR ALLOW-LISTED JOBS (PD / EMS)

Server Staff reserve the right to investigate and take action against corruption roleplay that is deemed excessive, unrealistic or detrimental to the server's balance.

Corrupt players must accept the risk of being caught and face in-game consequences such as investigations, arrests or job termination.

Players in government, law enforcement, medical staff (including private practice) or high-ranking positions cannot provide false information for subpoenas or warrant requests due to a lower burden of proof present for the sake of expediency of RP.

Players with access to specialized sectors (For the purpose of their in-game job, law enforcement, medical staff etc) or end or subscription benefits (Server Subscription) are not be sold, bartered or given to players to allow them to have access to the purchasing items.

IF YOU HAVE AN ISSUE, OPEN A TICKET TO DISCUSS IT WITH SERVER STAFF RATHER THAN IMPACTING THE COMMUNITY MORALE NEGATIVELY.`,
        theme: 'amber',
        pageNumber: 40,
        enhancedVisuals: true
    },
    // Page 41: Owners Reg Video (Back Cover)
    {
        id: 'owners-reg-video',
        type: 'comic-panel',
        videoUrl: '/assets/ownersreg.mp4',
        objectFit: 'cover',
        muted: true,
        loop: true,
        pageNumber: 41
    }
];

// Content Validation Helper
export function validateContent() {
    console.log('📊 Content Validation Report:');
    console.log('================================');

    let totalPages = 0;
    let placeholders = 0;
    let tooLong = [];

    RULEBOOK_CONTENT.forEach((page, idx) => {
        totalPages++;

        // Check for placeholder pages (need images)
        if (page.placeholder) {
            placeholders++;
            console.log(`🖼️  Page ${page.pageNumber}: PLACEHOLDER - Image needed for "${page.id}"`);
        }

        // Check content length
        if (page.content && page.content.length > 1500) {
            tooLong.push({
                page: page.pageNumber,
                id: page.id,
                length: page.content.length
            });
            console.warn(`⚠️  Page ${page.pageNumber} (${page.id}) is ${page.content.length} chars - consider splitting`);
        }
    });

    console.log('================================');
    console.log(`✓ Total pages: ${totalPages}`);
    console.log(`🖼️  Placeholders needing images: ${placeholders}`);
    console.log(`⚠️  Pages that may be too long: ${tooLong.length}`);
    console.log('================================');

    return {
        totalPages,
        placeholders,
        tooLong
    };
}

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
        question: "You're grinding a job and another player walks up and tries to RP with you. What do you do?",
        options: [
            "Ignore them — I'm busy farming.",
            "Tell them to go away OOC.",
            "Engage with their RP — there is no 'busy farming' exception.",
            "Alt-Tab and wait for them to leave."
        ],
        correct: 2,
        correctResponse: "Correct. RP comes first, always. No 'busy farming' exception.",
        wrongResponse: "Wrong! If someone offers RP, you are expected to engage. No exceptions."
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
        question: "A server-wide event like a concert or mayoral debate is happening. Can you start a shootout during it?",
        options: [
            "Yes — it would make for great content.",
            "Only if I have a crew.",
            "No — players are not allowed to intervene until the event has concluded.",
            "Only if I ask in OOC chat first."
        ],
        correct: 2,
        correctResponse: "Correct. Server events are protected. Wait until they're over.",
        wrongResponse: "Wrong! Server events are protected from interruption. Devs, staff, and players put too much effort into them."
    },
    {
        question: "You're downed in a shootout. While waiting for EMS, what should you NOT do?",
        options: [
            "RP being injured and in pain.",
            "Trash talk the person who downed you (e.g., 'get shit on').",
            "Call out for medical help.",
            "Stay in character and respond to anyone who approaches."
        ],
        correct: 1,
        correctResponse: "Correct. Post-conflict trash talk and OOC comments while downed are prohibited.",
        wrongResponse: "Wrong! You must stay in character while downed. No trash talk, no complaining about lag or mechanics."
    },
    {
        question: "You witness two gangs in a gunfight. You're not involved. What do you do?",
        options: [
            "Jump in and start shooting — free action!",
            "Record it on your phone (in-game) and leave the area safely.",
            "Call the cops OOC on Discord.",
            "Loot the bodies while they fight."
        ],
        correct: 1,
        correctResponse: "Good instincts. Stay safe, stay in character, don't insert yourself.",
        wrongResponse: "Wrong! Don't involve yourself in other people's RP scenes uninvited."
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
        question: "A cop pulls you over but you think they're being unfair. What do you do?",
        options: [
            "Scream 'FAIL RP!' in voice chat.",
            "Comply with the RP, then open a ticket afterwards if needed.",
            "Log off immediately to avoid the interaction.",
            "Call them out in OOC chat."
        ],
        correct: 1,
        correctResponse: "Exactly. Play it out, report it later. Never break character.",
        wrongResponse: "Wrong! Always stay in character. Handle disputes through tickets after."
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
        question: "You down someone in a robbery. Can you take everything from their pockets?",
        options: [
            "Yes — I won the fight, I deserve it all.",
            "No — you can only take what's relevant to the RP scenario.",
            "Yes, but only if nobody is watching.",
            "Yes, as long as I leave their phone."
        ],
        correct: 1,
        correctResponse: "Correct. Only take what makes sense for the scene. No greed looting.",
        wrongResponse: "Wrong! Taking everything with no RP reason is pocket wiping and it's banned."
    },
    {
        question: "You are downed and unreachable by PD or EMS. When can you use the respawn mechanic?",
        options: [
            "Whenever I feel like it.",
            "Only when unreachable by PD/medical, or when glitched.",
            "After 2 minutes of waiting.",
            "Immediately after being downed."
        ],
        correct: 1,
        correctResponse: "Correct. Respawn is a last resort, not a shortcut.",
        wrongResponse: "Wrong! You may only respawn when truly unreachable or glitched."
    },
    {
        question: "What is the maximum number of players allowed on the criminal side during a heist?",
        options: [
            "3 players.",
            "5 players.",
            "8 players.",
            "Unlimited."
        ],
        correct: 1,
        correctResponse: "Correct. 5 max for criminals, 8 for police.",
        wrongResponse: "Wrong! Heists are capped at 5 criminals."
    },
    {
        question: "How many players are allowed for a Main Bank heist?",
        options: [
            "4 players.",
            "5 players.",
            "6 players.",
            "8 players."
        ],
        correct: 2,
        correctResponse: "Correct. Main Bank allows 6 players.",
        wrongResponse: "Wrong! Main Bank is the exception — 6 players are allowed."
    },
    {
        question: "Gang wars are permitted in a specific area of the city. Where?",
        options: [
            "Anywhere on the map.",
            "South Side — anything below Olympic Freeway.",
            "Only in gang hideouts.",
            "Only outside the city limits."
        ],
        correct: 1,
        correctResponse: "Correct. South Side, below Olympic Freeway.",
        wrongResponse: "Wrong! Gang wars are designated to the South Side, below Olympic Freeway."
    },
    {
        question: "What happens if gang wars or shots fired occur ABOVE Olympic Freeway?",
        options: [
            "PD ignores it.",
            "PD gives 30 minutes before responding.",
            "Immediate PD response to protect citizens.",
            "Gang members get a warning."
        ],
        correct: 2,
        correctResponse: "Correct. Above Olympic Freeway = immediate PD response.",
        wrongResponse: "Wrong! Shots above Olympic Freeway trigger immediate PD response."
    },
    {
        question: "You're executed (taken somewhere and intentionally downed). What can you remember afterward?",
        options: [
            "Everything — names, faces, plates.",
            "Only vague details: how you were hurt, how many people, what they wore.",
            "Nothing at all.",
            "Only the location."
        ],
        correct: 1,
        correctResponse: "Correct. Treat it like a traumatic memory — chaotic, partial, and unclear.",
        wrongResponse: "Wrong! After execution, you can only remember vague details — no names, faces, or plates."
    },
    {
        question: "Can you ocean dump someone's body?",
        options: [
            "Yes, for any reason.",
            "No, never.",
            "Yes, for story purposes — but it cannot force permadeath or memory loss.",
            "Only with admin permission."
        ],
        correct: 2,
        correctResponse: "Correct. Ocean dumping is allowed for story, but can't force permadeath.",
        wrongResponse: "Wrong! Ocean dumping is allowed for story purposes, but can't force permadeath or memory loss."
    },
    {
        question: "Is erotic roleplay (ERP) allowed on the server?",
        options: [
            "Yes, between consenting adults.",
            "Only in private.",
            "No — it is strictly prohibited in all forms.",
            "Only through text emotes."
        ],
        correct: 2,
        correctResponse: "Correct. ERP is banned in all forms — text, emotes, and animations.",
        wrongResponse: "Wrong! ERP is strictly prohibited in all forms on this server."
    },
    {
        question: "Can you roleplay cancer, suicide, or pregnancy complications on the server?",
        options: [
            "Yes, it adds depth to my character.",
            "Only if I ask admin first.",
            "No — these 'bad taste RP' topics are not allowed.",
            "Only if other players consent."
        ],
        correct: 2,
        correctResponse: "Correct. Bad taste RP topics that mirror real-life trauma are prohibited.",
        wrongResponse: "Wrong! Topics like cancer, suicide, and pregnancy complications are classified as bad taste RP and are forbidden."
    },
    {
        question: "A streamer is playing on the server. What should you NOT do?",
        options: [
            "Subscribe to their channel.",
            "Use their stream to find their in-game location and go there.",
            "Promote their stream positively.",
            "Ignore their stream and play normally."
        ],
        correct: 1,
        correctResponse: "Correct. Using a stream to gain info about a player is stream sniping and is banned.",
        wrongResponse: "Wrong! Using a stream to gain information about a player's location is stream sniping."
    },
    {
        question: "You use a /me emote that says '/me slits throat and walks away'. Is this allowed?",
        options: [
            "Yes, it's creative RP.",
            "Only if the other player agrees.",
            "No — forcing outcomes without giving the other player a chance to react is powergaming.",
            "Only during gang wars."
        ],
        correct: 2,
        correctResponse: "Correct. You must leave room for the other player to respond.",
        wrongResponse: "Wrong! Forcing outcomes on another player without giving them a chance to react is powergaming."
    },
    {
        question: "What is the penalty for speed boosting or glitch rolling?",
        options: [
            "A verbal warning.",
            "A 7-day timeout.",
            "Permanent ban.",
            "In-game fine only."
        ],
        correct: 1,
        correctResponse: "Correct. Speed boosting and glitch rolling get a 7-day timeout.",
        wrongResponse: "Wrong! Speed boosting and glitch rolling result in a 7-day timeout."
    },
    {
        question: "Can you commit a major crime 15 minutes before a server restart?",
        options: [
            "Yes, quick money.",
            "Only small crimes.",
            "No — major crime mechanics are prohibited 30 minutes before/after restarts.",
            "Only if cops are online."
        ],
        correct: 2,
        correctResponse: "Correct. No major crimes within 30 minutes of server restarts.",
        wrongResponse: "Wrong! Major crime mechanics are prohibited within 30 minutes before or after server restarts."
    },
    {
        question: "You continually attack the same player/gang over and over without trying to end the conflict. What is this considered?",
        options: [
            "Good RP.",
            "NVL — Not Valuing Life, and potentially griefing.",
            "Normal gameplay.",
            "Power leveling."
        ],
        correct: 1,
        correctResponse: "Correct. Endless conflict without resolution attempts is NVL and griefing.",
        wrongResponse: "Wrong! Continuing to engage in conflict without attempting resolution is NVL and griefing."
    },
    {
        question: "What is the conflict cooldown rule for mass shootouts (gang wars)?",
        options: [
            "No cooldown needed.",
            "5-minute cooldown.",
            "Repeated large shootouts within 30–60 minutes of each other is Fail RP.",
            "24-hour cooldown."
        ],
        correct: 2,
        correctResponse: "Correct. Mass shootouts need reasonable cooldown periods.",
        wrongResponse: "Wrong! Multiple mass shootouts within 30–60 minutes is considered Fail RP."
    },
    {
        question: "You find a money duplication glitch. What should you do?",
        options: [
            "Use it before anyone finds out.",
            "Share it with friends only.",
            "Report it to staff immediately and stop using it.",
            "Sell the info to other players."
        ],
        correct: 2,
        correctResponse: "Correct. Report exploits immediately. Don't abuse them.",
        wrongResponse: "Wrong! Exploiting glitches is a bannable offense. Report it to staff immediately."
    },
    {
        question: "Can you camp an elevator exit and shoot someone the moment they step out?",
        options: [
            "Yes, it's tactical.",
            "Only if they're a criminal.",
            "No — camping teleports/ladders/exits with no counterplay is prohibited.",
            "Only during heists."
        ],
        correct: 2,
        correctResponse: "Correct. Players must have a fair chance to react.",
        wrongResponse: "Wrong! Camping exits where players have no counterplay is against the rules."
    },
    {
        question: "You are a PD officer. Can you tell gang members how to 'do crime properly'?",
        options: [
            "Yes, I'm helping them RP better.",
            "Only in private.",
            "No — no backseat gangs. PD shouldn't tell gangs how to operate, and vice versa.",
            "Only as a joke."
        ],
        correct: 2,
        correctResponse: "Correct. No backseat policing, doctoring, or ganging.",
        wrongResponse: "Wrong! Just like gangs shouldn't tell PD how to police, PD shouldn't tell gangs how to operate."
    },
    {
        question: "What must you have before engaging someone in combat?",
        options: [
            "A good weapon.",
            "Verbal RP interaction or being initiated into combat first.",
            "At least 3 friends.",
            "Admin approval."
        ],
        correct: 1,
        correctResponse: "Correct. Verbal RP before shots. Always.",
        wrongResponse: "Wrong! You must have verbal RP interaction or be initiated into combat before engaging."
    },
    {
        question: "Your gang is on your turf and gets attacked. You have 7 members present. Can all 7 defend?",
        options: [
            "No — only 5 can fight.",
            "Yes — if attacked on your turf, all members present may defend themselves.",
            "Only if police give permission.",
            "Only 3 can fight."
        ],
        correct: 1,
        correctResponse: "Correct. Turf defense allows all members present at the time of attack to defend.",
        wrongResponse: "Wrong! If you're attacked on your turf, all members who were ALREADY there can defend."
    },
    {
        question: "Can you transfer items between your own characters through a friend?",
        options: [
            "Yes, they're both my characters.",
            "Only small items.",
            "No — your characters don't know each other. This is metagaming and abuse of mechanics.",
            "Only if staff approves."
        ],
        correct: 2,
        correctResponse: "Correct. Your characters don't know each other. Transferring between them is metagaming.",
        wrongResponse: "Wrong! Transferring items between your own characters through intermediaries is metagaming."
    },
    {
        question: "You play copyrighted music loudly in public while a content creator is nearby. Is this okay?",
        options: [
            "Yes, it's just music.",
            "Only if they're not streaming.",
            "No — it could jeopardize content creators' livelihoods.",
            "Only in cars."
        ],
        correct: 2,
        correctResponse: "Correct. Protect content creators from copyright strikes.",
        wrongResponse: "Wrong! Playing copyrighted music in public can jeopardize content creators' livelihoods."
    }
];
