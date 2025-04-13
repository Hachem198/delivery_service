"use client";
import AdminInfoTable from "@/components/admin/admins/AdminsInfoTable";
import React from "react";
import Link from "next/link";
import { IoMdAdd } from "react-icons/io";
export default function pageAdmins() {
  return (
    <div>
      <div className="w-[50px] h-[50px]">
        <Link href="/admin/admins/creer" className="w-fit h-fit">
          <IoMdAdd className="w-[50px] h-[50px]" />
        </Link>
      </div>
      <AdminInfoTable></AdminInfoTable>
    </div>
  );
}
