import { NextRequest, NextResponse } from 'next/server'

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

    // For demo purposes, we'll just return success
    // In production, you would integrate with your email service here
    console.log('Nouvelle réservation:', {
      client: `${data.firstName} ${data.lastName}`,
      email: data.email,
      phone: data.phone,
      date: formattedDate,
      time: data.time,
      guests: data.guests,
      formula: selectedFormula.name,
      totalPrice: `${totalPrice}€`,
      message: data.message || 'Aucun message'
    })

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
