import express from "express"
import dotenv from 'dotenv'
import cors from "cors"
import stripe from "stripe"

dotenv.config();
const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const stripeApi = stripe(process.env.STRIPE_API_PRIVATE_KEY)

const Items = new Map([
  [1, { priceInPaise: 10000, name: "tablet" }],
])

app.post("/checkout-session", async (req, res) => {
  try {
    const session = await stripeApi.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      line_items: req.body.items.map(item => {
        const Item = Items.get(item.id)
        return {
          price_data: {
            currency: "inr",
            product_data: {
              name: Item.name,
            },
            unit_amount: Item.priceInPaise,
          },
          quantity: item.quantity,
        }
      }),
      success_url: `${process.env.CLIENT}/success`,
      cancel_url: `${process.env.CLIENT}/cancel`,
    })
    res.status(200).json({ url: session.url })
  } catch (err) {
    res.status(500).json({ 
        error: err.message 
    })
  }
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})