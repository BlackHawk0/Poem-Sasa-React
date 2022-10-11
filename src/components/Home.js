import Poem from "./Poem";


function Home({ poems ,addToCollection,addToLiked,likes}) {

      return (
            <div className="Home">
                  {poems.map((poem, key) => {
                        let liked = likes.includes(poem.id)
                        if (poem.content !== undefined) {
                              return <Poem poem={poem} key={key} addToCollection={addToCollection} addToLiked={addToLiked}
                              liked={liked}
                              />;

                        }
                        return null;
                  })}
            </div>
      )
}
export default Home;
