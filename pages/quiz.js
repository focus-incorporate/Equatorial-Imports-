import { useState } from 'react'
import Head from 'next/head'

export default function Quiz() {
  const [result, setResult] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const strength = form.strength.value
    const flavor = form.flavor.value

    if (strength === 'light' && flavor === 'fruity') {
      setResult('Try our Island Sunrise capsules!')
    } else if (strength === 'bold' && flavor === 'spicy') {
      setResult('Tropical Midnight is a perfect match!')
    } else {
      setResult('Coral Espresso offers a balanced experience.')
    }
  }

  return (
    <div className="p-4 max-w-md mx-auto">
      <Head>
        <title>Coffee Quiz | Equatorial-Imports</title>
        <meta name="description" content="Find the perfect coffee capsule for your taste." />
      </Head>
      <h1 className="text-3xl font-semibold mb-4 text-center">Coffee Selection Quiz</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block mb-1">Preferred Strength</label>
          <select name="strength" className="w-full border p-2 rounded">
            <option value="light">Light</option>
            <option value="bold">Bold</option>
          </select>
        </div>
        <div>
          <label className="block mb-1">Flavor Profile</label>
          <select name="flavor" className="w-full border p-2 rounded">
            <option value="fruity">Fruity</option>
            <option value="spicy">Spicy</option>
            <option value="nutty">Nutty</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">See Recommendation</button>
      </form>
      {result && <p className="mt-4 font-semibold text-center">{result}</p>}
    </div>
  )
}
