const AdumuTest = () => {
  return (
    <div className="p-4 bg-yellow-100 border-2 border-yellow-400 rounded-lg">
      <h3 className="text-lg font-display mb-2">Test Font Adumu</h3>
      <p className="font-adumu text-lg">
        Ce texte utilise la font Adumu. Si vous voyez une différence, la font fonctionne !
      </p>
      <p className="font-body text-lg">
        Ce texte utilise la font body (Adumu + Inter fallback).
      </p>
    </div>
  )
}

export default AdumuTest
