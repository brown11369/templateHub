import { Outlet } from "react-router-dom"
import "./ManageTemplatesPage.css"
import React from 'react'



const ManageTemplatesPage: React.FC = () => {




    return (
        <section className="manage-templates">
            <Outlet />
        </section>
    )
}

export default ManageTemplatesPage