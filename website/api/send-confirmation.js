export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, name, tier } = req.body;

  if (!email || !tier) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const tierNames = {
    altitude: 'Altitude',
    vantage: 'Vantage',
    citadel: 'Citadel'
  };

  const tierPrices = {
    altitude: '£99/month',
    vantage: '£299/month',
    citadel: '£1,750/month'
  };

  const tierName = tierNames[tier] || tier;
  const tierPrice = tierPrices[tier] || '';

  const html = `
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
</head>
<body style="margin:0;padding:0;background:#03111F;font-family:'IBM Plex Mono',monospace;">
<table width="100%" cellpadding="0" cellspacing="0" style="background:#03111F;padding:48px 0;">
  <tr><td align="center">
    <table width="560" cellpadding="0" cellspacing="0" style="background:#040E1A;border:1px solid #0D1F35;border-top:2px solid #1B4FD8;">
      <tr><td style="padding:40px 48px 32px;">
        <div style="font-family:monospace;font-size:18px;font-weight:500;letter-spacing:4px;color:#E8EDF2;margin-bottom:4px;">VEX<span style="color:#1B4FD8;">E</span>OM</div>
        <div style="font-family:monospace;font-size:10px;letter-spacing:2px;color:#3A5A7A;margin-bottom:32px;">AVIATION CAREER INTELLIGENCE</div>
        <div style="font-family:monospace;font-size:10px;letter-spacing:3px;color:#C8A96E;margin-bottom:16px;">SUBSCRIPTION CONFIRMED</div>
        <h1 style="font-size:22px;font-weight:600;color:#E8EDF2;margin:0 0 8px;letter-spacing:-0.5px;">${tierName} access activated.</h1>
        <p style="font-size:14px;color:#6B7A8D;line-height:1.7;margin:0 0 32px;">Your ${tierName} subscription is now active at ${tierPrice}. Your intelligence platform access has been confirmed.</p>
        <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #0D1F35;margin-bottom:32px;">
          <tr style="border-bottom:1px solid #0D1F35;">
            <td style="padding:12px 16px;font-family:monospace;font-size:10px;letter-spacing:2px;color:#3A5A7A;">TIER</td>
            <td style="padding:12px 16px;font-family:monospace;font-size:12px;color:#E8EDF2;">${tierName}</td>
          </tr>
          <tr style="border-bottom:1px solid #0D1F35;">
            <td style="padding:12px 16px;font-family:monospace;font-size:10px;letter-spacing:2px;color:#3A5A7A;">BILLING</td>
            <td style="padding:12px 16px;font-family:monospace;font-size:12px;color:#E8EDF2;">${tierPrice} — Monthly recurring</td>
          </tr>
          <tr>
            <td style="padding:12px 16px;font-family:monospace;font-size:10px;letter-spacing:2px;color:#3A5A7A;">STATUS</td>
            <td style="padding:12px 16px;font-family:monospace;font-size:12px;color:#C8A96E;">ACTIVE</td>
          </tr>
        </table>
        <table width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
          <tr><td align="center">
            <a href="https://vexeom.com/full-assessment.html" style="display:inline-block;background:#1B4FD8;color:#ffffff;font-family:monospace;font-size:11px;letter-spacing:3px;padding:16px 40px;text-decoration:none;">BEGIN YOUR ASSESSMENT &rarr;</a>
          </td></tr>
        </table>
        <p style="font-size:12px;color:#3A5A7A;line-height:1.7;margin:0;font-family:monospace;">Questions or issues — contact us at <a href="mailto:info@vexeom.com" style="color:#1B4FD8;text-decoration:none;">info@vexeom.com</a>. To manage or cancel your subscription, reply to this email.</p>
      </td></tr>
      <tr><td style="padding:20px 48px;border-top:1px solid #0D1F35;">
        <p style="font-family:monospace;font-size:10px;color:#1E3A5A;letter-spacing:1px;margin:0;">&copy; 2026 VEXEOM &mdash; AVIATION CAREER INTELLIGENCE &mdash; ENGLAND &amp; WALES</p>
      </td></tr>
    </table>
  </td></tr>
</table>
</body>
</html>`;

  try {
    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.RESEND_API_KEY}`
      },
      body: JSON.stringify({
        from: 'Vexeom <info@vexeom.com>',
        to: [email],
        subject: `${tierName} access confirmed — Vexeom`,
        html: html
      })
    });

    const data = await response.json();

    if (!response.ok) {
      console.error('Resend error:', data);
      return res.status(response.status).json({ error: 'Email send failed', details: data });
    }

    return res.status(200).json({ success: true });

  } catch (err) {
    console.error('Email error:', err);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
