function Create({ handleAdd }) {
      return (
            <div>
                  <h1>Create</h1>
                  <form onSubmit={handleAdd}>
                        <div className="Create">
                              <input type="text" name="title" placeholder="Title" /><br/><br/>
                              <textarea name="content" placeholder="Content" cols={30} rows={30} /><br/><br/>
                              <input name="poet" placeholder="Poet" /><br/><br/>
                              <button type="submit">Add</button>
                        </div>
                  </form>
            </div>

      )
}
export default Create;
