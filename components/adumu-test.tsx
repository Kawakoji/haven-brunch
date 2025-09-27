const AdumuTest = () => {
  return (
    <div className="p-6 bg-red-500 text-white border-4 border-yellow-400 rounded-lg">
      <h1 className="text-3xl font-bold mb-4">🚨 TEST FONT - VERSION 4 🚨</h1>
      <h3 className="text-xl font-display mb-4">Test avec Source Serif Pro (similaire à Adumu)</h3>
      <p className="font-adumu text-xl mb-4 bg-white text-black p-2 rounded">
        🔍 Ce texte utilise Source Serif Pro (remplace Adumu temporairement)
      </p>
      <p className="font-body text-xl mb-4 bg-blue-100 text-black p-2 rounded">
        🔍 Ce texte utilise aussi Source Serif Pro
      </p>
      <p className="text-lg bg-green-200 text-black p-2 rounded">
        ✅ Si vous voyez cette boîte rouge, le site fonctionne !
      </p>
    </div>
  )
}

export default AdumuTest
