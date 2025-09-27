"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Hero from '@/components/hero'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import Link from 'next/link'
import FontTest from '@/components/font-test'

const offers = [
  {
    title: "Formule Essentielle",
    price: 28,
    description: "L'essentiel du brunch pour un moment savoureux",
    features: [
      { name: "Boissons chaudes à volonté", included: true },
      { name: "Viennoiseries artisanales", included: true },
      { name: "Fruits frais de saison", included: true },
      { name: "Plats signature", included: false },
      { name: "Service personnalisé", included: false }
    ]
  },
  {
    title: "Formule Gourmande",
    price: 42,
    description: "L'expérience complète pour les vrais gourmands",
    features: [
      { name: "Boissons chaudes à volonté", included: true },
      { name: "Jus de fruits frais", included: true },
      { name: "Viennoiseries artisanales", included: true },
      { name: "Plats signature", included: true },
      { name: "Desserts maison", included: true },
      { name: "Service personnalisé", included: false }
    ],
    isPopular: true
  },
  {
    title: "Formule Prestige",
    price: 65,
    description: "L'excellence absolue pour une expérience inoubliable",
    features: [
      { name: "Boissons chaudes à volonté", included: true },
      { name: "Jus de fruits frais", included: true },
      { name: "Plats signature", included: true },
      { name: "Desserts maison", included: true },
      { name: "Service personnalisé", included: true },
      { name: "Mise en place élégante", included: true }
    ]
  }
]

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&h=500&fit=crop",
    alt: "Plat signature Haven Brunch"
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=500&h=500&fit=crop",
    alt: "Ambiance restaurant"
  },
  {
    src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=500&h=500&fit=crop",
    alt: "Pancakes aux fruits"
  },
  {
    src: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=500&h=500&fit=crop",
    alt: "Café et pâtisseries"
  },
  {
    src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=500&h=500&fit=crop",
    alt: "Œufs Benedict"
  },
  {
    src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=500&h=500&fit=crop",
    alt: "Table dressée"
  }
]

const testimonials = [
  {
    name: "Sophie Martin",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    quote: "Une expérience exceptionnelle ! Le service est impeccable et les saveurs sont divines. Je recommande vivement la formule Gourmande.",
    rating: 5
  },
  {
    name: "Thomas Dubois",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    quote: "Cadre magnifique, cuisine raffinée et personnel aux petits soins. Haven Brunch est devenu mon adresse favorite pour le weekend.",
    rating: 5
  },
  {
    name: "Marie Lefebvre",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
    quote: "Parfait pour un brunch en famille ou entre amis. L'ambiance est chaleureuse et les plats sont délicieux. Une belle découverte !",
    rating: 5
  }
]

const OfferCard = ({ title, price, description, features, isPopular = false, delay = 0 }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="h-full"
    >
      <Card className={`relative h-full flex flex-col ${isPopular ? 'ring-2 ring-golden-caramel shadow-2xl' : ''}`}>
        {isPopular && (
          <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
            <Badge className="px-4 py-1">Populaire</Badge>
          </div>
        )}
        
        <CardHeader className="text-center pb-4">
          <CardTitle className="text-2xl mb-2">{title}</CardTitle>
          <div className="text-4xl font-display font-bold text-golden-caramel mb-2">
            {price}€
          </div>
          <CardDescription className="text-base">{description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-1">
          <ul className="space-y-3">
            {features.map((feature: any, index: number) => (
              <li key={index} className="flex items-center gap-3">
                {feature.included ? (
                  <span className="w-5 h-5 text-green-600 flex-shrink-0">✓</span>
                ) : (
                  <span className="w-5 h-5 text-red-500 flex-shrink-0">✗</span>
                )}
                <span className={`text-sm ${feature.included ? 'text-cocoa-brown' : 'text-cocoa-brown/50 line-through'}`}>
                  {feature.name}
                </span>
              </li>
            ))}
          </ul>
        </CardContent>

        <CardContent className="pt-4">
          <Button asChild className="w-full" variant={isPopular ? 'default' : 'secondary'}>
            <Link href="/reservation">
              Choisir cette formule
            </Link>
          </Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function Home() {
  return (
    <>
      {/* Font Test Section - Temporary */}
      <section className="py-16 bg-cream">
        <div className="container mx-auto px-4">
          <FontTest />
        </div>
      </section>

      <Hero 
        title="HAVEN BRUNCH"
        subtitle="Un brunch raffiné pour sublimer vos moments précieux."
        backgroundImage="https://images.unsplash.com/photo-1551218808-94e220e084d2?w=1920&h=1080&fit=crop"
      />

      {/* Presentation Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-display font-bold text-cocoa-brown mb-6">
                Notre Mission
              </h2>
              <p className="text-lg text-cocoa-brown/80 leading-relaxed mb-6">
                Chez Haven Brunch, nous créons des moments d'exception autour de saveurs authentiques et raffinées. 
                Notre approche allie élégance accessible et gourmandise, dans un cadre pensé pour sublimer vos instants précieux.
              </p>
              <p className="text-lg text-cocoa-brown/80 leading-relaxed">
                Chaque plat est préparé avec soin par notre équipe de chefs passionnés, 
                utilisant uniquement des produits frais et de qualité pour vous offrir une expérience culinaire inoubliable.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative h-96 rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=800&h=600&fit=crop"
                alt="Restaurant Haven Brunch"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-cocoa-brown mb-4">
              Nos Formules
            </h2>
            <p className="text-lg text-cocoa-brown/70 max-w-2xl mx-auto">
              Choisissez la formule qui correspond à vos envies pour vivre une expérience brunch unique.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
              <OfferCard
                key={index}
                {...offer}
                delay={index * 0.2}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-20 bg-off-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-cocoa-brown mb-4">
              Galerie
            </h2>
            <p className="text-lg text-cocoa-brown/70 max-w-2xl mx-auto">
              Découvrez l'ambiance chaleureuse et raffinée de Haven Brunch à travers nos créations culinaires et notre cadre élégant.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="relative aspect-square overflow-hidden rounded-2xl shadow-lg group cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-display font-bold text-cocoa-brown mb-4">
              Témoignages
            </h2>
            <p className="text-lg text-cocoa-brown/70 max-w-2xl mx-auto">
              Découvrez ce que nos clients pensent de leur expérience chez Haven Brunch.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-golden-beige/30 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.avatar}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-cocoa-brown">
                      {testimonial.name}
                    </h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <span key={i} className="text-golden-caramel">★</span>
                      ))}
                    </div>
                  </div>
                </div>
                <blockquote className="text-cocoa-brown/80 italic leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
