import { useState } from 'react'
import './App.css'
import { PostCard } from './PostCard'

const posts = [
  {
    userName: 'booklover_08',
    name: 'Leire Booklover',
    bodyText: '23. "Poesía completa", de Olga Orozco.' +
      '\n\n"Si puedes ver detrás de los escombros,' +
      '\nde tantas raspaduras y tantas telarañas como cubren el hormiguero de otra vida,' +
      '\nsi puedes todavía destrozarte otro poco el corazón,' +
      '\naunque no haya esperanza ni destino,' +
      '\naparta las cortinas, la ignorancia o el espesor del mundo, lo que sea,' +
      '\ny mira con tus ojos de ahora bien adentro, hasta el fondo del caos".' +
      '\n\nLa voz de Olga Orozco, misteriosa y onírica sin llegar a ser críptica ni completamente surrealista, abarca desde una introspección esencial hasta una sinceridad inevitable y universal. El tono melancólico es constante, fusionado con los elementos simbólicos que dotan de coherencia a su poesía completa como una obra total.' +
      '\nUna poesía inteligente, ritualizada y alegórica (a veces, casi mística) que reafirma la calidad de la literatura argentina, llena de mujeres valientes que se atreven a dotar de palabras sus diferentes sensibilidades.',
    repostCounter: 14,
    favouriteCounter: 32
  },
  {
    userName: 'gamer_nintendo',
    name: 'Carlos Nintendero',
    bodyText: 'He jugado de nuevo a Pokémon Cristal. ¡Qué juego tan bonito!',
    repostCounter: 0,
    favouriteCounter: 2
  },
  {
    userName: 'unapersonanormal',
    name: 'Una Persona Normal',
    bodyText: 'Hoy me he lavado los dientes unas cinco veces, y la verdad es que no me arrepiento, porque aunque haya gastado mucho tiempo frente al espejo ahora mis dientes están relucientes.',
    repostCounter: 0,
    favouriteCounter: 0
  },
  {
    userName: 'amaia',
    name: 'Amaia',
    bodyText: 'Esta mañana me he comprado unos cereales con forma de dinosaurio y la verdad es que no me han convencido mucho.',
    repostCounter: 2,
    favouriteCounter: 19
  }
]
//
function App() {
  return (
    <section>
      {
        posts.map(post => {
          const { userName, name, bodyText, repostCounter, favouriteCounter } = post;

          return (
            <PostCard key={userName} userName={userName} name={name} initialRepostCounter={repostCounter} initialFavouriteCounter={favouriteCounter}>
              {bodyText}
            </PostCard>
          )
        })
      }
    </section>
  )
}

export default App
