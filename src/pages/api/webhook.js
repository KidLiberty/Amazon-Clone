import { buffer } from 'micro'
import * as admin from 'firebase-admin'
// Could do an modular import, but this is just for example
const serviceAccount = require('../../../permissions.json')
// Establish connection to Stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

/* Secure a connection to Firebase from the backend */

// Prevent against the double-initialization of your application
const app = !admin.apps.length
  ? admin.initializeApp({ credential: admin.credential.cert(serviceAccount) })
  : admin.app()

const endpointSecret = process.env.STRIPE_SIGNING_SECRET

const fulfullOrder = async session => {
  return app
    .firestore()
    .collection('users')
    .doc(session.metadata.email)
    .collection('orders')
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp()
    })
    .then(() => {
      console.log(
        `SUCCESS: Order ${session.id} has been added to the database!`
      )
    })
}

export default async (req, res) => {
  // Next.js method for detemining type of HTTP request
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req)
    const payload = requestBuffer.toString()
    const signature = req.headers['stripe-signature']

    let event

    // Verify that the event posted came from Stripe
    try {
      event = stripe.webhooks.constructEvent(payload, signature, endpointSecret)
    } catch (e) {
      console.log('Error', e.message)
      return res.status(400).send(`Webhook error: ${e.message}`)
    }

    if (event.type === 'checkout.session.completed') {
      const session = event.data.object

      return fulfullOrder(session)
        .then(() => res.status(200))
        .catch(err => res.status(400).send(`Webhook Error: ${err.message}.`))
    }
  }
}

// Handle non-Next.js api calls
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true
  }
}
