import { NextResponse } from 'next/server';
import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-06-30.basil', // latest stable
});

export async function POST(request: Request) {
  try {
    const { line_items, metadata, success_url, cancel_url } = await request.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: line_items || [],
      mode: 'payment',
      success_url: success_url || 'https://auroraspiritskies.com/?payment=success',
      cancel_url: cancel_url || 'https://auroraspiritskies.com/booking',
      metadata: metadata || {},
    });

    console.log("✅ Checkout session created:", session.id);

    return NextResponse.json({ url: session.url });
  } catch (error: any) {
    console.error("❌ Stripe error:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
