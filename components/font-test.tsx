"use client"

import TanTextImage from './tan-text-image'

const FontTest = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-display mb-6">Test des Fonts Haven Brunch</h2>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-display mb-3">TAN New York (Titres) - Images</h3>
          <div className="space-y-3">
            <TanTextImage 
              src="/images/tan-texts/haven-brunch-title.png" 
              alt="HAVEN BRUNCH en TAN New York"
              className="text-4xl"
            />
            <TanTextImage 
              src="/images/tan-texts/subtitle.png" 
              alt="Sous-titre en TAN New York"
              className="text-xl"
            />
          </div>
        </div>
        
        <div>
          <h3 className="text-lg font-display mb-3">Adumu Regular (Corps de texte)</h3>
          <p className="font-body text-base">
            Voici un exemple de paragraphe avec Adumu Regular. Cette police est utilisée pour le corps de texte principal du site Haven Brunch.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-display mb-3">Inter (Fallback)</h3>
          <p className="font-inter text-base">
            Voici un exemple avec Inter comme police de fallback.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FontTest
