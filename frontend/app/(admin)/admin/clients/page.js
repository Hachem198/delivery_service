"use client";
import React from "react";
import Header from "@/components/Header";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { AdminHeader } from "@/components/admin/AdminHeader";
import { useState } from "react";
import { IoMdAdd } from "react-icons/io";
import Link from "next/link";
import ClientsInfoTable from "@/components/admin/clients/ClientsInfoTable";
export default function pageClients() {
  const [camions, setCamions] = useState([
    { nomDuCamion: "salut", typeDeTransport: "sd", poids: 50 },
    { nomDuCamion: "sal" },
  ]);

  return (
    <div>
      <div className="w-[50px] h-[50px]"></div>
      <div>
        <ClientsInfoTable></ClientsInfoTable>
      </div>
    </div>
  );
}
