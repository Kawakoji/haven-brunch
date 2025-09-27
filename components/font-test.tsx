"use client"

const FontTest = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-2xl mx-auto">
      <h2 className="text-2xl font-display mb-4">Test des Fonts Haven Brunch</h2>
      
      <div className="space-y-4">
        <div>
          <h3 className="text-lg font-display mb-2">TAN New York (Titres)</h3>
          <p className="font-display text-xl">Voici un exemple de titre avec TAN New York</p>
        </div>
        
        <div>
          <h3 className="text-lg font-display mb-2">Adumu Regular (Corps de texte)</h3>
          <p className="font-body text-base">
            Voici un exemple de paragraphe avec Adumu Regular. Cette police est utilisée pour le corps de texte principal du site Haven Brunch.
          </p>
        </div>
        
        <div>
          <h3 className="text-lg font-display mb-2">Inter (Fallback)</h3>
          <p className="font-inter text-base">
            Voici un exemple avec Inter comme police de fallback.
          </p>
        </div>
      </div>
    </div>
  )
}

export default FontTest
