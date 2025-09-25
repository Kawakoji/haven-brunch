import Link from 'next/link'
import { Instagram, Facebook } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-cocoa-brown text-off-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-2xl font-display font-bold">HAVEN BRUNCH</h3>
            <p className="text-off-white/80">
              Un brunch raffiné pour sublimer vos moments précieux.
            </p>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Contact</h4>
            <div className="space-y-2 text-off-white/80">
              <p>123 Rue de la Paix, 75001 Paris</p>
              <p>Tél: +33 1 23 45 67 89</p>
              <p>Email: contact@havenbrunch.fr</p>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-display font-semibold">Suivez-nous</h4>
            <div className="flex space-x-4">
              <Link 
                href="https://instagram.com" 
                className="p-2 bg-golden-caramel rounded-full hover:bg-golden-beige transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Instagram size={20} />
              </Link>
              <Link 
                href="https://facebook.com" 
                className="p-2 bg-golden-caramel rounded-full hover:bg-golden-beige transition-colors duration-300"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Facebook size={20} />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-off-white/20 mt-8 pt-8 text-center text-off-white/60">
          <p>&copy; 2024 Haven Brunch. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
