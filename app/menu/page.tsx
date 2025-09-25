"use client"

import { motion } from 'framer-motion'
import Image from 'next/image'
import Hero from '@/components/hero'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

interface MenuItem {
  name: string
  description: string
  ingredients: string[]
  price: number
  image: string
  isVegetarian?: boolean
  isSignature?: boolean
}

interface MenuCategory {
  title: string
  items: MenuItem[]
}

const menuCategories: MenuCategory[] = [
  {
    title: "Plats Salés",
    items: [
      {
        name: "Œufs Benedict Signature",
        description: "Œufs pochés sur muffin anglais, jambon de Bayonne, sauce hollandaise maison",
        ingredients: ["Œufs fermiers", "Jambon de Bayonne", "Muffin anglais", "Sauce hollandaise"],
        price: 16,
        image: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=400&h=300&fit=crop",
        isSignature: true
      },
      {
        name: "Avocado Toast Gourmand",
        description: "Pain de seigle, avocat écrasé, tomates cerises, feta, graines de tournesol",
        ingredients: ["Pain de seigle", "Avocat", "Tomates cerises", "Feta", "Graines"],
        price: 14,
        image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828?w=400&h=300&fit=crop",
        isVegetarian: true
      },
      {
        name: "Pancakes Salés aux Épinards",
        description: "Pancakes moelleux, épinards frais, chèvre, tomates confites, pignons",
        ingredients: ["Pancakes maison", "Épinards", "Chèvre", "Tomates confites"],
        price: 15,
        image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&h=300&fit=crop",
        isVegetarian: true
      }
    ]
  },
  {
    title: "Plats Sucrés",
    items: [
      {
        name: "French Toast Caramélisé",
        description: "Brioche perdue, caramel beurre salé, fruits rouges, chantilly vanille",
        ingredients: ["Brioche artisanale", "Caramel beurre salé", "Fruits rouges", "Chantilly"],
        price: 13,
        image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=400&h=300&fit=crop",
        isSignature: true
      },
      {
        name: "Pancakes aux Myrtilles",
        description: "Stack de pancakes moelleux, myrtilles fraîches, sirop d'érable, beurre",
        ingredients: ["Pancakes maison", "Myrtilles", "Sirop d'érable", "Beurre"],
        price: 12,
        image: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=400&h=300&fit=crop"
      },
      {
        name: "Bowl Açaï Tropical",
        description: "Smoothie bowl açaï, mangue, ananas, granola maison, noix de coco",
        ingredients: ["Açaï", "Mangue", "Ananas", "Granola", "Noix de coco"],
        price: 11,
        image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=400&h=300&fit=crop",
        isVegetarian: true
      }
    ]
  },
  {
    title: "Boissons",
    items: [
      {
        name: "Café de Spécialité",
        description: "Blend signature torréfié artisanalement, notes chocolatées et fruitées",
        ingredients: ["Café arabica", "Torréfaction artisanale"],
        price: 4,
        image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=400&h=300&fit=crop",
        isSignature: true
      },
      {
        name: "Jus Détox Vert",
        description: "Épinards, pomme verte, concombre, citron vert, gingembre",
        ingredients: ["Épinards", "Pomme verte", "Concombre", "Citron vert", "Gingembre"],
        price: 6,
        image: "https://images.unsplash.com/photo-1610970881699-44a5587cabec?w=400&h=300&fit=crop",
        isVegetarian: true
      },
      {
        name: "Smoothie Fruits Rouges",
        description: "Fraises, framboises, myrtilles, yaourt grec, miel",
        ingredients: ["Fruits rouges", "Yaourt grec", "Miel"],
        price: 7,
        image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=400&h=300&fit=crop",
        isVegetarian: true
      }
    ]
  }
]

const MenuItemCard = ({ item, index }: { item: MenuItem; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
    >
      <Card className="h-full overflow-hidden">
        <div className="relative h-48">
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-cover"
          />
          <div className="absolute top-4 right-4 flex gap-2">
            {item.isSignature && (
              <Badge variant="default">Signature</Badge>
            )}
            {item.isVegetarian && (
              <Badge variant="secondary">Végétarien</Badge>
            )}
          </div>
        </div>
        <CardHeader>
          <div className="flex justify-between items-start">
            <CardTitle className="text-xl">{item.name}</CardTitle>
            <span className="text-2xl font-display font-bold text-golden-caramel">
              {item.price}€
            </span>
          </div>
          <CardDescription className="text-base leading-relaxed">
            {item.description}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <h4 className="font-semibold text-cocoa-brown mb-2">Ingrédients clés :</h4>
            <div className="flex flex-wrap gap-2">
              {item.ingredients.map((ingredient, i) => (
                <span
                  key={i}
                  className="px-2 py-1 bg-golden-beige/50 rounded-full text-xs text-cocoa-brown"
                >
                  {ingredient}
                </span>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  )
}

export default function MenuPage() {
  return (
    <>
      <Hero 
        title="Notre Menu"
        subtitle="Découvrez notre sélection de plats raffinés et savoureux"
        backgroundImage="https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=1920&h=1080&fit=crop"
        showCTA={false}
      />

      <div className="py-20 bg-cream">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {menuCategories.map((category, categoryIndex) => (
            <motion.section
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <h2 className="text-4xl font-display font-bold text-cocoa-brown mb-8 text-center">
                {category.title}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.items.map((item, index) => (
                  <MenuItemCard key={item.name} item={item} index={index} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </>
  )
}
