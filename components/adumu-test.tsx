const AdumuTest = () => {
  return (
    <div className="p-6 bg-red-500 text-white border-4 border-yellow-400 rounded-lg">
      <h1 className="text-3xl font-bold mb-4">🚨 TEST VISIBLE - SITE MODIFIÉ 🚨</h1>
      <h3 className="text-xl font-display mb-4">Test Font Adumu - Version 3</h3>
      <p className="font-adumu text-xl mb-4 bg-white text-black p-2 rounded">
        🔍 Ce texte utilise la font Adumu. Si vous voyez une différence, la font fonctionne !
      </p>
      <p className="font-body text-xl mb-4 bg-blue-100 text-black p-2 rounded">
        🔍 Ce texte utilise la font body (Adumu + Inter fallback).
      </p>
      <p className="text-lg bg-green-200 text-black p-2 rounded">
        ✅ Si vous voyez cette boîte rouge, vous regardez le bon site !
      </p>
    </div>
  )
}

export default AdumuTest
