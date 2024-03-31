import AdminHeader from "@/components/AdminHeader"

export default function AdminLayout({children}) {
    const isSidebar = true
    return(
        <section>
            <AdminHeader/>
        {children}
        </section>
    )
}