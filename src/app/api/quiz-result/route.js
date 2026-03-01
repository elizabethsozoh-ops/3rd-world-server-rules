export async function POST(req) {
    try {
        const { score, total, passThreshold, discordUsername, discordUserId, questions, timestamp } = await req.json();

        const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
        if (!webhookUrl) {
            console.warn('DISCORD_WEBHOOK_URL not set — logging result only');
            console.log('Quiz result:', { discordUsername, score, total, timestamp });
            return Response.json({ success: true, warning: 'No webhook configured' });
        }

        const threshold = passThreshold || Math.ceil(total * 0.9);
        const passed = score >= threshold;

        const embed = {
            title: passed ? 'W.I.Z EXAM — PASSED' : 'W.I.Z EXAM — FAILED',
            color: passed ? 0x22c55e : 0xef4444,
            fields: [
                { name: 'Applicant', value: discordUserId ? `<@${discordUserId}> (${discordUsername})` : (discordUsername || 'Unknown'), inline: true },
                { name: 'Score', value: `${score}/${total}`, inline: true },
                { name: 'Result', value: passed ? 'KNOWLEDGE VERIFIED' : 'INSUFFICIENT', inline: true },
                { name: 'Timestamp', value: new Date(timestamp).toLocaleString('en-ZA', { timeZone: 'Africa/Johannesburg' }), inline: false },
            ],
            footer: { text: 'W.I.Z Knowledge Exam — 3rd World RP Rulebook' },
            timestamp: timestamp,
        };

        if (questions && questions.length > 0) {
            const questionList = questions
                .map((q, i) => {
                    const mark = q.correct ? '✓' : '✗';
                    let line = `${mark} Q${i + 1}: ${q.question}`;
                    if (!q.correct && q.picked) {
                        line += `\n   Answered: ${q.picked}`;
                        if (q.answer) line += `\n   Correct:  ${q.answer}`;
                    }
                    return line;
                })
                .join('\n');
            embed.description = `\`\`\`\n${questionList}\n\`\`\``;
        }

        const res = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: 'W.I.Z',
                avatar_url: 'https://3rd-world-server-rules.vercel.app/assets/wiz.png',
                embeds: [embed],
            }),
        });

        if (!res.ok) {
            console.error('Discord webhook failed:', res.status, await res.text());
            return Response.json({ success: false, error: 'Webhook failed' }, { status: 502 });
        }

        return Response.json({ success: true });
    } catch (error) {
        console.error('Quiz result API error:', error);
        return Response.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
