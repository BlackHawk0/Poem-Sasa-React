import Poem from "./Poem";

function Like({poems}){
      return (
            <div className="Poems">
                  {poems.map((poem) => (
                        <Poem key={poem.id} poem={poem} view={true}/>
                  ))}
            </div>

      )
}

export default Like;
