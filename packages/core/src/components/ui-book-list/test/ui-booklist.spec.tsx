import { newSpecPage } from '@stencil/core/testing'
import { UiBookList } from '../ui-booklist'
import { h } from '@stencil/core'

const books = [
  {
    'isbn': 'c8fabf68-8374-48fe-a7ea-a00ccd07afff',
    'title': 'Henri Potier à l\'école des sorciers',
    'price': 35,
    'cover': 'http://henri-potier.xebia.fr/hp0.jpg',
    'synopsis': [
      'Après la mort de ses parents (Lily et James Potier), Henri est recueilli par sa tante Pétunia (la sœur de Lily) et son oncle Vernon à l\'âge d\'un an. Ces derniers, animés depuis toujours d\'une haine féroce envers les parents du garçon qu\'ils qualifient de gens « bizarres », voire de « monstres », traitent froidement leur neveu et demeurent indifférents aux humiliations que leur fils Dudley lui fait subir. Henri ignore tout de l\'histoire de ses parents, si ce n\'est qu\'ils ont été tués dans un accident de voiture',
      'Le jour des 11 ans de Henri, un demi-géant du nom de Rubeus Hagrid vient le chercher pour l’emmener à Poudlard, une école de sorcellerie, où il est inscrit depuis sa naissance et attendu pour la prochaine rentrée. Hagrid lui révèle alors qu’il a toujours été un sorcier, tout comme l\'étaient ses parents, tués en réalité par le plus puissant mage noir du monde de la sorcellerie, Voldemort (surnommé « Celui-Dont-On-Ne-Doit-Pas-Prononcer-Le-Nom »), après qu\'ils ont refusé de se joindre à lui. Ce serait Henri lui-même, alors qu\'il n\'était encore qu\'un bébé, qui aurait fait ricocher le sortilège que Voldemort lui destinait, neutralisant ses pouvoirs et le réduisant à l\'état de créature quasi-insignifiante. Le fait d\'avoir vécu son enfance chez son oncle et sa tante dépourvus de pouvoirs magiques lui a donc permis de grandir à l\'abri de la notoriété qu\'il a dans le monde des sorciers.',
      'Henri entre donc à l’école de Poudlard, dirigée par le professeur Albus Dumbledore. Il est envoyé dans la maison Gryffondor par le « choixpeau ». Il y fait la connaissance de Ron Weasley et Hermione Granger, qui deviendront ses complices. Par ailleurs, Henri intègre rapidement l\'équipe de Quidditch de sa maison, un sport collectif très populaire chez les sorciers se pratiquant sur des balais volants. Henri connaît probablement la plus heureuse année de sa vie, mais également la plus périlleuse, car Voldemort n\'a pas totalement disparu et semble bien décidé à reprendre forme humaine.',
    ],
  },
]

describe('ui-booklist', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [UiBookList],
      // html: `<ui-book-list /></ui-book-list>`,
      // template: (
      //   <ui-book-list books={books} />
      // ),
      // supportsShadowDom: true
    })

    const element = await page.doc.querySelector('ui-book-list');

    element.books = books;

    await page.waitForChanges();

    expect(page.root).toEqualHtml(`
      <ui-book-list>
        <mock:shadow-root>
          <h1>Library</h1>
          <ui-book bookTitle="Henri Potier à l'école des sorciers" cover="http://henri-potier.xebia.fr/hp0.jpg" isbn="c8fabf68-8374-48fe-a7ea-a00ccd07afff" price="35" />
        </mock:shadow-root>
      </ui-book-list>
    `)
  })
})
