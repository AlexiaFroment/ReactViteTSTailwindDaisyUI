import React, { Suspense } from "react"
import { Routes, Route } from "react-router-dom"
import { MainLayout } from "@/layout/MainLayout"
import { Loader } from "@/components/Loader"

const Page1 = React.lazy(() => import("@/pages/public/Page1"))
const PublicRouter: React.FC = () => {
  return (
    <Suspense
      fallback={
        <div>
          <Loader />
        </div>
      }>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<Page1 />} />
          <Route path='/page1' element={<Page1 />} />
        </Route>
      </Routes>
    </Suspense>
  )
}
export default PublicRouter
