import { AiFillFileAdd } from 'react-icons/ai';
import { AiFillHeart } from 'react-icons/ai';


function Likee({ addToCollection, addToLiked, id,liked }) {
      return (
            <>
                  <div className='likes'>
                        <AiFillFileAdd
                              style={{ color: '#0b489c', fontSize: '2rem', cursor: 'pointer' }}
                              onClick={() => addToCollection(id)}

                        />
                        <AiFillHeart
                              style={{ color: `${ liked? 'red':'black'}`, fontSize: '2rem', cursor: 'pointer' }}
                              onClick={() => addToLiked(id)}
                        />


                  </div>
                  <div className='lk'>
                        <span>Add</span>
                        <span>Likes</span>
                  </div>
            </>
      )
}

function Poem({ poem, addToCollection, addToLiked,view=false ,liked}) {
      if (typeof poem.content !== "string") {
            return
      }

      const preview = poem.content.split("\n").slice(0, 6)

      return (
            <div className="poem">
                  <div className="prev">
                        <h1>{poem.title}</h1>
                        {preview.map((line, key) => (
                              <p key={key}>{line}</p>
                        ))}
                        <p>...</p>
                        <span
                              style={{ fontStyle: 'italic', color: '#f1356d' }}
                        >By {poem.poet.name}</span>
                  </div>
                  {!view ? <Likee addToCollection={addToCollection} addToLiked={addToLiked} id={poem.id} liked={liked}/> : null}
            </div>


      )
}
export default Poem;
