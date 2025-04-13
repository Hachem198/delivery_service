import React from "react";
import AdminForm from "@/components/admin/admins/AdminForm";
export default function pageCreerAdmin() {
  return (
    <div>
      <div className="m-auto lg:ml-20 w-[500px] sm:w-[400px]  h-auto sm:h-[600px] border-2 border-white mt-20 rounded-3xl sm:ml-[100px] bg-stone-500 relative p-4 md:w-[500px] lg:w-[600px]">
        <AdminForm></AdminForm>
      </div>
    </div>
  );
}
