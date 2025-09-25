import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

interface ReservationData {
  firstName: string
  lastName: string
  email: string
  phone: string
  date: string
  time: string
  guests: number
  formula: string
  message?: string
}

// Create a transporter (configure with your email service)
const transporter = nodemailer.createTransporter({
  // Example configuration for Gmail
  // For production, use environment variables
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASS || 'your-app-password'
  }
})

const formulas = {
  essentielle: { name: 'Formule Essentielle', price: 28 },
  gourmande: { name: 'Formule Gourmande', price: 42 },
  prestige: { name: 'Formule Prestige', price: 65 }
}

export async function POST(request: NextRequest) {
  try {
    const data: ReservationData = await request.json()

    // Validate required fields
    const requiredFields = ['firstName', 'lastName', 'email', 'phone', 'date', 'time', 'guests', 'formula']
    for (const field of requiredFields) {
      if (!data[field as keyof ReservationData]) {
        return NextResponse.json(
          { error: `Le champ ${field} est requis` },
          { status: 400 }
        )
      }
    }

    // Validate email format
    const emailRegex = /^\S+@\S+\.\S+$/
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: 'Format d\'email invalide' },
        { status: 400 }
      )
    }

    // Validate date (must be in the future)
    const reservationDate = new Date(data.date)
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    if (reservationDate <= today) {
      return NextResponse.json(
        { error: 'La date de réservation doit être dans le futur' },
        { status: 400 }
      )
    }

    // Get formula details
    const selectedFormula = formulas[data.formula as keyof typeof formulas]
    if (!selectedFormula) {
      return NextResponse.json(
        { error: 'Formule invalide' },
        { status: 400 }
      )
    }

    // Calculate total price
    const totalPrice = selectedFormula.price * Number(data.guests)

    // Format date for display
    const formattedDate = reservationDate.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })

    // Email content for customer
    const customerEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #4E342E; }
            .header { background-color: #FAF4EF; padding: 20px; text-align: center; }
            .content { padding: 20px; }
            .details { background-color: #E8D8C3; padding: 15px; border-radius: 10px; margin: 20px 0; }
            .footer { background-color: #4E342E; color: #FDFBF9; padding: 20px; text-align: center; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1 style="color: #4E342E; margin: 0; font-size: 2em;">HAVEN BRUNCH</h1>
            <p style="margin: 5px 0; color: #B98565;">Un brunch raffiné pour sublimer vos moments précieux</p>
          </div>
          
          <div class="content">
            <h2>Confirmation de réservation</h2>
            <p>Bonjour ${data.firstName},</p>
            <p>Nous avons bien reçu votre réservation chez Haven Brunch. Voici les détails :</p>
            
            <div class="details">
              <h3>Détails de votre réservation</h3>
              <p><strong>Nom :</strong> ${data.firstName} ${data.lastName}</p>
              <p><strong>Email :</strong> ${data.email}</p>
              <p><strong>Téléphone :</strong> ${data.phone}</p>
              <p><strong>Date :</strong> ${formattedDate}</p>
              <p><strong>Heure :</strong> ${data.time}</p>
              <p><strong>Nombre de personnes :</strong> ${data.guests}</p>
              <p><strong>Formule :</strong> ${selectedFormula.name}</p>
              <p><strong>Prix total estimé :</strong> ${totalPrice}€</p>
              ${data.message ? `<p><strong>Message :</strong> ${data.message}</p>` : ''}
            </div>
            
            <p>Nous vous confirmerons votre réservation par téléphone dans les plus brefs délais.</p>
            <p>Nous avons hâte de vous accueillir pour cette expérience brunch unique !</p>
            
            <p>À bientôt,<br>L'équipe Haven Brunch</p>
          </div>
          
          <div class="footer">
            <p>Haven Brunch - 123 Rue de la Paix, 75001 Paris</p>
            <p>Tél: +33 1 23 45 67 89 | Email: contact@havenbrunch.fr</p>
          </div>
        </body>
      </html>
    `

    // Email content for restaurant
    const restaurantEmailHtml = `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .header { background-color: #f8f9fa; padding: 20px; }
            .content { padding: 20px; }
            .details { background-color: #e9ecef; padding: 15px; border-radius: 5px; margin: 20px 0; }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>Nouvelle réservation - Haven Brunch</h1>
          </div>
          
          <div class="content">
            <h2>Détails de la réservation</h2>
            
            <div class="details">
              <p><strong>Client :</strong> ${data.firstName} ${data.lastName}</p>
              <p><strong>Email :</strong> ${data.email}</p>
              <p><strong>Téléphone :</strong> ${data.phone}</p>
              <p><strong>Date :</strong> ${formattedDate}</p>
              <p><strong>Heure :</strong> ${data.time}</p>
              <p><strong>Nombre de personnes :</strong> ${data.guests}</p>
              <p><strong>Formule :</strong> ${selectedFormula.name} (${selectedFormula.price}€/pers)</p>
              <p><strong>Prix total estimé :</strong> ${totalPrice}€</p>
              ${data.message ? `<p><strong>Message du client :</strong> ${data.message}</p>` : ''}
            </div>
            
            <p><strong>Action requise :</strong> Veuillez confirmer cette réservation par téléphone au ${data.phone}</p>
          </div>
        </body>
      </html>
    `

    try {
      // Send confirmation email to customer
      await transporter.sendMail({
        from: process.env.EMAIL_USER || 'noreply@havenbrunch.fr',
        to: data.email,
        subject: 'Confirmation de réservation - Haven Brunch',
        html: customerEmailHtml
      })

      // Send notification email to restaurant
      await transporter.sendMail({
        from: process.env.EMAIL_USER || 'noreply@havenbrunch.fr',
        to: process.env.RESTAURANT_EMAIL || 'contact@havenbrunch.fr',
        subject: `Nouvelle réservation - ${data.firstName} ${data.lastName} - ${formattedDate}`,
        html: restaurantEmailHtml
      })

      console.log('Emails sent successfully')
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      // Continue processing even if email fails
    }

    return NextResponse.json({
      success: true,
      message: 'Réservation enregistrée avec succès',
      reservationId: `RES-${Date.now()}`,
      totalPrice
    })

  } catch (error) {
    console.error('Reservation error:', error)
    return NextResponse.json(
      { error: 'Erreur interne du serveur' },
      { status: 500 }
    )
  }
}
