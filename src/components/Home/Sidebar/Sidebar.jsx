import { NavLink } from "react-router-dom";

const Sidebar = ({ categories }) => {

    return (
        <>
            <div className="flex flex-col border p-4 gap-4">
                <NavLink
                    className={({ isActive }) => isActive ? "active-btn" : "btn"}
                    to='/'>
                    All Product
                </NavLink>
                {
                    categories.map(category =>
                        <NavLink
                            className={({ isActive }) => isActive ? "active-btn" : "btn"}
                            key={category.category_id}
                            to={`/category/${category.category}`}>
                            {category.category}
                        </NavLink>)
                }

            </div>
        </>
    );
};

export default Sidebar;