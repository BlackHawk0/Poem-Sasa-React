import Poem from "./Poem";

function Collection({poems}){
      return (
            <div className="Poems">
                  {poems.map((poem) => (
                        <Poem key={poem.id} poem={poem} liked={true}/>
                  ))}
            </div>

      )
}


export default Collection;
