"use client"

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import Hero from '@/components/hero'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/components/ui/dialog'

interface ReservationForm {
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

const formulas = [
  { value: 'essentielle', label: 'Formule Essentielle - 28€', price: 28 },
  { value: 'gourmande', label: 'Formule Gourmande - 42€', price: 42 },
  { value: 'prestige', label: 'Formule Prestige - 65€', price: 65 }
]

const timeSlots = [
  '09:00', '09:30', '10:00', '10:30', '11:00', '11:30',
  '12:00', '12:30', '13:00', '13:30', '14:00', '14:30'
]

export default function ReservationPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const [confirmationData, setConfirmationData] = useState<ReservationForm | null>(null)

  const { register, handleSubmit, formState: { errors }, reset } = useForm<ReservationForm>()

  const onSubmit = async (data: ReservationForm) => {
    setIsSubmitting(true)
    
    // Simulation d'envoi pour la démo (remplacer par votre service d'email)
    try {
      // Ici vous pouvez intégrer un service comme EmailJS, Formspree, ou Netlify Forms
      await new Promise(resolve => setTimeout(resolve, 1000)) // Simulation
      
      setConfirmationData(data)
      setShowConfirmation(true)
      reset()
      
      // Optionnel: rediriger vers un service d'email externe
      const subject = `Réservation Haven Brunch - ${data.firstName} ${data.lastName}`
      const body = `Nouvelle réservation:\n\nNom: ${data.firstName} ${data.lastName}\nEmail: ${data.email}\nTéléphone: ${data.phone}\nDate: ${data.date}\nHeure: ${data.time}\nPersonnes: ${data.guests}\nFormule: ${data.formula}\nMessage: ${data.message || 'Aucun'}`
      
      // Ouvrir le client email par défaut (optionnel)
      // window.location.href = `mailto:contact@havenbrunch.fr?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      
    } catch (error) {
      console.error('Error:', error)
      alert('Une erreur est survenue. Veuillez réessayer.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const getTomorrowDate = () => {
    const tomorrow = new Date()
    tomorrow.setDate(tomorrow.getDate() + 1)
    return tomorrow.toISOString().split('T')[0]
  }

  return (
    <>
      <Hero 
        title="Réservation"
        subtitle="Réservez votre table pour une expérience brunch inoubliable"
        backgroundImage="https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=1920&h=1080&fit=crop"
        showCTA={false}
      />

      <div className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-2xl">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl font-display">
                  Réserver votre table
                </CardTitle>
                <CardDescription className="text-lg">
                  Remplissez le formulaire ci-dessous pour réserver votre expérience brunch
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-cocoa-brown mb-2">
                        Prénom *
                      </label>
                      <Input
                        {...register('firstName', { required: 'Le prénom est requis' })}
                        placeholder="Votre prénom"
                      />
                      {errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-cocoa-brown mb-2">
                        Nom *
                      </label>
                      <Input
                        {...register('lastName', { required: 'Le nom est requis' })}
                        placeholder="Votre nom"
                      />
                      {errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-cocoa-brown mb-2">
                        Email *
                      </label>
                      <Input
                        type="email"
                        {...register('email', { 
                          required: 'L\'email est requis',
                          pattern: {
                            value: /^\S+@\S+$/i,
                            message: 'Email invalide'
                          }
                        })}
                        placeholder="votre@email.com"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-cocoa-brown mb-2">
                        Téléphone *
                      </label>
                      <Input
                        type="tel"
                        {...register('phone', { required: 'Le téléphone est requis' })}
                        placeholder="06 12 34 56 78"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                      )}
                    </div>
                  </div>

                  {/* Reservation Details */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-cocoa-brown mb-2">
                        Date *
                      </label>
                      <Input
                        type="date"
                        min={getTomorrowDate()}
                        {...register('date', { required: 'La date est requise' })}
                      />
                      {errors.date && (
                        <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-cocoa-brown mb-2">
                        Heure *
                      </label>
                      <select
                        {...register('time', { required: 'L\'heure est requise' })}
                        className="flex h-10 w-full rounded-2xl border border-golden-beige bg-off-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-golden-caramel focus-visible:ring-offset-2"
                      >
                        <option value="">Choisir l'heure</option>
                        {timeSlots.map(time => (
                          <option key={time} value={time}>{time}</option>
                        ))}
                      </select>
                      {errors.time && (
                        <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-cocoa-brown mb-2">
                        Nombre de personnes *
                      </label>
                      <select
                        {...register('guests', { required: 'Le nombre de personnes est requis' })}
                        className="flex h-10 w-full rounded-2xl border border-golden-beige bg-off-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-golden-caramel focus-visible:ring-offset-2"
                      >
                        <option value="">Choisir</option>
                        {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                          <option key={num} value={num}>{num} personne{num > 1 ? 's' : ''}</option>
                        ))}
                      </select>
                      {errors.guests && (
                        <p className="text-red-500 text-sm mt-1">{errors.guests.message}</p>
                      )}
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-cocoa-brown mb-2">
                      Formule *
                    </label>
                    <select
                      {...register('formula', { required: 'La formule est requise' })}
                      className="flex h-10 w-full rounded-2xl border border-golden-beige bg-off-white px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-golden-caramel focus-visible:ring-offset-2"
                    >
                      <option value="">Choisir une formule</option>
                      {formulas.map(formula => (
                        <option key={formula.value} value={formula.value}>
                          {formula.label}
                        </option>
                      ))}
                    </select>
                    {errors.formula && (
                      <p className="text-red-500 text-sm mt-1">{errors.formula.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-cocoa-brown mb-2">
                      Message (optionnel)
                    </label>
                    <Textarea
                      {...register('message')}
                      placeholder="Demandes spéciales, allergies, occasion particulière..."
                      rows={4}
                    />
                  </div>

                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full text-lg py-6"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Envoi en cours...' : 'Confirmer la réservation'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>

      {/* Confirmation Dialog */}
      <Dialog open={showConfirmation} onOpenChange={setShowConfirmation}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-2xl text-center">
              Réservation confirmée !
            </DialogTitle>
            <DialogDescription className="text-center text-lg">
              Merci pour votre réservation. Nous avons bien reçu votre demande.
            </DialogDescription>
          </DialogHeader>
          {confirmationData && (
            <div className="space-y-4 text-center">
              <div className="bg-golden-beige/30 p-4 rounded-2xl">
                <h4 className="font-display font-semibold text-cocoa-brown mb-2">
                  Détails de votre réservation :
                </h4>
                <p><strong>Nom :</strong> {confirmationData.firstName} {confirmationData.lastName}</p>
                <p><strong>Date :</strong> {new Date(confirmationData.date).toLocaleDateString('fr-FR')}</p>
                <p><strong>Heure :</strong> {confirmationData.time}</p>
                <p><strong>Personnes :</strong> {confirmationData.guests}</p>
                <p><strong>Formule :</strong> {formulas.find(f => f.value === confirmationData.formula)?.label}</p>
              </div>
              <p className="text-sm text-cocoa-brown/70">
                Un email de confirmation vous sera envoyé sous peu à {confirmationData.email}
              </p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  )
}
