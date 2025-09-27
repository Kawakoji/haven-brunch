const AdumuTest = () => {
  return (
    <div className="p-6 bg-red-500 text-white border-4 border-yellow-400 rounded-lg">
      <h1 className="text-3xl font-bold mb-4">🚨 TEST FONT ADUMU - VERSION 5 🚨</h1>
      <h3 className="text-xl font-display mb-4">Test de la vraie font Adumu</h3>
      <p className="font-adumu text-xl mb-4 bg-white text-black p-2 rounded">
        🔍 Ce texte utilise la vraie font Adumu (si elle se charge)
      </p>
      <p className="font-body text-xl mb-4 bg-blue-100 text-black p-2 rounded">
        🔍 Ce texte utilise Inter (font normale du site)
      </p>
      <p className="text-lg bg-green-200 text-black p-2 rounded">
        ✅ Le site est revenu à la normale !
      </p>
    </div>
  )
}

export default AdumuTest
