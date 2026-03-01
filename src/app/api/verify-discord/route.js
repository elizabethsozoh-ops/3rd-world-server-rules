export async function POST(req) {
    try {
        const { username } = await req.json();

        if (!username || username.trim().length < 2) {
            return Response.json({ verified: false, error: 'Username required' }, { status: 400 });
        }

        const botToken = process.env.DISCORD_BOT_TOKEN;
        const guildId = process.env.DISCORD_GUILD_ID;

        if (!botToken || !guildId) {
            console.warn('DISCORD_BOT_TOKEN or DISCORD_GUILD_ID not set — skipping verification');
            return Response.json({ verified: true, skipped: true });
        }

        const query = encodeURIComponent(username.trim());
        const res = await fetch(
            `https://discord.com/api/v10/guilds/${guildId}/members/search?query=${query}&limit=10`,
            { headers: { Authorization: `Bot ${botToken}` } }
        );

        if (!res.ok) {
            console.error('Discord API error:', res.status, await res.text());
            return Response.json({ verified: true, skipped: true, warning: 'Verification unavailable' });
        }

        const members = await res.json();

        // Check if any member's username or display name matches (case-insensitive)
        const trimmed = username.trim().toLowerCase();
        const match = members.find(m =>
            m.user.username.toLowerCase() === trimmed ||
            m.user.global_name?.toLowerCase() === trimmed ||
            m.nick?.toLowerCase() === trimmed
        );

        if (match) {
            return Response.json({
                verified: true,
                member: {
                    username: match.user.username,
                    displayName: match.nick || match.user.global_name || match.user.username,
                    id: match.user.id,
                },
            });
        }

        return Response.json({ verified: false, error: 'Username not found in 3rd World RP Discord' });
    } catch (error) {
        console.error('Discord verify error:', error);
        return Response.json({ verified: true, skipped: true, warning: 'Verification error' });
    }
}
