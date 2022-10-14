import { buffer } from 'micro'
import * as admin from 'firebase-admin'
// Could do an modular import, but this is just for example
const serviceAccounts = require('../../../permissions.json')
// Establish connection to Stripe
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY)

/* Secure a connection to Firebase from the backend */

// Prevent against the double-initialization of your application
const app = !admins.apps.length
  ? admin.initializeApp({ credential: admin.credential.cert(serviceAccounts) })
  : admin.app()

const endpointSecret = process.env.STRIPE_SIGNING_SECRET

export default async (req, res) => {
  // Next.js method for detemining type of HTTP request
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req)
  }

  if (req.method === 'GET') {
  }
}
