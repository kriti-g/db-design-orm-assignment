const {useState, useEffect } = React;
const {Link} = window.ReactRouterDOM;

const RecipeEditorInline = ({recipe, deleteRecipe, updateRecipe}) => {
    const [recipeCopy, setRecipeCopy] = useState(recipe)
    const [editing, setEditing] = useState(false)
    return(
        <div>
            {
                editing &&
                <div className="row">
                    <div className="col">
                        <input
                            className="form-control"
                            value={recipeCopy.name}
                            onChange={(e)=>setRecipeCopy(recipeCopy => ({...recipeCopy, name: e.target.value}))}/>
                    </div>
                    <div className="col">
                        
                        <input
                            className="form-control"
                            value={recipeCopy.description}
                            onChange={(e)=>setRecipeCopy(recipeCopy => ({...recipeCopy, description: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <select
                            className="form-control"
                            value={recipeCopy.cuisine}
                            onChange={(e) => setRecipeCopy(recipeCopy => ({...recipeCopy, cuisine: e.target.value}))}>
                            <option>GREEK</option>
                            <option>TAIWANESE</option>
                            <option>JAPANESE</option>
                            <option>BRAZILIAN</option>
                            <option>INDIAN</option>
                        </select>
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            value={recipeCopy.prepTime}
                            onChange={(e)=>setRecipeCopy(recipeCopy => ({...recipeCopy, prepTime: e.target.value}))}/>
                    </div>
                    <div className="col">
                        <input
                            type="number"
                            className="form-control"
                            value={recipeCopy.cookTime}
                            onChange={(e)=>setRecipeCopy(recipeCopy => ({...recipeCopy, cookTime: e.target.value}))}/>
                    </div>
                    <div className="col-1">
                        <Link to={`/recipes/${recipeCopy.id}/ingredients`}>
                            Ingredients
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-2x fa-check float-right margin-left-10px"
                           onClick={() => {
                               setEditing(false)
                               updateRecipe(recipeCopy.id, recipeCopy)
                           }}></i>
                        <i className="fas fa-2x fa-undo float-right margin-left-10px"
                           onClick={() => setEditing(false)}></i>
                        <i className="fas fa-2x fa-trash float-right margin-left-10px"
                           onClick={() => deleteRecipe(recipe.id)}></i>
                    </div>
                </div>
            }
            {
                !editing &&
                <div className="row">
                    <div className="col">
                        <Link to={`/recipes/${recipeCopy.id}`}>
                            {recipeCopy.name}
                        </Link>
                    </div>
                    <div className="col-1">
                        <Link to={`/recipes/${recipeCopy.id}/ingredients`}>
                            Ingredients
                        </Link>
                    </div>
                    <div className="col-2">
                        <i className="fas fa-cog fa-2x float-right"
                           onClick={() => setEditing(true)}></i>
                    </div>
                </div>
            }
        </div>
    )
}

export default RecipeEditorInline;