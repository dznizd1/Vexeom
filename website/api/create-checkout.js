import Stripe from 'stripe';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { tier } = req.body;

  const priceMap = {
    altitude: 'price_1Tktp7JoNrMc1AYoLMgjoWIq',
    vantage: 'price_1TktpiJoNrMc1AYo4wX6cSuf',
    citadel: 'price_1Tktq9JoNrMc1AYouUoTY19H'
  };

  const priceId = priceMap[tier];

  if (!priceId) {
    return res.status(400).json({ error: 'Invalid tier' });
  }

  try {
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const session = await stripe.checkout.sessions.create({
      mode: 'subscription',
      line_items: [{ price: priceId, quantity: 1 }],
      success_url: `${req.headers.origin}/full-assessment.html?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${req.headers.origin}/access.html`,
    });

    return res.status(200).json({ url: session.url });

  } catch (err) {
    console.error('Stripe error:', err);
    return res.status(500).json({ error: 'Failed to create checkout session' });
  }
}
