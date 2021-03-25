import UserList from "./users/user-list";
import FormUserEditor from "./users/form-user-editor";
import BlogList from "./blogs/blog-list";
import BlogFormEditor from "./blogs/blog-form-editor";

const {HashRouter, Link, Route} = window.ReactRouterDOM;
 
const App = () => {
    console.log(window.ReactRouterDOM)
    return (
        <div className="container-fluid">
            <HashRouter>
                <Route path={["/users", "/"]} exact={true}>
                    <UserList/>
                </Route>
                
                <Route path="/users/:id" exact={true}>
                    <FormUserEditor/>
                </Route>

                <Route path={["/users/:userId/blogs"]} exact={true}>
                    <BlogList/>
                </Route>

                <Route path={["/users/:userId/blogs/:blogId"]} exact={true}>
                    <BlogFormEditor/>
                </Route>

            </HashRouter>
        </div>
    );
}

export default App;
